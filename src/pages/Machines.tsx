import React from 'react';
import { Container } from '../components/ui/Container';
import { Link } from 'react-router-dom';

export const Machines: React.FC = () => {
  // Sample data for machines
  const machines = [
    {
      id: 1,
      name: "ScentAir Splash",
      description: "ScentAir Splash™ is a discreet, battery-powered system, best for scenting small and micro-spaces. Create scent schedules directly from the device. Easy-change cartridges release mess-free, even fragrance for up to 300 hours..",
      image: "/assets/productcard/machines.jpg",
      features: [
        "Up to 100 sq ft coverage",
        "USB powered",
        "Adjustable intensity"
      ],
      gradient: "from-blue-400 to-indigo-600"
    },
    {
      id: 2,
      name: "ScentAir Breeze",
      description: "ScentAir Breeze™ Diffuser is a portable advanced atomization fragrance diffuser for businesses up to 2,000 sq. ft. Patent-pending vertical fragrance diffusion delivers a seamless scent experience. Create schedules and control intensity with your phone using the ScentAir app..",
      image: "/assets/productcard/machines.jpg",
      features: [
        "Up to 5,000 sq ft coverage",
        "WiFi connectivity",
        "Mobile app control"
      ],
      gradient: "from-purple-400 to-pink-600"
    },
    {
      id: 3,
      name: "ScentAir Stream",
      description: "ScentAir Stream™ is an invisible, high-performance system, best for large spaces. Advanced diffusion technology releases fragrance through existing HVAC systems. Customizable scheduling and intensity settings make it easy to tailor scent experiences in any environment..",
      image: "/assets/productcard/machines.jpg",
      features: [
        "Up to 20,000 sq ft coverage",
        "Multi-zone control",
        "Scheduling & analytics"
      ],
      gradient: "from-teal-400 to-cyan-600"
    },
    {
      id: 4,
      name: "ScentAir Direct",
      description: "ScentAir Direct ™ is a flexible system that maximizes scent delivery over medium-sized target areas. Advanced atomization technology releases a fine, invisible mist that can create fragrance zones or an all-over fragrance experience..",
      image: "/assets/productcard/machines.jpg",
      features: [
        "Up to 50,000 sq ft coverage",
        "AI-powered scent optimization",
        "Enterprise dashboard"
      ],
      gradient: "from-amber-400 to-orange-600"
    }
  ];

  return (
    <div className="pt-[180px] min-h-screen bg-white py-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Scenting Machines
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Discover our advanced scenting technology designed to deliver the perfect fragrance experience in any space.
          </p>
        </div>

        <div className="space-y-20">
          {machines.map((machine, index) => (
            <div 
              key={machine.id}
              className={`
                flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl transition-all duration-300
                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                hover:shadow-xl bg-white
              `}
            >
              {/* Product Image */}
              <div className="w-full md:w-1/2">
                <div className={`h-64 md:h-80 rounded-xl bg-gradient-to-r ${machine.gradient} flex items-center justify-center`}>
                  <img 
                    src={machine.image} 
                    alt={machine.name} 
                    className="max-h-full max-w-full object-contain p-4"
                  />
                </div>
              </div>

              {/* Product Information */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  {machine.name}
                </h2>
                <p className="text-secondary mb-6 text-lg">
                  {machine.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {machine.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/products/machines/${machine.id === 1 ? 'scentair-splash' : machine.id === 2 ? 'scentair-breeze' : machine.id === 3 ? 'scentair-stream' : 'scentair-direct'}`}
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center block"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};