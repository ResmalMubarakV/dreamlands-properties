import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Lightbox } from './Lightbox';
import { galleryItems } from '../data/gallery';
import type { GalleryItem } from '../data/gallery';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Architecture', 'Landscaping', 'Interiors', 'Surroundings'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0d0e12] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <SectionHeader
            eyebrow="CINEMATIC GALLERY"
            title="Spaces worth experiencing."
            description="Explore our visual curation of architectural facades, landscaping, internal sanctuaries, and natural Palakkad surroundings."
          />

          {/* Filter options */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-[#c5a880] text-[#0a0b0d] border-[#c5a880] font-semibold'
                    : 'bg-transparent text-[#9e9a90] border-white/10 hover:text-[#f4f1ea]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Dynamic Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item, idx) => {
            const isWide = item.aspect === 'wide' || idx === 0 || idx === 2;
            const colSpan = isWide ? 'md:col-span-8' : 'md:col-span-4';
            const heightClass = 'h-80 sm:h-96';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => setSelectedLightboxItem(item)}
                className={`group relative ${colSpan} ${heightClass} overflow-hidden border border-white/10 hover:border-[#c5a880]/60 cursor-pointer transition-all duration-500 glass-panel`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Reveal Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="w-9 h-9 glass-panel rounded-full flex items-center justify-center text-[#c5a880] border border-[#c5a880]/30">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title & Category */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl text-[#f4f1ea] font-normal group-hover:text-[#c5a880] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#9e9a90] font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedLightboxItem}
        items={filteredItems}
        onClose={() => setSelectedLightboxItem(null)}
        onNavigate={(newItem) => setSelectedLightboxItem(newItem)}
      />
    </section>
  );
};
