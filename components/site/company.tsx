/* oxlint-disable next/no-img-element -- Locally optimized WebP with explicit dimensions; no runtime image service required. */
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CTA, TextLink } from './chrome';
export function About() {
  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <span className="eyebrow">OUR STORY. OUR NEXT CHAPTER.</span>
          <h1>
            Rooted in experience.
            <br />
            <span>Growing with Africa.</span>
          </h1>
          <p>
            Financial technology should open doors. PayMint South Africa brings
            that belief to a new market, with local leadership and a shared
            ambition for meaningful financial inclusion.
          </p>
        </div>
      </section>
      <section className="container section split">
        <div className="editorial-copy">
          <span className="eyebrow">FROM EGYPT TO SOUTH AFRICA</span>
          <h2>
            Experience travels.
            <br />
            Opportunity is local.
          </h2>
          <p>
            PayMint began in Egypt in 2019, building technology for business
            payments and financial services. Its experience spans payouts,
            payroll, embedded finance and mobile financial experiences.
          </p>
          <p>
            South Africa is the next chapter in that African journey. Our focus
            is on connecting employers, SMEs, employees and financial partners
            in ways that reflect South African needs.
          </p>
          <p>
            That means listening to the businesses building livelihoods,
            including black-owned enterprises and underserved communities, and
            creating space for practical financial solutions.
          </p>
        </div>
        <div className="people-image">
          <img
            src="/images/business-owner.webp"
            width="1536"
            height="1024"
            alt="Illustrative South African business studio scene"
            loading="lazy"
          />
          <div className="image-caption">
            <span>LOCAL NEEDS. SHARED POSSIBILITIES.</span>
            <strong>
              A future more
              <br />
              people can be part of.
            </strong>
          </div>
        </div>
      </section>
      <section className="mint-section">
        <div className="container section values">
          <div>
            <span className="eyebrow">OUR VISION</span>
            <h3>Opportunity within reach.</h3>
            <p>
              A South African economy where businesses and individuals can
              access the financial tools they need to participate, grow and move
              forward.
            </p>
          </div>
          <div>
            <span className="eyebrow">OUR MISSION</span>
            <h3>Make the connection matter.</h3>
            <p>
              Simplify business payments, connect relevant financial services
              and support employee financial wellness through technology, local
              understanding and responsible partnerships.
            </p>
          </div>
        </div>
      </section>
      <section id="leadership" className="container section">
        <span className="eyebrow">SOUTH AFRICAN LEADERSHIP</span>
        <h2>
          Local perspective.
          <br />
          Connected experience.
        </h2>
        <div className="leadership">
          {[
            [
              'MR',
              'Mohamed Rabie',
              'Co-Founder & Managing Director',
              'Experience in scaling fintech solutions across emerging markets.',
            ],
            [
              'ZM',
              'Zanele Morrison',
              'CEO & Strategic Partnerships',
              'South African strategic perspective and partnership leadership.',
            ],
            [
              'MY',
              'Mohamed Yehia',
              'Co-founder & Chief Information Officer',
              'Technology leadership focused on scalable financial infrastructure.',
            ],
          ].map(([initial, name, role, bio]) => (
            <article className="leader" key={name}>
              <div className="leader-initial" aria-hidden="true">
                {initial}
              </div>
              <h3>{name}</h3>
              <p className="role">{role}</p>
              <p>{bio}</p>
            </article>
          ))}
        </div>
        <p className="source-note">
          Leadership and titles as published on{' '}
          <a
            href="https://paymint-eg.com/south-africa/"
            target="_blank"
            rel="noreferrer"
          >
            PayMint’s South Africa page
          </a>
          .
        </p>
      </section>
      <section className="dark-section">
        <div className="container section editorial-copy">
          <span className="eyebrow">OUR AFRICAN VISION</span>
          <h2>
            Build locally.
            <br />
            Think beyond borders.
          </h2>
          <p>
            Every market has its own people, institutions and needs. Our African
            ambition is to connect that local understanding with PayMint’s
            technology experience, one considered step at a time.
          </p>
          <TextLink href="/partners">Help shape the next chapter</TextLink>
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
          <span className="eyebrow">CAREERS AT PAYMINT</span>
          <h1>
            Build something
            <br />
            <span>that moves people.</span>
          </h1>
          <p>
            Help shape financial infrastructure that connects businesses to
            opportunity and people to a more confident financial future.
          </p>
        </div>
      </section>
      <section className="container section">
        <div className="section-intro">
          <h2>
            Bring your perspective.
            <br />
            Make it count.
          </h2>
          <p>
            We value thoughtful problem-solving, collaboration and a close
            understanding of the people our technology serves.
          </p>
        </div>
        <div className="values">
          <div>
            <span className="eyebrow">WORK THAT MATTERS</span>
            <h3>
              Useful technology.
              <br />
              Real-world purpose.
            </h3>
            <p>
              Our work brings together product, engineering, operations, finance
              and partnerships around a common goal: making financial services
              more accessible.
            </p>
          </div>
          <div>
            <span className="eyebrow">A SHARED AMBITION</span>
            <h3>
              Different expertise.
              <br />
              Connected thinking.
            </h3>
            <p>
              We’re interested in people who ask good questions, take ownership
              and turn complex challenges into practical solutions.
            </p>
          </div>
        </div>
        <div className="career-banner">
          <div>
            <h3>Future opportunities</h3>
            <p>
              No open roles are published here at present. You can introduce
              yourself to the PayMint team.
            </p>
          </div>
          <Link href="/contact?interest=Careers" className="button">
            Introduce Yourself
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
          <p>
            How the enquiry experience on this website handles the information
            you choose to share.
          </p>
        </div>
      </section>
      <section className="container section privacy-content">
        <h2>What you provide</h2>
        <p>
          The contact form asks for your name, email address, company, optional
          phone number, area of interest and message. Please do not include bank
          details, identity documents, passwords or other sensitive information.
        </p>
        <h2>How enquiries are delivered</h2>
        <p>
          When a secure enquiry destination is configured, your details are sent
          to PayMint’s designated intake service to respond to your request. If
          direct delivery is unavailable, the form offers an email draft
          addressed to PayMint’s published email address. Opening a draft does
          not send an email; you review and send it in your email application.
        </p>
        <h2>Website storage</h2>
        <p>
          The form does not save enquiry details in your browser’s local
          storage. This website does not include advertising trackers or
          analytics scripts. Hosting services may process technical connection
          information needed to provide and protect the website. Your email
          provider handles any email you choose to send under its own terms.
        </p>
        <h2>Questions about personal information</h2>
        <p>
          Contact <a href="mailto:info@paymint-eg.com">info@paymint-eg.com</a>{' '}
          to ask how your enquiry will be handled, request the applicable
          privacy information or discuss a correction or deletion request. The
          appropriate entity, processing arrangements and retention details
          should be confirmed with PayMint before onboarding to a financial
          service.
        </p>
        <p>
          This page describes this website’s enquiry workflow. It does not
          represent a POPIA certification or replace the terms and privacy
          information for an individual financial product.
        </p>
      </section>
    </>
  );
}
