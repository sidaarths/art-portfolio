import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageTransition } from '@/components/layout/PageTransition';
import { ArtworkImageViewer } from '@/components/gallery/ArtworkImageViewer';
import { artworks, getArtworkBySlug, getAdjacentArtworks } from '@/data/artworks';
import { getCategoryBySlug } from '@/data/categories';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return artworks.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork) return {};
  return {
    title: artwork.title,
    description: artwork.caption,
  };
}

export default async function ArtworkDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const artwork = getArtworkBySlug(slug);
  if (!artwork || artwork.category !== category) notFound();

  const cat = getCategoryBySlug(category);
  const { prev, next } = getAdjacentArtworks(artwork);
  const currentIndex = artworks.findIndex((a) => a.slug === slug);

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div
          className="flex items-center gap-2 mb-10 text-xs tracking-widest uppercase"
          style={{ color: '#9E8060', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.12em' }}
        >
          <Link href="/gallery" className="hover:opacity-70 transition-opacity">Gallery</Link>
          <span>/</span>
          <Link href={`/gallery/${category}`} className="hover:opacity-70 transition-opacity">{cat?.label}</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <ArtworkImageViewer artwork={artwork} allArtworks={artworks} initialIndex={currentIndex} />

          {/* Details */}
          <div>
            <h1
              className="text-3xl md:text-4xl aged-text mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#F5E8D5' }}
            >
              {artwork.title}
            </h1>

            {/* Metadata table */}
            <dl className="border-t border-b mb-8" style={{ borderColor: '#1C0A04' }}>
              {[
                { label: 'Medium', value: artwork.medium },
                { label: 'Year', value: String(artwork.year) },
                ...(artwork.dimensions ? [{ label: 'Dimensions', value: artwork.dimensions }] : []),
                { label: 'Category', value: cat?.label ?? category },
              ].map(({ label, value }) => (
                <div key={label} className="flex py-3 border-b" style={{ borderColor: '#1C0A04' }}>
                  <dt
                    className="w-28 text-xs tracking-widest uppercase shrink-0"
                    style={{ color: '#B84020', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.1em' }}
                  >
                    {label}
                  </dt>
                  <dd
                    className="text-sm"
                    style={{ color: '#F5E8D5', fontFamily: 'var(--font-lora), Georgia, serif' }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Description */}
            <p
              className="text-base leading-relaxed"
              style={{ color: '#9E8060', fontFamily: 'var(--font-lora), Georgia, serif', lineHeight: '1.9' }}
            >
              {artwork.caption}
            </p>
          </div>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="mt-16 pt-8 flex justify-between border-t" style={{ borderColor: '#1C0A04' }}>
            {prev ? (
              <Link
                href={`/gallery/${prev.category}/${prev.slug}`}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{ color: '#9E8060', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.05em' }}
              >
                <ChevronLeft size={16} />
                {prev.title}
              </Link>
            ) : <span />}
            {next ? (
              <Link
                href={`/gallery/${next.category}/${next.slug}`}
                className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
                style={{ color: '#9E8060', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.05em' }}
              >
                {next.title}
                <ChevronRight size={16} />
              </Link>
            ) : <span />}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
