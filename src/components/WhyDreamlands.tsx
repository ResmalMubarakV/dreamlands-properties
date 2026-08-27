import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { whyUsData } from '../data/whyUs';

export const WhyDreamlands: React.FC = () => {
  return (
    <section id="why-us" className="py-14 md:py-16 bg-[#0d0e12] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="DISTINCTION"
          title="Why Dreamland Properties"
          description="Our foundational principles guide every property selection, design consideration, and customer relationship."
        />

        {/* Elegant Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyUsData.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-8 bg-[#121418] border border-white/5 hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Large Numbered Typography */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5 group-hover:border-[#c5a880]/30 transition-colors">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-[#c5a880] tracking-tight">
                    {item.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#c5a880]/20 group-hover:bg-[#c5a880] transition-colors" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#f4f1ea] mb-3 group-hover:text-[#c5a880] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9e9a90] font-light leading-relaxed">
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
