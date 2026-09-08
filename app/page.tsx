/* oxlint-disable next/no-img-element -- Locally optimized WebP with explicit dimensions; no runtime image service required. */
import Link from 'next/link';
import {
  ArrowUpRight,
  Wallet,
  Users,
  Layers3,
  HeartHandshake,
  ShieldCheck,
  Code2,
  Globe2,
  Check,
} from 'lucide-react';
import { CTA, TextLink } from '@/components/site/chrome';
import { Dashboard, Phone, Network } from '@/components/site/visuals';
export const metadata = { alternates: { canonical: '/' } };
const products = [
  {
    n: '01',
    icon: ArrowUpRight,
    title: 'Business payouts',
    text: 'Move money to the people who move your business.',
    href: '/payouts',
    tags: 'SUPPLIERS · CONTRACTORS · BULK PAYOUTS',
  },
  {
    n: '02',
    icon: Users,
    title: 'Payroll, connected',
    text: 'Bring your payroll and payment workflows together.',
    href: '/payroll',
    tags: 'EMPLOYERS · PAYROLL TEAMS · PEOPLE',
  },
  {
    n: '03',
    icon: Layers3,
    title: 'Embedded finance',
    text: 'Open new possibilities through financial partnerships.',
    href: '/embedded-finance',
    tags: 'SME FINANCE · PARTNER-POWERED SERVICES',
  },
  {
    n: '04',
    icon: HeartHandshake,
    title: 'Financial wellness',
    text: 'Put your people’s financial wellbeing in the picture.',
    href: '/financial-wellness',
    tags: 'EARLY WAGE ACCESS · EMPLOYEE BENEFITS',
  },
];
export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill">
              <span className="dot" /> A NEW CHAPTER. A SHARED AMBITION.
            </div>
            <h1>
              Financial
              <br />
              Infrastructure
              <br />
              <span>
                Built for
                <br className="desktop-br" /> South Africa.
              </span>
            </h1>
            <p>
              One platform connecting businesses, employers, employees and
              financial partners.
              <br />
              Built to move money. Designed to move people forward.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Let’s Build Together
                <ArrowUpRight size={18} />
              </Link>
              <TextLink href="/platform">Explore the platform</TextLink>
            </div>
            <div className="hero-proof">
              <ShieldCheck size={17} />
              <span>PayMint technology. South African ambition.</span>
            </div>
          </div>
          <Dashboard />
        </div>
        <div className="container hero-bottom">
          <span>FOR THE BUSINESSES BUILDING WHAT’S NEXT</span>
          <div>
            <span>SMEs & enterprises</span>
            <span>Employers & teams</span>
            <span>Financial partners</span>
            <span>Platforms & fintechs</span>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="section-intro">
          <div>
            <span className="eyebrow">MONEY MOVES. POSSIBILITIES OPEN.</span>
            <h2>
              The right connections.
              <br />A bigger future.
            </h2>
          </div>
          <p>
            From paying your team to building financial services into your
            business, it starts with infrastructure that brings people together.
          </p>
        </div>
        <div className="product-grid">
          {products.map(({ n, icon: Icon, title, text, href, tags }) => (
            <Link className="product-card" href={href} key={n}>
              <div className="product-card-top">
                <Icon size={28} />
                <span>{n}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="product-card-bottom">
                <span>{tags}</span>
                <ArrowUpRight size={24} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="mint-section">
        <div className="container split section">
          <div className="people-image">
            <img
              src="/images/business-owner.webp"
              alt="Illustrative scene of a business owner working in a contemporary studio"
              loading="lazy"
              width="1536"
              height="1024"
            />
            <div className="image-caption">
              <span>BUSINESS IS PERSONAL.</span>
              <strong>
                Build a business.
                <br />
                Open possibilities.
              </strong>
            </div>
          </div>
          <div className="editorial-copy">
            <span className="eyebrow">FOR BUSINESSES. FOR THEIR PEOPLE.</span>
            <h2>
              When business moves,
              <br />
              <span>people move forward.</span>
            </h2>
            <p>
              Behind every payment is someone building a livelihood. A supplier
              growing their business. A contractor finishing a project. An
              employee planning what comes next.
            </p>
            <p>
              PayMint connects the financial side of running a business with the
              everyday needs of the people who make it possible.
            </p>
            <ul className="check-list">
              <li>
                <Check />
                Bring payouts and payroll into one workflow
              </li>
              <li>
                <Check />
                Explore meaningful employee financial benefits
              </li>
              <li>
                <Check />
                Build on the systems you already use
              </li>
            </ul>
            <TextLink href="/business">Discover PayMint for Business</TextLink>
          </div>
        </div>
      </section>
      <section className="section container platform-home">
        <div className="editorial-copy">
          <span className="eyebrow">
            ONE PLATFORM. CONNECTED POSSIBILITIES.
          </span>
          <h2>
            The infrastructure
            <br />
            behind your next move.
          </h2>
          <p>
            A business dashboard. A mobile foundation. APIs that connect your
            systems. A platform designed to bring financial partners closer to
            the businesses and people they serve.
          </p>
          <div className="platform-links">
            <Link href="/platform#business">
              <Layers3 />
              PayMint Business
              <ArrowUpRight />
            </Link>
            <Link href="/platform#mobile">
              <Wallet />
              PayMint Mobile
              <ArrowUpRight />
            </Link>
            <Link href="/developers">
              <Code2 />
              APIs & integrations
              <ArrowUpRight />
            </Link>
          </div>
          <TextLink href="/platform">Meet the platform</TextLink>
        </div>
        <Network />
      </section>
      <section className="dark-section">
        <div className="container section">
          <span className="eyebrow">WHY PAYMINT</span>
          <div className="section-intro">
            <h2>
              A local ambition.
              <br />
              An experienced foundation.
            </h2>
            <p>
              Technology is only the beginning.
              <br />
              What matters is what it makes possible.
            </p>
          </div>
          <div className="reason-row">
            {[
              [
                ShieldCheck,
                'Trust at the foundation',
                'Security and operational control belong in the design, from the first conversation.',
              ],
              [
                Globe2,
                'Built with African ambition',
                'Drawing on PayMint’s experience in Egypt to build the next chapter in South Africa.',
              ],
              [
                HeartHandshake,
                'Inclusion with purpose',
                'A focus on SMEs, underserved businesses and access to useful financial services.',
              ],
            ].map(([I, t, d]) => {
              const Icon = I as typeof ShieldCheck;
              return (
                <div key={t as string}>
                  <Icon />
                  <h3>{t as string}</h3>
                  <p>{d as string}</p>
                </div>
              );
            })}
          </div>
          <TextLink href="/security">Explore security & trust</TextLink>
        </div>
      </section>
      <section className="container section split employee-home">
        <Phone />
        <div className="editorial-copy">
          <span className="eyebrow">FOR THE PEOPLE BEHIND EVERY BUSINESS</span>
          <h2>
            More confidence.
            <br />
            Beyond payday.
          </h2>
          <p>
            Getting paid is a starting point. Our vision is a more connected
            financial experience that helps employees understand their money and
            explore access to eligible earnings.
          </p>
          <TextLink href="/employees">Explore the employee experience</TextLink>
          <div className="roadmap-note">
            <span className="dot" />
            <p>
              Designed to grow with you. Cards, savings, bill payments and
              benefits are future opportunities for South Africa.
            </p>
          </div>
        </div>
      </section>
      <section className="story-band">
        <div className="container story-content">
          <div className="story-years">
            <span>EGYPT → SOUTH AFRICA</span>
            <strong>
              One African
              <br />
              ambition.
            </strong>
          </div>
          <div>
            <span className="eyebrow">
              EXPERIENCE THAT TRAVELS. THINKING THAT’S LOCAL.
            </span>
            <h2>
              From our roots in Egypt.
              <br />
              To what’s next in Africa.
            </h2>
            <p>
              PayMint has been building financial technology since 2019. South
              Africa marks the next chapter: applying that experience to local
              business needs, local partnerships and a shared vision of
              financial inclusion.
            </p>
            <TextLink href="/about">Our story, still unfolding</TextLink>
          </div>
        </div>
      </section>
      <section className="container section partner-home">
        <div>
          <span className="eyebrow">LET’S BUILD WHAT COMES NEXT</span>
          <h2>
            A stronger ecosystem.
            <br />
            Starts with a conversation.
          </h2>
        </div>
        <div>
          <p>
            Banks. Employers. Payroll platforms. Fintechs. Bring your expertise
            to a shared opportunity.
          </p>
          <TextLink href="/partners">Become a Partner</TextLink>
        </div>
      </section>
      <CTA />
    </>
  );
}
