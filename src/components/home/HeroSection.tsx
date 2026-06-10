'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0A0705' }}
    >
      {/* Concentric rings — warm amber-brown Op Art background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-radial-gradient(
            circle at 50% 50%,
            transparent 0,
            transparent 38px,
            rgba(122, 62, 24, 0.10) 38px,
            rgba(122, 62, 24, 0.10) 39px
          )`,
          transform: 'scale(1.4)',
        }}
        aria-hidden="true"
      />

      {/* Conic rays overlay — terracotta and umber */}
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(
            from 0deg at 50% 50%,
            transparent 0deg,
            rgba(184, 64, 32, 0.08) 25deg,
            transparent 50deg,
            rgba(122, 62, 24, 0.06) 95deg,
            transparent 115deg,
            rgba(184, 64, 32, 0.06) 155deg,
            transparent 175deg,
            rgba(122, 62, 24, 0.08) 215deg,
            transparent 235deg,
            rgba(184, 64, 32, 0.06) 275deg,
            transparent 295deg,
            rgba(122, 62, 24, 0.06) 335deg,
            transparent 360deg
          )`,
        }}
        aria-hidden="true"
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 7, 5, 0.8) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Large decorative letter */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[30vw] font-bold"
          style={{
            fontFamily: 'var(--font-playfair), Georgia, serif',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(212, 160, 32, 0.07)',
            lineHeight: 1,
          }}
        >
          Z
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-xs tracking-[0.5em] uppercase mb-8"
            style={{ color: '#B84020', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Artist Portfolio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            className="text-[14vw] md:text-[10vw] lg:text-[8rem] aged-text leading-none mb-8"
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#D4A020',
              letterSpacing: '-0.02em',
            }}
          >
            Zavian
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Ornamental divider — glowing warm dots */}
          <div className="flex items-center justify-center gap-2 mb-8" aria-hidden="true">
            <div className="h-px w-12" style={{ backgroundColor: '#1C0A04' }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#B84020', boxShadow: '0 0 8px rgba(184, 64, 32, 0.9)' }}
            />
            <div className="h-px w-4" style={{ backgroundColor: '#2E1608' }} />
            <div
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: '#D4A020', boxShadow: '0 0 6px rgba(212, 160, 32, 0.7)' }}
            />
            <div className="h-px w-4" style={{ backgroundColor: '#2E1608' }} />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#B84020', boxShadow: '0 0 8px rgba(184, 64, 32, 0.9)' }}
            />
            <div className="h-px w-12" style={{ backgroundColor: '#1C0A04' }} />
          </div>

          <p
            className="text-base md:text-lg max-w-lg mx-auto mb-12"
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              color: '#9E8060',
              lineHeight: '1.9',
              fontStyle: 'italic',
            }}
          >
            Paintings, drawings, sculptures, and digital works —
            each piece an act of excavation.
          </p>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm tracking-widest uppercase transition-all group border"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              color: '#F5E8D5',
              borderColor: '#B84020',
              backgroundColor: 'transparent',
              letterSpacing: '0.2em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(184, 64, 32, 0.12)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(184, 64, 32, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            View Gallery
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
