'use client';
import { useState, useSyncExternalStore, type SyntheticEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Mail, Copy } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { interests } from '@/lib/content';
import { prepareEnquiry } from '@/lib/enquiry';
const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;
export function ContactForm({ initialInterest }: { initialInterest: string }) {
  const hydrated = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [interest, setInterest] = useState(initialInterest);
  const [consent, setConsent] = useState(false);
  const [draft, setDraft] = useState<{ url: string; body: string } | null>(
    null,
  );
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  function invalidate() {
    setDraft(null);
    setError('');
    setCopied(false);
  }
  function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const value = (key: string) => {
      const v = form.get(key);
      return typeof v === 'string' ? v : '';
    };
    const result = prepareEnquiry({
      name: value('name'),
      email: value('email'),
      company: value('company'),
      phone: value('phone'),
      message: value('message'),
      interest,
      consent,
    });
    if (!result.ok) {
      setError(result.error);
      setDraft(null);
      return;
    }
    setError('');
    setDraft(result.draft);
  }
  async function copy() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.body);
      setCopied(true);
    } catch {
      setError(
        'Copy is unavailable. Select the enquiry text below and copy it manually.',
      );
    }
  }
  return (
    <form className="contact-form" onSubmit={submit} onChange={invalidate}>
      <fieldset disabled={!hydrated} className="enquiry-fields">
        <legend className="sr-only">Your email enquiry</legend>
        <div className="form-intro">
          <h2>Prepare an email enquiry</h2>
          <p>
            Review your details here, then send the email from your own email
            application.
          </p>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Full name *</label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              maxLength={100}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email address *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={200}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="company">
              Company <span>(optional)</span>
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={160}
            />
          </div>
          <div className="field">
            <label htmlFor="phone">
              Phone <span>(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
            />
          </div>
        </div>
        <div className="field">
          <label id="interest-label" htmlFor="interest">
            I’m interested in *
          </label>
          <Select
            value={interest}
            onValueChange={(v) => {
              if (v) {
                setInterest(v);
                invalidate();
              }
            }}
          >
            <SelectTrigger id="interest" aria-labelledby="interest-label">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {interests.map((i) => (
                <SelectItem key={i} value={i}>
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="field">
          <label htmlFor="message">Your enquiry *</label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={1000}
            placeholder="How can PayMint help?"
          />
        </div>
        <div className="consent">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(v) => {
              setConsent(v);
              invalidate();
            }}
          />
          <label htmlFor="consent">
            I agree that PayMint may use the details I send to respond to this
            enquiry. <Link href="/privacy">Website privacy information</Link>.
          </label>
        </div>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button type="submit" className="button">
          Prepare Email
          <ArrowUpRight size={18} />
        </button>
        <p className="form-help">
          Your enquiry stays in this page until you choose to send it through
          your email application. Please do not include sensitive information.
        </p>
        {draft && (
          <output className="form-status">
            <strong>Ready for your review.</strong>
            <p>This enquiry has not been sent.</p>
            <pre className="enquiry-preview">{draft.body}</pre>
            <div className="draft-actions">
              <a className="button" href={draft.url}>
                <Mail size={16} />
                Open Email Draft
              </a>
              <button type="button" className="button outline" onClick={copy}>
                <Copy size={16} />
                {copied ? 'Copied' : 'Copy Enquiry'}
              </button>
            </div>
            <p className="form-help">
              No email application? Copy your enquiry into an email to
              info@paymint-eg.com.
            </p>
          </output>
        )}
      </fieldset>
      <noscript>
        <p className="form-help">
          JavaScript is needed to prepare an enquiry here. You can{' '}
          <a href="mailto:info@paymint-eg.com?subject=PayMint%20South%20Africa%20enquiry">
            email PayMint directly
          </a>
          .
        </p>
      </noscript>
    </form>
  );
}

export function QueryContactForm() {
  const params = useSearchParams();
  const value = params.get('interest');
  const interest =
    value && interests.includes(value) ? value : 'Corporate enquiry';
  return <ContactForm key={interest} initialInterest={interest} />;
}
