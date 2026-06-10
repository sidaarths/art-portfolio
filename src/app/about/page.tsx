import type { Metadata } from 'next';
import Image from 'next/image';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Zavian — artist statement, background, and practice.',
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 border-b pb-10" style={{ borderColor: '#1C0A04' }}>
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: '#B84020', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            The Artist
          </p>
          <h1
            className="text-5xl md:text-6xl aged-text"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#D4A020' }}
          >
            About
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Portrait placeholder */}
          <div className="md:col-span-1">
            <div className="w-full aspect-square phantasmic-card overflow-hidden" style={{ position: 'relative' }}>
              <Image
                src="/about/pic.jpg"
                alt="Zavian"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <h2
              className="text-2xl aged-text"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#F5E8D5' }}
            >
              Zavian
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#9E8060', lineHeight: '1.9' }}
            >
              <p>
                Zavian is a multidisciplinary artist who works by painting, drawing, sculpting and animating a message.
                The use of different mediums adds texture not only to the piece but also the meaning behind it.
                The depth of graphite, fluidity of oil and resistance of clay are molded to fit this thought process for each piece.
              </p>
              <p>
                Influence is driven by various films, including ranges from their detailed plot and distinct characters,
                to their in vogue aesthetics and advancing graphics. Anatomical studies and artist references lay a good
                foundation on which he builds how a piece is made and that determines what it can become.
              </p>
              <p>
                Zavian approaches each medium as a distinct language, each with its own grammar that&apos;s used to write a story.
              </p>
            </div>

            {/* Socials */}
            <div className="pt-4 space-y-3">
              <p
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: '#B84020', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                Connect
              </p>
              <div className="space-y-2" style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}>
                <a
                  href="https://www.instagram.com/yukillinn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                  style={{ color: '#9E8060' }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ color: '#B84020', minWidth: '80px' }}>Instagram</span>
                  <span>@yukillinn</span>
                </a>
                <a
                  href="mailto:itsactuallyzavian@gmail.com"
                  className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                  style={{ color: '#9E8060' }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ color: '#B84020', minWidth: '80px' }}>Email</span>
                  <span>itsactuallyzavian@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yukillinn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                  style={{ color: '#9E8060' }}
                >
                  <span className="text-xs tracking-widest uppercase" style={{ color: '#B84020', minWidth: '80px' }}>LinkedIn</span>
                  <span>yukillinn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </PageTransition>
  );
}
