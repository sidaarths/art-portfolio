'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Artwork } from '@/types/artwork';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick?: () => void;
  index?: number;
}

export function ArtworkCard({ artwork, onClick, index = 0 }: ArtworkCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden cursor-pointer"
      style={{
        backgroundColor: '#1A120B',
        boxShadow: '3px 3px 0 #0D0906, -1px -1px 0 #2B2118',
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder="empty"
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(13,9,6,0.9) 0%, transparent 60%)' }}
        >
          <p
            className="text-sm font-medium"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#8B7D6B', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            {artwork.medium}
          </p>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-3 border-t" style={{ borderColor: '#2B2118' }}>
        <h3
          className="text-base aged-text"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#D4C4AE' }}
        >
          {artwork.title}
        </h3>
        <p
          className="text-xs mt-1"
          style={{ color: '#8B7D6B', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.05em' }}
        >
          {artwork.year}
        </p>
      </div>
    </motion.div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="text-left w-full" aria-label={`View ${artwork.title}`}>
        {content}
      </button>
    );
  }

  return (
    <Link href={`/gallery/${artwork.category}/${artwork.slug}`} className="block">
      {content}
    </Link>
  );
}
