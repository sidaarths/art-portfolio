import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { ArtworkGrid } from '@/components/gallery/ArtworkGrid';
import { categories, getCategoryBySlug } from '@/data/categories';
import { getArtworksByCategory } from '@/data/artworks';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: cat.label,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const artworks = getArtworksByCategory(category);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-10 transition-opacity hover:opacity-70"
          style={{ color: '#8B7D6B', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.12em' }}
        >
          <ChevronLeft size={14} />
          All Categories
        </Link>

        {/* Header */}
        <div className="mb-14 border-b pb-10" style={{ borderColor: '#2B2118' }}>
          <h1
            className="text-5xl md:text-6xl aged-text mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8DCCC' }}
          >
            {cat.label}
          </h1>
          <p
            className="text-base max-w-xl"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#8B7D6B', lineHeight: '1.8' }}
          >
            {cat.description}
          </p>
        </div>

        {artworks.length === 0 ? (
          <p style={{ color: '#8B7D6B', fontFamily: 'var(--font-lora), Georgia, serif' }}>
            No works in this category yet.
          </p>
        ) : (
          <ArtworkGrid artworks={artworks} />
        )}
      </div>
    </PageTransition>
  );
}
