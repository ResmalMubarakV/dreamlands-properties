import React, { useState } from 'react';
import { ArrowUp, MessageSquare, Globe, Share2, Phone, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-[#07080a] text-[#e6e1d7] border-t border-white/10 relative">
      
      {/* MOBILE / SMALL SCREEN COMPACT FOOTER (sm & down) */}
      <div className="block md:hidden px-4 py-8 bg-[#090a0c]">
        <div className="flex flex-col gap-6">
          
          {/* Brand header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="Dreamland Properties Logo" className="h-8 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-[8px] font-semibold text-[#c5a880] uppercase tracking-[0.2em]">PATHAMNUMBER</span>
                <span className="font-serif text-sm tracking-wider text-[#f4f1ea] font-medium">
                  DREAMLAND PROPERTIES
                </span>
              </div>
            </div>
            
            <a
              href="https://wa.me/916282844739?text=Hello%20Dreamland%20Properties%2C%20I%20am%20enquiring%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-panel rounded-full text-[#25D366] border border-[#25D366]/40"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Compact horizontal nav links */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 text-[11px] uppercase tracking-wider text-[#9e9a90]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-[#c5a880] transition-colors py-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Compact phone & location line */}
          <div className="text-[11px] text-[#9e9a90] font-light space-y-1.5">
            <p className="flex flex-col gap-1 text-[#e6e1d7]">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#c5a880]" />
                <a href="tel:+916282844739" className="font-mono hover:text-[#c5a880]">+91 6282 844 739</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-[#c5a880]" />
                <a href="tel:+916282844608" className="font-mono hover:text-[#c5a880]">+91 6282 844 608</a>
              </span>
            </p>
            <p className="text-[10px] text-[#9e9a90] line-clamp-1">
              Dev Arcade, Near Polytechnic College, Marutharode, Kootupatha, Palakkad
            </p>
          </div>

          {/* Download brochure button */}
          <a
            href="/brochure.pdf"
            download="Dreamland_Properties_Brochure.pdf"
            className="w-full py-2.5 bg-[#c5a880]/15 hover:bg-[#c5a880] text-[#c5a880] hover:text-[#0a0b0d] border border-[#c5a880]/30 text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Brochure PDF</span>
          </a>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[9px] text-[#9e9a90]">
            <p>© {new Date().getFullYear()} Pathamnumber Dreamland Properties Pvt Ltd. | DWC MEDIA 761 000 000</p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#c5a880] uppercase tracking-wider text-[9px]"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>

      {/* DESKTOP LARGE LUXURY FOOTER (md & up) */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Brand & Slogan (5 cols) */}
          <div className="col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src="/Logo.png" alt="Dreamland Properties Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-[9px] font-semibold text-[#c5a880] uppercase tracking-[0.2em]">PATHAMNUMBER</span>
                <span className="font-serif text-xl tracking-wider text-[#f4f1ea] font-medium">
                  DREAMLAND PROPERTIES
                </span>
              </div>
            </div>

            <p className="font-serif text-lg italic text-[#c5a880] mb-4">
              "YOUR LAND, YOUR VILLA! Inspired by nature."
            </p>

            <p className="text-xs text-[#9e9a90] font-light leading-relaxed max-w-md mb-4">
              PATHAMNUMBER DREAMLAND PROPERTIES PVT LTD presents Garden Green Gated Villa Enclave at Aalampallam Palakkad — comprising of just 22 luxury villas.
            </p>

            <p className="text-xs text-[#d8d2c5] font-light leading-relaxed">
              Dev Arcade, Near Polytechnic College, Marutharode, Kootupatha, Palakkad
            </p>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#c5a880] uppercase mb-6 font-serif">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-xs uppercase tracking-[0.15em] text-[#9e9a90] hover:text-[#c5a880] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/brochure.pdf"
                  download="Dreamland_Properties_Brochure.pdf"
                  className="text-xs uppercase tracking-[0.15em] text-[#c5a880] hover:underline flex items-center gap-1.5 pt-2 font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Brochure</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Connectivity (4 cols) */}
          <div className="col-span-4">
            <h4 className="text-xs font-semibold tracking-[0.25em] text-[#c5a880] uppercase mb-6 font-serif">
              Connect With Us
            </h4>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href="https://instagram.com/dreamlands_properties"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-panel border border-white/10 hover:border-[#c5a880] flex items-center justify-center text-[#e6e1d7] hover:text-[#c5a880] transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <Share2 className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/share/18Jo8uc8Vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-panel border border-white/10 hover:border-[#c5a880] flex items-center justify-center text-[#e6e1d7] hover:text-[#c5a880] transition-colors"
                aria-label="Facebook"
                title="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/916282844739?text=Hello%20Dreamland%20Properties%2C%20I%20am%20enquiring%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-panel border border-[#25D366]/40 hover:border-[#25D366] flex items-center justify-center text-[#25D366] transition-colors"
                aria-label="WhatsApp"
                title="WhatsApp Direct Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-1 text-xs text-[#9e9a90] font-light flex flex-col items-start">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <a href="tel:+916282844739" className="hover:text-[#c5a880] font-mono">+91 6282 844 739</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5"></span>
                <a href="tel:+916282844608" className="hover:text-[#c5a880] font-mono">+91 6282 844 608</a>
              </div>
              <p className="pt-1">
                Email: <a href="mailto:dreamlandspropertiespkd@gmail.com" className="text-[#c5a880] hover:underline font-mono">dreamlandspropertiespkd@gmail.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-row items-center justify-between text-[10px] text-[#9e9a90] font-light">
          <p>© {new Date().getFullYear()} Pathamnumber Dreamland Properties Pvt Ltd. | DWC MEDIA 761 000 000 | All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#c5a880] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#c5a880] transition-colors"
            >
              Terms &amp; Conditions
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#c5a880] hover:text-[#e2c99b] transition-colors uppercase tracking-wider text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Legal Modals */}
      <AnimatePresence>
        {legalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegalModal(null)}
              className="fixed inset-0 bg-[#0a0b0d]/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#121418] border border-[#c5a880]/30 p-8 max-w-xl w-full z-10 my-auto shadow-2xl"
            >
              <h3 className="font-serif text-2xl text-[#f4f1ea] mb-4 uppercase tracking-wider">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-[#9e9a90] font-light leading-relaxed mb-6">
                {legalModal === 'privacy'
                  ? 'Dreamland Properties respects your privacy. Information submitted through WhatsApp or our enquiry channels is used exclusively to assist you with real-estate services in Palakkad.'
                  : 'All property renderings, plot layouts, and specifications presented on this website are for illustrative context. Actual terms are subject to verified legal documentation upon contract execution.'}
              </p>
              <button
                onClick={() => setLegalModal(null)}
                className="px-6 py-2.5 bg-[#c5a880] text-[#0a0b0d] text-xs font-semibold uppercase tracking-wider"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
