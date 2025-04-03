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
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              <span className="flex items-center">
                <span className="mr-2">{brandName}</span>
              </span>
            </a>
          </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="relative transition duration-300 text-gray-800 hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"

                    
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              {true && (
              <a 
              href={ctaLink} 
              className="relative bg-blue-600 text-white px-6 py-2 rounded-full border-2 border-blue-600 
                         hover:bg-white hover:text-blue-600 hover:border-blue-800 
                         hover:outline hover:outline-4 hover:outline-blue-400 transition duration-300 font-semibold shadow-lg 
                         !important"
            >
              {ctaText}
            </a>
            
              )}
            </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-blue-600 focus:outline-none"
              aria-label="Open menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-200">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className={`
                      block px-4 py-2 
                      ${item.type === 'primary' 
                        ? 'bg-blue-600 text-white rounded-full text-center hover:bg-blue-700' 
                        : 'text-gray-800 hover:text-blue-600'}
                      transition duration-300
                    `}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {navItems.length === 0 && (
                <li>
                  <a 
                    href={ctaLink} 
                    className="block bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700 transition duration-300"
                  >
                    {ctaText}
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;