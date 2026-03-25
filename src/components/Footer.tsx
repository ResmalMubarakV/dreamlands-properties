import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#cfe9d8] via-[#dfe7e2] to-[#d1d5db] text-gray-800 font-sans border-t border-gray-300 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      
      <div className="section-container py-12 md:py-12 lg:py-14">

        {/* FLEX */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-x-6 lg:gap-x-8 text-center">

          {/* Company Info */}
          <div className="w-full max-w-[240px]">
            <h3 className="text-lg md:text-sm lg:text-xl font-semibold mb-3 lg:mb-4">
              Dreamlands Properties
            </h3>

            <div className="flex flex-col items-center gap-2 text-gray-600 text-sm md:text-xs lg:text-sm leading-snug lg:leading-relaxed">
              
              <div className="flex items-start justify-center gap-2 text-center">
                <MapPin size={14} />
                <span>
                  Dev Arcade, Near Polytechnic College, Marutharode, Koottupaatha, Palakkad
                </span>
              </div>

              <div className="flex items-start justify-center gap-2 text-center">
                <Phone size={14} />
                <span>
                  +91 6282844739<br />
                  +91 6282844608<br />
                  +91 7034481892
                </span>
              </div>

              <div className="flex items-center justify-center gap-2 text-center">
                <Mail size={14} />
                <span>www.dreamlandsproperties.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="w-full max-w-[200px]">
            <h4 className="text-lg md:text-sm lg:text-lg font-semibold mb-3 lg:mb-4">
              Our Services
            </h4>

            <div className="flex flex-col items-center gap-1 text-gray-600 text-sm md:text-xs lg:text-sm">
              <span>Villa Construction</span>
              <span>Land Development</span>
              <span>Property Consultation</span>
              <span>Renovation Works</span>
              <span>Interior Designing</span>
            </div>
          </div>

          {/* Links */}
          <div className="w-full max-w-[180px]">
            <h4 className="text-lg md:text-sm lg:text-lg font-semibold mb-3 lg:mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col items-center gap-1 text-center">
              {["Home", "Projects", "Gallery", "About", "Contact"].map((label) => (
                <Link
                  key={label}
                  to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="text-gray-600 text-sm md:text-xs lg:text-sm hover:text-green-700 transition"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="w-full max-w-[200px]">
            <h4 className="text-lg md:text-sm lg:text-lg font-semibold mb-3 lg:mb-4">
              Follow Us
            </h4>

            <p className="text-gray-600 text-sm md:text-xs lg:text-sm mb-3 text-center">
              Stay connected for updates and offers.
            </p>

            <div className="flex justify-center gap-3 lg:gap-4">
              <a
                href="https://instagram.com/dreamlands_properties"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-7 md:h-7 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-600 hover:text-white transition"
              >
                <Instagram size={16} />
              </a>

              <a
                href="https://www.facebook.com/share/18Jo8uc8Vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-7 md:h-7 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-green-600 hover:text-white transition"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm md:text-xs lg:text-sm">
          © {new Date().getFullYear()} Dreamlands Properties. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;