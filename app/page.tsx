import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowDown,
  Users,
  Layers3,
  HeartHandshake,
} from 'lucide-react';
import { CTA, TextLink } from '@/components/site/chrome';
import { HeroIntro } from '@/components/site/hero-intro';
import { Visual } from '@/components/site/visuals';
export const metadata = { alternates: { canonical: '/' } };
const products = [
  {
    n: '01',
    icon: ArrowUpRight,
    title: 'Payroll & supplier payouts',
    text: 'Payment infrastructure for South African SMEs and employers.',
    href: '/payouts',
    tag: 'PAYOUTS INFRASTRUCTURE',
  },
  {
    n: '02',
    icon: Layers3,
    title: 'Embedded finance',
    text: 'SME loans and salary advances within business workflows.',
    href: '/embedded-finance',
    tag: 'FOR BUSINESSES & EMPLOYEES',
  },
  {
    n: '03',
    icon: Users,
    title: 'Early Wage Access',
    text: 'A focus on access to earned wages and salary advances.',
    href: '/employees',
    tag: 'FOR EMPLOYEES',
  },
  {
    n: '04',
    icon: HeartHandshake,
    title: 'Financial wellness',
    text: 'Tools focused on managing income, spending and goals.',
    href: '/financial-wellness',
    tag: 'EVERYDAY FINANCIAL WELLBEING',
  },
];
export default function Home() {
  return (
    <>
      <section className="hero home-hero future-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill">
              <span className="dot" /> PAYMINT SOUTH AFRICA
            </div>
            <h1>
              Financial
              <br />
              Infrastructure.
              <br />
              <span>
                Built for
                <br />
                South Africa.
              </span>
            </h1>
            <p>
              Payouts, embedded finance and financial wellness for businesses,
              SMEs and employees.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Talk to PayMint
                <ArrowUpRight size={20} />
              </Link>
              <TextLink href="#services">Explore our services</TextLink>
            </div>
          </div>
          <HeroIntro />
        </div>
        <div className="container hero-bottom">
          <span>FINANCIAL INCLUSION. SHARED OPPORTUNITY.</span>
          <a href="#services" className="scroll-cue">
            Discover PayMint
            <ArrowDown size={16} />
          </a>
        </div>
      </section>
      <section id="services" className="container section service-index">
        <div className="service-index-intro">
          <span className="eyebrow">WHAT WE DO IN SOUTH AFRICA</span>
          <h2>
            Business needs.
            <br />
            <span>People’s wellbeing.</span>
          </h2>
          <p>
            Financial services that reflect PayMint South Africa’s focus on
            business growth and financial inclusion.
          </p>
          <div className="service-index-mark" aria-hidden="true">
            ↗
          </div>
        </div>
        <div className="service-index-list">
          {products.map(({ n, icon: Icon, title, text, href, tag }) => (
            <Link className="service-editorial-row" href={href} key={n}>
              <span className="row-number">{n}</span>
              <div>
                <span className="eyebrow">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <span className="row-icon">
                <Icon size={22} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="people-story">
        <div className="container section split">
          <Visual name="home-business" />
          <div className="editorial-copy">
            <span className="eyebrow">FOR SMEs & EMPLOYERS</span>
            <h2>
              Supporting businesses.
              <br />
              <span>Opening opportunity.</span>
            </h2>
            <p>
              Payroll and supplier payments are part of everyday business.
              PayMint South Africa brings a focus on these needs alongside
              embedded finance.
            </p>
            <p>
              Our mission focuses on underserved communities, SMEs and
              black-owned enterprises.
            </p>
            <TextLink href="/business">PayMint for Business</TextLink>
          </div>
        </div>
      </section>
      <section className="vision-ribbon">
        <div className="container">
          <span className="eyebrow">OUR VISION</span>
          <h2>
            Opportunity.
            <br />
            <span>Liquidity.</span> Growth.
          </h2>
          <div className="vision-ribbon-bottom">
            <p>
              A future where more businesses and individuals can participate in
              South Africa’s financial life.
            </p>
            <TextLink href="/about">Our vision and mission</TextLink>
          </div>
        </div>
      </section>
      <section className="employee-story">
        <div className="container section split">
          <div className="editorial-copy">
            <span className="eyebrow">FOR EMPLOYEES</span>
            <h2>
              Financial wellbeing.
              <br />
              <span>Beyond payday.</span>
            </h2>
            <p>
              PayMint South Africa’s employee offering focuses on early wage
              access and tools for managing income, spending and financial
              goals.
            </p>
            <TextLink href="/employees">PayMint for Employees</TextLink>
          </div>
          <Visual name="home-wellness" />
        </div>
      </section>
      <section className="container section partner-home">
        <div>
          <span className="eyebrow">PARTNERSHIP ENQUIRIES</span>
          <h2>
            A shared ambition.
            <br />
            Start a conversation.
          </h2>
        </div>
        <div>
          <p>
            Introduce your organisation and the opportunity you would like to
            explore with PayMint South Africa.
          </p>
          <TextLink href="/partners">Talk about a partnership</TextLink>
        </div>
      </section>
      <CTA />
    </>
  );
}
