import React from 'react';
import { Calendar, Search } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-2">
        <Calendar className="w-7 h-7 text-indigo-400" />
        <span className="text-xl font-bold tracking-wide">CampusEvents</span>
      </div>
      <div className="relative w-1/3">
        <input 
          type="text" 
          placeholder="Search events..." 
          className="w-full bg-slate-800 text-sm text-slate-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
      </div>
    </nav>
  );
};