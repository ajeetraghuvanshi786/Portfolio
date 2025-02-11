import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing menu icons

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle navigation
  const handleNavigation = (event: React.MouseEvent, section: string) => {
    event.preventDefault();
    setMenuOpen(false); // Close the menu when an item is clicked

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <h1 className="text-xl font-bold">PORTFOLIO</h1>

        {/* Desktop Menu - Shown only on md+ screens */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" onClick={(e) => handleNavigation(e, "home")} className="hover:text-blue-400">Home</a>
          <a href="#about" onClick={(e) => handleNavigation(e, "about")} className="hover:text-blue-400">About</a>
          <a href="#experience" onClick={(e) => handleNavigation(e, "experience")} className="hover:text-blue-400">Experience</a>
          <a href="#skills" onClick={(e) => handleNavigation(e, "skills")} className="hover:text-blue-400">Skills</a>
          <a href="#resume" onClick={(e) => handleNavigation(e, "resume")} className="hover:text-blue-400">Resume</a>
          <a href="#contact" onClick={(e) => handleNavigation(e, "contact")} className="hover:text-blue-400">Contact</a>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
        </nav>

        {/* Mobile Menu Button - Only visible on small screens */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu - Shown only when menuOpen is true */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-50 transform transition-transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col items-center space-y-6 mt-10 text-white text-xl">
          <a href="#home" onClick={(e) => handleNavigation(e, "home")}>Home</a>
          <a href="#about" onClick={(e) => handleNavigation(e, "about")}>About</a>
          <a href="#experience" onClick={(e) => handleNavigation(e, "experience")}>Experience</a>
          <a href="#skills" onClick={(e) => handleNavigation(e, "skills")}>Skills</a>
          <a href="#resume" onClick={(e) => handleNavigation(e, "resume")}>Resume</a>
          <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>Contact</a>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
