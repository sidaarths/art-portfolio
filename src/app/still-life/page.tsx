import type { Metadata } from 'next';
import { PageTransition } from '@/components/layout/PageTransition';

export const metadata: Metadata = {
  title: 'Still Life Exercise',
  description: 'A still life study — TAMU exercise exploring composition, light, and material through a jazzy mood.',
};

const descriptions = [
  {
    title: 'Finished Piece',
    body: 'Jazzy mood illustrates a still life of a gramophone, a turtle specimen and a metal sculpture.',
  },
  {
    title: 'Photo Reference',
    body: 'This still life set up was inspired by a mellow and jazzy vibe that prestigious avant garde destinations like "The Battery" in San Francisco portray.',
  },
  {
    title: 'Progress Picture #1',
    body: 'This old canvas has been re-purposed in order to conserve materials and funds.',
  },
  {
    title: 'Progress Picture #2',
    body: 'Clearer progress pictures could have been taken but the process was too engrossing to pay mind.',
  },
  {
    title: 'Progress Picture #3',
    body: 'The photo reference is still just a reference and choosing not to be tied to that, the painting was given more depth and a dynamic result.',
  },
];

export default function StillLifePage() {
  const pdfPath = `/art/still-life/${encodeURIComponent('TAMU Still life- Jazzy mood.pdf')}`;

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16 border-b pb-10" style={{ borderColor: '#1C0A04' }}>
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: '#B84020', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Exercise
          </p>
          <h1
            className="text-5xl md:text-6xl aged-text mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#D4A020' }}
          >
            Still Life Exercise
          </h1>
          <p
            className="text-sm max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#9E8060', lineHeight: '1.9' }}
          >
            A still life study exploring composition, light, and material — jazzy mood.
          </p>
        </div>

        {/* PDF Embed */}
        <div className="mb-16">
          <div
            className="phantasmic-card overflow-hidden"
            style={{ width: '100%', height: '80vh' }}
          >
            <object
              data={pdfPath}
              type="application/pdf"
              width="100%"
              height="100%"
              style={{ border: 'none', backgroundColor: '#0A0705' }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center gap-4"
                style={{ backgroundColor: '#0A0705' }}
              >
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#9E8060' }}
                >
                  PDF preview not available in this browser.
                </p>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    color: '#B84020',
                    letterSpacing: '0.15em',
                  }}
                >
                  Open PDF
                </a>
              </div>
            </object>
          </div>
          <div className="mt-4 text-right">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                color: '#B84020',
                letterSpacing: '0.15em',
              }}
            >
              Open PDF
            </a>
          </div>
        </div>

        {/* Written Descriptions */}
        <div className="border-t pt-12" style={{ borderColor: '#1C0A04' }}>
          <p
            className="text-xs tracking-[0.4em] uppercase mb-10"
            style={{ color: '#B84020', fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            Written Descriptions
          </p>
          <div className="space-y-10">
            {descriptions.map((item, i) => (
              <div
                key={i}
                className="pl-6 border-l-2"
                style={{ borderColor: '#1C0A04' }}
              >
                <h3
                  className="text-lg mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#F5E8D5' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#9E8060', lineHeight: '1.9' }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
