'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ArtworkCard } from './ArtworkCard';
import type { Artwork } from '@/types/artwork';

interface ArtworkGridProps {
  artworks: Artwork[];
}

export function ArtworkGrid({ artworks }: ArtworkGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = artworks.map((a) => ({ src: a.image, alt: a.title }));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {artworks.map((artwork, i) => (
          <ArtworkCard
            key={artwork.id}
            artwork={artwork}
            index={i}
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(13, 9, 6, 0.97)' },
        }}
      />
    </>
  );
}
