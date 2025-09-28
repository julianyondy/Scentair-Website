import React from 'react';
import { CheckCircle } from 'lucide-react';

export const OverlayImageSectionA: React.FC = () => {
  const benefits = [
    { 
      title: 'Higher Retention Rates', 
      description: 'Customers stay longer in scented environments, increasing engagement and satisfaction.' 
    },
    { 
      title: 'Increased Conversion', 
      description: 'Strategic scenting can boost purchase intent by creating positive emotional associations.' 
    },
    { 
      title: 'Favorable Reviews', 
      description: 'Pleasant scents contribute to memorable experiences that customers want to share.' 
    },
    { 
      title: 'Brand Differentiation', 
      description: 'A signature scent sets your brand apart and creates a unique sensory identity.' 
    },
    { 
      title: 'Stronger Loyalty', 
      description: 'Scent triggers emotional memories, making customers more likely to return.' 
    },
    { 
      title: 'Improved Customer Experience', 
      description: 'Thoughtfully designed scent environments enhance overall customer satisfaction.' 
    },
  ];

  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full -mt-16 -mr-16 opacity-30 shadow-2xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-teal-100 rounded-full opacity-40 shadow-xl"></div>
      <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-cyan-200 rounded-full opacity-20 shadow-md"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 px-6 md:px-16">
        {/* Headline centered above the content */}
        <div className="w-full text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
            Scent Drives Customer Behavior
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto animate-slide-up">
            Strategic scenting creates powerful psychological effects that influence how customers 
            perceive and interact with your brand.
          </p>
        </div>
      </div>

      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 px-6 md:px-16">
        {/* Content card with benefits grid */}
        <div className="w-full md:w-3/5 h-full">
          <div className="rounded-2xl shadow-xl p-8 w-full border-l-4 border-cyan-500 transition-all duration-700 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start group transition-all duration-500 hover:bg-cyan-50 p-4 rounded-xl"
                >
                  <div className="mr-4 flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center mt-1 group-hover:bg-cyan-500 transition-colors duration-300">
                    <CheckCircle
                      className="text-cyan-600 group-hover:text-white transition-colors duration-300"
                      size={20}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image on the right */}
        <div className="w-full md:w-2/5 h-full flex justify-center">
          <div className="relative w-full max-w-xl h-80 md:h-[450px]">
            {/* Floating image elements */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-cyan-200 rounded-2xl z-0 shadow-2xl"></div>
            <div className="absolute -top-2 -left-2 w-full h-full rounded-2xl z-0 shadow-xl"></div>
            
            <img
              src="/assets/whyscent/image2.jpg"
              alt="Scent benefits visualization"
              className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transition-all duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
