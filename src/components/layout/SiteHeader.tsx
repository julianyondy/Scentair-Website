import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Navigation } from '../ui/Navigation';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Why Scent', href: '/why-scent' },
  { label: 'Why ScentAir', href: '/why-scentair' },
  { label: 'Solutions', href: '/products' },
  { label: 'Our Partners', href: '/our-partners' },
  { label: 'Contact Us', href: '/contact' },
];

export const SiteHeader: React.FC = () => {
  const [isHomeTop, setIsHomeTop] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';
  
  // Determine if we should use the light logo
  const useLightHeader = isHomePage && isHomeTop && !isScrolled;
  
  // Set up scroll and intersection observers
  useEffect(() => {
    // Reset states when location changes
    if (!isHomePage) {
      setIsHomeTop(false);
      setIsScrolled(false);
      return;
    }
    
    // Function to handle scroll events with threshold
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Set up IntersectionObserver for homepage hero section
    let observer: IntersectionObserver | null = null;
    
    if (window.IntersectionObserver) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            setIsHomeTop(entry.isIntersecting);
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );
      
      // Try to observe the hero section
      const heroElement = document.getElementById('home');
      if (heroElement) {
        observer.observe(heroElement);
      }
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isHomePage]);
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        useLightHeader
          ? 'bg-gradient-to-b from-black/70 to-transparent'
          : 'bg-white/95 backdrop-blur shadow-sm'
      }`}
    >
      <Container>
        <div className="flex flex-col items-center justify-center pt-[1px] pb-[10px]">
          {/* Logo - centered */}
          <div className="flex-shrink-0 mb-3 h-16 sm:h-18 md:h-20">
            <Link
              to="/"
              className="inline-block"
              aria-label="Go to homepage"
            >
              {/* Logo.png - used on all pages */}
              <img
                src="/assets/logos/Logo.png"
                alt="ScentAir Logo"
                className="h-24 sm:h-28 md:h-20 w-auto"
              />
            </Link>
          </div>

          {/* Navigation - centered below logo */}
          <div>
            <Navigation
              items={navItems}
              className={`relative transition-all duration-300 ${
                useLightHeader
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