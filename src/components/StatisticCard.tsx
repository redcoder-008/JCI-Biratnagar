import React from 'react';

interface StatisticCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ number, label, icon }) => {
  return (
    <div className="text-center group">
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-jci-gold transition-transform duration-300 group-hover:scale-110">
          {icon || (
            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" color="currentColor">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
              <path d="M8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2C12 2 8 6 8 12Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"></path>
            </svg>
          )}
        </div>
      </div>
      <div className="text-4xl md:text-5xl font-bold text-jci-gold mb-2">{number}</div>
      <div className="text-sm md:text-base font-medium text-white/80 uppercase tracking-wider">{label}</div>
    </div>
  );
};

export default StatisticCard;
