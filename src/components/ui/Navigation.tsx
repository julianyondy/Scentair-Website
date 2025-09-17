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
  
    const isActive = (href: string) => {
          // For exact match
          if (location.pathname === href) return true;
          
          // For sub-pages, check if current path starts with the href
          // and ensure it's actually a sub-path (next char is '/')
          if (href !== '/' && location.pathname.startsWith(href)) {
            const nextChar = location.pathname[href.length];
            return nextChar === '/' || nextChar === undefined;
          }
          
          return false;
        };

  return (
    <nav className={className}>
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            aria-current={isActive(item.href) ? 'page' : undefined}
            className={`text-primary hover:text-primary-light transition-all duration-200 font-medium px-4 py-2 rounded-lg ${
                          isActive(item.href)
                            ? 'bg-primary text-white'
                            : ''
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
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`block w-full text-left px-4 py-3 text-primary transition-all duration-200 font-medium rounded-lg mx-2 my-1 ${
                                      isActive(item.href)
                                        ? 'bg-primary text-white'
                                        : 'hover:bg-gray-100'
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