import React from 'react';
import { Brain, CheckCircle, BarChart, TrendingUp, ShoppingCart } from 'lucide-react';

export const WhyScentSection: React.FC = () => {
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
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden">
        {/* Decorative accent elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48  rounded-full -mb-24 -mr-24 opacity-20 shadow-2xl"></div>
        <div className="absolute top-1/3 left-1/10 w-24 h-24  rounded-full opacity-30 shadow-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16  rounded-full opacity-40 shadow-md"></div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 px-6 md:px-16 py-16">
          
          {/* Text content on the left */}
          <div className="w-full md:w-2/5 h-full flex flex-col items-start justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              Scent Makes an <span className="text-cyan-600">Emotional</span> Impact
            </h1>
            
            <p className="text-gray-700 text-lg mb-8 max-w-2xl animate-slide-up">
              The sense of smell is directly linked to the limbic system, the part of the brain responsible for emotions and memories. 
              This powerful connection makes scent one of the most effective tools for creating lasting impressions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full animate-fadeInSlide">
              <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border-l-4 border-cyan-500 hover:shadow-xl transition-all duration-500">
                <Brain className="w-10 h-10 text-cyan-600 flex-shrink-0" />
                <p className="text-gray-800 font-medium">
                  Scent is the <span className="text-cyan-600 font-bold">STRONGEST</span> sense linked to memory & emotion.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image on the right */}
          <div className="w-full md:w-3/5 h-full flex justify-center">
            <div className="relative w-full max-w-2xl h-96 md:h-[500px]">
              {/* Floating image elements */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-cyan-200 rounded-2xl z-0 shadow-2xl"></div>
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl z-0 shadow-xl"></div>
              
              <img
                src="/assets/whyscent/image1.jpg"
                alt="Scent visualization"
                className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transition-transform duration-700 hover:scale-105"
              />
              
              {/* Floating statistic cards */}
              <div className="absolute -bottom-6 -right-6 w-30 h-30 rounded-full shadow-lg flex flex-col items-center justify-center bg-cyan-600 text-white z-20 animate-fadeInSlide">
                <h3 className="text-2xl font-bold mb-1">63%</h3>
                <p className="text-xs text-center leading-tight">
                  Mood improvement with a pleasing scent.
                </p>
              </div>

              <div className="absolute top-1/4 -left-12 w-30 h-30 rounded-full shadow-lg flex flex-col items-center justify-center bg-cyan-600 text-white z-20 animate-fadeInSlide">
                <h3 className="text-2xl font-bold mb-1">75%</h3>
                <p className="text-xs text-center leading-tight">
                  Of emotions come from what we smell.
                </p>
              </div>

              <div className="absolute top-0 right-0 w-30 h-30 rounded-full shadow-lg flex flex-col items-center justify-center bg-cyan-600 text-white z-20 animate-fadeInSlide">
                <h3 className="text-2xl font-bold mb-1">100x</h3>
                <p className="text-xs text-center leading-tight">
                  More likely to remember scent vs sight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden py-16">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mt-16 -mr-16 opacity-30 shadow-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full opacity-40 shadow-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-12 h-12 rounded-full opacity-20 shadow-md"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 px-6 md:px-16">
          {/* Headline centered above the content */}
          <div className="w-full text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight animate-fade-in">
              The Experience of Scent Drives Customer Behavior
            </h2>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto animate-slide-up">
              Strategic scenting creates powerful psychological effects that influence how customers 
              perceive and interact with your brand.
            </p>
          </div>
        </div>

        <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-16 px-6 md:px-16">
          {/* Content card with benefits grid */}
          <div className="bg-white w-full md:w-3/5 h-full">
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

      {/* Statistics Section */}
      <section className="relative min-h-[70vh] md:min-h-[90vh] overflow-hidden py-16">
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full -mb-20 -ml-20 opacity-30 shadow-2xl"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 rounded-full opacity-40 shadow-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full opacity-20 shadow-md"></div>

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
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan-500 rounded-2xl z-0 shadow-2xl"></div>
              <div className="absolute -bottom-2 -right-2 w-full h-full rounded-2xl z-0 shadow-xl"></div>
              
              <img
                src="/assets/whyscent/image3.jpg"
                alt="Business results visualization"
                className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Statistics card on the right */}
          <div className="bg-white w-full md:w-3/5 h-full">
            <div className="rounded-2xl shadow-xl p-8 w-full border-r-4 border-cyan-500 transition-all duration-700 hover:shadow-2xl">
              <div className="grid grid-cols-1 gap-8">
                {stats.map((s, i) => (
                  <div key={`stat-${i}`} className="flex items-center group">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mr-6 transition-colors duration-300">
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
              <div className="mt-8 p-4 rounded-xl border-l-4 border-cyan-500">
                <p className="text-gray-700 italic">
                  "Strategic scenting is not just about creating a pleasant environment—it's about 
                  driving measurable business outcomes through sensory marketing."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};