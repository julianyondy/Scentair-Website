import React from 'react';
import { BarChart, TrendingUp, ShoppingCart } from 'lucide-react';

export const OverlayImageSectionB: React.FC = () => {
  const stats = [
    { 
      icon: <BarChart size={32} aria-hidden="true" />, 
      value: '18%', 
      description: 'Increased linger time in scented environments' 
    },
    { 
      icon: <TrendingUp size={32} aria-hidden="true" />, 
      value: '60%', 
      description: 'Of consumers were significantly more inclined to purchase' 
    },
    { 
      icon: <ShoppingCart size={32} aria-hidden="true" />, 
      value: '22%', 
      description: 'More products purchased in scented spaces' 
    },
  ];

  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 py-16">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-100 rounded-full -mb-20 -ml-20 opacity-30 shadow-2xl"></div>
      <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-teal-100 rounded-full opacity-40 shadow-xl"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-cyan-200 rounded-full opacity-20 shadow-md"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 px-6 md:px-16">
        {/* Headline centered above the content */}
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
            Scent Creates Measurable Business Results
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto animate-slide-up">
            Our research demonstrates that strategic scenting directly impacts key business metrics, 
            from customer engagement to sales conversion.
          </p>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 px-6 md:px-16">
        {/* Image on the left */}
        <div className="w-full md:w-2/5 h-full flex justify-center">
          <div className="relative w-full max-w-xl h-80 md:h-[450px]">
            {/* Floating image elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-teal-200 rounded-2xl z-0 shadow-2xl"></div>
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-gradient-to-br from-white to-cyan-50 rounded-2xl z-0 shadow-xl"></div>
            
            <img
              src="/assets/whyscent/image3.jpg"
              alt="Business results visualization"
              className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Statistics card on the right */}
        <div className="w-full md:w-3/5 h-full">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full border-r-4 border-teal-500 transition-all duration-700 hover:shadow-2xl">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((s, i) => (
                <div key={`stat-${i}`} className="flex items-center group">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mr-6 group-hover:bg-teal-500 transition-colors duration-300">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-4xl font-bold text-gray-900 mb-2">{s.value}</div>
                    <p className="text-gray-700 text-lg">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional descriptive text */}
            <div className="mt-8 p-4 bg-cyan-50 rounded-xl border-l-4 border-cyan-500">
              <p className="text-gray-700 italic">
                "Strategic scenting is not just about creating a pleasant environment—it's about 
                driving measurable business outcomes through sensory marketing."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
