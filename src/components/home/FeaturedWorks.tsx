'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArtworkCard } from '@/components/gallery/ArtworkCard';
import { getFeaturedArtworks } from '@/data/artworks';

export function FeaturedWorks() {
  const featured = getFeaturedArtworks();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between mb-12 pb-6 border-b"
        style={{ borderColor: '#2B2118' }}
      >
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: '#6B3A2A', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Selected Works
          </p>
          <h2
            className="text-3xl md:text-4xl aged-text"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8DCCC' }}
          >
            Featured
          </h2>
        </div>

        <Link
          href="/gallery"
          className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70 hidden md:block"
          style={{ color: '#8B7D6B', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.15em' }}
        >
          View all →
        </Link>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((artwork, i) => (
          <ArtworkCard key={artwork.id} artwork={artwork} index={i} />
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="mt-10 text-center md:hidden">
        <Link
          href="/gallery"
          className="text-xs tracking-widest uppercase"
          style={{ color: '#8B7D6B', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.15em' }}
        >
          View all works →
        </Link>
      </div>
    </section>
  );
}
