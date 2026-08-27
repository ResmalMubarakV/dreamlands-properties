import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandIntroduction } from './components/BrandIntroduction';
import { FeaturedProjects } from './components/FeaturedProjects';
import { PropertyCategory } from './components/PropertyCategory';
import { WhyDreamlands } from './components/WhyDreamlands';
import { PalakkadSection } from './components/PalakkadSection';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { AboutCompany } from './components/AboutCompany';
import { LeadershipTeam } from './components/LeadershipTeam';
import { TrustSection } from './components/TrustSection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './data/projects';

function MainLandingContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedServiceInterest, setSelectedServiceInterest] = useState<string>('Villa Construction');
  const location = useLocation();

  // Force page reload/refresh to start at top of page (0, 0)
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (location.pathname === '/' && !location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  // Scroll to section based on route path
  useEffect(() => {
    let targetId = '';
    if (location.pathname === '/projects') targetId = 'projects';
    if (location.pathname === '/gallery') targetId = 'gallery';
    if (location.pathname === '/about') targetId = 'about';
    if (location.pathname === '/contact') targetId = 'contact';

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.pathname]);

  const scrollToEnquiry = (serviceInterest?: string) => {
    if (serviceInterest) {
      setSelectedServiceInterest(serviceInterest);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0d] text-[#e6e1d7] font-sans selection:bg-[#c5a880] selection:text-[#0a0b0d]">
      {/* Header Navigation */}
      <Header />

      {/* Main Experience */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={scrollToExplore}
          onContactClick={() => scrollToEnquiry()}
        />

        {/* 2. Brand Introduction */}
        <BrandIntroduction />

        {/* 3. Featured Portfolio Projects */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Services Offered */}
        <PropertyCategory onSelectCategory={(serviceName) => scrollToEnquiry(serviceName)} />

        {/* 5. Why Dreamland */}
        <WhyDreamlands />

        {/* 6. Palakkad Section */}
        <PalakkadSection />

        {/* 7. Cinematic Gallery */}
        <Gallery />

        {/* 8. Property Experience / Process */}
        <Process />

        {/* 9. About Company */}
        <AboutCompany onContactClick={() => scrollToEnquiry()} />

        {/* 10. Leadership Team */}
        <LeadershipTeam />

        {/* 11. Trust Section */}
        <TrustSection />

        {/* 12. Enquiry Section */}
        <EnquirySection initialPropertyInterest={selectedServiceInterest} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onEnquire={(projectName) => scrollToEnquiry(projectName)}
      />

      {/* Fixed WhatsApp Button in Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* WhatsApp Fixed Button */}
        <a
          href="https://wa.me/916282844739?text=Hello%20Dreamland%20Properties%2C%20I%20am%20enquiring%20about%20your%20services%20in%20Palakkad."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center p-3.5 sm:p-4 bg-[#121418] border border-[#25D366]/50 hover:border-[#25D366] text-[#25D366] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 group/btn"
          aria-label="Enquire via WhatsApp (+91 6282844739)"
          title="Enquire via WhatsApp (+91 6282844739)"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none opacity-40"></span>

          {/* Official WhatsApp Logo Icon */}
          <svg
            className="w-6 h-6 relative z-10 fill-[#25D366] transition-transform duration-300 group-hover/btn:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>

          {/* Hover Tooltip Label */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover/btn:max-w-xs transition-all duration-500 ease-out text-xs font-semibold uppercase tracking-wider text-[#e6e1d7] pl-0 group-hover/btn:pl-2.5">
            WhatsApp Enquiry
          </span>
        </a>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainLandingContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
