import React, { useState } from 'react';
import { MapPin, Compass, TreePine } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { palakkadZones, palakkadThemes } from '../data/palakkadLocations';

export const PalakkadSection: React.FC = () => {
  const [selectedZoneId, setSelectedZoneId] = useState<string>('kadamkod');

  const selectedZone = palakkadZones.find((z) => z.id === selectedZoneId) || palakkadZones[0];

  return (
    <section id="palakkad" className="py-24 md:py-32 bg-[#0a0b0d] relative overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="GEOGRAPHIC CONTEXT"
          title="Rooted in Palakkad. Designed for what comes next."
          description="Palakkad offers a distinctive blend of peaceful natural greenery, Western Ghats breezes, and well-connected residential development."
        />

        {/* Top Hero Landscape Composition */}
        <div className="relative aspect-[21/9] min-h-[300px] overflow-hidden mb-16 border border-white/10 glass-panel">
          <img
            src="/assets/palakkad_landscape.jpg"
            alt="Palakkad Kerala scenic landscape with Western Ghats"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-1">
                LOCATION HIGHLIGHT
              </span>
              <h3 className="font-serif text-xl sm:text-3xl text-[#f4f1ea] font-normal">
                Gateway of Kerala • Palakkad Gap
              </h3>
            </div>
            <div className="px-4 py-2 glass-panel border border-[#c5a880]/30 text-xs text-[#e6e1d7] font-light">
              Western Ghats Horizon &amp; Fresh Air Canopy
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Palakkad Living */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {palakkadThemes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-[#121418] border border-white/5 hover:border-[#c5a880]/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] mb-4">
                <TreePine className="w-4 h-4" />
              </div>
              <h4 className="font-serif text-lg text-[#f4f1ea] mb-2">{item.title}</h4>
              <p className="text-xs text-[#9e9a90] font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Elegant Architectural Map Explorer Box */}
        <div className="bg-[#121418] border border-[#c5a880]/20 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold block mb-1">
                INTERACTIVE ZONE EXPLORER
              </span>
              <h3 className="font-serif text-2xl text-[#f4f1ea]">
                Key Residential Pockets of Palakkad
              </h3>
            </div>
            <p className="text-xs text-[#9e9a90] font-light max-w-sm">
              Explore primary residential corridors carefully evaluated by Dreamland Properties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Zone Selector Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {palakkadZones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`p-4 text-left transition-all duration-300 border flex items-center justify-between ${
                    selectedZoneId === zone.id
                      ? 'bg-[#c5a880]/10 border-[#c5a880] text-[#f4f1ea]'
                      : 'bg-[#0a0b0d]/50 border-white/5 text-[#9e9a90] hover:text-[#e6e1d7] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MapPin className={`w-4 h-4 ${selectedZoneId === zone.id ? 'text-[#c5a880]' : 'text-[#9e9a90]'}`} />
                    <div>
                      <p className="text-sm font-serif font-medium">{zone.name}</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#c5a880]">{zone.tagline}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-mono ${selectedZoneId === zone.id ? 'text-[#c5a880]' : 'opacity-0'}`}>
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Zone Architectural Focus Details (7 cols) */}
            <div className="lg:col-span-7 bg-[#0a0b0d] p-6 sm:p-8 border border-white/10 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedZone.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4 text-[#c5a880]" />
                    <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-semibold">
                      {selectedZone.tagline}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl text-[#f4f1ea] mb-4">
                    {selectedZone.name}
                  </h4>

                  <p className="text-sm text-[#d8d2c5] font-light leading-relaxed mb-6">
                    {selectedZone.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[11px] uppercase tracking-widest text-[#9e9a90] font-medium block mb-3">
                      Residential Characteristics:
                    </span>
                    <div className="space-y-2">
                      {selectedZone.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#e6e1d7]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
