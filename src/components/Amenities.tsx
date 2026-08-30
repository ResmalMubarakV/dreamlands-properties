import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { ShieldCheck, Droplets, Video, SunDim, BadgePercent, Trees } from 'lucide-react';

interface AmenityItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  badgeText?: string;
}

const amenitiesData: AmenityItem[] = [
  {
    id: 'security-cabin',
    title: 'Security Cabin',
    description: '24x7 manned security surveillances and strictly monitored entry gates.',
    icon: ShieldCheck,
    badgeText: '24x7 Active'
  },
  {
    id: 'proper-drainage',
    title: 'Proper Drainage',
    description: 'Regularly maintained drainage systems ensuring a clean and healthy living space.',
    icon: Droplets,
    badgeText: 'Low Maintenance'
  },
  {
    id: 'gated-community',
    title: 'Gated Community',
    description: 'Strictly monitored entrances with 24-hour CCTV surveillance covering the perimeter.',
    icon: Video,
    badgeText: 'Fully Secured'
  },
  {
    id: 'solar-lights',
    title: 'Solar Street Lights',
    description: 'Walkways, driveways, and community streets fully illuminated with eco-friendly solar street lights.',
    icon: SunDim,
    badgeText: 'Eco Friendly'
  },
  {
    id: 'loan-facility',
    title: 'Loan Facility',
    description: 'Approved plots and villas with up to 95% bank loan facilities from major financial institutions.',
    icon: BadgePercent,
    badgeText: '95% Funding'
  },
  {
    id: 'common-park',
    title: 'Common Park',
    description: 'Natural green park areas designed to improve physical, mental health, and family recreation.',
    icon: Trees,
    badgeText: 'Green Enclave'
  }
];

export const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-14 md:py-18 bg-[#0a0b0d] relative border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none transform -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          eyebrow="COMMUNITY AMENITIES"
          title="Designed for modern comfort & security."
          description="Every utility and amenity at Garden Green is fully built out to support an unhurried, secure, and natural lifestyle at Aalampallam Palakkad."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {amenitiesData.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative p-8 bg-[#121418] border border-white/5 hover:border-[#c5a880]/30 transition-all duration-500 flex flex-col justify-between rounded-xl shadow-lg hover:shadow-2xl"
              >
                {/* Accent border glow */}
                <div className="absolute inset-0 border border-[#c5a880]/0 group-hover:border-[#c5a880]/20 rounded-xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Line with Icon Logo & Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#c5a880]/10 border border-[#c5a880]/30 flex items-center justify-center text-[#c5a880] transition-colors duration-300 group-hover:bg-[#c5a880] group-hover:text-[#0a0b0d]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {item.badgeText && (
                      <span className="text-[9px] uppercase tracking-widest px-2.5 py-1 bg-white/5 text-[#c5a880] border border-[#c5a880]/20 font-semibold font-mono rounded">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f4f1ea] font-normal mb-3 transition-colors duration-300 group-hover:text-[#c5a880]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9e9a90] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="w-full h-[1px] bg-white/5 group-hover:bg-[#c5a880]/30 transition-colors duration-500 mt-6" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Amenities;
