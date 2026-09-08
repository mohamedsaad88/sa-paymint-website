import type { Metadata } from 'next';
import './globals.css';
import './visual-theme.css';
import { siteOrigin } from '@/lib/site';
import { PageTransition } from '@/components/site/page-transition';
import { MotionEffects } from '@/components/site/motion-effects';
import { Header, Footer } from '@/components/site/chrome';
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: 'PayMint South Africa | Financial Infrastructure',
    template: '%s | PayMint South Africa',
  },
  description:
    'Financial infrastructure for South African businesses and their people. Explore payouts, payroll, embedded finance and employee financial wellness.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MotionEffects />
      </body>
    </html>
  );
}
