'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { nav } from '@/lib/content';
export function Logo() {
  return (
    <Link href="/" aria-label="PayMint South Africa home" className="logo">
      pay<span>mint</span>
      <i>®</i>
    </Link>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="nav-wrap">
        <div className="brand">
          <Logo />
          <span className="country">
            <span className="flag">🇿🇦</span> SOUTH AFRICA
          </span>
        </div>
        <button
          className="mobile-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? 'navigation is-open' : 'navigation'}
        >
          {nav.map((group) => (
            <details key={group.title} className="nav-group">
              <summary
                onKeyDown={(e) => {
                  if (e.key === 'Escape')
                    e.currentTarget.closest('details')?.removeAttribute('open');
                }}
              >
                {group.title}
                <ChevronDown size={13} />
              </summary>
              <div className="dropdown">
                {group.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    aria-current={path === href ? 'page' : undefined}
                    onClick={(e) => {
                      setOpen(false);
                      e.currentTarget
                        .closest('details')
                        ?.removeAttribute('open');
                    }}
                  >
                    {label}
                    <ArrowUpRight size={15} />
                  </Link>
                ))}
              </div>
            </details>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <Link
            href="/contact"
            className="button small"
            onClick={() => setOpen(false)}
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo />
          <p>
            Financial infrastructure for
            <br />
            businesses and their people.
          </p>
          <span className="country">🇿🇦 SOUTH AFRICA</span>
        </div>
        {nav.map((group) => (
          <div key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, href]) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-note">
        South African product availability, eligibility and terms are confirmed
        with PayMint and relevant providers. Product screens are illustrative.
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} PayMint. All rights reserved.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact">Contact</Link>
          <a href="https://paymint-eg.com/" target="_blank" rel="noreferrer">
            PayMint Egypt <ArrowUpRight size={13} />
          </a>
        </div>
        <span>Built for the next chapter.</span>
      </div>
    </footer>
  );
}
export function CTA({
  title = 'Let’s move South Africa forward.',
  description = 'Connect your business. Empower your people. Build what comes next.',
  label = 'Get Started',
  interest = 'Corporate enquiry',
}: {
  title?: string;
  description?: string;
  label?: string;
  interest?: string;
}) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">THE NEXT MOVE IS YOURS</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link
          className="button light"
          href={`/contact?interest=${encodeURIComponent(interest)}`}
        >
          {label}
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
