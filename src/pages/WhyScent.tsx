import React from 'react';
import { HeroImageSection } from '../components/sections/HeroImageSection';
import { OverlayImageSectionA } from '../components/sections/OverlayImageSectionA';
import { OverlayImageSectionB } from '../components/sections/OverlayImageSectionB';

export const WhyScent: React.FC = () => {
  return (
    <div className="pt-[180px]">
      <HeroImageSection />
      <OverlayImageSectionA />
      <OverlayImageSectionB />
    </div>
  );
};