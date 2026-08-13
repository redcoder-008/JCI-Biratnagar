import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import EventCard from '../components/EventCard';
import { eventsData } from '../data/events';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Past'>('All');

  const filteredEvents = eventsData.filter(event => 
    filter === 'All' ? true : event.category === filter
  );

  return (
    <div className="bg-gray-50 pb-20 min-h-screen">
      {/* Page Header */}
      <div className="bg-jci-blue py-16 text-center text-white">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Discover our upcoming activities and past milestones.</p>
        </div>
      </div>

      <div className="section-container mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <SectionHeading title="All Events" />
          
          {/* Filters */}
          <div className="flex gap-2 p-1 bg-white rounded-lg shadow-sm border border-gray-200">
            {['All', 'Upcoming', 'Past'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  filter === tab 
                    ? 'bg-jci-blue text-white shadow-sm' 
                    : 'text-gray-600 hover:text-jci-blue hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {filteredEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <h3 className="text-xl font-bold text-gray-500 mb-2">No Events Found</h3>
            <p className="text-gray-400">There are currently no {filter.toLowerCase()} events to display.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
