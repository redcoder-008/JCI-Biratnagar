import React from 'react';
import SectionHeading from '../components/SectionHeading';
import LeadershipCard from '../components/LeadershipCard';
import { leadershipData } from '../data/leadership';

const Leadership: React.FC = () => {
  return (
    <div className="bg-slate-50 pb-20">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Members</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">Meet the dedicated individuals leading JCI Biratnagar and contributing to our mission of leadership, development, and positive community impact.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <SectionHeading title="Our Members" centered />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {leadershipData.map(member => (
            <LeadershipCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
