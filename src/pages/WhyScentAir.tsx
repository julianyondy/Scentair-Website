import React from 'react';
import { AboutHero } from '../components/sections/AboutHero';
import { OurStory } from '../components/sections/OurStory';
import { WhatMakesUsDifferent } from '../components/sections/WhatMakesUsDifferent';
import { CorporateResponsibility } from '../components/sections/CorporateResponsibility';

export const WhyScentAir: React.FC = () => {
  return (
    <div className="pt-[180px]">
      <AboutHero />
      <OurStory />
      <WhatMakesUsDifferent />
      <CorporateResponsibility />
    </div>
  );
};