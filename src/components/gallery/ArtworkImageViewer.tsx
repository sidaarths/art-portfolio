'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import 'yet-another-react-lightbox/styles.css';
import type { Artwork } from '@/types/artwork';

interface Props {
  artwork: Artwork;
  allArtworks: Artwork[];
  initialIndex: number;
}

export function ArtworkImageViewer({ artwork, allArtworks, initialIndex }: Props) {
  const [open, setOpen] = useState(false);

  const slides = allArtworks.map((a) =>
    a.videoUrl
      ? {
          type: 'video' as const,
          poster: a.image,
          sources: [{ src: a.videoUrl, type: 'video/mp4' }],
        }
      : { src: a.image, alt: a.altText ?? a.title }
  );

  return (
    <>
      <div
        className="relative w-full phantasmic-card overflow-hidden"
        style={{
          boxShadow: '0 0 50px rgba(122, 62, 24, 0.18)',
          cursor: artwork.videoUrl ? 'default' : 'zoom-in',
        }}
        onClick={() => !artwork.videoUrl && setOpen(true)}
      >
        {artwork.videoUrl ? (
          <video
            src={artwork.videoUrl}
            poster={artwork.image}
            controls
            className="w-full"
            style={{ maxHeight: '70vh', objectFit: 'contain', backgroundColor: '#0A0705' }}
          />
        ) : (
          <div className="relative w-full group" style={{ aspectRatio: '4/3' }}>
            <Image
              src={artwork.image}
              alt={artwork.altText ?? artwork.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(10, 7, 5, 0.35)' }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  color: '#F5E8D5',
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  letterSpacing: '0.2em',
                }}
              >
                View full
              </span>
            </div>
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        index={initialIndex}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Video]}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: 'rgba(10, 7, 5, 0.97)' } }}
      />
    </>
  );
}
