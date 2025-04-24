import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className="relative font-medium text-blue-950 transition-all duration-300 group"
    >
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/objectives">Objectives</NavLink>
          <NavLink to="/programs">Programs</NavLink>

          <NavLink to="/get-involved">Get Involved</NavLink>
          <NavLink to="/rulesregulations">Rules and Regulations</NavLink>
          <NavLink to="/advisory-board">Advisory Board</NavLink>
          {/* <NavLink to="/members">Members</NavLink> */}
          <NavLink to="/contact">Contact us</NavLink>
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/objectives">Objectives</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          
<NavLink to="/advisory-board">Advisory Board</NavLink>
          <NavLink to="/get-involved">Get Involved</NavLink>
          <NavLink to="/rulesregulations">Rules and Regulations</NavLink>
          <NavLink to="/members">Members</NavLink>
          <NavLink to="/contact">Contact us</NavLink>
        </div>
      )}
    </nav>
  );
}