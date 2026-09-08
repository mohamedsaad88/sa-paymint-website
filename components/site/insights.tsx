'use client';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { TextLink } from './chrome';
const categories = [
  'All insights',
  'PayMint News',
  'South Africa',
  'Financial Inclusion',
  'Fintech',
  'SME Growth',
  'Future of Work',
  'Financial Wellness',
];
export function Insights() {
  const [category, setCategory] = useState('All insights');
  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <span className="eyebrow">INSIGHTS & NEWS</span>
          <h1>
            A conversation
            <br />
            <span>worth moving forward.</span>
          </h1>
          <p>
            Perspectives on financial inclusion, business growth and the future
            of work in South Africa.
          </p>
        </div>
      </section>
      <section className="container section">
        <div className="category-list" aria-label="Filter insights by category">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="empty-insights" aria-live="polite">
          <BookOpen size={32} />
          <span className="eyebrow" style={{ marginTop: 20 }}>
            {category === 'All insights'
              ? 'THE NEXT CHAPTER IS TAKING SHAPE'
              : category}
          </span>
          <h2>
            {category === 'All insights'
              ? 'Our South African stories start here.'
              : 'More perspectives to come.'}
          </h2>
          <p>
            No{' '}
            {category === 'All insights'
              ? 'articles'
              : category.toLowerCase() + ' articles'}{' '}
            have been published in this collection yet. Explore our story or
            speak to the team about a media enquiry.
          </p>
          <TextLink href="/about">Get to know PayMint</TextLink>
          <br />
          <TextLink href="/contact?interest=Corporate%20enquiry">
            Media & corporate enquiries
          </TextLink>
        </div>
      </section>
    </>
  );
}
