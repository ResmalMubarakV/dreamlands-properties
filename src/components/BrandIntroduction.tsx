import React from 'react';
import { motion } from 'framer-motion';

export const BrandIntroduction: React.FC = () => {
  return (
    <section id="approach" className="py-24 md:py-32 bg-[#0a0b0d] relative overflow-hidden border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#c5a880]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#c5a880] uppercase">
                OUR APPROACH
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#f4f1ea] leading-[1.12] tracking-tight mb-8">
              More than property.<br />
              <span className="italic text-[#c5a880]">A better place to belong.</span>
            </h2>

            {/* Content paragraph 1 */}
            <p className="text-base sm:text-xl text-[#d8d2c5] font-light leading-relaxed mb-6">
              Dreamland Properties focuses on creating and presenting thoughtfully selected residential spaces that combine location, design, comfort and long-term value.
            </p>

            {/* Content paragraph 2 */}
            <p className="text-sm sm:text-base text-[#9e9a90] font-light leading-relaxed">
              Our approach is simple: understand what people need, identify better opportunities and present properties with clarity and confidence.
            </p>

            {/* Subtle Brand Ethos Callout */}
            <div className="mt-10 pt-8 border-t border-[#c5a880]/20 flex items-center gap-6">
              <div className="text-3xl font-serif italic text-[#c5a880]">"</div>
              <p className="text-xs sm:text-sm font-light uppercase tracking-[0.2em] text-[#e6e1d7]">
                Curating better spaces for you — Palakkad, Kerala
              </p>
            </div>
          </motion.div>

          {/* Right Architectural Image Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden glass-panel group">
              <img
                src="/assets/brand_editorial_arch.jpg"
                alt="Dreamland Properties architectural philosophy facade design"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent opacity-60" />
              
              {/* Architectural badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel border border-[#c5a880]/30 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold mb-1">
                  DESIGN DIRECTION
                </p>
                <p className="text-xs text-[#f4f1ea] font-light">
                  Architectural integrity meets tropical Kerala living
                </p>
              </div>
            </div>

            {/* Decorative background border offset frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c5a880]/20 -z-10 hidden sm:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
