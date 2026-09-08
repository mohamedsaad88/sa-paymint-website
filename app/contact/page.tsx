import type { Metadata } from 'next';
import { interests } from '@/lib/content';
import { ContactForm } from '@/components/site/contact-form';
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Talk to PayMint about South African business payouts, payroll, employee financial wellness, integrations and partnerships.',
  alternates: { canonical: '/contact' },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const params = await searchParams;
  const interest =
    typeof params.interest === 'string' && interests.includes(params.interest)
      ? params.interest
      : 'Corporate enquiry';
  return (
    <div className="container contact-layout">
      <div className="contact-copy">
        <span className="eyebrow">LET’S START A CONVERSATION</span>
        <h1>
          Your next move.
          <br />
          <span>Starts here.</span>
        </h1>
        <p>
          Tell us what you’re building, who you’re paying or where you see an
          opportunity. We’ll help you explore the right connection.
        </p>
        <div className="contact-detail">
          <h3>A conversation built around you.</h3>
          <p>
            Share your area of interest and business needs. Product
            availability, integration requirements and the next steps can then
            be confirmed with the team.
          </p>
        </div>
        <div className="contact-detail">
          <h3>Prefer to email?</h3>
          <a href="mailto:info@paymint-eg.com?subject=PayMint%20South%20Africa%20enquiry">
            info@paymint-eg.com ↗
          </a>
          <p style={{ marginTop: 9 }}>
            PayMint’s published group contact.
            <br />
            Please mention South Africa in your enquiry.
          </p>
        </div>
        <div className="contact-detail">
          <p>
            Please keep your enquiry to the information needed to respond. Avoid
            sharing payroll or account details here.
          </p>
        </div>
      </div>
      <ContactForm key={interest} initialInterest={interest} />
    </div>
  );
}
