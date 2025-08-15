import React from 'react';

export const Service: React.FC = () => {
  // Service data
  const services = [
    {
      title: "Custom Fragrance Creation",
      description: "Work with our master perfumers to create a unique signature scent that reflects your personal style or brand identity.",
      bullets: [
        "Personal consultation with perfumer",
        "Up to 5 custom samples",
        "Final fragrance formulation"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414h-5.172a2 2 0 01-1.414-.586l-5-5A2 2 0 014 14.828V9.828a2 2 0 01.586-1.414L8 5.586V4z" />
        </svg>
      )
    },
    {
      title: "Scent Marketing",
      description: "Enhance your retail space or office environment with strategically designed fragrance experiences that boost customer engagement.",
      bullets: [
        "Space analysis and consultation",
        "Custom scent system installation",
        "Monthly fragrance rotation"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2zM9 9h6m-6 2h6m-6 2h6" />
        </svg>
      )
    },
    {
      title: "Customer Care",
      description: "Discover new fragrances monthly with our curated subscription service, delivered right to your doorstep.",
      bullets: [
        "2 premium samples per month",
        "Exclusive member pricing",
        "Priority access to new releases"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-[180px]">
      <section className="pt-5 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer a range of premium fragrance services designed to enhance your sensory experience and create memorable moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
              >
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to elevate your space with our premium fragrance solutions? Let's create something extraordinary together.
            </p>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-primary text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};