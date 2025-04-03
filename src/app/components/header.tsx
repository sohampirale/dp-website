"use client"
import React, { useState } from 'react';

// Define interface for navigation item
interface NavItem {
  label: string;
  href: string;
  type?: 'primary' | 'secondary';
}

// Props interface for the Header component
interface HeaderProps {
  brandName?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaLink?: string;
}

const Header: React.FC<HeaderProps> = ({
  brandName = 'Display Promotion',
  navItems = [],
  ctaText = 'Get Started',
  ctaLink = '#'
}) => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<header className="fixed top-0 left-0 w-full z-50 bg-gray-900/30 backdrop-blur-xl border border-gray-600/50 shadow-lg py-4 px-6 text-white">
<div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
        <a href="#" className="text-2xl font-semibold text-gray-200">
          {brandName}
        </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="relative transition duration-300 text-gray-200 hover:text-blue-400 
                            after:content-[''] after:absolute after:left-0 after:bottom-0 
                            after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all 
                            after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href={ctaLink} 
            className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 
                      rounded-full border-2 border-blue-600 hover:from-blue-600 hover:to-blue-800 
                      hover:text-white hover:border-blue-900 hover:shadow-lg hover:shadow-blue-400/50 
                      hover:scale-105 transform transition-all duration-300 ease-out font-semibold"
          >
            {ctaText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-blue-600 focus:outline-none"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu with Slide Effect */}
        <div className={`md:hidden fixed inset-0 bg-white shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <span className="text-xl font-bold text-blue-600">{brandName}</span>
            <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-blue-600">
              ✕
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="block text-gray-800 text-lg font-medium px-4 py-2 rounded-md 
                            hover:bg-blue-100 hover:text-blue-600 transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a 
                href={ctaLink} 
                className="block bg-blue-600 text-white text-center px-6 py-3 rounded-full 
                          hover:bg-blue-700 transition duration-300"
              >
                {ctaText}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;