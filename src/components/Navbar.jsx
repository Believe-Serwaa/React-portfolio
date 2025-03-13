import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["home", "about", "experience", "services", "portfolio", "contact"];

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 p-4 flex items-center justify-between backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-gray-800/90 shadow-lg" : "bg-gray-900/50"
      }`}
    >
      {/* Logo */}
      <h4 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
        KB.
      </h4>

      {/* Hamburger Menu Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none hover:text-blue-400 transition-colors duration-300">
          {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-6 ${
          isMenuOpen
            ? "block absolute top-16 right-4 bg-gray-800/90 rounded-lg p-4 shadow-lg space-y-4"
            : "hidden"
        }`}
      >
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "experience", label: "Experience" },
          { id: "services", label: "Services" },
          { id: "portfolio", label: "Portfolio" },
          { id: "contact", label: "Contact" },
        ].map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-2 px-4 transition-all duration-300 rounded-lg ${
                activeSection === id
                  ? "text-white font-bold border-2 border-blue-400" // Active link style
                  : "text-white hover:bg-blue-400 hover:text-gray-900" // Hover style
              }`}
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;