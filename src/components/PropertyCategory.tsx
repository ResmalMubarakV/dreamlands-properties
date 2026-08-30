import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { servicesData } from '../data/categories';
import type { ServiceCategory } from '../data/categories';

interface PropertyCategoryProps {
  onSelectCategory: (categoryName: string) => void;
}

// Render custom gold-gradient SVG logos for each Garden Green parameter
const renderCategoryLogo = (id: string) => {
  switch (id) {
    case 'masterplan':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 stroke-[#c5a880] fill-none stroke-[1] group-hover:stroke-[1.5] transition-all duration-500" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      );
    case 'villa-community':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 stroke-[#c5a880] fill-none stroke-[1] group-hover:stroke-[1.5] transition-all duration-500" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case 'bhk-options':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 stroke-[#c5a880] fill-none stroke-[1] group-hover:stroke-[1.5] transition-all duration-500" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 12h18" />
          <path d="M12 3v18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case 'bank-loans':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 stroke-[#c5a880] fill-none stroke-[1] group-hover:stroke-[1.5] transition-all duration-500" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="19" y1="5" x2="5" y2="19" />
          <circle cx="9" cy="9" r="1.5" fill="#c5a880" />
          <circle cx="15" cy="15" r="1.5" fill="#c5a880" />
        </svg>
      );
    case 'gated-amenities':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 stroke-[#c5a880] fill-none stroke-[1] group-hover:stroke-[1.5] transition-all duration-500" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      );
    case 'value-growth':
      return (
        <svg viewBox="0 0 24 24" className="w-14 h-14 stroke-[#c5a880] fill-none stroke-[1] group-hover:stroke-[1.5] transition-all duration-500" aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    default:
      return null;
  }
};

export const PropertyCategory: React.FC<PropertyCategoryProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-8 sm:py-14 md:py-18 bg-[#0a0b0d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="PROJECT PARAMETERS"
          title="The finest design, the best location, & the most luxurious lifestyle."
          description="Explore the specifications, configurations, and core features of Garden Green Gated Community at Aalampallam Palakkad."
        />

        {/* Custom Visual Vector Tiles Grid: 2 cols on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {servicesData.map((service: ServiceCategory, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onSelectCategory(service.filterKey)}
              className="group relative h-56 sm:h-80 overflow-hidden border border-white/5 hover:border-[#c5a880]/40 cursor-pointer transition-all duration-500 bg-[#121418] rounded-xl sm:rounded-2xl flex flex-col justify-between p-4 sm:p-8 shadow-lg hover:shadow-2xl"
            >
              {/* Top accent light glow strip */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Card Header: Serif number and arrow */}
              <div className="flex justify-between items-start z-10">
                <span className="font-serif text-xl sm:text-3xl font-light text-[#c5a880] tracking-tight">{service.number}</span>
                <div className="w-7 h-7 sm:w-10 sm:h-10 glass-panel border border-[#c5a880]/20 rounded-full flex items-center justify-center group-hover:bg-[#c5a880] group-hover:text-[#0a0b0d] transition-all duration-300">
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-[#c5a880] group-hover:text-[#0a0b0d]" />
                </div>
              </div>

              {/* Centered SVG Logo with Hover Animation */}
              <div className="flex justify-center items-center py-2 sm:py-4 transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 z-10">
                {renderCategoryLogo(service.id)}
              </div>

              {/* Card Footer Content */}
              <div className="z-10 mt-auto">
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[#c5a880] font-semibold mb-0.5 sm:mb-1.5 block line-clamp-1">
                  {service.tagline}
                </span>
                <h3 className="font-serif text-sm sm:text-2xl font-normal text-[#f4f1ea] mb-1 sm:mb-2 group-hover:text-[#c5a880] transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                  {service.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#9e9a90] font-light leading-relaxed transition-colors duration-500 group-hover:text-[#d8d2c5] line-clamp-2 sm:line-clamp-none">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
