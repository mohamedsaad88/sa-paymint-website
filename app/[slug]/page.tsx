import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { pages } from '@/lib/content';
import { CTA, TextLink } from '@/components/site/chrome';
import { Visual, Dashboard, Phone } from '@/components/site/visuals';
import { About, Careers, Privacy } from '@/components/site/company';
import { Insights } from '@/components/site/insights';
const extra: Record<string, string> = {
  about: 'About & Leadership',
  careers: 'Careers',
  privacy: 'Website Privacy',
  insights: 'Insights & News',
};
export function generateStaticParams() {
  return [...Object.keys(pages), ...Object.keys(extra)].map((slug) => ({
    slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return {
    title: page
      ? page.eyebrow.replace('PAYMINT ', '')
      : extra[slug] || 'Page not found',
    description: page?.description,
    alternates: { canonical: `/${slug}` },
  };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === 'about') return <About />;
  if (slug === 'careers') return <Careers />;
  if (slug === 'privacy') return <Privacy />;
  if (slug === 'insights') return <Insights />;
  const p = pages[slug];
  if (!p) notFound();
  return (
    <>
      <section className="hero page-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{p.eyebrow}</span>
            <h1>
              {p.title}
              <span>{p.accent}</span>
            </h1>
            <p>{p.description}</p>
            <div className="hero-actions">
              <Link
                className="button"
                href={`/contact?interest=${encodeURIComponent(p.interest)}`}
              >
                {p.cta}
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
          <Visual type={p.visual} />
        </div>
      </section>
      {p.steps && slug === 'payouts' && <Steps steps={p.steps} />}
      <section className="container section">
        <div className="section-intro">
          <div>
            <span className="eyebrow">{p.label}</span>
            <h2>{p.heading}</h2>
          </div>
          <p>{p.intro}</p>
        </div>
        <div className="feature-list">
          {p.features.map(([title, desc], i) => (
            <article className="feature-item" key={title}>
              <span className="feature-number">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
        {p.note && (
          <div className="scope-note">
            <strong>
              {slug === 'security'
                ? 'EVIDENCE & SCOPE'
                : 'SOUTH AFRICAN AVAILABILITY'}
            </strong>
            {p.note}
          </div>
        )}
        {slug === 'security' && (
          <p className="source-note">
            Published reference:{' '}
            <a href="https://paymint-eg.com/" target="_blank" rel="noreferrer">
              PayMint Egypt security FAQ
            </a>
            . Current certification scope and assurance documents are available
            to request from the team.
          </p>
        )}
      </section>
      {p.steps && slug !== 'payouts' && <Steps steps={p.steps} />}{' '}
      {slug === 'platform' && (
        <>
          <section id="business" className="mint-section platform-detail">
            <div className="container section split">
              <div className="editorial-copy">
                <span className="eyebrow">PAYMINT BUSINESS</span>
                <h2>
                  A clearer view.
                  <br />A more connected operation.
                </h2>
                <p>
                  Bring payment preparation, operational reporting and
                  transaction visibility into a shared business workspace.
                  Define the controls and responsibilities that suit your
                  organisation.
                </p>
                <TextLink href="/contact?interest=Business%20payouts">
                  Book a Business Demo
                </TextLink>
              </div>
              <Dashboard />
            </div>
          </section>
          <section
            id="mobile"
            className="container section split platform-detail"
          >
            <Phone />
            <div className="editorial-copy">
              <span className="eyebrow">PAYMINT MOBILE</span>
              <h2>
                The everyday side
                <br />
                of financial infrastructure.
              </h2>
              <p>
                PayMint’s existing mobile capabilities provide a foundation for
                a South African employee experience. Local app access and
                product availability will be confirmed as programmes are
                introduced.
              </p>
              <TextLink href="/employees">
                Meet the employee experience
              </TextLink>
            </div>
          </section>
        </>
      )}
      <CTA label={p.cta} interest={p.interest} />
    </>
  );
}
function Steps({ steps }: { steps: [string, string][] }) {
  return (
    <section className="steps-section">
      <div className="container">
        <span className="eyebrow">A CLEAR PATH FORWARD</span>
        <h2>
          {steps.length === 5
            ? 'From funding to the finish line.'
            : 'From the first conversation to connection.'}
        </h2>
        <div className="steps">
          {steps.map(([title, desc], i) => (
            <div className="step" key={title}>
              <div className="step-count">
                <span>0{i + 1}</span>
                {i < steps.length - 1 && <ArrowRight size={18} />}
              </div>
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
