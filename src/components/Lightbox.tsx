import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { GalleryItem } from '../data/gallery';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIdx]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0b0d]/95 backdrop-blur-2xl p-4 sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-white/5 border border-white/10 hover:border-[#c5a880] text-white hover:text-[#c5a880] transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev / Next controls */}
        {items.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-50 p-3.5 bg-[#0a0b0d]/80 border border-white/10 hover:border-[#c5a880] text-white hover:text-[#c5a880] transition-colors focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50 p-3.5 bg-[#0a0b0d]/80 border border-white/10 hover:border-[#c5a880] text-white hover:text-[#c5a880] transition-colors focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Main Lightbox Content */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative overflow-hidden border border-white/10 glass-panel shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[70vh]">
            <img
              src={item.image}
              alt={item.title}
              className="w-auto h-auto max-h-[70vh] max-w-full object-contain"
            />
          </div>

          {/* Caption bar */}
          <div className="mt-4 text-center max-w-2xl px-4">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                {item.category}
              </span>
              <span className="w-1 h-1 bg-[#c5a880] rounded-full"></span>
              <span className="text-[10px] font-mono text-[#9e9a90]">
                0{currentIndex + 1} of 0{items.length}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#f4f1ea] font-normal mb-1">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#9e9a90] font-light">
              {item.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
