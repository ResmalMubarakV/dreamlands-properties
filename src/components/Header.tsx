import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, MessageSquare, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", id: "home", label: "HOME", number: "01" },
  { to: "/projects", id: "projects", label: "PROJECTS", number: "02" },
  { to: "/gallery", id: "gallery", label: "GALLERY", number: "03" },
  { to: "/about", id: "about", label: "ABOUT", number: "04" },
  { to: "/contact", id: "contact", label: "CONTACT", number: "05" },
];

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // High-performance RAF scroll listener for sticky header & scroll-spy
  useEffect(() => {
    let rafId: number | null = null;
    let lastScrolled = false;
    let lastSection = "home";

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        const currentY = window.scrollY;
        const shouldBeScrolled = currentY > 20;

        if (shouldBeScrolled !== lastScrolled) {
          lastScrolled = shouldBeScrolled;
          setIsScrolled(shouldBeScrolled);
        }

        // Scroll spy on homepage
        if (location.pathname === "/") {
          const sections = ["home", "projects", "gallery", "about", "contact"];
          const scrollPosition = currentY + 180;
          let matched = lastSection;

          for (const sec of sections) {
            const el = document.getElementById(sec);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                matched = sec;
                break;
              }
            }
          }

          if (matched !== lastSection) {
            lastSection = matched;
            setActiveSection(matched);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  const handleNavClick = (sectionId: string) => {
    setMenuOpen(false);
    setActiveSection(sectionId);

    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0b0d]/95 backdrop-blur-xl border-b border-[#c5a880]/30 shadow-[0_10px_30px_rgba(0,0,0,0.9)] py-3"
          : "bg-gradient-to-b from-[#0a0b0d] via-[#0a0b0d]/90 to-[#0a0b0d]/70 backdrop-blur-md border-b border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[48px]">

          {/* Logo Branding */}
          <Link
            to="/"
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
          >
            {/* Logo Image */}
            <img
              src="/Logo.png"
              alt="Dreamland Properties Logo"
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(197,168,128,0.3)] transition-transform duration-300 group-hover:scale-105"
            />

            {/* Brand Title */}
            <div className="flex flex-col justify-center">
              <span className="text-[9px] sm:text-[10px] font-semibold text-[#c5a880] uppercase tracking-[0.2em] leading-none mb-1">
                PATHAMNUMBER
              </span>
              <span className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#f4f1ea] uppercase tracking-wider leading-none whitespace-nowrap group-hover:text-[#c5a880] transition-colors">
                DREAMLAND PROPERTIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on md and up) */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 flex-shrink-0">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.to ||
                (location.pathname === "/" && activeSection === link.id);

              return (
                <Link
                  key={link.id}
                  to={link.to}
                  onClick={() => handleNavClick(link.id)}
                  className="group relative py-1 text-xs lg:text-sm font-medium tracking-[0.15em] uppercase transition-colors"
                >
                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-[#c5a880] font-bold"
                        : "text-[#e6e1d7]/80 hover:text-[#f4f1ea]"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Animated Gold Active Underline */}
                  {isActive && (
                    <motion.span
                      layoutId="headerNavUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#c5a880] shadow-[0_0_8px_rgba(197,168,128,0.8)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (Visible only on xl desktop screens) */}
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            {/* Direct WhatsApp Quick Link */}
            <a
              href="https://wa.me/916282844739?text=Hello%20Dreamland%20Properties%2C%20I%20am%20enquiring%20about%20Garden%20Green%20villas%20in%20Aalampallam%2C%20Palakkad."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 text-[#25D366] transition-all duration-300"
              title="Enquire on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Brochure Download CTA */}
            <a
              href="/brochure.pdf"
              download="Dreamland_Properties_Brochure.pdf"
              className="group inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#c5a880] hover:bg-[#e2c99b] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_0_15px_rgba(197,168,128,0.25)] rounded-md"
            >
              <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Brochure</span>
            </a>
          </div>

          {/* Mobile Right Controls (Visible only on mobile < md: only hamburger icon) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#e6e1d7] hover:text-[#c5a880] focus:outline-none rounded-lg bg-[#121418] border border-white/10"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0b0d]/98 backdrop-blur-2xl border-t border-b border-white/10 shadow-2xl overflow-hidden mt-3"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.to ||
                    (location.pathname === "/" && activeSection === link.id);

                  return (
                    <Link
                      key={link.id}
                      to={link.to}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-[#121418] text-[#c5a880] font-semibold border border-[#c5a880]/30"
                          : "text-[#e6e1d7] hover:bg-[#121418]/60 hover:text-[#f4f1ea]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#c5a880]/60">
                          {link.number}
                        </span>
                        <span className="text-xs font-semibold tracking-widest uppercase">
                          {link.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <a
                  href="https://wa.me/916282844739?text=Hello%20Dreamland%20Properties%2C%20I%20am%20enquiring%20about%20Garden%20Green%20villas%20in%20Aalampallam%2C%20Palakkad."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Enquiry (+91 62828 44739)</span>
                </a>

                <a
                  href="/brochure.pdf"
                  download="Dreamland_Properties_Brochure.pdf"
                  className="w-full py-3 bg-[#c5a880] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.2em] rounded-lg flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Company Brochure</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
