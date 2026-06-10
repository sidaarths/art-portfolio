'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
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
      className="group relative overflow-hidden cursor-pointer phantasmic-card"
      style={{ backgroundColor: '#180C06' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover card-image"
          style={{ objectPosition: artwork.objectPosition ?? 'center' }}
          placeholder="empty"
        />
        {/* Video badge */}
        {artwork.videoUrl && (
          <div
            className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-sm z-10"
            style={{ backgroundColor: 'rgba(10, 7, 5, 0.8)', color: '#F5E8D5' }}
          >
            <Play size={10} fill="currentColor" />
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.1em', fontFamily: 'var(--font-cormorant), Georgia, serif' }}>VIDEO</span>
          </div>
        )}
        {/* Hover overlay — warm umber tinted */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, rgba(10,7,5,0.95) 0%, rgba(122,62,24,0.20) 65%, transparent 100%)' }}
        >
          <p
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', color: '#9E8060', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            {artwork.medium}
          </p>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 py-3 border-t" style={{ borderColor: '#1C0A04' }}>
        <h3
          className="text-base aged-text"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#F5E8D5' }}
        >
          {artwork.title}
        </h3>
        <p
          className="text-xs mt-1"
          style={{ color: '#D4A020', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.05em' }}
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
