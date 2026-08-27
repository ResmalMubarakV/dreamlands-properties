import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onEnquireClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section indicator
      const sections = ['home', 'projects', 'categories', 'why-us', 'palakkad', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 glass-nav shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'py-5 bg-gradient-to-b from-[#0a0b0d]/95 via-[#0a0b0d]/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="h-10 sm:h-12 flex items-center justify-center">
              <img
                src="/Logo.png"
                alt="Dreamlands Properties Logo"
                className="h-full w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(197,168,128,0.2)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl tracking-wider text-[#f4f1ea] font-medium leading-none">
                DREAMLANDS
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#c5a880] uppercase font-light mt-1">
                PROPERTIES • KERALA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 py-1 ${
                  activeSection === link.id
                    ? 'text-[#c5a880]'
                    : 'text-[#e6e1d7]/70 hover:text-[#f4f1ea]'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a880]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onEnquireClick}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#0a0b0d] font-semibold bg-[#c5a880] hover:bg-[#e2c99b] transition-all duration-300 shadow-[0_0_20px_rgba(197,168,128,0.2)]"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onEnquireClick}
              className="px-3.5 py-1.5 text-[10px] uppercase tracking-[0.15em] text-[#0a0b0d] font-semibold bg-[#c5a880]"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#e6e1d7] hover:text-[#c5a880] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden glass-nav border-t border-[#c5a880]/20 mt-3 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-serif tracking-wider text-[#f4f1ea] hover:text-[#c5a880] flex items-center justify-between border-b border-white/5 pb-3"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans text-[#c5a880]/50">0{idx + 1}</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEnquireClick();
                  }}
                  className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#0a0b0d] bg-[#c5a880] text-center"
                >
                  Enquire Now
                </button>
                <a
                  href="https://wa.me/919072788983?text=Hello%20Dreamlands%20Properties%2C%20I%20would%20like%20to%20enquire%20about%20your%20properties."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-xs uppercase tracking-[0.15em] font-medium text-[#e6e1d7] border border-white/10 flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                  Call / WhatsApp Us (+91 9072788983)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
