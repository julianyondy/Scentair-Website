import React from 'react';
import { BarChart, TrendingUp, ShoppingCart } from 'lucide-react';

export const OverlayImageSectionB: React.FC = () => {
  const stats = [
    { icon: <BarChart size={24} aria-hidden="true" />, value: '18%', description: 'increased linger time' },
    { icon: <TrendingUp size={24} aria-hidden="true" />, value: '60%', description: 'of consumers were significantly more inclined to purchase' },
    { icon: <ShoppingCart size={24} aria-hidden="true" />, value: '22%', description: 'more products purchased' },
  ];

  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] overflow-hidden bg-white">
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-50 rounded-full -mb-16 -ml-16 opacity-50 shadow-lg"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-teal-50 rounded-full opacity-30 shadow-md"></div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-stretch justify-center gap-y-8 md:gap-x-10 px-4 md:px-12 py-12">
        {/* Left image */}
        <div className="w-full md:w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-200 rounded-2xl z-0 shadow-xl"></div>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-white rounded-2xl z-0 shadow-md"></div>
            <img
              src="/assets/whyscent/image3.jpg"
              alt="Business results visualization"
              className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transition-transform duration-700 hover:translate-y-1"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-8 text-center">
            Scent Creates Measurable Business Results
          </h2>

          <div className="flex-1 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-10 w-full border-l-4 border-cyan-500 relative">
            <div className="max-w-5xl mx-auto">
              {/* Icon row (drives arrow alignment) */}
              <div className="relative">
                <div className="grid grid-cols-3 items-start text-center">
                  {stats.map((s, i) => (
                    <div key={`icon-${i}`} className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                        {s.icon}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Arrows centered in the gaps */}
                <svg
                  className="hidden md:block pointer-events-none absolute left-0 right-0 top-[28px] w-full h-5 text-cyan-500"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <marker id="arrowHead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                      <path d="M0,0 L6,3 L0,6 Z" className="fill-current" />
                    </marker>
                  </defs>
                  {/* Left↔Middle gap (centered segment) */}
                  <line x1="25" y1="5" x2="41.67" y2="5" stroke="currentColor" strokeWidth="2.2" markerEnd="url(#arrowHead)" strokeLinecap="round" />
                  {/* Middle↔Right gap (centered segment) */}
                  <line x1="58.33" y1="5" x2="75" y2="5" stroke="currentColor" strokeWidth="2.2" markerEnd="url(#arrowHead)" strokeLinecap="round" />
                </svg>
              </div>

              {/* Values + descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center mt-4 md:mt-6">
                {stats.map((s, i) => (
                  <div key={`stat-${i}`} className="flex flex-col items-center">
                    <div className="text-3xl md:text-4xl font-bold text-gray-900">{s.value}</div>
                    <p className="text-gray-600 text-sm md:text-base leading-snug mt-1">{s.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
