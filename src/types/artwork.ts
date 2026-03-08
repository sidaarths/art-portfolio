export type ArtworkCategory =
  | 'paintings'
  | 'digital-art'
  | 'drawings'
  | 'sketches'
  | 'sculptures'
  | 'animation';

export interface Artwork {
  id: string;
  slug: string;
  title: string;
  category: ArtworkCategory;
  medium: string;
  year: number;
  dimensions?: string;
  description: string;
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
