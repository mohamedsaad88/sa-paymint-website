/* oxlint-disable next/no-img-element -- Official reference portraits optimized locally. */
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CTA } from './chrome';
export function About() {
  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <span className="eyebrow">ABOUT PAYMINT SOUTH AFRICA</span>
          <h1>
            Financial inclusion.
            <br />
            <span>Shared opportunity.</span>
          </h1>
          <p>
            PayMint South Africa focuses on financial services for businesses,
            SMEs and employees, with a mission centred on inclusion and growth.
          </p>
        </div>
      </section>
      <section className="container section">
        <div className="values">
          <div>
            <span className="eyebrow">OUR VISION</span>
            <h2>Opportunity within reach.</h2>
            <p>
              A future where South African businesses and individuals have
              access to opportunity, liquidity and growth.
            </p>
          </div>
          <div>
            <span className="eyebrow">OUR MISSION</span>
            <h2>Make financial access matter.</h2>
            <p>
              Supporting underserved communities, SMEs and black-owned
              enterprises through payment infrastructure, access to finance and
              employee financial wellness.
            </p>
          </div>
        </div>
      </section>
      <section className="mint-section">
        <div className="container section">
          <span className="eyebrow">OUR SOUTH AFRICAN FOCUS</span>
          <div className="feature-list">
            {[
              [
                'Businesses & SMEs',
                'Payroll and supplier payments, alongside embedded finance for SME loans and salary advances.',
              ],
              [
                'Employees',
                'Early wage access and financial wellness tools focused on income, spending and goals.',
              ],
            ].map(([title, desc]) => (
              <div className="editorial-copy" key={title}>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="leadership" className="container section">
        <span className="eyebrow">OUR BOARD IN SOUTH AFRICA</span>
        <h2>Leadership and experience.</h2>
        <div className="leadership">
          {[
            [
              'rabie',
              'Mohamed Rabie',
              'Co-Founder & Managing Director',
              'Experience in scaling fintech solutions across emerging markets.',
            ],
            [
              'morrison',
              'Zanele Morrison',
              'CEO & Strategic Partnerships',
              'Media and strategy expertise in the South African landscape.',
            ],
            [
              'yehia',
              'Mohamed Yehia',
              'Co-founder & Chief Information Officer',
              'Experience in scalable technology infrastructure.',
            ],
          ].map(([id, name, role, bio]) => (
            <article className="leader" key={name}>
              <img
                className="leader-portrait"
                src={`/images/${id}.webp`}
                alt={name}
                width="435"
                height="600"
                loading="lazy"
              />
              <h3>{name}</h3>
              <p className="role">{role}</p>
              <p>{bio}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Careers() {
  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <span className="eyebrow">CAREERS</span>
          <h1>
            Career enquiries.
            <br />
            <span>Talk to PayMint.</span>
          </h1>
        </div>
      </section>
      <section className="container section">
        <div className="career-banner">
          <div>
            <h2>No vacancies listed here.</h2>
            <p>For career enquiries, you can contact the PayMint team.</p>
          </div>
          <Link href="/contact?interest=Careers" className="button">
            Contact PayMint
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
export function Privacy() {
  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <span className="eyebrow">WEBSITE PRIVACY</span>
          <h1>
            Your enquiry.
            <br />
            <span>Your information.</span>
          </h1>
          <p>How this website prepares an email enquiry.</p>
        </div>
      </section>
      <section className="container section privacy-content">
        <h2>Preparing your enquiry</h2>
        <p>
          The contact form prepares an email using the name, email address,
          optional company and phone number, interest and message you enter. The
          form processes these details in your browser. It does not submit them
          to a website server or save them in browser storage.
        </p>
        <h2>Sending your email</h2>
        <p>
          The email is addressed to info@paymint-eg.com, PayMint’s published
          group contact. You review and send it in your email application.
          Preparing or opening a draft does not send it. Your email provider
          processes the message under its own terms.
        </p>
        <h2>Information to share</h2>
        <p>
          Please keep the enquiry to your contact details and business or
          service question. Do not include identity documents, bank account
          information, passwords or sensitive personal information.
        </p>
        <h2>Website operation</h2>
        <p>
          This website does not include advertising trackers or analytics
          scripts. Hosting services may process technical connection information
          needed to deliver and protect the website.
        </p>
        <h2>Questions for PayMint</h2>
        <p>
          Contact <a href="mailto:info@paymint-eg.com">info@paymint-eg.com</a>{' '}
          for questions about how PayMint handles an email enquiry or to request
          the privacy information applicable to a financial service. This page
          describes this website’s email-preparation workflow, not a financial
          product’s terms.
        </p>
      </section>
    </>
  );
}
