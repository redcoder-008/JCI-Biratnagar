import React from 'react';
import SectionHeading from '../components/SectionHeading';
import LeadershipCard from '../components/LeadershipCard';
import { leadershipData } from '../data/leadership';

const Leadership: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Leadership</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Meet the dedicated team driving JCI Biratnagar towards creating positive change.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <SectionHeading title="Board of Directors" centered />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 justify-items-center">
          {leadershipData.map(member => (
            <div key={member.id} className="w-full max-w-[250px]">
              <LeadershipCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;
