import React from 'react';
import { WhyScentSection } from '../components/sections/WhyScentSection';

export const WhyScent: React.FC = () => {
  return (
    <div className="pt-[180px] bg-transparent">
      {/* Introduction section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Why Scent
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the science behind scent marketing and how it can transform your business
          </p>
        </div>
      </section>
      
      {/* Main content sections */}
            <WhyScentSection />
      
      {/* Conclusion section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Your Space with the Power of Scent
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            ScentAir's strategic scenting solutions create memorable experiences that drive customer engagement, 
            boost sales, and strengthen brand identity. Ready to discover how scent can elevate your business?
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};