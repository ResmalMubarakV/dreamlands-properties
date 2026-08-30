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
    id: 'garden-green-1bhk',
    number: '01',
    name: '1 BHK Cozy Villa',
    location: 'Aalampallam, Palakkad',
    propertyType: 'Villa Construction',
    shortDescription: 'Compact and modern 1 BHK villa layout from 1000 Sqft, optimized for comfortable living with abundant natural light.',
    fullDescription: 'Designed for individuals or small families seeking a peaceful retreat in a gated environment. Part of the exclusive 22-villa development at Aalampallam, Palakkad. Built to capture fresh breezes and abundant daylighting.',
    status: 'Exclusive Launch',
    badge: '1000 Sqft Villa',
    mainImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Efficient 1000 Sqft floor layout',
      'Private garden space',
      'Abundant natural sunlight and fresh air ventilation',
      'Upto 95% bank loan facility'
    ],
    locationFeatures: [
      'Amrita Vidhyalayam | 1.0 km',
      'Bharathamatha Public School | 1.9 km',
      'Palakkad Town Railway Station | 2.5 km'
    ]
  },
  {
    id: 'garden-green-2bhk',
    number: '02',
    name: '2 BHK Comfort Villa',
    location: 'Aalampallam, Palakkad',
    propertyType: 'Villa Construction',
    shortDescription: 'Spacious 2 BHK double-storey villa configuration, perfect for families seeking a quiet lifestyle inside a secured gated community.',
    fullDescription: 'A balanced 2 BHK residential configuration combining elegant architecture with functional space. Designed in a natural green environment at Aalampallam, Palakkad with proper drainage systems and solar street lighting.',
    status: 'Exclusive Launch',
    badge: '1500 Sqft Villa',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Optimized 1500 Sqft double-storey plan',
      'Dedicated parking space',
      'Gated community with 24x7 security cabin',
      'Secure play area & common green park access'
    ],
    locationFeatures: [
      'Amrita Vidhyalayam | 1.0 km',
      'Palakkad Junction Railway Station | 5.0 km',
      'Hospitals & Clinics | 2.0 km'
    ]
  },
  {
    id: 'garden-green-3bhk',
    number: '03',
    name: '3 BHK Spacious Villa',
    location: 'Aalampallam, Palakkad',
    propertyType: 'Villa Construction',
    shortDescription: 'Generous 3 BHK luxury villa, featuring premium interior volumes, private open spaces, and modern specifications.',
    fullDescription: 'Crafted for families looking for a large home with doors and windows wide open to nature. Comprising of a double-height living room layout, premium styling, and full integration into the 22-villa gated community.',
    status: 'Exclusive Launch',
    badge: '2200 Sqft Villa',
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Spacious 2200 Sqft architectural layout',
      'Private landscaping and open terraces',
      'Solar street lights and fully covered walkways',
      'Upto 95% bank loan facility'
    ],
    locationFeatures: [
      'Bharathamatha Public School | 1.9 km',
      'Chandranagar Junction | 2.3 km',
      'Govt Medical College | 4.0 km'
    ]
  },
  {
    id: 'garden-green-3bhk-duplex',
    number: '04',
    name: '3 BHK Duplex Villa',
    location: 'Aalampallam, Palakkad',
    propertyType: 'Villa Construction',
    shortDescription: 'Double-storey 3 BHK Duplex villa spanning 2500 Sqft, combining modern architectural contours with large private terraces.',
    fullDescription: 'Our premium 3 BHK Duplex design offers expansive double-height ceilings, a private car porch, modular kitchen access, and wide balconies overlooking the green parkways. Perfect for families looking for modern gated enclave comfort.',
    status: 'Exclusive Launch',
    badge: '2500 Sqft Villa',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Luxury 2500 Sqft duplex configuration',
      'Expansive open terrace and balconies',
      'Gated community with solar street lights and park access',
      'Upto 95% bank loans available'
    ],
    locationFeatures: [
      'Chandranagar Junction | 2.3 kms',
      'Amrita Vidhyalayam | 1.0 km',
      'Govt Medical College | 4.0 kms'
    ]
  },
  {
    id: 'garden-green-4bhk',
    number: '05',
    name: '4 BHK Luxury Sanctuary',
    location: 'Aalampallam, Palakkad',
    propertyType: 'Villa Construction',
    shortDescription: 'Our largest 4 BHK villa layout spanning 3000 Sqft, designed for maximum space, premium comforts, and open-plan aesthetics.',
    fullDescription: 'The pinnacle of luxury in our gated development. This 4 BHK villa provides four spacious bedrooms, multi-car parking, wide open balconies, and direct view lines towards the calming green horizon of Palakkad.',
    status: 'Exclusive Launch',
    badge: '3000 Sqft Villa',
    mainImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=85'
    ],
    highlights: [
      'Exclusive 3000 Sqft floor plan',
      'Multi-car garage and private garden perimeter',
      'Gated community with 24x7 security cabin and CCTVs',
      'Necessities within reach at an unhurried pace'
    ],
    locationFeatures: [
      'Amrita Vidhyalayam | 1.0 km',
      'Chandranagar Junction | 2.3 km',
      'Palakkad Junction Railway Station | 5.0 km'
    ]
  },
  {
    id: 'garden-green-plots',
    number: '06',
    name: 'Premium Gated Plots',
    location: 'Aalampallam, Palakkad',
    propertyType: 'Land Development',
    shortDescription: 'Clear title residential plots within our 1.88 Acres secure community, ready for custom villa construction.',
    fullDescription: 'Excellent investment opportunity with land values appreciating up to 25% yearly. Plots are fully structured with proper drainage, solar street lights, wide internal roads, and gated security access control.',
    status: 'Available',
    badge: 'Villa & Plot Lands',
    mainImage: '/assets/project_plots.jpg',
    galleryImages: [
      '/assets/project_plots.jpg'
    ],
    highlights: [
      'Part of the 1.88 Acres gated masterplan',
      'Upto 95% bank loan facility for plot acquisition',
      'Proper drainage and security structures complete',
      'High appreciation potential up to 25% yearly'
    ],
    locationFeatures: [
      'Bharathamatha Public School | 1.9 km',
      'KSRTC Bus Stand | 4.0 km',
      'Hospitals & Clinics | 2.0 km'
    ]
  }
];
