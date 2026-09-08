import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>This page isn’t available. Explore PayMint from the homepage.</p>
      <Link className="button" href="/">
        Back to Home ↗
      </Link>
    </section>
  );
}
