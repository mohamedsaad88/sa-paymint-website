import { BookOpen } from 'lucide-react';
import { TextLink } from './chrome';
// Editorial taxonomy retained for future published content; no fabricated articles.
export const insightCategories = [
  'PayMint News',
  'South Africa',
  'Financial Inclusion',
  'Fintech',
  'SME Growth',
  'Future of Work',
  'Financial Wellness',
];
export function Insights() {
  return (
    <>
      <section className="simple-hero">
        <div className="container">
          <span className="eyebrow">INSIGHTS & NEWS</span>
          <h1>
            PayMint
            <br />
            <span>South Africa.</span>
          </h1>
        </div>
      </section>
      <section className="container section">
        <div className="empty-insights">
          <BookOpen size={32} />
          <h2>No articles published here yet.</h2>
          <p>
            For company information or media enquiries, please contact PayMint.
          </p>
          <TextLink href="/contact?interest=Corporate%20enquiry">
            Contact PayMint
          </TextLink>
        </div>
      </section>
    </>
  );
}
