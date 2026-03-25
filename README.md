# Art Portfolio

A personal art portfolio website built with Next.js 16, React 19, and Tailwind CSS v4. Displays work across six categories with a lightbox gallery viewer and animated page transitions.

## Features

- **Gallery** — browse artwork by category with a fullscreen lightbox viewer
- **Six categories** — Paintings, Digital Art, Drawings, Sketches, Sculptures, Animation
- **Animated transitions** — smooth page transitions and entrance animations via Framer Motion
- **Optimised images** — automatic AVIF/WebP conversion via Next.js Image
- **Responsive** — works on desktop and mobile

## Tech Stack

<!-- AUTO-GENERATED -->
| Concern | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | 4 |
| Animations | Framer Motion | 12.35.1 |
| Lightbox | yet-another-react-lightbox | 3.29.1 |
| Icons | lucide-react | 0.577.0 |
<!-- /AUTO-GENERATED -->

## Getting Started

### Prerequisites

<!-- AUTO-GENERATED -->
- Node.js 18 or higher
- npm (comes with Node.js)
<!-- /AUTO-GENERATED -->

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

<!-- AUTO-GENERATED -->
| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Production build |
| `npm start` | Start production server (requires `npm run build` first) |
<!-- /AUTO-GENERATED -->

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Home — hero + featured works
│   ├── about/page.tsx          # About page
│   └── gallery/
│       ├── page.tsx            # All categories
│       ├── [category]/page.tsx # Category listing
│       └── [category]/[slug]/page.tsx  # Individual artwork
├── components/
│   ├── gallery/                # ArtworkCard, ArtworkGrid, CategoryCard
│   ├── home/                   # HeroSection, FeaturedWorks
│   └── layout/                 # Header, Footer, PageTransition, TextureOverlay
├── data/
│   ├── artworks.ts             # Artwork definitions
│   └── categories.ts           # Category definitions
├── lib/
│   └── utils.ts                # Shared utilities
└── types/
    └── artwork.ts              # TypeScript interfaces
```
