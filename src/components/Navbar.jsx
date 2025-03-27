import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-lg text-blue-950 p-4 sticky top-0 z-50 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="#1E3A8A" />
            <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="white" />
          </svg>
          <span className="text-2xl font-bold tracking-wide">ISWAR NGO</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">Home</Link>
          <Link to="/about" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">About Us</Link>
          <Link to="/objectives" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">Objectives</Link>
          <Link to="/programs" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">Programs</Link>
          <Link to="/get-involved" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">Get Involved</Link>
          <Link to="/rulesregulations" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">Rules and Regulations</Link>
          <Link to="/contact" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">Contact us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#1E3A8A] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 space-y-4 shadow-lg">
          <Link to="/" className="text-lg text-[#1E3A8A] hover:text-black transition-all duration-300 font-medium">Home</Link>
          <Link to="/about" className="text-lg text-[#1E3A8A] hover:text-black transition-all duration-300 font-medium">About Us</Link>
          <Link to="/objectives" className="text-lg text-[#1E3A8A] hover:text-black transition-all duration-300 font-medium">Objectives</Link>
          <Link to="/programs" className="text-lg text-[#1E3A8A] hover:text-black transition-all duration-300 font-medium">Programs</Link>
          <Link to="/get-involved" className="text-lg text-[#1E3A8A] hover:text-black transition-all duration-300 font-medium">Get Involved</Link>
          <Link to="/rulesregulations" className="text-lg text-[#1E3A8A] hover:text-black transition-all duration-300 font-medium">Rules and Regulations</Link>
          <Link to="/contact" className="hover:text-[#1E3A8A] transition-all duration-300 font-medium">Contact us</Link>
  
        </div>
      )}
    </nav>
  );
}
