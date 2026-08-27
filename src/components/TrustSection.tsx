import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { trustPrinciples } from '../data/trustPrinciples';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-24 md:py-32 bg-[#0a0b0d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="STANDARDS"
          title="Confidence starts with clarity."
          description="We build trust through transparent practices, rigorous title verification, and principled guidance — not inflated statistics."
        />

        {/* Clean Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trustPrinciples.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 bg-[#121418] border border-white/5 hover:border-[#c5a880]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-2 h-2 bg-[#c5a880] rounded-full mb-6"></div>
                <h3 className="font-serif text-lg text-[#f4f1ea] font-normal mb-3">
                  {principle.title}
                </h3>
                <p className="text-xs text-[#9e9a90] font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
