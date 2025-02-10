import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // **Function to handle menu navigation**
  const handleNavigation = (event: React.MouseEvent, section: string) => {
    event.preventDefault();

    if (location.pathname !== "/") {
      // If not on the home page, navigate to home first
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Allow time for navigation before scrolling
    } else {
      // If already on the home page, just scroll
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white p-4 shadow-lg z-50 flex justify-center">
      <nav className="container mx-auto flex flex-col items-center text-center">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link to="/" onClick={(e) => handleNavigation(e, "home")} className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavigation(e, "about")} className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleNavigation(e, "experience")} className="hover:text-blue-400">
              Experience
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavigation(e, "skills")} className="hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#resume" onClick={(e) => handleNavigation(e, "resume")} className="hover:text-blue-400">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavigation(e, "contact")} className="hover:text-blue-400">
              Contact
            </a>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
