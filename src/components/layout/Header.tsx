'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/still-life', label: 'Still Life' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 border-b"
      style={{
        backgroundColor: 'rgba(10, 7, 5, 0.93)',
        borderColor: '#1C0A04',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl tracking-widest aged-text transition-opacity hover:opacity-75"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            color: '#D4A020',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
          }}
        >
          Zavian
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm tracking-widest uppercase transition-colors"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                color: pathname === href ? '#B84020' : '#9E8060',
                borderBottom: pathname === href ? '1px solid #B84020' : '1px solid transparent',
                paddingBottom: '2px',
                letterSpacing: '0.15em',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: '#9E8060' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-5"
          style={{ borderTop: '1px solid #1C0A04' }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-base tracking-widest uppercase"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                color: pathname === href ? '#B84020' : '#9E8060',
                letterSpacing: '0.15em',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
