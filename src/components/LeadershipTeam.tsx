import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { UserCheck, ShieldCheck, Award } from 'lucide-react';

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  description: string;
  initials: string;
}

const leadershipData: LeadershipMember[] = [
  {
    id: 'anil-chacko',
    name: 'Anil Chacko',
    role: 'Managing Director',
    badge: 'Executive Leadership',
    description: 'With strong leadership and vision, Anil Chacko drives PATHAMNUMBER DREAMLAND PROPERTIES PVT LTD towards delivering high-quality, nature-inspired residential developments focused on trust and modern gated living.',
    initials: 'AC'
  },
  {
    id: 'ratheesh-rajan',
    name: 'Ratheesh Rajan',
    role: 'Senior Manager',
    badge: 'Operations & Quality Control',
    description: 'Ratheesh Rajan ensures smooth execution of projects, strict adherence to site planning boundaries, and maintains high standards in customer experience and timely property handovers.',
    initials: 'RR'
  }
];

export const LeadershipTeam: React.FC = () => {
  return (
    <section id="leadership" className="py-8 sm:py-14 md:py-16 bg-[#0a0b0d] relative border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-3xl pointer-events-none transform translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          eyebrow="LEADERSHIP"
          title="The People of Dreamland"
          description="Guided by experienced leaders dedicated to structural excellence, transparent client guidance, and quality property execution in Palakkad."
        />

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 mt-6 sm:mt-12">
          {leadershipData.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group p-5 sm:p-10 bg-[#121418] border border-white/10 hover:border-[#c5a880]/50 rounded-xl sm:rounded-2xl transition-all duration-500 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle card corner gold glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a880]/5 rounded-bl-full pointer-events-none group-hover:bg-[#c5a880]/15 transition-all duration-500" />

              <div>
                {/* Header info with Initials Monogram Avatar */}
                <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-white/5 group-hover:border-[#c5a880]/30 transition-colors">
                  <div className="flex items-center gap-4">
                    {/* Monogram Badge */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1a1d24] border border-[#c5a880]/40 group-hover:border-[#c5a880] flex items-center justify-center font-serif text-xl sm:text-2xl font-semibold text-[#c5a880] shadow-inner transition-colors">
                      {member.initials}
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#c5a880] block mb-1">
                        {member.badge}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#f4f1ea] group-hover:text-[#c5a880] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-[#9e9a90] font-light mt-0.5">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex p-2.5 rounded-lg bg-white/5 text-[#c5a880] border border-white/5">
                    {idx === 0 ? <Award className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#d8d2c5] font-light leading-relaxed mb-6">
                  {member.description}
                </p>
              </div>

              {/* Bottom Footer Accent */}
              <div className="flex items-center gap-2 pt-4 text-xs font-mono text-[#c5a880]/80">
                <UserCheck className="w-4 h-4 text-[#c5a880]" />
                <span>Dreamland Leadership • Palakkad</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;
