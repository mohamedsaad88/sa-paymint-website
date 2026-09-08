'use client';
import { useState, type SyntheticEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { interests } from '@/lib/content';
export function ContactForm({ initialInterest }: { initialInterest: string }) {
  const [interest, setInterest] = useState(
    interests.includes(initialInterest) ? initialInterest : 'Corporate enquiry',
  );
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent' | 'email' | 'error'
  >('idle');
  const [draft, setDraft] = useState('');
  const [error, setError] = useState('');
  async function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError('Please confirm that PayMint may respond to your enquiry.');
      return;
    }
    setError('');
    setStatus('sending');
    const form = new FormData(e.currentTarget);
    const field = (key: string) => {
      const value = form.get(key);
      return typeof value === 'string' ? value : '';
    };
    const payload = {
      name: field('name'),
      email: field('email'),
      company: field('company'),
      phone: field('phone'),
      message: field('message'),
      website: field('website'),
      interest,
      consent,
    };
    const body = `South Africa enquiry: ${interest}\n\nName: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nPhone: ${payload.phone}\n\n${payload.message}\n\nI agree to be contacted about this enquiry.`;
    setDraft(
      `mailto:info@paymint-eg.com?subject=${encodeURIComponent('PayMint South Africa — ' + interest)}&body=${encodeURIComponent(body)}`,
    );
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { code?: string; error?: string };
      if (response.ok) {
        setStatus('sent');
      } else if (data.code === 'EMAIL_FALLBACK') {
        setStatus('email');
      } else {
        setStatus('error');
        setError(
          data.error ||
            'We could not deliver your enquiry. You can send it by email instead.',
        );
      }
    } catch {
      setStatus('error');
      setError(
        'We could not connect to the enquiry service. You can send your enquiry by email instead.',
      );
    }
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Full name *</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your full name"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address *</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="you@company.co.za"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="company">Company / organisation *</label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            required
            maxLength={160}
            placeholder="Company or personal enquiry"
          />
        </div>
        <div className="field">
          <label htmlFor="phone">
            Phone number <span>(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            maxLength={40}
            placeholder="+27"
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
            if (v) setInterest(v);
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
        <label htmlFor="message">Tell us a little more *</label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          placeholder="What would you like to explore with PayMint?"
        />
      </div>
      <div className="visually-hidden-field" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="consent">
        <Checkbox id="consent" checked={consent} onCheckedChange={setConsent} />
        <label htmlFor="consent">
          I agree that PayMint may use these details to respond to my enquiry.
          Read our{' '}
          <Link href="/privacy" style={{ textDecoration: 'underline' }}>
            website privacy information
          </Link>
          .
        </label>
      </div>
      {error && (
        <p
          role="alert"
          style={{ color: '#9a4923', fontSize: 13, marginBottom: 15 }}
        >
          {error}
        </p>
      )}
      <button
        className="button"
        disabled={status === 'sending' || status === 'sent'}
        type="submit"
      >
        {status === 'sending'
          ? 'Preparing your enquiry…'
          : status === 'sent'
            ? 'Enquiry sent'
            : 'Continue with Enquiry'}
        <ArrowUpRight size={18} />
      </button>
      <p className="form-help">
        Please don’t include bank details, identity documents or sensitive
        information. If direct delivery is unavailable, we’ll prepare an email
        for you to review and send.
      </p>
      {status === 'sent' && (
        <output className="form-status">
          <strong>Your enquiry has been received.</strong>
          <p>
            The PayMint team can now follow up using the details you provided.
          </p>
        </output>
      )}
      {(status === 'email' || status === 'error') && (
        <output className="form-status">
          <strong>Your enquiry is ready to email.</strong>
          <p>
            Direct delivery is not available right now. Open the draft below and
            send it from your email application. Your enquiry has not been sent
            yet.
          </p>
          <a className="button" href={draft}>
            <Mail size={16} />
            Open Email Draft
          </a>
          <p className="form-help">
            No email app? Write to info@paymint-eg.com and mention South Africa.
          </p>
        </output>
      )}
    </form>
  );
}
