export interface GalleryItem {
  id: string;
  title: string;
  category: 'Architecture' | 'Landscaping' | 'Interiors' | 'Surroundings';
  image: string;
  caption: string;
  featured?: boolean;
  aspect?: 'tall' | 'wide' | 'square';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Twilight Facade Lighting',
    category: 'Architecture',
    image: '/assets/hero_villa_dark.jpg',
    caption: 'Clean geometric overhangs illuminated by warm recessed architectural lighting.',
    featured: true,
    aspect: 'wide'
  },
  {
    id: 'gal-02',
    title: 'Teak Louvers & Water Feature',
    category: 'Architecture',
    image: '/assets/brand_editorial_arch.jpg',
    caption: 'Custom vertical timber louvers providing solar shading and privacy.',
    featured: false,
    aspect: 'tall'
  },
  {
    id: 'gal-03',
    title: 'Paved Plot Enclave & Hills',
    category: 'Landscaping',
    image: '/assets/project_plots.jpg',
    caption: 'Interlocking cobble paved access roads with perimeter bollard lighting.',
    featured: true,
    aspect: 'wide'
  },
  {
    id: 'gal-04',
    title: 'Palakkad Natural Horizon',
    category: 'Surroundings',
    image: '/assets/palakkad_landscape.jpg',
    caption: 'Lush greenery and Western Ghats silhouette surrounding Palakkad developments.',
    featured: false,
    aspect: 'wide'
  },
  {
    id: 'gal-05',
    title: 'Double-Height Living Sanctuary',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    caption: 'Open-plan living room with high ceilings, warm acoustic wood paneling, and stone textures.',
    featured: false,
    aspect: 'tall'
  },
  {
    id: 'gal-06',
    title: 'Modern Kitchen & Dining',
    category: 'Interiors',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
    caption: 'Integrated kitchen island crafted with dark matte surfaces and subtle bronze fixtures.',
    featured: false,
    aspect: 'square'
  },
  {
    id: 'gal-07',
    title: 'Minimalist Entry Courtyard',
    category: 'Landscaping',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    caption: 'Private internal courtyards bringing natural greenery into residential spaces.',
    featured: false,
    aspect: 'square'
  },
  {
    id: 'gal-08',
    title: 'Sunlit Courtyard Passageway',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    caption: 'Thoughtful circulation spaces allowing breeze and natural light flow.',
    featured: false,
    aspect: 'wide'
  }
];
