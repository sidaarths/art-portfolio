import type { Metadata } from 'next';
import { Playfair_Display, Lora, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TextureOverlay } from '@/components/layout/TextureOverlay';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Zavian — Artist Portfolio',
    template: '%s | Zavian',
  },
  description:
    'Portfolio of Zavian — paintings, digital art, drawings, sketches, sculptures, and animation.',
  openGraph: {
    title: 'Zavian — Artist Portfolio',
    description: 'Portfolio of Zavian — paintings, digital art, drawings, sketches, sculptures, and animation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${cormorant.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <TextureOverlay />
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
