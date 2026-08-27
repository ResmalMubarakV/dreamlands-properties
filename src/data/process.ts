export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: "Tell us what you're looking for.",
    subtitle: 'Share your residential preferences, location priorities, and timeline.'
  },
  {
    number: '02',
    title: 'Explore suitable properties.',
    subtitle: 'Review curated options matched specifically to your lifestyle and criteria.'
  },
  {
    number: '03',
    title: 'Visit and understand the location.',
    subtitle: 'Experience the neighborhood context, connectivity, and surrounding environment firsthand.'
  },
  {
    number: '04',
    title: 'Review the property details.',
    subtitle: 'Examine transparent documentation, layout specifications, and boundary maps.'
  },
  {
    number: '05',
    title: 'Make an informed decision.',
    subtitle: 'Take your time with clear, pressure-free guidance from our team.'
  },
  {
    number: '06',
    title: 'Move forward with confidence.',
    subtitle: 'Complete your property acquisition with clarity and complete peace of mind.'
  }
];
