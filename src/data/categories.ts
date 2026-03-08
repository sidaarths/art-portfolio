import type { Category } from '@/types/artwork';

export const categories: Category[] = [
  {
    slug: 'paintings',
    label: 'Paintings',
    description: 'Oil, acrylic, and mixed media works on canvas and board.',
    coverImage: '/art/paintings/cover.jpg',
  },
  {
    slug: 'digital-art',
    label: 'Digital Art',
    description: 'Digital illustrations and composites created with modern tools.',
    coverImage: '/art/digital-art/cover.jpg',
  },
  {
    slug: 'drawings',
    label: 'Drawings',
    description: 'Pencil, ink, and charcoal works on paper.',
    coverImage: '/art/drawings/cover.jpg',
  },
  {
    slug: 'sketches',
    label: 'Sketches',
    description: 'Studies, quick observations, and exploratory work.',
    coverImage: '/art/sketches/cover.jpg',
  },
  {
    slug: 'sculptures',
    label: 'Sculptures',
    description: 'Three-dimensional works in clay, stone, and mixed materials.',
    coverImage: '/art/sculptures/cover.jpg',
  },
  {
    slug: 'animation',
    label: 'Animation',
    description: 'Animated sequences and motion studies.',
    coverImage: '/art/animation/cover.jpg',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
