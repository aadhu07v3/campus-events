import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface EventProps {
  event: {
    id: number;
    title: string;
    category: string;
    date: string;
    location: string;
    description: string;
    image: string;
  };
}

export const EventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
      <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-3">
            {event.category}
          </span>
          <h3 className="text-xl font-bold text-slate-800 mb-2">{event.title}</h3>
          <p className="text-slate-600 text-sm mb-4">{event.description}</p>
        </div>
        
        <div className="border-t pt-3 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4 text-indigo-500" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};