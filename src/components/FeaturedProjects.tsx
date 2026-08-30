import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Villa Construction',
    'Land Development'
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.propertyType === activeFilter);

  return (
    <section id="projects" className="py-8 sm:py-14 md:py-18 bg-[#0d0e12] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-4 sm:gap-8">
          <SectionHeader
            eyebrow="VILLA &amp; PLOT MODELS"
            title="Garden Green Configurations"
            description="Explore our curated residential villa configurations and gated land plot opportunities at Aalampallam Palakkad."
          />

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-[0.15em] transition-all duration-300 border ${
                  activeFilter === option
                    ? 'bg-[#c5a880] text-[#0a0b0d] border-[#c5a880] font-semibold'
                    : 'bg-transparent text-[#9e9a90] border-white/10 hover:text-[#f4f1ea] hover:border-white/20'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Immersive Project Cards Grid: Touch Horizontal Scroll on Mobile, 3-Col Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-4 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredProjects.map((project) => (
            <div key={project.id} className="min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-center shrink-0 md:shrink flex flex-col">
              <ProjectCard
                project={project}
                onExplore={onSelectProject}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
