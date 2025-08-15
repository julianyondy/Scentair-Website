import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../../types';

interface NavigationProps {
  items: NavItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ items, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={className}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            aria-current={location.pathname === item.href ? 'page' : undefined}
            className={`text-primary hover:text-primary-light transition-colors duration-200 font-medium ${
              location.pathname === item.href ? 'text-primary-light' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary hover:text-primary-light focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card shadow-custom border-t border-custom mt-1">
            <div className="py-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleNavClick}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                  className={`block w-full text-left px-4 py-2 text-primary hover:bg-white transition-colors duration-200 ${
                    location.pathname === item.href ? 'bg-white' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};