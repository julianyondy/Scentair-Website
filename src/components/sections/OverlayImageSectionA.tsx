import React from 'react';
import { CheckCircle } from 'lucide-react';

export const OverlayImageSectionA: React.FC = () => {
  const benefits = [
    'Higher retention rates',
    'Increased conversion',
    'Favorable reviews',
    'Brand differentiation',
    'Stronger loyalty',
    'Improved customer experience',
  ];

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-full -mt-12 -mr-12 opacity-50 shadow-lg"></div>
      <div className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-teal-50 rounded-full opacity-30 shadow-md"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-stretch justify-center gap-y-8 md:gap-x-10 px-4 md:px-12 py-12">
        {/* Image on the left (matches card size) */}
        <div className="w-full md:w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-200 rounded-2xl z-0 shadow-xl"></div>
            <div className="absolute -top-2 -left-2 w-full h-full bg-white rounded-2xl z-0 shadow-md"></div>
            <img
              src="/assets/whyscent/image2.jpg"
              alt="Scent benefits visualization"
              className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transition-transform duration-700 hover:translate-y-1"
            />
          </div>
        </div>

        {/* Headline + card column (same width/height as image) */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          {/* Headline centered above the card */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-8 text-center">
            The Experience of Scent Drives Customer Behavior
          </h2>

          {/* Content card fills remaining height to match image */}
          <div className="flex-1 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8 w-full border-l-4 border-cyan-500 transition-all duration-700 hover:shadow-xl">
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-700 text-base group transition-transform duration-500 hover:translate-x-2"
                >
                  <div className="mr-3 flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-cyan-500 transition-colors duration-300">
                    <CheckCircle
                      className="text-cyan-600 group-hover:text-white transition-colors duration-300"
                      size={16}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="pt-0.5 transition-all duration-300 group-hover:translate-x-1">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
