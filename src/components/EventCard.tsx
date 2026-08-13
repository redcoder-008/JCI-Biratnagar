import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="card flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-jci-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {event.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-jci-blue transition-colors">
          {event.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar size={16} className="mr-2 text-jci-gold shrink-0" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock size={16} className="mr-2 text-jci-gold shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-start text-sm text-gray-600">
            <MapPin size={16} className="mr-2 text-jci-gold shrink-0 mt-0.5" />
            <span className="line-clamp-1">{event.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
          {event.description}
        </p>
        
        <Link 
          to={`/events/${event.slug}`}
          className="inline-flex items-center text-jci-blue font-semibold hover:text-jci-gold transition-colors mt-auto"
        >
          View Details
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
