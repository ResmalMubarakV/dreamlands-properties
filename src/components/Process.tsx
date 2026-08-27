import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { processSteps } from '../data/process';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0a0b0d] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="PROPERTY EXPERIENCE"
          title="From first conversation to your future space."
          description="A simple, transparent process designed to give you clarity and confidence at every step."
        />

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="hidden lg:block relative mt-16">
          {/* Horizontal Line connecting steps */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a880]/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center px-2"
              >
                {/* Number Circle Badge */}
                <div className="w-14 h-14 bg-[#121418] border border-[#c5a880]/40 group-hover:border-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-[#0a0b0d] text-[#c5a880] flex items-center justify-center font-serif text-lg font-medium transition-all duration-300 shadow-lg mb-6">
                  {step.number}
                </div>

                <h4 className="font-serif text-base font-normal text-[#f4f1ea] mb-2 leading-snug group-hover:text-[#c5a880] transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs text-[#9e9a90] font-light leading-relaxed">
                  {step.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative space-y-8 pl-6 border-l border-[#c5a880]/30 ml-4">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative pl-6"
            >
              {/* Dot on vertical line */}
              <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-[#121418] border-2 border-[#c5a880]" />

              <span className="text-xs font-mono text-[#c5a880] uppercase tracking-wider block mb-1">
                STEP {step.number}
              </span>

              <h4 className="font-serif text-xl font-normal text-[#f4f1ea] mb-1">
                {step.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#9e9a90] font-light leading-relaxed">
                {step.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
