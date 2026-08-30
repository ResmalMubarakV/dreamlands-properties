import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Compass, Sun, TrendingUp, Sparkles } from 'lucide-react';

interface SpecItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
}

const specItems: SpecItem[] = [
  {
    id: 'phil-01',
    title: 'Inspired by Nature',
    subtitle: 'Climate Orientation',
    description: 'We believe the best things in life come in small packages. Garden Green is oriented to make the best use of lands with abundant sunlight and cooling Palakkad Gap fresh air.',
    icon: Compass
  },
  {
    id: 'phil-02',
    title: 'Your Land, Your Villa',
    subtitle: 'Contours of Your Dreams',
    description: 'Imagine a place of your own. A house that is truly yours, built within a secured gated community where you can define the contours of your custom architectural layouts.',
    icon: Sparkles
  },
  {
    id: 'phil-03',
    title: 'Cool Haven Enclave',
    subtitle: 'Necessities within Reach',
    description: 'A peaceful life within a secured development and necessities within your reach at an unhurried pace. Nature surrounding the villas makes it a cool, healthy shelter.',
    icon: Sun
  },
  {
    id: 'phil-04',
    title: '25% Annual Growth',
    subtitle: 'Appreciating Asset',
    description: 'The value of the plot and villa land increases with the surrounding natural resources up to 25 percentage yearly itself, ensuring high generational returns.',
    icon: TrendingUp
  }
];

export const DesignPhilosophy: React.FC = () => {
  const marqueeText1 = [
    "YOUR LAND, YOUR VILLA",
    "INSPIRED BY NATURE",
    "22 EXCLUSIVE VILLAS",
    "AALAMPALLAM PALAKKAD",
    "25% APPRECIATION",
    "SECURED GATED COMMUNITY",
    "95% BANK LOANS AVAILABLE"
  ];

  return (
    <section id="gallery" className="py-14 md:py-18 bg-[#0d0e12] relative border-b border-white/5 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="DESIGN PHILOSOPHY"
          title="Living in open spaces with an open mind."
          description="Where quality of life meets quality of living. We assure you a peaceful, healthy life in a secure gated development at Aalampallam Palakkad."
        />

        {/* Dynamic Infinite Scroll Marquee */}
        <div className="relative w-full py-6 bg-[#121418] border-y border-[#c5a880]/15 overflow-hidden my-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d0e12] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d0e12] to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-16 whitespace-nowrap"
            animate={{ x: [0, -1200] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity
            }}
          >
            {/* Double the array elements to ensure seamless loop */}
            {[...marqueeText1, ...marqueeText1].map((text, idx) => (
              <span 
                key={idx} 
                className="font-serif text-sm sm:text-base md:text-lg font-normal tracking-[0.25em] text-[#c5a880]/70 flex items-center gap-4 uppercase"
              >
                <span>{text}</span>
                <span className="w-1.5 h-1.5 bg-[#c5a880] rounded-full"></span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {specItems.map((spec, idx) => {
            const IconComp = spec.icon;
            return (
              <motion.div
                key={spec.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-8 sm:p-10 bg-[#121418] border border-white/5 hover:border-[#c5a880]/40 rounded-2xl transition-all duration-500 shadow-lg flex flex-col justify-between"
              >
                {/* Subtle border light glow */}
                <div className="absolute inset-0 border border-[#c5a880]/0 group-hover:border-[#c5a880]/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#c5a880]/5 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] transition-colors group-hover:bg-[#c5a880] group-hover:text-[#0a0b0d]">
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-[#c5a880]/50 uppercase font-semibold">
                      {spec.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#f4f1ea] mb-3 group-hover:text-[#c5a880] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9e9a90] font-light leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                <div className="w-12 h-[1px] bg-white/5 group-hover:bg-[#c5a880]/30 transition-colors mt-6" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DesignPhilosophy;
