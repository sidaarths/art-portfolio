import type { Artwork } from '@/types/artwork';

export const artworks: Artwork[] = [
  // ── Eerie Chills ─────────────────────────────────────────────────────────
  {
    id: 'ec1',
    slug: 'unknown',
    title: 'Unknown',
    category: 'eerie-chills',
    medium: 'Air dry clay + Acrylic paint',
    dimensions: '4"×3"×2"',
    year: 2026,
    altText: 'A clay sculpture of a hunched figure conveying discomfort in a public restroom, paired with Intimate',
    caption:
      'Public and private spaces can evoke vastly different feelings. This piece reflects the discomfort that individuals with bowel conditions, queer individuals, or trauma survivors may experience when entering a public restroom, contrasted with the comfort and security of a familiar one at home. (Paired with Intimate.)',
    image: '/art/eerie-chills/unknown-cover.jpg',
    featured: true,
    order: 1,
  },
  {
    id: 'ec2',
    slug: 'the-staredown',
    title: 'The Staredown',
    category: 'eerie-chills',
    medium: 'Ink + Digital',
    dimensions: '8.76"×10"',
    year: 2025,
    altText: 'A penguin and a person locked in an intense staring contest, surrounded by shifting blue tones',
    caption:
      'This piece captures a moment from a visit to a local zoo, where a penguin unexpectedly initiated what felt like a staring contest. The gradual shift toward blue tones reflects the strangely eerie atmosphere that accompanied the encounter.',
    image: '/art/eerie-chills/the-staredown.jpg',
    featured: false,
    order: 2,
  },
  {
    id: 'ec3',
    slug: 'hypnosis',
    title: 'Hypnosis',
    category: 'eerie-chills',
    medium: 'Polymer clay + Acrylic paint',
    dimensions: '2.25"×2.25"×3"',
    year: 2026,
    altText: 'A polymer clay spinning top shaped like a hypnosis wheel',
    caption:
      'Part of my "Chills" series, this piece reimagines a hypnosis wheel as a spinning top. The possibility of people being influenced or manipulated into making harmful decisions is an unsettling idea that inspired the work.',
    image: '/art/eerie-chills/hypnosis.jpeg',
    videoUrl: '/art/eerie-chills/in-motion.mp4',
    featured: false,
    order: 3,
  },

  // ── Familiar Warmth ───────────────────────────────────────────────────────
  {
    id: 'fw1',
    slug: 'escape-reality',
    title: 'Escape Reality',
    category: 'familiar-warmth',
    medium: 'Air-dry clay + Acrylic paint',
    dimensions: '9"×12"',
    year: 2026,
    altText: 'An air-dry clay figure immersed in the warm glow of a cinema screen',
    caption:
      'This piece serves as the foundation of the message I hope to carry into my future work. Through cinema, I want to provide people with an escape during difficult times, reminding them of the warmth found in cherished memories and imagination, and offering a small source of comfort and strength.',
    image: '/art/familiar-warmth/escape-reality.jpg',
    featured: true,
    order: 1,
  },
  {
    id: 'fw2',
    slug: 'intimate',
    title: 'Intimate',
    category: 'familiar-warmth',
    medium: 'Air dry clay + Acrylic paint',
    dimensions: '4"×3"×2"',
    year: 2026,
    altText: 'A clay sculpture of a relaxed figure at ease in a warm, familiar private space, paired with Unknown',
    caption:
      'Public and private spaces can evoke vastly different feelings. This piece reflects the comfort and sense of safety found in familiar personal spaces, contrasted with the unease that some individuals may feel in public environments. (Paired with Unknown.)',
    image: '/art/familiar-warmth/intimate-cover.jpg',
    featured: false,
    order: 2,
  },
  {
    id: 'fw3',
    slug: 'precious',
    title: 'Precious',
    category: 'familiar-warmth',
    medium: 'Polymer clay + Acrylic paint',
    dimensions: '3"×3"×1.5"',
    year: 2026,
    altText: 'A polymer clay mother snake coiled protectively around her young',
    caption:
      'My growing interest in snakes inspired this piece. Driven by instinct, the snake protects its young from danger. While many people view snakes with fear, the focus of this work is maternal love and the warmth of parental care, even from a cold-blooded animal.',
    image: '/art/familiar-warmth/precious.jpg',
    featured: false,
    order: 3,
  },

  // ── Figure Drawing ────────────────────────────────────────────────────────
  {
    id: 'fd1',
    slug: 'the-creation-of-naps',
    title: 'The Creation of Naps',
    category: 'figure-drawing',
    medium: 'Oil paint',
    dimensions: '8"×8"',
    year: 2026,
    altText: "An oil painting of two cats recreating Michelangelo's The Creation of Adam while sunbathing",
    caption:
      "This painting depicts a playful moment in which my cats recreate Michelangelo's The Creation of Adam while sunbathing on an otherwise ordinary Tuesday afternoon.",
    image: '/art/figure-drawing/the-creation-of-naps.jpg',
    featured: false,
    order: 1,
  },
  {
    id: 'fd2',
    slug: 'for-the-vibes',
    title: 'For the Vibes',
    category: 'figure-drawing',
    medium: 'Charcoal',
    dimensions: '5"×8"',
    year: 2025,
    altText: 'A charcoal drawing of a figure smoking, the dark medium evoking the damage caused to the lungs',
    caption:
      "The aesthetic portrayal of smoking in popular media often overlooks its consequences. Through the use of charcoal, this piece references the damage smoking causes to the lungs and the gradual decline of a smoker's health. This piece references a well-renowned actor's shoot who is often seen in the middle of such media.",
    image: '/art/figure-drawing/for-the-vibes.jpg',
    featured: false,
    order: 2,
  },
  {
    id: 'fd3',
    slug: 'rbf',
    title: 'RBF',
    category: 'figure-drawing',
    medium: 'Oil paint',
    dimensions: '7"×10"',
    year: 2026,
    altText: 'An oil paint portrait of a woman with a composed resting expression in red and green',
    caption:
      'This portrait was created as a birthday gift for my mother. It references an inside joke about her resting expression while incorporating her favorite colors, red and green.',
    image: '/art/figure-drawing/rbf.jpg',
    featured: false,
    order: 3,
  },
  {
    id: 'fd4',
    slug: 'elegance-extensions',
    title: 'Elegance Extensions',
    category: 'figure-drawing',
    medium: 'Drawing pastels',
    dimensions: '10"×10"',
    year: 2025,
    altText: 'A pastel figure drawing of a woman in a dynamic pose with confident, flowing lines',
    caption:
      'Created with the intention of portraying the beauty and elegance of the human form, this figure drawing captures a woman in a dynamic pose using confident lines and expressive movement.',
    image: '/art/figure-drawing/elegance-extensions.jpg',
    featured: false,
    order: 4,
  },
  {
    id: 'fd5',
    slug: 'ooo-hes-eating-purr',
    title: '"Ooo he\'s eating purr"',
    category: 'figure-drawing',
    medium: 'Pastels + Acrylic paint',
    dimensions: '5"×8"',
    year: 2026,
    altText: 'A pastel and acrylic figure drawing of a confident male model fully in his element',
    caption:
      'This is one of my favorite pieces. I wanted to capture the enjoyment the model felt in his role and the confidence he carried in that moment, fully embracing who he believed himself to be.',
    image: '/art/figure-drawing/ooo-hes-eating-purr.jpg',
    featured: true,
    order: 5,
  },

  // ── Sunshine Daisies (Mental Health) ──────────────────────────────────────
  {
    id: 'sd1',
    slug: 'solitude-depression',
    title: 'Solitude (Depression)',
    category: 'sunshine-daisies',
    medium: 'Digital',
    dimensions: '15.5"×15.5"',
    year: 2025,
    altText: 'A digital illustration of a serval hybrid in satin pajamas curled alone in a corner',
    caption:
      'This digital piece was inspired by my experience with depression. At times, the world can feel overwhelming, and making retreat as well as isolation seem comforting. The serval, chosen for its solitary nature, symbolizes this struggle, while the satin pajamas and curled posture emphasize the sense of refuge found in withdrawal.',
    image: '/art/sunshine-daisies/solitude.jpg',
    featured: true,
    order: 1,
  },
  {
    id: 'sd2',
    slug: 'the-corner-derealization',
    title: 'The Corner (Derealization)',
    category: 'sunshine-daisies',
    medium: 'Ink + Pastels + Watercolor paint',
    dimensions: '7"×10"',
    year: 2026,
    altText: 'An ink, pastel, and watercolor piece of a figure in a corner with fragmented color blocks illustrating derealization',
    caption:
      'This piece draws inspiration from the condition of derealization, in which an individual experiences a sense of disconnection from the world around them. The use of color emphasizes this separation and highlights the emotional impact of the condition.',
    image: '/art/sunshine-daisies/the-corner.jpg',
    featured: false,
    order: 2,
  },
  {
    id: 'sd3',
    slug: 'kakegurui-addiction',
    title: 'Kakegurui (Addiction)',
    category: 'sunshine-daisies',
    medium: 'Digital animation',
    year: 2026,
    altText: "A digital animation of a father's journey through gambling addiction and recovery, with intentionally rough linework",
    caption:
      'This animation follows a father struggling with a gambling addiction. As he reflects on memories with his family, he attempts to change his life, though recovery is not without setbacks. Through perseverance and support from loved ones, he ultimately achieves sobriety and learns to prioritize his family. The rough linework and fading visual effects are intentional, reflecting his emotional turmoil and the distorted mindset caused by addiction.',
    image: '/art/sunshine-daisies/kakegurui.png',
    videoUrl: '/art/sunshine-daisies/kakegurui.mp4',
    featured: false,
    order: 3,
  },

  // ── The Peacekeeper ───────────────────────────────────────────────────────
  {
    id: 'pk1',
    slug: 'assassins-troop',
    title: 'Assassins Troop',
    category: 'the-peacekeeper',
    medium: 'Digital character board',
    dimensions: '8.5"×11"',
    year: 2025,
    altText: 'A digital character board of two characters inspired by Tenali Rama and Ashoka the Great',
    caption:
      'This character board features two supporting characters. One is inspired by the intelligent royal advisor Tenali Rama, while the other draws inspiration from Ashoka the Great, a ruthless conqueror who later attains enlightenment and repents for his past. Raised in rival nations without knowledge of their connection, the two eventually fall in love.',
    image: '/art/the-peacekeeper/assassins-troop.jpg',
    featured: false,
    order: 1,
  },
  {
    id: 'pk2',
    slug: 'iathorial-the-celestial',
    title: 'Iathorial the Celestial',
    category: 'the-peacekeeper',
    medium: 'Digital character board',
    dimensions: '8.5"×11"',
    year: 2025,
    altText: 'A digital character board of Iathorial, a divine peacekeeper loosely inspired by the Hindu deity Krishna',
    caption:
      'Iathorial is an original character loosely inspired by the Hindu deity Krishna. She serves as the peacekeeper of her realm and is viewed as a divine figure of exceptional morality. Despite this reputation, her story follows a journey of self-discovery filled with both meaningful growth and lighthearted moments.',
    image: '/art/the-peacekeeper/iathorial-the-celestial.jpg',
    featured: false,
    order: 2,
  },
  {
    id: 'pk3',
    slug: 'careless-leisure',
    title: 'Careless Leisure',
    category: 'the-peacekeeper',
    medium: 'Digital',
    dimensions: '22.5"×16.9"',
    year: 2025,
    altText: 'A digital illustration of Iathorial size-shifted and napping peacefully among the trees',
    caption:
      'This illustration depicts Iathorial enjoying a nap during her free time. Inspired by the overwhelming scale of the world around us, the piece explores her ability to change size while relaxing peacefully in the woods.',
    image: '/art/the-peacekeeper/careless-leisure.png',
    featured: false,
    order: 3,
  },
  {
    id: 'pk4',
    slug: 'map',
    title: 'Map',
    category: 'the-peacekeeper',
    medium: 'Digital illustration',
    dimensions: '20"×10"',
    year: 2025,
    altText: "A hand-drawn map of Iathorial's universe featuring the nations of Venasla and Vetalica separated by a charged energy sphere",
    caption:
      "This map depicts the universe created for Iathorial's story. It contains two nations, Venasla and Vetalica, whose names originate from twin characters featured in a separate story set within the same world. The shapes of the nations reference their founding creatures, the Basilisk and Wyvern. The charged energy sphere at the center is the lasting result of the Great War that occurred centuries ago.",
    image: '/art/the-peacekeeper/map.jpg',
    featured: false,
    order: 4,
  },
  {
    id: 'pk5',
    slug: 'two-nations',
    title: 'Two Nations',
    category: 'the-peacekeeper',
    medium: 'Digital illustration',
    dimensions: '10"×10"',
    year: 2025,
    altText: 'An illustration detailing the sigils, histories, and cultural identities of Venasla and Vetalica',
    caption:
      'This piece expands upon the history of Venasla and Vetalica by exploring their sigils, symbolism, and cultural identities. It also examines the Great War and the lasting consequences it left behind.',
    image: '/art/the-peacekeeper/two-nations.jpg',
    featured: false,
    order: 5,
  },
  {
    id: 'pk6',
    slug: 'toko-animation',
    title: 'TOKO Animation',
    category: 'the-peacekeeper',
    medium: 'Maya Autodesk 3D model animation',
    year: 2026,
    altText: 'A 3D Maya animation of Toko, an orca-inspired familiar with unusual fin modifications and coloring',
    caption:
      "Toko is an original character inspired by an orca and serves as a familiar to the main character, Iathorial. Her sigil incorporates an orca to symbolize authority and a circle to represent peace. Toko possesses additional fin-like features due to being descended from an unknown species, which also contributes to his unusual coloration.",
    image: '/art/the-peacekeeper/toko-animation.jpg',
    videoUrl: '/art/the-peacekeeper/toko-animation.mp4',
    featured: true,
    order: 6,
  },

  // ── The Privileged and the Poor ───────────────────────────────────────────
  {
    id: 'pp1',
    slug: 'the-vulture-and-the-scape-goat',
    title: 'The Vulture and the Scape Goat',
    category: 'the-privileged-and-the-poor',
    medium: 'Watercolor paint',
    dimensions: '12"×30"',
    year: 2026,
    altText: 'A watercolor painting of a vulture looming over a scapegoat, symbolizing the wealthy exploiting and deflecting blame onto the poor',
    caption:
      'The vulture represents the wealthy and the perception that they feed off the labor of the poor while often using them as scapegoats to avoid accountability for their own actions.',
    image: '/art/the-privileged-and-the-poor/the-vulture-and-the-scapegoat.jpg',
    featured: false,
    order: 1,
  },
  {
    id: 'pp2',
    slug: 'treasure',
    title: 'Treasure',
    category: 'the-privileged-and-the-poor',
    medium: 'Polymer clay',
    year: 2026,
    altText: 'A stop motion animation contrasting a man protecting his clothing over food with a woman instinctively saving food over clothing',
    caption:
      'This stop-motion piece explores how people can value entirely different things. The man treasures his clothing, willingly swatting away his food to protect it, while the woman instinctively rushes toward the food, sacrificing her clothing in the process. The contrast highlights the privileges and priorities shaped by different circumstances in society.',
    image: '/art/the-privileged-and-the-poor/treasure.jpg',
    videoUrl: '/art/the-privileged-and-the-poor/treasure.mp4',
    featured: true,
    order: 2,
  },
];

export function getArtworksByCategory(category: string): Artwork[] {
  return artworks.filter((a) => a.category === category).sort((a, b) => a.order - b.order);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured).slice(0, 6);
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getAdjacentArtworks(current: Artwork): {
  prev: Artwork | null;
  next: Artwork | null;
} {
  const categoryArtworks = getArtworksByCategory(current.category);
  const idx = categoryArtworks.findIndex((a) => a.slug === current.slug);
  return {
    prev: idx > 0 ? categoryArtworks[idx - 1] : null,
    next: idx < categoryArtworks.length - 1 ? categoryArtworks[idx + 1] : null,
  };
}
