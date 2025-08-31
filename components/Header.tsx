import React, { useState, useEffect } from 'react';
import { NAV_LINKS, ASSETS } from '../constants';
import ThemeToggle from './ThemeToggle';
import { MenuIcon, CloseIcon } from './icons/GenericIcons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified handler to close the mobile menu on link click
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={handleLinkClick} className="flex items-center space-x-2" aria-label="Aurora Devs Home">
            <img src={ASSETS.logo} alt="Aurora Devs Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-xl font-bold text-light-title dark:text-dark-title">Aurora Devs</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={handleLinkClick}
                className="text-light-text dark:text-dark-text font-medium hover:text-aurora-yellow transition-colors duration-300" 
                aria-label={`Go to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
             <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-light-title dark:text-dark-title"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-center space-y-4 pt-6 pb-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-light-text dark:text-dark-text font-medium hover:text-aurora-yellow transition-colors duration-300 text-lg"
                aria-label={`Go to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;