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
        <div
          className="relative overflow-hidden"
          style={{
            backgroundColor: '#1A120B',
            boxShadow: '3px 3px 0 #0D0906, -1px -1px 0 #2B2118',
          }}
        >
          {/* Cover image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
            <Image
              src={category.coverImage}
              alt={category.label}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
            />
            {/* Permanent dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(13,9,6,0.8) 0%, rgba(13,9,6,0.2) 60%)' }}
            />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h2
              className="text-xl aged-text"
              style={{
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#E8DCCC',
              }}
            >
              {category.label}
            </h2>
            <p
              className="text-xs mt-1 tracking-widest uppercase"
              style={{ color: '#8B7D6B', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.1em' }}
            >
              {count} {count === 1 ? 'work' : 'works'}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
