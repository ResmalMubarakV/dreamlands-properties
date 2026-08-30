import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutCompanyProps {
  onContactClick?: () => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ onContactClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleContactAction = () => {
    setModalOpen(false);
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-8 sm:py-14 md:py-16 bg-[#0d0e12] relative border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image & Architectural Accent (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden glass-panel border border-[#c5a880]/20">
              <img
                src="/assets/brand_editorial_arch.jpg"
                alt="Dreamland Properties architectural vision"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent opacity-70" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel border border-[#c5a880]/30 backdrop-blur-md">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-1">
                  CORE BRAND IDEA
                </span>
                <p className="font-serif text-lg text-[#f4f1ea] font-normal italic">
                  "Curating better spaces for you."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Small label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-6 bg-[#c5a880]"></span>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#c5a880] uppercase">
                ABOUT PATHAMNUMBER DREAMLAND PROPERTIES
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#f4f1ea] leading-[1.15] tracking-tight mb-8">
              PATHAMNUMBER DREAMLAND PROPERTIES PVT LTD
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg font-light text-[#d8d2c5] leading-relaxed mb-8">
              <p>
                PATHAMNUMBER DREAMLAND PROPERTIES PVT LTD is a premier real-estate and property development brand based in Palakkad, Kerala.
              </p>
              <p>
                Our flagship gated enclave project, <strong className="text-[#c5a880] font-normal">Garden Green at Aalampallam</strong>, offers an exclusive sanctuary of 22 premium villas and plots built around security, proper drainage, and natural light.
              </p>
              <p className="text-[#f4f1ea] font-serif text-xl italic pt-2 border-l-2 border-[#c5a880] pl-4">
                We believe the best things in life come in small packages. Garden Green is all about living in open spaces with an open mind, where quality meets nature.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-[#e2c99b] transition-colors py-2.5 border-b border-[#c5a880]/30 hover:border-[#c5a880]"
              >
                <span>Company Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="/brochure.pdf"
                download="Dreamland_Properties_Brochure.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#c5a880] text-[#e6e1d7] hover:text-[#0a0b0d] border border-white/10 hover:border-[#c5a880] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Brochure PDF</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Brand Values Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-[#0a0b0d]/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#121418] border border-[#c5a880]/30 p-8 sm:p-10 max-w-2xl w-full z-10 my-auto shadow-2xl"
            >
              <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold block mb-2">
                DEVELOPER PROFILE
              </span>
              <h3 className="font-serif text-3xl text-[#f4f1ea] mb-6">
                PATHAMNUMBER DREAMLAND PROPERTIES
              </h3>

              <div className="space-y-4 text-sm text-[#9e9a90] font-light leading-relaxed mb-8">
                <p>
                  Based at Dev Arcade, Near Polytechnic College, Marutharode, Kootupatha, Palakkad, PATHAMNUMBER DREAMLAND PROPERTIES PVT LTD is dedicated to building secure, natural, and high-quality gated residential enclaves.
                </p>
                <p>
                  With the launch of Garden Green at Aalampallam, we deliver premium plot and villa designs featuring proper drainage, solar street lights, gated security, and common parks.
                </p>
              </div>

              <div className="flex flex-wrap justify-end gap-3">
                <button
                  onClick={handleContactAction}
                  className="px-6 py-3 bg-[#c5a880] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.2em]"
                >
                  Contact Our Team
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-3 border border-white/10 text-xs font-medium uppercase tracking-[0.2em] text-[#e6e1d7]"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
