import React from 'react';
import { SiteHeader } from './SiteHeader';
import { Footer } from './Footer';
import { FreeConsultationButton } from '../ui/FreeConsultationButton';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className={isHomePage ? "" : "pt-[120px]"}>
        {children}
      </main>
      <Footer />
      <FreeConsultationButton />
    </div>
  );
};
