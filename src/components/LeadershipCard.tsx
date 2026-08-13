import React from 'react';
import type { LeadershipMember } from '../types';

interface LeadershipCardProps {
  member: LeadershipMember;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ member }) => {
  const isPresident = member.position === 'President';

  return (
    <article className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${isPresident ? 'border-jci-gold ring-1 ring-jci-gold/35 shadow-lg shadow-jci-gold/10' : 'border-slate-100 hover:border-jci-blue/25'}`}>
      {isPresident && <span className="absolute left-1/2 top-5 z-10 -translate-x-1/2 rounded-full bg-jci-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-sm">President</span>}
      <div className={`mb-4 aspect-[4/4.35] w-full overflow-hidden rounded-xl bg-slate-100 ${isPresident ? 'ring-2 ring-jci-gold/50' : ''}`}>
        <img 
          src={member.image} 
          alt={`${member.name} - ${member.position}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-1 text-lg font-bold text-jci-blue">{member.name}</h3>
      <div className="text-xs font-bold uppercase tracking-[0.13em] text-jci-gold">{member.position}</div>
    </article>
  );
};

export default LeadershipCard;
