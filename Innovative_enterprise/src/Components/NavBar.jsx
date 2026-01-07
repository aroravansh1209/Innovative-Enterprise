import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="h-10 flex-shrink-0">
          <img src="/logo.jpg" alt="Logo" className="h-full w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className={`text-white font-medium relative pb-1 hover:text-red-600 transition-colors duration-300 
              ${currentPath === "/" ? "after:w-full" : "after:w-0"}
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            className={`text-white font-medium relative pb-1 hover:text-red-600 transition-colors duration-300 
              ${currentPath === "/about-us" ? "after:w-full" : "after:w-0"}
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300`}
          >
            About us
          </Link>

          <Link
            to="/contact"
            className={`text-white font-medium relative pb-1 hover:text-red-600 transition-colors duration-300 
              ${currentPath === "/contact" ? "after:w-full" : "after:w-0"}
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop CTA Button */}
        <Link
          to="/contact"
          className="hidden md:block px-8 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 z-50 p-6 transform transition-transform duration-300 md:hidden
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button onClick={() => setMobileMenuOpen(false)} className="text-white mb-6">
          ✕
        </button>

        {/* Mobile Links */}
        <nav className="flex flex-col gap-6">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-white text-lg font-medium hover:text-red-600 ${
              currentPath === "/" ? "underline underline-offset-4 text-red-600" : ""
            }`}
          >
            Home
          </Link>

          <Link
            to="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-white text-lg font-medium hover:text-red-600 ${
              currentPath === "/about-us" ? "underline underline-offset-4 text-red-600" : ""
            }`}
          >
            About us
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-white text-lg font-medium hover:text-red-600 ${
              currentPath === "/contact" ? "underline underline-offset-4 text-red-600" : ""
            }`}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-3 bg-red-600 text-white text-center font-semibold rounded hover:bg-red-700"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
