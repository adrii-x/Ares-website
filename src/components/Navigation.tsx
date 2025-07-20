
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

 useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Listen for scroll
  window.addEventListener('scroll', handleScroll);

  // Check scroll position immediately (on mount and route change)
  handleScroll();

  // Clean up
  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Frameworks', path: '/frameworks' },
    { label: 'Media', path: '/media' },
    { label: 'Partners', path: '/partners' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <div className="w-[80px] h-[100px] rounded-lg flex items-center justify-center ">
              <img
                src="/theme color(2).png"
                alt="Tyche & Ares Logo"
                className="sm:w-[70px] sm:h-[70px] w-[60px] h-[60px] object-contain rounded-lg"
                draggable={false}
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-inter font-medium text-sm xl:text-base  hover:text-gold-500 transition-colors duration-300 relative whitespace-nowrap ${
                  location.pathname === item.path ? 'text-gold-500' : 'text-navy-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <Link to="/contact" className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-gold hover:shadow-gold-lg relative overflow-hidden text-sm xl:text-base whitespace-nowrap">
              <span className="relative z-10">Partner With Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy-900 hover:text-gold-500 transition-colors flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <div className="py-4 sm:py-6 space-y-2 sm:space-y-4 px-4 sm:px-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 font-inter font-medium hover:text-gold-500 transition-colors duration-300 relative ${
                    location.pathname === item.path ? 'text-gold-500' : 'text-navy-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link 
                  to="/contact" 
                  className="bg-gold-500 hover:bg-gold-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-gold hover:shadow-gold-lg w-full text-center relative overflow-hidden block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10">Partner With Us</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
