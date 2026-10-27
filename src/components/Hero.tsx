import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white py-16 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Discover & Join Campus Events
      </h1>
      <p className="text-slate-300 text-lg max-w-2xl mx-auto">
        Stay updated with workshops, cultural fests, hackathons, and sports activities happening across campus.
      </p>
    </div>
  );
};