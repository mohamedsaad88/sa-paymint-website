/* oxlint-disable next/no-img-element -- Official small logo is served locally. */
'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { nav } from '@/lib/content';
export function Logo() {
  return (
    <Link href="/" aria-label="PayMint South Africa home" className="logo">
      <img
        src="/images/paymint-sa-logo.jpeg"
        width="1600"
        height="362"
        alt="PayMint South Africa"
      />
    </Link>
  );
}
export function Header() {
  const path = usePathname();
  return <HeaderNavigation key={path} path={path} />;
}
function HeaderNavigation({ path }: { path: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const header = useRef<HTMLElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  function close() {
    setMobileOpen(false);
    setActive(null);
  }
  useEffect(() => {
    function dismiss(e: PointerEvent | FocusEvent) {
      if (e.target instanceof Node && !header.current?.contains(e.target)) {
        setMobileOpen(false);
        setActive(null);
      }
    }
    function escape(e: KeyboardEvent) {
      if (e.key !== 'Escape' || (!active && !mobileOpen)) return;
      e.preventDefault();
      if (active) {
        setActive(null);
        lastTrigger.current?.focus();
      } else {
        setMobileOpen(false);
        mobileTrigger.current?.focus();
      }
    }
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('focusin', dismiss);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('focusin', dismiss);
      document.removeEventListener('keydown', escape);
    };
  }, [active, mobileOpen]);
  return (
    <header className="header" ref={header}>
      <div className="nav-wrap">
        <div className="brand">
          <div onClickCapture={close} role="presentation">
            <Logo />
          </div>
        </div>
        <button
          ref={mobileTrigger}
          type="button"
          className="mobile-toggle"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={mobileOpen}
          aria-controls="main-navigation"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setActive(null);
          }}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={mobileOpen ? 'navigation is-open' : 'navigation'}
        >
          {nav.map((group) => {
            const expanded = active === group.title;
            const id = `nav-${group.title.toLowerCase()}`;
            return (
              <div className="nav-group" key={group.title}>
                <button
                  className="nav-trigger"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={id}
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    setActive(expanded ? null : group.title);
                  }}
                >
                  {group.title}
                  <ChevronDown size={15} />
                </button>
                {expanded && (
                  <div id={id} className="dropdown">
                    {group.links.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        aria-current={
                          !href.includes('#') && path === href
                            ? 'page'
                            : undefined
                        }
                        onClick={close}
                      >
                        {label}
                        <ArrowUpRight size={16} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <Link
            href="/contact"
            aria-current={path === '/contact' ? 'page' : undefined}
            onClick={close}
          >
            Contact
          </Link>
          <Link href="/contact" className="button small" onClick={close}>
            Get in Touch
            <ArrowUpRight size={17} />
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
            Financial services for South African
            <br />
            businesses, SMEs and employees.
          </p>
        </div>
        {nav.map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            {group.links.map(([label, href]) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-note">
        Contact PayMint for service details and applicable terms.
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} PayMint. All rights reserved.</span>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/careers">Careers</Link>
          <a href="https://paymint-eg.com/" target="_blank" rel="noreferrer">
            PayMint Egypt
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export function CTA({
  title = 'Let’s talk about your needs.',
  description = 'Speak with PayMint South Africa about business payments, finance and financial wellness.',
  label = 'Contact PayMint',
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
          <span className="eyebrow">GET IN TOUCH</span>
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
