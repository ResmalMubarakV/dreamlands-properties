import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowUpRight, 
  MessageSquare, 
  Compass, 
  Layers, 
  Activity
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const rafMoveRef = useRef<number | null>(null);

  // Smooth Spring Physics for Parallax (Lightweight & optimized)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 90, restDelta: 0.001 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Background UI element parallax transforms (GPU-bound)
  const bgX = useTransform(smoothMouseX, [-500, 500], [-18, 18]);
  const bgY = useTransform(smoothMouseY, [-500, 500], [-18, 18]);
  const cardLeftX = useTransform(smoothMouseX, [-500, 500], [-12, 12]);
  const cardLeftY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);
  const cardRightX = useTransform(smoothMouseX, [-500, 500], [12, -12]);
  const cardRightY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setWindowWidth(window.innerWidth), 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      if (rafMoveRef.current !== null) cancelAnimationFrame(rafMoveRef.current);
    };
  }, []);

  // RAF-throttled mousemove handler to eliminate scroll contention
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (windowWidth < 1024) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const currentTarget = e.currentTarget;

    if (rafMoveRef.current !== null) return;

    rafMoveRef.current = requestAnimationFrame(() => {
      rafMoveRef.current = null;
      const rect = currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    });
  }, [windowWidth, mouseX, mouseY]);

  const handleContactAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[88vh] sm:min-h-[92vh] lg:min-h-screen bg-[#07080a] text-[#f4f1ea] overflow-hidden flex flex-col items-center justify-center pt-16 pb-12 sm:pt-20 sm:pb-16 lg:py-28 transform-gpu"
    >
      {/* ========================================================================= */}
      {/* 1. MOVING RESPONSIVE BACKGROUND UI LAYER (100% GPU-ACCELERATED) */}
      {/* ========================================================================= */}

      {/* Layer A: Ambient Luminous Gradient Spotlights */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 pointer-events-none -z-20 overflow-hidden transform-gpu"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 0.95, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[1000px] h-[280px] sm:h-[450px] lg:h-[600px] bg-gradient-to-tr from-[#c5a880]/20 via-[#e2c99b]/10 to-transparent rounded-full blur-[80px] sm:blur-[130px] transform-gpu"
        />
        <motion.div
          animate={{
            x: [-15, 15, -15],
            y: [12, -12, 12],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
          className="absolute -bottom-10 -left-10 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-[#c5a880]/10 rounded-full blur-[90px] transform-gpu"
        />
        <motion.div
          animate={{
            x: [15, -15, 15],
            y: [-12, 12, -12],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          style={{ willChange: 'transform' }}
          className="absolute -top-10 -right-10 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-[#e2c99b]/8 rounded-full blur-[90px] transform-gpu"
        />
      </motion.div>

      {/* Layer B: Animated Flowing Architectural Wave Lines (GPU Transform Waves) */}
      <div className="absolute inset-0 pointer-events-none -z-15 overflow-hidden opacity-30 sm:opacity-45 transform-gpu">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform' }}
          className="w-[120%] h-full -ml-[10%] transform-gpu"
        >
          <svg 
            className="w-full h-full object-cover" 
            viewBox="0 0 1440 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Wave 1 */}
            <path
              d="M-100 450 C 300 350, 600 550, 1000 400 C 1200 320, 1400 480, 1600 420"
              stroke="url(#goldGradient1)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
            />

            {/* Wave 2 */}
            <path
              d="M-100 550 C 250 480, 700 620, 1100 500 C 1300 450, 1500 580, 1600 520"
              stroke="url(#goldGradient2)"
              strokeWidth="1"
            />

            {/* Wave 3 */}
            <path
              d="M-100 280 C 400 380, 800 200, 1200 320 C 1350 360, 1500 280, 1600 300"
              stroke="url(#goldGradient1)"
              strokeWidth="0.75"
              strokeDasharray="4 6"
            />

            <defs>
              <linearGradient id="goldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#c5a880" stopOpacity="0" />
                <stop offset="50%" stopColor="#c5a880" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#e2c99b" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e2c99b" stopOpacity="0" />
                <stop offset="40%" stopColor="#c5a880" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#c5a880" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Layer C: Rotating Concentric Architectural Radar Rings (GPU-accelerated) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden transform-gpu">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
          className="w-[340px] sm:w-[650px] lg:w-[1100px] h-[340px] sm:h-[650px] lg:h-[1100px] rounded-full border border-[#c5a880]/15 border-dashed relative opacity-35 transform-gpu"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#c5a880] shadow-[0_0_12px_#c5a880]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#e2c99b]/60 shadow-[0_0_8px_#e2c99b]" />
        </motion.div>

        {/* Inner Counter-Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
          className="absolute w-[240px] sm:w-[460px] lg:w-[800px] h-[240px] sm:h-[460px] lg:h-[800px] rounded-full border border-white/5 border-dotted opacity-45 transform-gpu"
        >
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#c5a880]/80 shadow-[0_0_8px_#c5a880]" />
        </motion.div>

        {/* Pulsing Core Ring */}
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.12, 0.28, 0.12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: 'transform, opacity' }}
          className="absolute w-[160px] sm:w-[300px] lg:w-[500px] h-[160px] sm:h-[300px] lg:h-[500px] rounded-full border border-[#c5a880]/20 transform-gpu"
        />
      </div>

      {/* Layer D: Animated Desktop Telemetry Cards (Visible on lg/desktop only) */}
      <motion.div
        style={{ x: cardLeftX, y: cardLeftY, willChange: 'transform' }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute left-8 xl:left-14 top-1/3 -translate-y-1/2 z-10 flex-col gap-2 p-3.5 bg-[#0e1014]/75 border border-[#c5a880]/25 backdrop-blur-xl rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-56 text-left pointer-events-none transform-gpu"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a880] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a880]"></span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#c5a880] uppercase">
              GEO-COORDINATES
            </span>
          </div>
          <Compass className="w-3.5 h-3.5 text-[#c5a880]/70" />
        </div>
        <div className="font-mono text-[11px] text-[#f4f1ea] font-medium tracking-wider">
          10.7867° N, 76.6548° E
        </div>
        <div className="flex items-center justify-between text-[9px] text-[#9e9a90] pt-1">
          <span>PALAKKAD, KERALA</span>
          <span className="text-[#c5a880] font-semibold">ESTD. ARCHITECTURE</span>
        </div>
      </motion.div>

      <motion.div
        style={{ x: cardRightX, y: cardRightY, willChange: 'transform' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden lg:flex absolute right-8 xl:right-14 top-1/3 -translate-y-1/2 z-10 flex-col gap-2 p-3.5 bg-[#0e1014]/75 border border-[#c5a880]/25 backdrop-blur-xl rounded-none shadow-[0_10px_30px_rgba(0,0,0,0.6)] w-56 text-left pointer-events-none transform-gpu"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-[#c5a880] animate-pulse" />
            <span className="text-[9px] font-mono tracking-widest text-[#c5a880] uppercase">
              SANCTUARY STATUS
            </span>
          </div>
          <Layers className="w-3.5 h-3.5 text-[#c5a880]/70" />
        </div>
        <div className="font-serif text-[11px] text-[#f4f1ea] font-medium tracking-wide">
          GARDEN GREEN ENCLAVE
        </div>
        <div className="flex items-center justify-between text-[9px] text-[#9e9a90] pt-1">
          <span>1.88 ACRES PRIME</span>
          <span className="text-[#c5a880] font-semibold">22 RESIDENCES</span>
        </div>
      </motion.div>

      {/* Subtle Precision Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #c5a880 1px, transparent 1px),
            linear-gradient(to bottom, #c5a880 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Minimal Top & Bottom Golden Horizon Lines */}
      <div className="absolute top-12 sm:top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a880]/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-8 sm:bottom-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a880]/15 to-transparent pointer-events-none" />

      {/* ========================================================================= */}
      {/* 2. RESPONSIVE HERO CONTENT CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full my-auto">
        
        {/* Subtle Brand Eyebrow (Adaptive Mobile Typography) */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-3.5 sm:mb-6 max-w-full"
        >
          <span className="h-px w-4 sm:w-8 bg-gradient-to-r from-transparent to-[#c5a880]"></span>
          <span className="text-[9px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-[#c5a880] uppercase font-sans whitespace-nowrap">
            PATHAMNUMBER DREAMLAND PROPERTIES
          </span>
          <span className="h-px w-4 sm:w-8 bg-gradient-to-l from-transparent to-[#c5a880]"></span>
        </motion.div>

        {/* Grand Headline (Tailored Fluid Responsive Sizing for Mobile & Desktop) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[1.65rem] xs:text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal tracking-tight text-[#ffffff] leading-[1.18] sm:leading-[1.1] mb-3.5 sm:mb-6 max-w-4xl px-1 sm:px-0"
        >
          Where Architectural Distinction{' '}
          <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#f4f1ea] via-[#c5a880] to-[#e2c99b] bg-clip-text text-transparent italic font-normal">
            Meets Timeless Living.
          </span>
        </motion.h1>

        {/* Refined Minimalist Editorial Subtitle (Mobile-Optimized Padding & Font) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs sm:text-base md:text-lg text-[#cbc5ba] font-light leading-relaxed max-w-xl sm:max-w-3xl mb-6 sm:mb-10 px-2 sm:px-0"
        >
          Bespoke villa construction and property masterplanning in Palakkad, Kerala. 
          Crafting spaces that harmonize structural integrity with peaceful natural living.
        </motion.p>

        {/* High-End Minimal CTA Button Cluster (Thumb-friendly Tap Targets on Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto max-w-xs sm:max-w-none"
        >
          {/* Primary Luxury Gold CTA */}
          <button
            onClick={onExploreClick}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-[#c5a880] via-[#d6c09c] to-[#c5a880] bg-[length:200%_auto] hover:bg-[position:right_center] text-[#07080a] text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] transition-all duration-500 shadow-[0_0_25px_rgba(197,168,128,0.3)] hover:shadow-[0_0_45px_rgba(197,168,128,0.55)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {/* Secondary Frosted Obsidian CTA */}
          <button
            onClick={handleContactAction}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#f4f1ea] bg-[#121418]/85 hover:bg-[#1a1e26] border border-[#c5a880]/40 hover:border-[#c5a880] backdrop-blur-md transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_4px_25px_rgba(197,168,128,0.2)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#c5a880] transition-transform duration-300 group-hover:scale-110" />
            <span>Get in Touch</span>
          </button>
        </motion.div>

        {/* Adaptive Mobile Architectural Micro-Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex lg:hidden flex-wrap justify-center items-center gap-2 mt-7 sm:mt-9"
        >
          <div className="px-2.5 py-1 bg-[#0e1014]/80 border border-[#c5a880]/30 backdrop-blur-md text-[8px] sm:text-[9px] tracking-widest text-[#c5a880] font-mono uppercase">
            PALAKKAD • 10.78° N, 76.65° E
          </div>
          <div className="px-2.5 py-1 bg-[#0e1014]/80 border border-white/10 backdrop-blur-md text-[8px] sm:text-[9px] tracking-widest text-[#e6e1d7] font-mono uppercase">
            22 BESPOKE VILLAS
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
