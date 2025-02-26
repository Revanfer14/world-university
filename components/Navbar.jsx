import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Prevent scrolling when menu is open
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto"; // Restore scrolling
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-gray-900 font-primary w-full">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/logo.png" className="w-auto h-16" alt="Logo" />
          <span className="text-4xl font-semibold text-white">
            WorldUniversity
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="text-white text-3xl md:hidden focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/filter" className="text-xl text-white hover:text-blue-600">
            Countries
          </Link>
          <Link to="/about" className="text-xl text-white hover:text-blue-600">
            About
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[100] flex flex-col items-center justify-center space-y-8 text-white text-2xl backdrop-blur-md"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} // Transparency applied
        >
          <button
            className="absolute top-6 right-6 text-4xl focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>

          <Link
            to="/filter"
            className="hover:text-blue-400"
            onClick={toggleMenu}
          >
            Countries
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-400"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
