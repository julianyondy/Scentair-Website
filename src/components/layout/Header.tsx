import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Navigation } from '../ui/Navigation';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Why Scent', href: '/why-scent' },
  { label: 'Products', href: '/products' },
  { label: 'Our Partners', href: '/our-partners' },
  { label: 'Why ScentAir', href: '/why-scentair' },
  { label: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  // Determine if we should use the light logo
  const useLogoLight = isHomePage && isTop;

  useEffect(() => {
    // Reset isTop when location changes
    if (!isHomePage) {
      setIsTop(false);
      return;
    }
    
    // Only add scroll listener on home page
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useLogoLight
          ? 'bg-gradient-to-b from-black/70 to-transparent'
          : 'bg-white/95 backdrop-blur shadow-sm'
      }`}
    >
      <Container>
        <div className="flex flex-col items-center justify-center pt-[1px] pb-[10px]">
          {/* Logo - centered */}
          <div className="flex-shrink-0 mb-3 h-28 sm:h-32">
            <Link
              to="/"
              className="transition-all duration-500 inline-block"
              aria-label="Go to homepage"
            >
              {/* Logo1.png - used on all pages */}
              <img
                src="/assets/logos/Logo1.png"
                alt="ScentAir Logo"
                className="h-28 sm:h-32 w-auto"
              />
            </Link>
          </div>

          {/* Navigation - centered below logo */}
          <div>
            <Navigation
              items={navItems}
              className={`relative transition-all duration-300 ${
                useLogoLight
                  ? 'text-white [&_a]:text-white [&_a:hover]:text-white/80'
                  : 'text-gray-900 [&_a]:text-gray-900 [&_a:hover]:text-gray-700'
              }`}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
