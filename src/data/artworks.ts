import type { Artwork } from '@/types/artwork';

export const artworks: Artwork[] = [
  // Paintings
  {
    id: 'p1',
    slug: 'the-weight-of-autumn',
    title: 'The Weight of Autumn',
    category: 'paintings',
    medium: 'Oil on canvas',
    year: 2024,
    dimensions: '60 × 80 cm',
    description:
      'A meditation on transition — the slow surrender of warmth to cold, rendered in thick impasto strokes of burnt sienna and raw umber.',
    image: '/art/paintings/weight-of-autumn.jpg',
    featured: true,
    order: 1,
  },
  {
    id: 'p2',
    slug: 'forgotten-interior',
    title: 'Forgotten Interior',
    category: 'paintings',
    medium: 'Oil on linen',
    year: 2023,
    dimensions: '50 × 70 cm',
    description:
      'An abandoned room, light filtering through cracked shutters, dust suspended in the air like memory.',
    image: '/art/paintings/forgotten-interior.jpg',
    featured: true,
    order: 2,
  },
  {
    id: 'p3',
    slug: 'earth-sermon',
    title: 'Earth Sermon',
    category: 'paintings',
    medium: 'Acrylic and earth pigments on board',
    year: 2024,
    dimensions: '40 × 40 cm',
    description:
      'Ground-sourced ochres and oxides applied in ritualistic layers, building up a surface that breathes.',
    image: '/art/paintings/earth-sermon.jpg',
    featured: false,
    order: 3,
  },
  // Digital Art
  {
    id: 'd1',
    slug: 'iron-reverie',
    title: 'Iron Reverie',
    category: 'digital-art',
    medium: 'Digital painting',
    year: 2024,
    description:
      'An industrial dreamscape — gothic architecture dissolving into circuitry, rendered in deep sepias and rusted tones.',
    image: '/art/digital-art/iron-reverie.jpg',
    featured: true,
    order: 1,
  },
  {
    id: 'd2',
    slug: 'the-cartographer',
    title: 'The Cartographer',
    category: 'digital-art',
    medium: 'Digital illustration',
    year: 2023,
    description:
      'A figure maps an unmappable landscape. Antique map textures layered over painterly brushwork.',
    image: '/art/digital-art/cartographer.jpg',
    featured: false,
    order: 2,
  },
  // Drawings
  {
    id: 'dr1',
    slug: 'portrait-study-i',
    title: 'Portrait Study I',
    category: 'drawings',
    medium: 'Graphite on paper',
    year: 2024,
    dimensions: '29.7 × 42 cm',
    description:
      'A study in shadow and structure — the face as architecture, mapped with careful graphite.',
    image: '/art/drawings/portrait-study-i.jpg',
    featured: true,
    order: 1,
  },
  {
    id: 'dr2',
    slug: 'anatomical-fragment',
    title: 'Anatomical Fragment',
    category: 'drawings',
    medium: 'Ink on aged paper',
    year: 2023,
    dimensions: '21 × 29.7 cm',
    description:
      'Inspired by Renaissance anatomical manuscripts. Cross-hatching builds form from void.',
    image: '/art/drawings/anatomical-fragment.jpg',
    featured: false,
    order: 2,
  },
  // Sketches
  {
    id: 's1',
    slug: 'market-figures',
    title: 'Market Figures',
    category: 'sketches',
    medium: 'Pencil on paper',
    year: 2024,
    description:
      'Quick studies from observation — figures captured in passing moments at a local market.',
    image: '/art/sketches/market-figures.jpg',
    featured: false,
    order: 1,
  },
  {
    id: 's2',
    slug: 'hand-studies',
    title: 'Hand Studies',
    category: 'sketches',
    medium: 'Biro and pencil',
    year: 2024,
    description:
      'A page of hand studies — the instrument of making, studied obsessively.',
    image: '/art/sketches/hand-studies.jpg',
    featured: false,
    order: 2,
  },
  // Sculptures
  {
    id: 'sc1',
    slug: 'vessel-no-3',
    title: 'Vessel No. 3',
    category: 'sculptures',
    medium: 'Stoneware clay, iron oxide glaze',
    year: 2023,
    dimensions: '28 × 15 × 15 cm',
    description:
      'Thrown and altered — a vessel that holds more than water. The surface is scarred, marked by the process of its making.',
    image: '/art/sculptures/vessel-no-3.jpg',
    featured: true,
    order: 1,
  },
  {
    id: 'sc2',
    slug: 'burden',
    title: 'Burden',
    category: 'sculptures',
    medium: 'Found wood and iron nails',
    year: 2024,
    dimensions: '35 × 20 × 20 cm',
    description:
      'Reclaimed timber, studded with hundreds of iron nails. Weight made visible.',
    image: '/art/sculptures/burden.jpg',
    featured: false,
    order: 2,
  },
  // Animation
  {
    id: 'an1',
    slug: 'the-turning',
    title: 'The Turning',
    category: 'animation',
    medium: 'Frame-by-frame digital animation',
    year: 2024,
    description:
      'A 30-second loop — a figure turning endlessly in a space that shifts around it.',
    image: '/art/animation/the-turning-poster.jpg',
    videoUrl: '/art/animation/the-turning.mp4',
    featured: true,
    order: 1,
  },
];

export function getArtworksByCategory(category: string): Artwork[] {
  return artworks.filter((a) => a.category === category).sort((a, b) => a.order - b.order);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured).slice(0, 6);
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getAdjacentArtworks(current: Artwork): {
  prev: Artwork | null;
  next: Artwork | null;
} {
  const categoryArtworks = getArtworksByCategory(current.category);
  const idx = categoryArtworks.findIndex((a) => a.slug === current.slug);
  return {
    prev: idx > 0 ? categoryArtworks[idx - 1] : null,
    next: idx < categoryArtworks.length - 1 ? categoryArtworks[idx + 1] : null,
  };
}
