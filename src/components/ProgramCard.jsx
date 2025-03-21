import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramCard({ title, description, imageUrl }) {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 max-w-sm">
      <img 
        src={imageUrl} 
        alt={title} 
        className="rounded-lg w-full h-48 object-cover"
      />
      <h3 className="text-2xl font-bold text-[#1E3A8A] mt-4 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
      <Link to={`/programs/${slug}`} className="mt-6 px-5 py-2 bg-[#1E3A8A] text-white font-medium rounded-lg hover:bg-[#172B68] transition-all">
        Learn More
      </Link>
    </div>
  );
}
