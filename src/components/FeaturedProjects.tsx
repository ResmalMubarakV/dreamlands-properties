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
    <section id="projects" className="py-14 md:py-18 bg-[#0d0e12] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
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
                className={`whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 border ${
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

        {/* Immersive Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onExplore={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
