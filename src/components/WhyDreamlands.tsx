import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { whyUsData } from '../data/whyUs';

export const WhyDreamlands: React.FC = () => {
  return (
    <section id="why-us" className="py-8 sm:py-14 md:py-16 bg-[#0d0e12] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="DISTINCTION"
          title="Why Dreamland Properties"
          description="Our foundational principles guide every property selection, design consideration, and customer relationship."
        />

        {/* Elegant Numbered Grid: 2 cols on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 mt-6 sm:mt-10">
          {whyUsData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group p-4 sm:p-8 bg-[#121418] border border-white/5 hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between rounded-xl"
            >
              <div>
                {/* Large Numbered Typography */}
                <div className="flex items-center justify-between mb-3 sm:mb-8 pb-2 sm:pb-4 border-b border-white/5 group-hover:border-[#c5a880]/30 transition-colors">
                  <span className="font-serif text-xl sm:text-4xl font-light text-[#c5a880] font-mono tracking-wider">
                    {item.number}
                  </span>
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#9e9a90]">
                    PRINCIPLE
                  </span>
                </div>

                <h3 className="font-serif text-sm sm:text-2xl font-normal text-[#f4f1ea] mb-1 sm:mb-3 group-hover:text-[#c5a880] transition-colors line-clamp-1 sm:line-clamp-none">
                  {item.title}
                </h3>

                <p className="text-[10px] sm:text-sm text-[#9e9a90] font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
