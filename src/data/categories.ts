import type { Category } from '@/types/artwork';

export const categories: Category[] = [
  {
    slug: 'eerie-chills',
    label: 'Eerie Chills',
    description: 'Unsettling imagery that lingers — portraits of dread, hypnotic tension, and the uncanny.',
    coverImage: '/art/eerie-chills/hypnosis.jpeg',
  },
  {
    slug: 'familiar-warmth',
    label: 'Familiar Warmth',
    description: 'Intimate moments of comfort, closeness, and the quiet beauty of everyday connection.',
    coverImage: '/art/familiar-warmth/precious.jpg',
  },
  {
    slug: 'figure-drawing',
    label: 'Figure Drawing',
    description: 'Studies of the human form — capturing posture, personality, and presence in line and tone.',
    coverImage: '/art/figure-drawing/for-the-vibes.jpg',
  },
  {
    slug: 'sunshine-daisies',
    label: 'Sunshine Daisies',
    description: 'A mental health series exploring addiction, depression, and derealization through visual metaphor.',
    coverImage: '/art/sunshine-daisies/the-corner.jpg',
  },
  {
    slug: 'the-peacekeeper',
    label: 'The Peacekeeper',
    description: 'A world-building series pitch — celestial warriors, warring nations, and a map of conflict.',
    coverImage: '/art/the-peacekeeper/careless-leisure.png',
  },
  {
    slug: 'the-privileged-and-the-poor',
    label: 'The Privileged and the Poor',
    description: 'Works examining power, exploitation, and the stark divide between those who take and those who lose.',
    coverImage: '/art/the-privileged-and-the-poor/the-vulture-and-the-scapegoat.jpg',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
