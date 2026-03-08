import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';
import { CategoryCard } from '@/components/gallery/CategoryCard';
import { categories } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore all works by Zavian across paintings, digital art, drawings, sketches, sculptures, and animation.',
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14 border-b pb-10" style={{ borderColor: '#2B2118' }}>
          <h1
            className="text-5xl md:text-6xl aged-text mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8DCCC' }}
          >
            Gallery
          </h1>
          <p
            className="text-base max-w-xl"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#8B7D6B', lineHeight: '1.8' }}
          >
            A collection of works spanning multiple disciplines — each a study in material, light, and form.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, i) => (
            <CategoryCard key={category.slug} category={category} index={i} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
