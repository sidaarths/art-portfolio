import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center"
    >
      <p
        className="text-[8rem] font-bold opacity-10 leading-none mb-6"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#CC7722' }}
        aria-hidden="true"
      >
        404
      </p>
      <h1
        className="text-3xl mb-4 aged-text"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8DCCC' }}
      >
        This page does not exist
      </h1>
      <p
        className="mb-10 text-base"
        style={{ fontFamily: 'var(--font-lora), Georgia, serif', color: '#8B7D6B' }}
      >
        The work you are looking for may have been moved or removed.
      </p>
      <Link
        href="/"
        className="text-xs tracking-widest uppercase border px-6 py-3 transition-opacity hover:opacity-70"
        style={{
          fontFamily: 'var(--font-cormorant), Georgia, serif',
          color: '#D4C4AE',
          borderColor: '#3D1F10',
          letterSpacing: '0.2em',
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
