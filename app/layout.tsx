import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '@/components/site/chrome';
export const metadata: Metadata = {
  metadataBase: new URL(
    'https://paymint-south-africa.eng-mohammedsaad.chatgpt.site',
  ),
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
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
