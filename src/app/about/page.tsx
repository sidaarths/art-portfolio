import type { Metadata } from 'next';
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
        <div className="mb-16 border-b pb-10" style={{ borderColor: '#2B2118' }}>
          <h1
            className="text-5xl md:text-6xl aged-text"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8DCCC' }}
          >
            About
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Portrait placeholder */}
          <div className="md:col-span-1">
            <div
              className="w-full aspect-square"
              style={{
                backgroundColor: '#2B2118',
                boxShadow: '3px 3px 0 #0D0906, -1px -1px 0 #3D2B1F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: '#6B3A2A', fontFamily: 'var(--font-cormorant), Georgia, serif', letterSpacing: '0.15em' }}
              >
                Portrait
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <h2
              className="text-2xl aged-text"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#D4C4AE' }}
            >
              Zavian
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#8B7D6B', lineHeight: '1.9' }}
            >
              <p>
                Zavian is a multidisciplinary artist working across painting, drawing, sculpture, digital media, and animation.
                The work is rooted in a deep engagement with material — the resistance of clay, the weight of graphite,
                the permanence of oil — and an ongoing investigation into how forms hold meaning.
              </p>
              <p>
                Influences range from the Flemish masters to contemporary digital illustration,
                from Renaissance anatomical studies to experimental animation. The common thread is
                an obsession with process: how a thing is made determines what it becomes.
              </p>
              <p>
                Currently working from a studio practice that spans traditional and digital disciplines,
                Zavian approaches each medium as a distinct language — each with its own grammar, its own silence.
              </p>
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-20 pt-10 border-t" style={{ borderColor: '#2B2118' }}>
          <h2
            className="text-xl mb-6 aged-text"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#D4C4AE' }}
          >
            Artistic Statement
          </h2>
          <blockquote
            className="text-lg italic leading-relaxed max-w-2xl pl-6 border-l-2"
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              color: '#8B7D6B',
              borderColor: '#6B3A2A',
              lineHeight: '2',
            }}
          >
            &ldquo;I am interested in what persists — the mark that survives the gesture,
            the form that outlasts its making. Every work is an act of excavation:
            removing what does not belong until what remains could not be otherwise.&rdquo;
          </blockquote>
        </div>
      </div>
    </PageTransition>
  );
}
