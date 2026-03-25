import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/projects", label: "PROJECTS" },
  { to: "/gallery", label: "GALLERY" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#e6f2ec] to-[#f0f2f5] dark:from-[#0d1a14] dark:to-[#1a1c1e] backdrop-blur-md border-b border-border shadow-sm">
      <div className="section-container flex items-center justify-between h-24 md:h-28">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 lg:gap-4">
          
          {/* REPLACED BOX WITH IMAGE */}
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src="/Logo.png"
              alt="Dreamlands Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[9px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-sm font-semibold text-foreground/70 uppercase tracking-[0.2em] leading-none mb-1">
              PATHAMNUMBER
            </span>
            <span className="text-sm sm:text-base md:text-base lg:text-lg xl:text-2xl font-bold text-foreground uppercase tracking-wider leading-none whitespace-nowrap">
              DREAMLAND PROPERTIES
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2.5 lg:gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative text-sm lg:text-base xl:text-lg tracking-wide py-1"
            >
              <span className={`inline-block transition-transform duration-300 group-hover:scale-110 ${
                location.pathname === link.to
                  ? "font-bold bg-gradient-to-r from-green-700 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent"
                  : "font-medium bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-emerald-500 dark:group-hover:from-green-400 dark:group-hover:to-emerald-300"
              }`}>
                {link.label}
              </span>
              <span className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-green-700 to-emerald-500 dark:from-green-400 dark:to-emerald-300 transition-all duration-300 ${
                location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-1.5 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full border-t border-b border-border/40 bg-background/70 backdrop-blur-xl shadow-xl z-50 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="section-container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`group flex items-center py-3 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === link.to ? "bg-muted/60 shadow-sm" : "hover:bg-muted/60"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <div className="relative inline-block w-fit">
                  <span className={`inline-block transition-transform duration-300 origin-left group-hover:scale-105 text-sm tracking-widest uppercase ${
                    location.pathname === link.to
                      ? "font-bold bg-gradient-to-r from-green-700 to-emerald-500 dark:from-green-400 dark:to-emerald-300 bg-clip-text text-transparent"
                      : "font-medium bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-emerald-500 dark:group-hover:from-green-400 dark:group-hover:to-emerald-300"
                  }`}>
                    {link.label}
                  </span>
                  <span className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-green-700 to-emerald-500 dark:from-green-400 dark:to-emerald-300 transition-all duration-300 ${
                    location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </div>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;