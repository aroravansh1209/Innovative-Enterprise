import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "md:bg-black/90 md:backdrop-blur-md bg-transparent"
            : "bg-transparent"
        }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="h-10 flex-shrink-0 z-10">
          <img src={Logo} alt="Logo" className="h-full w-auto" />
        </Link>

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
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
            to="/contact-us"
            className={`text-white font-medium relative pb-1 hover:text-red-600 transition-colors duration-300 
              ${currentPath === "/contact-us" ? "after:w-full" : "after:w-0"}
              after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-600 after:transition-all after:duration-300`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-white z-10"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
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
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="text-white mb-6"
        >
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
              currentPath === "/about-us"
                ? "underline underline-offset-4 text-red-600"
                : ""
            }`}
          >
            About us
          </Link>

          <Link
            to="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-white text-lg font-medium hover:text-red-600 ${
              currentPath === "/contact-us"
                ? "underline underline-offset-4 text-red-600"
                : ""
            }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
