export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  filterKey: 'Villa Construction' | 'Land Development' | 'Property Consultation' | 'Renovation Works' | 'Interior Designing';
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'masterplan',
    number: '01',
    title: '1.88 Acres Masterplan',
    tagline: 'Scenic Aalampallam Palakkad',
    description: 'A masterplanned gated enclave designed for privacy, abundant natural light, fresh air and a relaxed pace.',
    filterKey: 'Land Development'
  },
  {
    id: 'villa-community',
    number: '02',
    title: '22 Exclusive Villas',
    tagline: 'Gated Villa Living',
    description: 'Comprising just 22 modern villas, offering space, safety, proper drainage systems, and a green environment.',
    filterKey: 'Villa Construction'
  },
  {
    id: 'bhk-options',
    number: '03',
    title: '1, 2, 3, 4 BHK Configurations',
    tagline: '1000 to 3000 Sqft Layouts',
    description: 'Flexible architectural designs with doors and windows wide open to welcome you in each day.',
    filterKey: 'Villa Construction'
  },
  {
    id: 'bank-loans',
    number: '04',
    title: 'Upto 95% Bank Loans',
    tagline: 'Hassle-Free Financing',
    description: 'Plots and villas approved for financial assistance up to 95% from leading banks.',
    filterKey: 'Land Development'
  },
  {
    id: 'gated-amenities',
    number: '05',
    title: 'Amenities & Common Park',
    tagline: 'Modern Community Lifestyle',
    description: 'Featuring 24x7 security cabin, CCTV, solar street lights, proper drainage, and a green park for all residents.',
    filterKey: 'Land Development'
  },
  {
    id: 'value-growth',
    number: '06',
    title: '25% Yearly Appreciation',
    tagline: 'High Investment Value',
    description: 'A high-value land investment where value increases with local resources up to 25% yearly itself.',
    filterKey: 'Land Development'
  }
];
