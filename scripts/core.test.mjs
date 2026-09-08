import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import ts from 'typescript';
const root = fileURLToPath(new URL('..', import.meta.url));
const loaded = new Map();
function load(name) {
  if (loaded.has(name)) return loaded.get(name);
  const source = fs.readFileSync(path.join(root, 'lib', name + '.ts'), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const record = { exports: {} };
  vm.runInNewContext(
    outputText,
    {
      module: record,
      exports: record.exports,
      require: (id) => {
        assert.equal(id, './content');
        return load('content');
      },
      URL,
      process: { env: {} },
    },
    { filename: name + '.ts' },
  );
  loaded.set(name, record.exports);
  return record.exports;
}
const { getPage, pages, interests } = load('content');
const { prepareEnquiry } = load('enquiry');
const { validatedOrigin } = load('site');
const valid = {
  name: 'Test User',
  email: 'qa@example.invalid',
  company: '',
  phone: '',
  message: 'A local-only test',
  interest: 'Payroll',
  consent: true,
};
test('route guard rejects prototype properties', () => {
  for (const key of [
    'constructor',
    'toString',
    '__proto__',
    'hasOwnProperty',
    'missing',
  ])
    assert.equal(getPage(key), undefined);
});
test('all published product pages have a valid interest', () => {
  for (const [slug, p] of Object.entries(pages)) {
    assert.equal(getPage(slug), p);
    assert.ok(interests.includes(p.interest));
    assert.ok(p.features.length);
  }
});
test('email recipient and subject are fixed and correctly encoded', () => {
  const r = prepareEnquiry(valid);
  assert.equal(r.ok, true);
  const url = new URL(r.draft.url);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'info@paymint-eg.com');
  assert.equal(
    url.searchParams.get('subject'),
    'PayMint South Africa — Payroll',
  );
  assert.equal(url.searchParams.get('body'), r.draft.body);
});
test('Unicode, punctuation and newlines survive encoding', () => {
  const message = 'Café & wages?\nLine two: + = #';
  const r = prepareEnquiry({ ...valid, message });
  assert.equal(new URL(r.draft.url).searchParams.get('body'), r.draft.body);
  assert.ok(r.draft.body.includes(message));
});
test('whitespace trimmed and optional fields omitted', () => {
  const r = prepareEnquiry({
    ...valid,
    name: '  Test User  ',
    company: ' ',
    phone: ' ',
  });
  assert.ok(r.draft.body.includes('Name: Test User\n'));
  assert.ok(!r.draft.body.includes('Company:'));
  assert.ok(!r.draft.body.includes('Phone:'));
});
test('consent must be exactly true', () => {
  for (const consent of [false, 'false', 1, null, undefined])
    assert.equal(prepareEnquiry({ ...valid, consent }).ok, false);
});
test('required fields and interest are validated', () => {
  for (const patch of [
    { name: ' ' },
    { email: 'not-email' },
    { message: '' },
    { interest: 'Unapproved' },
    { name: null },
  ])
    assert.equal(prepareEnquiry({ ...valid, ...patch }).ok, false);
});
test('all field bounds enforced', () => {
  for (const [key, max] of Object.entries({
    name: 100,
    email: 200,
    company: 160,
    phone: 40,
    message: 1000,
  }))
    assert.equal(
      prepareEnquiry({ ...valid, [key]: 'x'.repeat(max + 1) }).ok,
      false,
    );
  assert.equal(
    prepareEnquiry({ ...valid, message: 'x'.repeat(1000) }).ok,
    true,
  );
});
test('canonical origin rejects unsafe or malformed configuration', () => {
  assert.equal(validatedOrigin('https://example.com/'), 'https://example.com');
  for (const url of [
    'http://example.com',
    'https://u:p@example.com',
    'https://example.com/path',
    'https://example.com/?secret=1',
    'https://example.com/#part',
  ])
    assert.throws(() => validatedOrigin(url));
});
test('no delivery endpoint or client fetch remains', () => {
  assert.equal(
    fs.existsSync(path.join(root, 'app/api/enquiries/route.ts')),
    false,
  );
  const form = fs.readFileSync(
    path.join(root, 'components/site/contact-form.tsx'),
    'utf8',
  );
  assert.ok(!/\bfetch\s*\(/.test(form));
  assert.ok(form.includes('disabled={!hydrated}'));
  assert.ok(form.includes('<noscript>'));
});
