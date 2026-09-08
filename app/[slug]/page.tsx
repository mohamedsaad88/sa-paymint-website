import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { pages, getPage } from '@/lib/content';
import { CTA } from '@/components/site/chrome';
import { Visual } from '@/components/site/visuals';
import { About, Careers, Privacy } from '@/components/site/company';
import { Insights } from '@/components/site/insights';
const extra: Record<string, { title: string; description: string }> = {
  about: {
    title: 'About & Leadership',
    description: 'PayMint South Africa’s vision, mission and leadership.',
  },
  careers: {
    title: 'Careers',
    description: 'Contact PayMint about career enquiries.',
  },
  privacy: {
    title: 'Website Privacy',
    description: 'How this website prepares your email enquiry.',
  },
  insights: {
    title: 'Insights & News',
    description: 'PayMint South Africa news and insights.',
  },
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
  const p = getPage(slug);
  const e = Object.hasOwn(extra, slug) ? extra[slug] : undefined;
  if (!p && !e)
    return { title: 'Page not found', robots: { index: false, follow: false } };
  return {
    title: p?.eyebrow || e?.title,
    description: p?.description || e?.description,
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
  const p = getPage(slug);
  if (!p) notFound();
  return (
    <>
      <section className={`hero page-hero visual-page visual-${p.visual}`}>
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
          <Visual name={slug} priority />
        </div>
      </section>
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
        {p.source && (
          <p className="source-note">
            Group reference:{' '}
            <a href={p.source.url} target="_blank" rel="noreferrer">
              {p.source.label}
            </a>
            . Contact PayMint for South African service details.
          </p>
        )}
      </section>
      <CTA label={p.cta} interest={p.interest} />
    </>
  );
}
