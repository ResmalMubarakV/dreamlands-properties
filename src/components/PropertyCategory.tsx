import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { servicesData } from '../data/categories';
import type { ServiceCategory } from '../data/categories';

interface PropertyCategoryProps {
  onSelectCategory: (categoryName: string) => void;
}

export const PropertyCategory: React.FC<PropertyCategoryProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-24 md:py-32 bg-[#0a0b0d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="SERVICES OFFERED"
          title="Curating spaces across five core disciplines."
          description="Explore our specialized residential services tailored to modern lifestyle expectations, structural quality, and long-term value."
        />

        {/* Large Visual Category Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceCategory, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => onSelectCategory(service.filterKey)}
              className="group relative h-80 overflow-hidden border border-white/10 hover:border-[#c5a880] cursor-pointer transition-all duration-700 glass-panel"
            >
              {/* Service Imagery Background */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Dark Luxury Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/60 to-transparent" />
              <div className="absolute inset-0 bg-[#0a0b0d]/20 group-hover:bg-transparent transition-colors duration-500" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-sm text-[#c5a880] font-mono">{service.number}</span>
                  <div className="w-10 h-10 glass-panel border border-[#c5a880]/30 rounded-full flex items-center justify-center group-hover:bg-[#c5a880] group-hover:text-[#0a0b0d] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#c5a880] group-hover:text-[#0a0b0d]" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-2 block">
                    {service.tagline}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#f4f1ea] mb-2 group-hover:text-[#c5a880] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#d8d2c5]/80 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
