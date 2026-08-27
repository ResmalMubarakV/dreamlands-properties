export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  filterKey: 'Villa Construction' | 'Land Development' | 'Property Consultation' | 'Renovation Works' | 'Interior Designing';
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'villa-construction',
    number: '01',
    title: 'Villa Construction',
    tagline: 'Architectural Excellence',
    description: 'Custom contemporary villas engineered for structural perfection, modern comfort, and climate harmony.',
    image: '/assets/hero_villa_dark.jpg',
    filterKey: 'Villa Construction'
  },
  {
    id: 'land-development',
    number: '02',
    title: 'Land Development',
    tagline: 'Strategic Masterplanning',
    description: 'Premier residential plot layouts featuring wide paved roads, clear titles, and high capital growth potential.',
    image: '/assets/project_plots.jpg',
    filterKey: 'Land Development'
  },
  {
    id: 'property-consultation',
    number: '03',
    title: 'Property Consultation',
    tagline: 'Principled Guidance',
    description: 'Transparent real-estate advice helping buyers and investors identify high-value residential opportunities in Palakkad.',
    image: '/assets/palakkad_landscape.jpg',
    filterKey: 'Property Consultation'
  },
  {
    id: 'renovation-works',
    number: '04',
    title: 'Renovation Works',
    tagline: 'Structural Revival',
    description: 'Full-scale luxury residential restoration blending traditional craftsmanship with contemporary amenities.',
    image: '/assets/brand_editorial_arch.jpg',
    filterKey: 'Renovation Works'
  },
  {
    id: 'interior-designing',
    number: '05',
    title: 'Interior Designing',
    tagline: 'Sanctuary Interiors',
    description: 'Bespoke spatial design, acoustic paneling, ambient lighting, and high-end material selection.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    filterKey: 'Interior Designing'
  }
];
