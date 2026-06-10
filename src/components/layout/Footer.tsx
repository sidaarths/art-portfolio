'use client';

import Link from 'next/link';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative z-10 border-t mt-24"
      style={{ borderColor: '#1C0A04', backgroundColor: '#0A0705' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name */}
        <p
          className="text-sm tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            color: '#9E8060',
            letterSpacing: '0.2em',
          }}
        >
          © {new Date().getFullYear()} Zavian
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {([
            { href: 'https://www.instagram.com/yukillinn', label: 'Instagram', Icon: Instagram },
            { href: 'https://www.linkedin.com/in/yukillinn', label: 'LinkedIn', Icon: Linkedin },
            { href: 'mailto:itsactuallyzavian@gmail.com', label: 'Email', Icon: Mail },
          ] as const).map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="transition-all"
              style={{ color: '#9E8060' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#D4A020'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#9E8060'; }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/still-life', label: 'Still Life' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                color: '#9E8060',
                letterSpacing: '0.12em',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
