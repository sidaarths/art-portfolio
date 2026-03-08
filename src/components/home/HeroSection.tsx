'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0D0906' }}
    >
      {/* Background texture pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(107, 58, 42, 0.15) 2px,
            rgba(107, 58, 42, 0.15) 3px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Large decorative letter */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[30vw] font-bold opacity-[0.03]"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#CC7722', lineHeight: 1 }}
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
            className="text-xs tracking-[0.4em] uppercase mb-8"
            style={{ color: '#6B3A2A', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
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
              color: '#E8DCCC',
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
          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
            <div className="h-px w-16" style={{ backgroundColor: '#3D1F10' }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: '#6B3A2A' }} />
            <div className="h-px w-16" style={{ backgroundColor: '#3D1F10' }} />
          </div>

          <p
            className="text-base md:text-lg max-w-lg mx-auto mb-12"
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              color: '#8B7D6B',
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
              color: '#D4C4AE',
              borderColor: '#3D1F10',
              backgroundColor: 'transparent',
              letterSpacing: '0.2em',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#1A120B';
              (e.currentTarget as HTMLElement).style.borderColor = '#6B3A2A';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
              (e.currentTarget as HTMLElement).style.borderColor = '#3D1F10';
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
