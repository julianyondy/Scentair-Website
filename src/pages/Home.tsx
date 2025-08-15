import React from 'react';
import { Hero } from '../components/sections/Hero';
import { InfoCards } from '../components/sections/InfoCards';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="py-8">
        <InfoCards />
      </div>
    </div>
  );
};