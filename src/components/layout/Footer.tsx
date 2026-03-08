import Link from 'next/link';
import { Instagram, Youtube, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative z-10 border-t mt-24"
      style={{ borderColor: '#2B2118', backgroundColor: '#0D0906' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Name */}
        <p
          className="text-sm tracking-widest uppercase"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            color: '#8B7D6B',
            letterSpacing: '0.2em',
          }}
        >
          © {new Date().getFullYear()} Zavian
        </p>

        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-ochre"
            style={{ color: '#8B7D6B' }}
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition-colors hover:text-ochre"
            style={{ color: '#8B7D6B' }}
          >
            <Youtube size={18} />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
            className="transition-colors hover:text-ochre"
            style={{ color: '#8B7D6B' }}
          >
            <Globe size={18} />
          </a>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/about', label: 'About' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-widest uppercase transition-colors hover:opacity-70"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                color: '#8B7D6B',
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
