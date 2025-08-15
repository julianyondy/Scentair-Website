import React from 'react';
import { Container } from '../../components/ui/Container';
import { Link } from 'react-router-dom';

export const ScentAirBreeze: React.FC = () => {
  return (
    <div className="pt-[180px] min-h-screen bg-white py-20">
      <Container>
        <div className="mb-8">
          <Link 
            to="/products/machines" 
            className="text-primary hover:text-primary/80 flex items-center mb-6 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Machines
          </Link>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center p-8">
              <img 
                src="/assets/productcard/machines.jpg" 
                alt="ScentAir Breeze" 
                className="max-h-64 object-contain"
              />
            </div>
            
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                ScentAir Breeze
              </h1>
              
              <p className="text-secondary mb-6 text-lg">
                ScentAir Breeze™ Diffuser is a portable advanced atomization fragrance diffuser for businesses up to 2,000 sq. ft. Patent-pending vertical fragrance diffusion delivers a seamless scent experience. Create schedules and control intensity with your phone using the ScentAir app.
              </p>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-primary mb-3">Key Features</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary">Up to 5,000 sq ft coverage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary">WiFi connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary">Mobile app control</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Request a Demo
                </button>
                <button className="border-2 border-primary text-primary hover:bg-primary/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};