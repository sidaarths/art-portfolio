'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Category } from '@/types/artwork';
import { getArtworksByCategory } from '@/data/artworks';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const count = getArtworksByCategory(category.slug).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/gallery/${category.slug}`} className="group block">
        <div className="relative overflow-hidden phantasmic-card" style={{ backgroundColor: '#180C06' }}>
          {/* Cover image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
            <Image
              src={category.coverImage}
              alt={category.label}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover opacity-70 group-hover:opacity-90 card-image"
              style={{ objectPosition: category.coverImagePosition ?? 'center' }}
            />
            {/* Permanent overlay — warm umber tinted */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,7,5,0.88) 0%, rgba(122,62,24,0.15) 60%, transparent 100%)' }}
            />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h2
              className="text-xl aged-text"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#F5E8D5' }}
            >
              {category.label}
            </h2>
            <p
              className="text-xs mt-1 tracking-widest uppercase"
              style={{ color: '#D4A020', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.1em' }}
            >
              {count} {count === 1 ? 'work' : 'works'}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
