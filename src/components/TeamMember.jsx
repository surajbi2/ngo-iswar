import { MapPin, Briefcase } from "lucide-react";

export default function TeamMember({ name, role, address, occupation }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 border border-gray-200 max-w-sm mx-auto ">
      <h3 className="text-2xl font-bold text-[#1E3A8A] mb-1">{name}</h3>
      <p className="text-[#FFD700] font-medium text-sm mb-4 uppercase tracking-wide">{role}</p>

      <div className="space-y-3 text-gray-700">
        <div className="flex items-center gap-2 text-sm">
          <Briefcase size={18} className="text-[#1E3A8A]" />
          <span>{occupation}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={18} className="text-[#1E3A8A]" />
          <span className="opacity-80">{address}</span>
        </div>
      </div>
    </div>
  );
}
