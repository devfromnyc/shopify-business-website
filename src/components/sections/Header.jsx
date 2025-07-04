import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg relative">
      <div className="flex justify-between items-center w-full px-4">
        {/* Logo - Left on Desktop, Center on Mobile */}
        <div className="flex items-center py-4 absolute left-1/2 transform -translate-x-1/2 md:relative md:left-[50px] md:transform-none">
          <Link to="/" className="font-bold text-gray-800 text-2xl">
            Logo
          </Link>
        </div>

        {/* Mobile Hamburger Button - Left Side */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-[#355965] hover:text-gray-800 focus:outline-none focus:text-gray-800 transition-colors"
            aria-label="Toggle mobile menu">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu - Center */}
        <div className="hidden md:flex items-center justify-evenly min-w-[600px] space-x-4">
          <Link
            to="/"
            className="text-[#355965] hover:text-gray-800 transition-colors">
            Home
          </Link>
          <a
            href="#about"
            className="text-[#355965] hover:text-gray-800 transition-colors">
            About
          </a>
          <a
            href="#services"
            className="text-[#355965] hover:text-gray-800 transition-colors">
            Services
          </a>
          <a
            href="#pricing"
            className="text-[#355965] hover:text-gray-800 transition-colors">
            Pricing
          </a>
          <a
            href="#contact"
            className="text-[#355965] hover:text-gray-800 transition-colors">
            Contact
          </a>
        </div>

        {/* Desktop Get Started Button - Right Side */}
        <div className="hidden md:flex items-center py-4">
          <a
            href="#contact"
            className="bg-[#355965] hover:bg-[#2a464f] text-white font-bold py-2 px-4 rounded transition-colors">
            Get Started
          </a>
        </div>

        {/* Mobile Spacer - Right Side (to balance hamburger on left) */}
        <div className="md:hidden w-6"></div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 z-50 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-[#355965] hover:text-gray-800 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <a
              href="#about"
              className="block px-3 py-2 text-[#355965] hover:text-gray-800 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-[#355965] hover:text-gray-800 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 text-[#355965] hover:text-gray-800 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-[#355965] hover:text-gray-800 hover:bg-slate-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <div className="pt-2">
              <a
                href="#contact"
                className="block w-full bg-[#355965] hover:bg-[#2a464f] text-white font-bold py-2 px-4 rounded transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
