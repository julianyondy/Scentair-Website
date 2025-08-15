import React from 'react';
import { Container } from '../ui/Container';

export const OurStory: React.FC = () => {
  return (
    <section
    className="py-20 relative bg-cover bg-center bg-local"
    style={{
      backgroundImage: "url('/assets/homepage/pioneer.jpg')"
    }}
  >
      {/* 70% dark blue overlay */}
      <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our Story
          </h2>
          <p className="text-lg text-white mx-auto max-w-4xl">
            When a Disney Imagineer was tasked with adding scent to a few popular attractions, the idea of ScentAir was born. In 1994 we were founded on the notion that scent could turn a moment into a magical memory.
          </p>
          <p className="text-lg text-white mx-auto max-w-4xl mt-6">
            By 2000 we were charting new territory, helping brands give their customers cutting-edge, scented experiences that deliver powerful ROI. Today, we're the world's leading provider of air purification and experiential fragrance for business and home. With offices on four continents and a diverse team of 500+ employees, we enhance environments in 119 countries—and create experiences worth sharing.
          </p>
        </div>
      </Container>
    </section>
  );
};