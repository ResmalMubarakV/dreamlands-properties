import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onExplore: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onExplore }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative bg-[#121418] border border-white/10 hover:border-[#c5a880]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden"
    >
      <div>
        {/* Top Header info */}
        <div className="p-6 pb-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="font-serif text-sm text-[#c5a880] font-mono">PROJECT {project.number}</span>
            <span className="w-1 h-1 bg-[#c5a880]/40 rounded-full"></span>
            <span className="text-[11px] uppercase tracking-[0.15em] text-[#9e9a90]">
              {project.propertyType}
            </span>
          </div>

          <span className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-medium text-[#c5a880] bg-[#c5a880]/10 border border-[#c5a880]/20">
            {project.status}
          </span>
        </div>

        {/* Large Immersive Project Image */}
        <div 
          onClick={() => onExplore(project)}
          className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-[#0a0b0d]"
        >
          <img
            src={project.mainImage}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />

          {/* Quick Hover Overlay Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0a0b0d]/40 backdrop-blur-[2px]">
            <span className="px-6 py-3 bg-[#c5a880] text-[#0a0b0d] text-xs font-semibold uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
              View Architectural Details
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-[#c5a880] font-light tracking-[0.2em] uppercase mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.location}</span>
          </div>

          <h3 className="font-serif text-2xl font-normal text-[#f4f1ea] group-hover:text-[#c5a880] transition-colors duration-300 mb-3">
            {project.name}
          </h3>

          <p className="text-sm text-[#9e9a90] font-light leading-relaxed mb-6 line-clamp-2">
            {project.shortDescription}
          </p>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="px-6 sm:px-8 pb-6 pt-0">
        <button
          onClick={() => onExplore(project)}
          className="w-full py-3.5 px-4 bg-white/5 hover:bg-[#c5a880] text-[#e6e1d7] hover:text-[#0a0b0d] border border-white/10 hover:border-[#c5a880] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-between group/btn"
        >
          <span>Explore Project</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
};
