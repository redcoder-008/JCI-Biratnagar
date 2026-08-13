import React from 'react';
import type { LeadershipMember } from '../types';

interface LeadershipCardProps {
  member: LeadershipMember;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center group">
      <div className="mb-4 aspect-square w-full max-w-56 overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-transform duration-300 group-hover:-translate-y-2">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
      <div className="text-sm font-semibold text-jci-gold uppercase tracking-wider">{member.position}</div>
    </div>
  );
};

export default LeadershipCard;
