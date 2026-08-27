export interface PalakkadZone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const palakkadZones: PalakkadZone[] = [
  {
    id: 'kadamkod',
    name: 'Kadamkod & Bypass Corridor',
    tagline: 'Prime Residential Growth',
    description: 'A rapidly developing residential hub offering swift highway access while retaining peaceful greenery.',
    highlights: ['Direct access to main city roads', 'Serene residential neighborhoods', 'Close to top educational institutions']
  },
  {
    id: 'west-yakkara',
    name: 'West Yakkara Zone',
    tagline: 'Tranquil Riverside Living',
    description: 'Renowned for its calm, leafy residential atmosphere, fresh breezes, and close proximity to town conveniences.',
    highlights: ['Peaceful green canopy', 'High quality water table', 'Refined neighborhood setting']
  },
  {
    id: 'chandranagar',
    name: 'Chandranagar Outskirts',
    tagline: 'Convenience Meets Calm',
    description: 'Positioned close to established commercial centers while maintaining quiet residential privacy.',
    highlights: ['Proximity to healthcare & retail', 'Excellent road connectivity', 'High residential demand']
  },
  {
    id: 'pudussery',
    name: 'Pudussery Growth Belt',
    tagline: 'Future Expansion Node',
    description: 'A forward-looking corridor with wide land parcels, clean title developments, and easy inter-state access.',
    highlights: ['Expensive plot opportunities', 'Clean environmental air', 'Strategic location value']
  }
];

export const palakkadThemes = [
  {
    title: 'Natural Surroundings',
    desc: 'Nestled near the Western Ghats with cooling breezes flowing through the Palakkad Gap.'
  },
  {
    title: 'Peaceful Lifestyle',
    desc: 'Quiet residential neighborhoods designed for comfortable family living away from urban congestion.'
  },
  {
    title: 'Seamless Connectivity',
    desc: 'Effortless access to highway corridors, major railway hubs, and regional airport networks.'
  },
  {
    title: 'Kerala Landscape',
    desc: 'Distinctive tropical scenery featuring palmyra palms, lush greenery, and pristine water resources.'
  }
];
