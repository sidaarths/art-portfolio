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
    description: 'The discomfort of being seen — a figure exposed under the weight of anonymous eyes.',
    altText: 'A clay sculpture of a hunched figure conveying discomfort in a public space, paired with Intimate',
    caption:
      'Public and private space can be subjective, an example of which is my piece. Individuals that have bowel issues, are queer or even victims can find it difficult to walk into a public bathroom carrying that eerie discomfort felt before while in contrast walk with a pep in their step as they use a comfortable warm one at home. (Paired with Intimate)',
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
    description: 'An unblinking confrontation — who breaks first? The tension hangs like a held breath.',
    altText: 'A penguin and a person locked in an intense staring contest, bathed in a blue eerie atmosphere',
    caption:
      'This moment describes a time I spent in the local zoo where a penguin actively initiated a staring contest with me. I had to capture this chilling instance and the blue represents the gradual eerie atmosphere I experienced at the time.',
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
    description: 'Stillness captured mid-spiral. The eye follows, and keeps following.',
    altText: 'A polymer clay spinning top shaped like a hypnosis wheel, mid-spin',
    caption:
      'Another piece in the "Chills" series is my attempt on a hypnosis wheel but instead in a spinning top format. The idea that people can possibly be deactivated and influenced to make dangerous decisions surely sends chills down my spine.',
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
    description: 'A quiet retreat into the self — the small act of disappearing into something safe.',
    altText: 'An air-dry clay sculpture of a figure immersed in the warm glow of a cinema screen',
    caption:
      'This piece is the foundation of my message for the future. I want to be able to provide other people with an escape from reality during harsh times through cinema. Reminding people of the warmth that they felt where in past memories or imagination offers a little helping hand of strength.',
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
    description: 'Closeness rendered in warmth — the kind of moment you want to stretch into hours.',
    altText: 'A clay sculpture of a relaxed figure at ease in a warm private space, paired with Unknown',
    caption:
      'Public and private space can be subjective, an example of which is my piece. Individuals that have bowel issues, are queer or even victims can find it difficult to walk into a public bathroom carrying that eerie discomfort felt before while in contrast walk with a pep in their step as they use a comfortable warm one at home. (Paired with Unknown)',
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
    description: 'What we hold carefully. What holds us in return.',
    altText: 'A polymer clay sculpture of a mother snake coiled protectively around her young',
    caption:
      "My new interest in snakes led to this piece. Grounded by the fight or flight instinct the snake protects its young from danger. While some may find snakes terrifying, that is not the message that this piece is meant to send, ultimately maternal love is warm even if it's from a cold-blooded animal.",
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
    description: 'A riff on divine creation — but the miracle here is rest, unguarded and unapologetic.',
    altText: "An oil painting of two cats recreating Michelangelo's The Creation of Adam while sunbathing",
    caption:
      "This painting depicts a naive moment where my cats recreate Michaelangelo's The Creation of Adam while sunbathing on a regular Tuesday.",
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
    description: 'A loose, expressive figure study — gesture over precision, mood over measurement.',
    altText: 'A charcoal drawing of a figure smoking, the dark medium evoking the blackening effects on the lungs',
    caption:
      "The aesthetic nature of smoking that is showcased in the media doesn't tell the whole story. Charcoal displays the blackening of the lungs that smoking causes as it diminishes the smoker's health.",
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
    description: 'The face that says everything without saying a word. Unapologetic and perfectly composed.',
    altText: 'An oil paint portrait of a woman with a composed resting expression in her favorite colors red and green',
    caption:
      "This portrait was a present for my mother's birthday, hinting at an inside joke about her resting face and incorporating her favorite colors red and green.",
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
    description: 'Posture as language. The quiet authority of a figure at ease in their own skin.',
    altText: 'A pastel figure drawing of a woman striking a dynamic pose with clean, flowing lines',
    caption:
      'With the mindset of wanting to portray the beauty and elegance of the human body, this figure drawing portrays a woman striking a dynamic pose with clean lines.',
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
    description: 'Confidence drawn from the inside out. The figure knows exactly who he is.',
    altText: 'A pastel and acrylic figure drawing of a confident male model radiating self-assurance',
    caption:
      'This is one of my favourite pieces. I wanted to showcase the enjoyment the model had for his job and the fact that he was exactly who he thought he was at that moment.',
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
    description: 'The particular silence of depression — not peaceful, but heavy with everything unsaid.',
    altText:
      'A digital illustration of a Serval hybrid in satin pajamas crouching alone in a corner, depicting the solitary nature of depression',
    caption:
      'The inspiration behind this digital piece was depression and as someone that suffers from it, the world feels like a challenge that you take on yourself often causing comfort to come from retreating. The use of a Serval as the hybrid base due to their solitary nature depicts the lonely battle and the satin pajamas he wears while crouching into a corner shows the comfort in that retreat.',
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
    description: 'The world through glass — familiar shapes, unfamiliar feeling. Everything is real and none of it is.',
    altText:
      'An ink, pastel, and watercolor piece of a figure in a corner with fragmented color illustrating derealization',
    caption:
      'This piece takes inspiration from the mental condition, De-realization where an individual feels a disconnect from the world around them. The use of color to show the disconnection highlights this condition.',
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
    description: "The thrill that becomes a trap. Inspired by Kakegurui's portrait of compulsion as ecstasy.",
    altText:
      "A digital animation of a father's journey through gambling addiction and recovery, with intentionally rough lines depicting emotional turbulence",
    caption:
      'This animation talks about a man who we come to find out is addicted to gambling, this man is also a father and upon reminiscing of memories with his family he tries to make a change but sobriety is a journey that may involve relapse. Finally the support that he receives helps him push through to where he achieves sobriety and prioritizes his family. Note: The use of rough lines is intentional to show the emotional state he is in and the fade/blur outs similarly is used to convey the almost drunken mindset he is in once gambling.',
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
    description: 'The elite unit — silent, precise, loyal to a cause larger than any one of them.',
    altText:
      'A digital character board of two side characters inspired by Tenali Rahman and Ashoka the Great, rivals from opposing nations who fall in love',
    caption:
      "This character board is of two side characters one inspired by intelligent royal advisor Tenali Rahman and the other of Ashoka the great, a ruthless conqueror that attains enlightenment repenting his past. Both of them having been brought up in rivaling nations without one's knowledge fall in love.",
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
    description: 'A being beyond nations — the celestial arbiter at the heart of the conflict.',
    altText: 'A digital character board of Iathorial, a divine peacekeeper inspired by the Hindu deity Krishna',
    caption:
      'Iathorial is an original character slightly inspired by a Hindu god, Krishna. She is the peacekeeper of her realm and viewed by others as a divine being of high morality yet we explore her journey of discovery with lots of goofy moments.',
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
    description: 'A closer study of Iathorial — the weight of judgment behind the eyes.',
    altText: 'A digital illustration of Iathorial size-shifted and napping peacefully among the trees',
    caption:
      'Iathorial is illustrated taking a nap during her free time. The original inspiration was the idea that the world can feel so big at times therefore I built off of that to represent her ability to size-shift while enjoying her favorite activity in the woods.',
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
    description: 'The world of The Peacekeeper — two nations, ancient borders, and the contested ground between them.',
    altText:
      "A hand-drawn map of Iathorial's universe featuring the nations of Venasla and Vetalica with a charged energy ball at their border",
    caption:
      "This is a map of the universe I've created for Iathorial's story. It consists of 2 nations: Venasla and Vetalica. Their names are taken from twin characters, a part of a different story in this world which would act as a spin off of this story. The shapes of the nations reference their founding members: Basilisk, Wyvern. The charged energy ball in the centre of the nations is a result of the Great War that took place centuries ago.",
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
    description: 'Divided by ideology, bound by history. The standoff that defines this world.',
    altText:
      'An illustration detailing the sigils and histories of Venasla and Vetalica, and the consequences of their Great War',
    caption:
      'Further talking about the two nations involved we elaborate on their sigils and its meaning. Next, we move on to the Great War and its consequences.',
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
    description: 'TOKO in motion — a glimpse into the animated world of The Peacekeeper series.',
    altText: 'A 3D Maya animation of Toko, an orca-inspired familiar with unique fin modifications and unusual coloring',
    caption:
      "Toko is an original character inspired by an orca that acts as a familiar to the main character, Iathorial. Iathorial's sigil incorporates an orca for authority and a circle for peace. Toko has a few extra fin-like modifications since he is mixed with an unknown parent animal which also causes his odd coloring.",
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
    description: 'Power circling over vulnerability. The predator always finds a way to make the prey responsible.',
    altText:
      'A watercolor painting of a vulture looming over a scapegoat, symbolizing the wealthy preying on and deflecting blame onto the poor',
    caption:
      'The Vulture represents the rich and their reputation of feeding off the poor as well as using them as Scape goats to take responsibility for their actions.',
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
    description: 'What one person hoards, another person needs. The motion piece that closes the series.',
    altText:
      'A stop motion animation contrasting a man protecting his clothing over food versus a woman instinctively saving food over clothing, exploring class privilege',
    caption:
      'This stop motion depicts the difference in what two believe to be treasured and disposable. The man treasures his clothing willing to swat away his food whereas the woman instinctively rushes over to the food, losing her clothing for it. This sheds light on the privilege that certain individuals in society hold over others.',
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
