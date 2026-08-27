import React, { useState } from 'react';
import { X, ArrowRight, MapPin, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onEnquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onEnquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0a0b0d]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#121418] border border-[#c5a880]/30 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#0a0b0d]/80 border border-white/10 hover:border-[#c5a880] text-white flex items-center justify-center transition-colors duration-300 focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-[#e6e1d7]" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Image Carousel (7 cols) */}
            <div className="lg:col-span-7 bg-[#0a0b0d] relative min-h-[300px] sm:min-h-[420px] flex flex-col justify-between">
              <div className="relative w-full h-full min-h-[300px] sm:min-h-[420px] overflow-hidden">
                <img
                  src={project.galleryImages[activeImageIndex] || project.mainImage}
                  alt={`${project.name} photo`}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-transparent opacity-80" />

                {/* Status & Badge overlay */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#c5a880] text-[#0a0b0d] text-[10px] font-semibold tracking-[0.2em] uppercase">
                    {project.status}
                  </span>
                  {project.badge && (
                    <span className="px-3 py-1 glass-panel text-[#f4f1ea] text-[10px] font-medium tracking-[0.15em] uppercase border border-white/10">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Carousel Controls */}
                {project.galleryImages.length > 1 && (
                  <div className="absolute bottom-6 right-6 flex items-center gap-2">
                    <button
                      onClick={prevImage}
                      className="w-9 h-9 glass-panel flex items-center justify-center text-white hover:text-[#c5a880] transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-mono text-[#c5a880] px-2">
                      0{activeImageIndex + 1} / 0{project.galleryImages.length}
                    </span>
                    <button
                      onClick={nextImage}
                      className="w-9 h-9 glass-panel flex items-center justify-center text-white hover:text-[#c5a880] transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Project Details (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#121418]">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#c5a880] font-medium tracking-[0.2em] uppercase mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                  <span className="w-1 h-1 bg-[#c5a880] rounded-full mx-1"></span>
                  <span>{project.propertyType}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#f4f1ea] mb-4">
                  {project.name}
                </h3>

                <p className="text-sm text-[#9e9a90] font-light leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                {/* Highlights */}
                <div className="mb-6 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-[#c5a880] uppercase mb-3">
                    Architectural Highlights
                  </h4>
                  <ul className="space-y-2.5">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#d8d2c5]">
                        <span className="w-4 h-4 rounded-full bg-[#c5a880]/15 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#c5a880]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Location features */}
                {project.locationFeatures && (
                  <div className="mb-6 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-semibold tracking-[0.2em] text-[#c5a880] uppercase mb-3">
                      Location Advantages
                    </h4>
                    <ul className="space-y-2">
                      {project.locationFeatures.map((loc, idx) => (
                        <li key={idx} className="text-xs text-[#9e9a90] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#c5a880] rounded-full"></span>
                          <span>{loc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onEnquire(project.name);
                  }}
                  className="flex-1 py-3.5 px-6 bg-[#c5a880] text-[#0a0b0d] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#e2c99b] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Enquire on this Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
