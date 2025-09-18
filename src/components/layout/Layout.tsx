import React from 'react';
import { SiteHeader } from './SiteHeader';
import { Footer } from './Footer';
import { FreeConsultationButton } from '../ui/FreeConsultationButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main>
        {children}
      </main>
      <Footer />
      <FreeConsultationButton />
    </div>
  );
};
