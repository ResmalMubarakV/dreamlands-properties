export interface PalakkadZone {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const palakkadZones: PalakkadZone[] = [
  {
    id: 'education',
    name: 'Reputed Educational Hubs',
    tagline: 'Top Schools Nearby',
    description: 'Prominent educational institutions are located right in the neighborhood, providing easy and quick travel times for students.',
    highlights: [
      'Amrita Vidhyalayam | 1.0 km',
      'Bharathamatha Public School | 1.9 km'
    ]
  },
  {
    id: 'transit',
    name: 'Railway & Transit Stations',
    tagline: 'Seamless Connectivity',
    description: 'Travel effortlessly with major regional railway corridors and local bus terminals situated within a few minutes from the gated community.',
    highlights: [
      'Palakkad Town Railway Station | 2.5 kms',
      'Palakkad Junction Railway Station | 5.0 kms',
      'KSRTC Bus Stand | 4.0 kms'
    ]
  },
  {
    id: 'junctions',
    name: 'Road Junctions & Highways',
    tagline: 'Strategic Highway Access',
    description: 'Enjoy fast access to Palakkad’s key commercial corridors, intersections, and main arterial roadways.',
    highlights: [
      'Chandranagar Junction | 2.3 kms',
      'Dev Arcade (Office) | Close proximity'
    ]
  },
  {
    id: 'healthcare',
    name: 'Hospitals & Medical Care',
    tagline: 'Health Infrastructure',
    description: 'Comprehensive general clinics, emergency hospitals, and medical colleges are readily accessible to ensure family wellness.',
    highlights: [
      'Hospitals & Clinics | 2.0 kms',
      'Govt Medical College | 4.0 kms'
    ]
  }
];

export const palakkadThemes = [
  {
    title: 'Aalampallam Greenery',
    desc: 'Surrounded by clean green areas, fresh air, and abundant natural sunlight in a secure development.'
  },
  {
    title: 'Peaceful Gated Living',
    desc: 'Comprising just 22 villas. Living in open spaces with an open mind, where quality meets security.'
  },
  {
    title: 'Seamless Access',
    desc: 'Effortless travel with railway stations and bus stand networks within 1.0 to 5.0 kms reach.'
  },
  {
    title: 'Investment Value',
    desc: 'Real estate in a premium zone where land value increases up to 25% yearly itself.'
  }
];
