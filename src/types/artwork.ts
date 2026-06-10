export type ArtworkCategory =
  | 'eerie-chills'
  | 'familiar-warmth'
  | 'figure-drawing'
  | 'sunshine-daisies'
  | 'the-peacekeeper'
  | 'the-privileged-and-the-poor';

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: ArtworkCategory;
  medium: string;
  year: number;
  dimensions?: string;
  description: string;
  altText?: string;
  caption?: string;
  image: string;
  thumbnail?: string;
  featured: boolean;
  order: number;
  videoUrl?: string;
}

export interface Category {
  slug: ArtworkCategory;
  label: string;
  description: string;
  coverImage: string;
}
