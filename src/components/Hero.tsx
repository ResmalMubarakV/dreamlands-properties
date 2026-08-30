import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick?: () => void;
}

const TOTAL_FRAMES = 170;

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const handleContactAction = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Framer Motion Scroll Progress for sticky container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Apple-grade spring physics for butter smooth 60fps momentum
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.0005
  });

  // Map smooth scroll progress (0 to 1) to frame numbers (1 to 170)
  const frameIndexMotion = useTransform(smoothScrollY, [0, 1], [1, TOTAL_FRAMES]);

  // Helper to get image path for a frame
  const getFramePath = (index: number) => {
    const padded = String(index).padStart(3, '0');
    return `/images/herosection/ezgif-frame-${padded}.png`;
  };

  // High performance Canvas render function with nearest-frame fallback
  const renderFrame = useCallback((frameNumber: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clampedIndex = Math.min(Math.max(1, Math.round(frameNumber)), TOTAL_FRAMES);
    let targetImg = imagesRef.current[clampedIndex - 1];

    // Fallback: If exact requested frame is not ready yet, search nearest loaded frame
    if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) {
      for (let i = clampedIndex - 1; i >= 0; i--) {
        const candidate = imagesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          targetImg = candidate;
          break;
        }
      }
      if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) {
        for (let i = clampedIndex; i < TOTAL_FRAMES; i++) {
          const candidate = imagesRef.current[i];
          if (candidate && candidate.complete && candidate.naturalWidth > 0) {
            targetImg = candidate;
            break;
          }
        }
      }
    }

    if (!targetImg || !targetImg.complete || targetImg.naturalWidth === 0) return;

    // High DPI scaling for ultra crisp rendering
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Cover object-fit logic
    const imgRatio = targetImg.width / targetImg.height;
    const containerRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (containerRatio > imgRatio) {
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.drawImage(targetImg, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();

    currentFrameRef.current = clampedIndex;
  }, []);

  // Preload sampled frames for ultra-fast instant page load & silky smooth animation
  useEffect(() => {
    let isMounted = true;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    // Sample every 2nd frame (85 frames) for 60% faster loading & zero lag
    const FRAME_STEP = 2;
    const totalSampled = Math.ceil(TOTAL_FRAMES / FRAME_STEP);

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const isSampled = i === 1 || i === TOTAL_FRAMES || (i % FRAME_STEP === 0);
      const img = new Image();

      if (isSampled) {
        img.src = getFramePath(i);

        img.onload = () => {
          if (!isMounted) return;
          loadedCount++;
          setLoadProgress(Math.min(100, Math.round((loadedCount / totalSampled) * 100)));

          // Instant display: Hide loader as soon as frame 1 or first keyframe arrives!
          setImagesLoaded(true);
          renderFrame(currentFrameRef.current);
        };

        img.onerror = () => {
          if (!isMounted) return;
          loadedCount++;
        };
      }

      images.push(img);
    }

    imagesRef.current = images;

    // Initial draw attempt
    renderFrame(1);

    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame]);

  // Subscribe to scroll updates to re-render frame
  useMotionValueEvent(frameIndexMotion, 'change', (latest) => {
    renderFrame(latest);
  });

  // Non-Overlapping Animated Text Transforms (Spring Smoothed):
  // Milestone 1 (0% to 20% scroll) - Fades out completely by 20%
  const opacity1 = useTransform(smoothScrollY, [0, 0.15, 0.20], [1, 1, 0]);
  const y1 = useTransform(smoothScrollY, [0, 0.15, 0.20], [0, 0, -25]);

  // Milestone 2 (25% to 48% scroll) - Completely clear gap between 20% and 25%
  const opacity2 = useTransform(smoothScrollY, [0.24, 0.29, 0.44, 0.49], [0, 1, 1, 0]);
  const y2 = useTransform(smoothScrollY, [0.24, 0.29, 0.44, 0.49], [25, 0, 0, -25]);

  // Milestone 3 (54% to 76% scroll) - Completely clear gap between 49% and 54%
  const opacity3 = useTransform(smoothScrollY, [0.53, 0.58, 0.72, 0.77], [0, 1, 1, 0]);
  const y3 = useTransform(smoothScrollY, [0.53, 0.58, 0.72, 0.77], [25, 0, 0, -25]);

  // Milestone 4 (82% to 100% scroll) - Completely clear gap between 77% and 82%
  const opacity4 = useTransform(smoothScrollY, [0.81, 0.86, 1], [0, 1, 1]);
  const y4 = useTransform(smoothScrollY, [0.81, 0.86, 1], [25, 0, 0]);

  // Dynamic pointer-events & display properties so inactive milestones are hidden from DOM rendering
  const display1 = useTransform(opacity1, (v) => (v > 0.001 ? 'flex' : 'none'));
  const display2 = useTransform(opacity2, (v) => (v > 0.001 ? 'flex' : 'none'));
  const display3 = useTransform(opacity3, (v) => (v > 0.001 ? 'flex' : 'none'));
  const display4 = useTransform(opacity4, (v) => (v > 0.001 ? 'flex' : 'none'));

  const pointerEvents1 = useTransform(opacity1, (v) => (v > 0.05 ? 'auto' : 'none'));
  const pointerEvents2 = useTransform(opacity2, (v) => (v > 0.05 ? 'auto' : 'none'));
  const pointerEvents3 = useTransform(opacity3, (v) => (v > 0.05 ? 'auto' : 'none'));
  const pointerEvents4 = useTransform(opacity4, (v) => (v > 0.05 ? 'auto' : 'none'));

  // Scrub bar indicator
  const scrubBarWidth = useTransform(smoothScrollY, [0, 1], ['0%', '100%']);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-[210vh] bg-[#0a0b0d]">
      {/* Sticky Fullscreen Canvas Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center z-0">
        
        {/* Instant Fallback Architectural Poster Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 z-0 transition-opacity duration-1000"
          style={{ backgroundImage: "url('/assets/hero_villa_dark.jpg')" }}
        />

        {/* HTML5 Render Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover filter contrast-105 z-0"
        />

        {/* Minimal Gradient Shadow Overlay (Allows video animation to be 100% visible) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/90 via-[#0a0b0d]/20 to-[#0a0b0d]/50 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d]/70 via-transparent to-transparent pointer-events-none z-[1]" />

        {/* Loading Bar Indicator */}
        {!imagesLoaded && (
          <div className="absolute top-28 right-6 sm:right-10 z-30 glass-panel px-4 py-2 flex items-center gap-3 border border-[#c5a880]/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-ping" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#c5a880]">
              LOADING ARCHITECTURE • {loadProgress}%
            </span>
          </div>
        )}

        {/* Floating Typography Overlays (Clean, uncluttered, non-overlapping) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl relative min-h-[340px] sm:min-h-[400px] flex items-center">

            {/* Milestone 1 (Appears during 0% - 20% scroll) */}
            <motion.div style={{ opacity: opacity1, y: y1, display: display1, pointerEvents: pointerEvents1 }} className="absolute inset-0 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
                <span className="h-px w-8 bg-[#c5a880]"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#c5a880] uppercase font-serif drop-shadow-md">
                  PATHAMNUMBER DREAMLAND PROPERTIES
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium text-[#ffffff] leading-[1.1] tracking-tight mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Garden Green at Aalampallam Palakkad.
              </h1>

              <p className="text-xs sm:text-lg text-[#e6e1d7] font-light leading-relaxed mb-6 sm:mb-8 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                Inspired by nature! Comprising of just 22 luxury villas, offering open spaces with an open mind, where quality meets style.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onExploreClick}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#c5a880] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#e2c99b] transition-all duration-300 shadow-[0_0_30px_rgba(197,168,128,0.35)]"
                >
                  <span>Explore Villa Models</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={handleContactAction}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#ffffff] border border-[#c5a880]/60 hover:border-[#c5a880] hover:bg-[#c5a880]/20 backdrop-blur-sm transition-all duration-300 shadow-md"
                >
                  <span>Get in Touch</span>
                </button>
              </div>
            </motion.div>

            {/* Milestone 2 (Appears during 24% - 49% scroll) */}
            <motion.div style={{ opacity: opacity2, y: y2, display: display2, pointerEvents: pointerEvents2 }} className="absolute inset-0 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
                <span className="h-px w-8 bg-[#c5a880]"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#c5a880] uppercase font-serif drop-shadow-md">
                  01 • YOUR LAND, YOUR VILLA!
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#ffffff] leading-[1.15] tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Define the Contours of Your Dreams.
              </h2>

              <p className="text-xs sm:text-base text-[#e6e1d7] font-light leading-relaxed mb-6 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                Imagine a place of your own. A house that is truly yours, with its doors and windows wide open to welcome you in each day at Aalampallam.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 backdrop-blur-md text-[10px] uppercase tracking-[0.15em] text-[#c5a880] border border-[#c5a880]/50 font-semibold bg-[#0a0b0d]/50 shadow-md">
                  1.88 Acres Land
                </span>
                <span className="px-3.5 py-1.5 backdrop-blur-md text-[10px] uppercase tracking-[0.15em] text-[#ffffff] border border-white/30 bg-[#0a0b0d]/50 shadow-md">
                  22 Villas Gated Enclave
                </span>
              </div>
            </motion.div>

            {/* Milestone 3 (Appears during 53% - 77% scroll) */}
            <motion.div style={{ opacity: opacity3, y: y3, display: display3, pointerEvents: pointerEvents3 }} className="absolute inset-0 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
                <span className="h-px w-8 bg-[#c5a880]"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#c5a880] uppercase font-serif drop-shadow-md">
                  02 • VILLA CONFIGURATIONS
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#ffffff] leading-[1.15] tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                1, 2, 3, 4 BHK Premium Models.
              </h2>

              <p className="text-xs sm:text-base text-[#e6e1d7] font-light leading-relaxed mb-6 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                Ranging from 1000 Sqft to 3000 Sqft layout designs, offering abundant sunlight, fresh air, and proper drainage systems.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 backdrop-blur-md text-[10px] uppercase tracking-[0.15em] text-[#c5a880] border border-[#c5a880]/50 font-semibold bg-[#0a0b0d]/50 shadow-md">
                  1000 - 3000 Sqft Range
                </span>
                <span className="px-3.5 py-1.5 backdrop-blur-md text-[10px] uppercase tracking-[0.15em] text-[#ffffff] border border-white/30 bg-[#0a0b0d]/50 shadow-md">
                  Solar Street Lights
                </span>
              </div>
            </motion.div>

            {/* Milestone 4 (Appears during 81% - 100% scroll) */}
            <motion.div style={{ opacity: opacity4, y: y4, display: display4, pointerEvents: pointerEvents4 }} className="absolute inset-0 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
                <span className="h-px w-8 bg-[#c5a880]"></span>
                <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-[#c5a880] uppercase font-serif drop-shadow-md">
                  03 • INVESTMENT &amp; LOANS
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#ffffff] leading-[1.15] tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Upto 95% Bank Loan Available.
              </h2>

              <p className="text-xs sm:text-base text-[#e6e1d7] font-light leading-relaxed mb-6 max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                Land and resource value increases up to 25% yearly itself. Secure your family's future at an unhurried pace.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={onExploreClick}
                  className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#c5a880] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#e2c99b] transition-all duration-300 shadow-[0_0_30px_rgba(197,168,128,0.35)]"
                >
                  <span>Explore Portfolio</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href="/brochure.pdf"
                  download="Dreamland_Properties_Brochure.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#c5a880] border border-[#c5a880]/60 hover:border-[#c5a880] hover:bg-[#c5a880]/20 backdrop-blur-sm transition-all duration-300 shadow-md"
                >
                  <Download className="w-4 h-4 text-[#c5a880]" />
                  <span>Download PDF Brochure</span>
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Minimal Bottom Progress Bar & Scroll Prompt */}
        <div className="absolute bottom-6 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col gap-2.5 pointer-events-none">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#9e9a90]">
            <div className="flex items-center gap-3 font-serif">
              <span className="text-[#c5a880]">PALAKKAD KERALA</span>
              <span className="w-1 h-1 bg-[#c5a880] rounded-full"></span>
              <span>SCROLL TO ANIMATE</span>
            </div>
            
            <button
              onClick={onExploreClick}
              className="pointer-events-auto group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c5a880] hover:text-[#e2c99b] transition-colors duration-300"
            >
              <span className="font-light hidden sm:inline">Scroll Down</span>
              <div className="w-7 h-7 rounded-full border border-[#c5a880]/30 flex items-center justify-center group-hover:border-[#c5a880] transition-colors duration-300">
                <ArrowDown className="w-3 h-3 text-[#c5a880]" />
              </div>
            </button>
          </div>

          {/* Scrub line indicator */}
          <div className="w-full h-1 bg-white/10 overflow-hidden relative">
            <motion.div
              style={{ width: scrubBarWidth }}
              className="h-full bg-gradient-to-r from-[#c5a880] to-[#e2c99b]"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
