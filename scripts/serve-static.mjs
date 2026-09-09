import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
const root = path.resolve('dist/client');
if (!existsSync(path.join(root, 'index.html')))
  throw new Error('Run npm run build first.');
const flag = process.argv.indexOf('--port');
const port = Number(
  flag >= 0 ? process.argv[flag + 1] : process.env.PORT || 4173,
);
if (!Number.isInteger(port) || port < 1 || port > 65535)
  throw new Error('Invalid port.');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.ttf': 'font/ttf',
  '.woff2': 'font/woff2',
};
const headers = {};
for (const line of readFileSync(path.join(root, '_headers'), 'utf8').split(
  '\n',
)) {
  const match = line.match(/^\s+([\w-]+):\s*(.+)$/);
  if (match) headers[match[1]] = match[2];
}
createServer((req, res) => {
  for (const [key, value] of Object.entries(headers)) res.setHeader(key, value);
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(req.url, 'http://localhost').pathname,
    );
  } catch {
    res.writeHead(400);
    res.end();
    return;
  }
  if (
    pathname.split('/').some((part) => part === '..' || part.startsWith('.')) ||
    pathname.includes('\0') ||
    pathname.includes('\\')
  ) {
    res.writeHead(404);
    res.end();
    return;
  }
  const clean = pathname.replace(/\/$/, '');
  const candidates = clean
    ? [clean, `${clean}.html`, `${clean}/index.html`]
    : ['/index.html'];
  const file = candidates
    .map((candidate) => path.resolve(root, `.${candidate}`))
    .find(
      (candidate) =>
        candidate.startsWith(root + path.sep) &&
        existsSync(candidate) &&
        statSync(candidate).isFile(),
    );
  const selected = file || path.join(root, '404.html');
  res.writeHead(file ? 200 : 404, {
    'Content-Type': types[path.extname(selected)] || 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });
  res.end(req.method === 'HEAD' ? undefined : readFileSync(selected));
}).listen(port, '127.0.0.1', () =>
  console.log(`Static production preview: http://localhost:${port}`),
);
