import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating to a new page
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Blogs & Articles', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-md py-2' 
          : 'bg-blue-900/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>LKR</span>
            <span className={`text-xl ml-2 hidden sm:inline-block ${scrolled ? 'text-gray-700' : 'text-gray-200'}`}>& Associates</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? scrolled 
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-white border-b-2 border-white'
                    : scrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-gray-100 hover:text-white hover:border-b-2 hover:border-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 py-2 ${
                    location.pathname === link.path
                      ? 'text-blue-600 border-l-4 border-blue-600 pl-2'
                      : 'text-gray-700 hover:text-blue-600 pl-3'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;