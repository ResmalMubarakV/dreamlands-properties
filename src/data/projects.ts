export interface Project {
  id: string;
  number: string;
  name: string;
  location: string;
  propertyType: 'Villa Construction' | 'Land Development' | 'Property Consultation' | 'Renovation Works' | 'Interior Designing';
  shortDescription: string;
  fullDescription: string;
  status: 'Exclusive Launch' | 'Available' | 'Under Development' | 'Completed Landmark';
  mainImage: string;
  galleryImages: string[];
  highlights: string[];
  locationFeatures: string[];
  badge?: string;
}

export const projectsData: Project[] = [
  {
    id: 'project-01',
    number: '01',
    name: 'The Palakkad Sanctuary Villas',
    location: 'Koottupaatha, Palakkad',
    propertyType: 'Villa Construction',
    shortDescription: 'Contemporary tropical villas combining architectural privacy with floor-to-ceiling glass and Western Ghats breezes.',
    fullDescription: 'Designed for discerning residents who value architectural distinction and peaceful living. Each villa is thoughtfully oriented to maximize natural cross-ventilation, daylighting, and private garden views.',
    status: 'Exclusive Launch',
    badge: 'Flagship Villa Sanctuary',
    mainImage: '/assets/hero_villa_dark.jpg',
    galleryImages: [
      '/assets/hero_villa_dark.jpg',
      '/assets/brand_editorial_arch.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Architect-designed tropical modern layouts',
      'Private landscaped garden per residence',
      'Double-height ceiling living sanctuaries',
      'Seamless indoor-outdoor integration'
    ],
    locationFeatures: [
      'Dev Arcade, Near Polytechnic College, Marutharode',
      'Surrounded by calm greenery and natural breeze',
      'Direct access to Palakkad main arterial corridors'
    ]
  },
  {
    id: 'project-02',
    number: '02',
    name: 'Ghats View Residential Enclave',
    location: 'Marutharode, Palakkad',
    propertyType: 'Land Development',
    shortDescription: 'Thoughtfully planned residential land opportunities set against the scenic backdrop of the Western Ghats.',
    fullDescription: 'An exclusive collection of clear-title residential plots positioned in an expanding, high-convenience zone of Palakkad. Built with wide internal paved roads and clean perimeter fencing.',
    status: 'Available',
    badge: 'Clear Title Plots',
    mainImage: '/assets/project_plots.jpg',
    galleryImages: [
      '/assets/project_plots.jpg',
      '/assets/palakkad_landscape.jpg',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Clear title & well-defined property boundaries',
      'Wide internal stone-paved road infrastructure',
      'Designed for optimum residential plot dimensions',
      'Peaceful natural environment with clean air'
    ],
    locationFeatures: [
      'Short driving distance to Palakkad town center',
      'Proximity to reputed educational and healthcare institutions',
      'Unobstructed mountain view lines'
    ]
  },
  {
    id: 'project-03',
    number: '03',
    name: 'Aura Modern Residences',
    location: 'Koottupaatha, Palakkad',
    propertyType: 'Interior Designing',
    shortDescription: 'Bespoke modern home interiors engineered for efficient family living, sleek timber louvers, and warm ambient lighting.',
    fullDescription: 'Aura represents modern living refined to its essentials. Combining clean concrete masonry, warm wood cladding, and space-optimized interior floor plans.',
    status: 'Under Development',
    badge: 'Luxury Interior Design',
    mainImage: '/assets/brand_editorial_arch.jpg',
    galleryImages: [
      '/assets/brand_editorial_arch.jpg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Minimalist exterior silhouette with teak louvers',
      'Energy-efficient architectural orientation',
      'Smart spatial layout maximizing usable area',
      'Premium dark stone & wood interior finishes'
    ],
    locationFeatures: [
      'Established residential neighborhood in Palakkad',
      'Excellent road connectivity to highways',
      'Peaceful environment with mature trees'
    ]
  },
  {
    id: 'project-04',
    number: '04',
    name: 'Heritage Renovation Villa',
    location: 'Palakkad, Kerala',
    propertyType: 'Renovation Works',
    shortDescription: 'Refined architectural restoration blending traditional Kerala timber craftsmanship with modern luxury.',
    fullDescription: 'Comprehensive structural and interior renovation preserving local cultural aesthetic while introducing state-of-the-art climate control, warm lighting, and contemporary bathrooms.',
    status: 'Completed Landmark',
    badge: 'Bespoke Restoration',
    mainImage: '/assets/palakkad_landscape.jpg',
    galleryImages: [
      '/assets/palakkad_landscape.jpg',
      '/assets/project_plots.jpg'
    ],
    highlights: [
      'Structural reinforcement & roof restoration',
      'Custom teak wood joinery & slate flooring',
      'Modern electrical & plumbing upgrades',
      'Integrated indoor courtyard garden'
    ],
    locationFeatures: [
      'Prime Palakkad residential corridor',
      'Tranquil scenic setting close to urban conveniences'
    ]
  }
];
