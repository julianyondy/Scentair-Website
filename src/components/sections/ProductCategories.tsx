import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCategories: React.FC = () => {
  return (
      <section className="pt-5 pb-20 flex flex-col items-center justify-center">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our advanced scenting machines and premium fragrances —
            crafted to elevate every space.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-7xl mx-auto px-6 h-[80vh]">
          {/* Machines Card */}
          <Link
            to="/products/machines"
            className="relative flex-1 rounded-3xl shadow-xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: "url('/assets/productcard/machines.jpg')",
                backgroundPosition: "40% 50%", // move a bit left
                backgroundSize: "cover"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <h2 className="text-4xl font-bold text-white mb-3">Machines</h2>
              <p className="text-lg text-white opacity-90">
                Discover our advanced scenting technology
              </p>
            </div>
          </Link>

          {/* Fragrances Card */}
          <Link
            to="/products/fragrances"
            className="relative flex-1 rounded-3xl shadow-xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: "url('/assets/productcard/fragrances.jpg')",
                backgroundPosition: "50% 50%",
                backgroundSize: "cover"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 flex flex-col justify-end h-full p-8">
              <h2 className="text-4xl font-bold text-white mb-3">Fragrances</h2>
              <p className="text-lg text-white opacity-90">
                Explore our premium fragrance collection
              </p>
            </div>
          </Link>
        </div>
      </section>
  );
};
