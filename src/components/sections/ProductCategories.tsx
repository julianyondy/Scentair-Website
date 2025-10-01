import React from 'react';
import { Link } from 'react-router-dom';

export const ProductCategories: React.FC = () => {
  return (
      <section className="pt-8 pb-10 md:pt-12 md:pb-16 flex flex-col items-center justify-center bg-transparent">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Discover our advanced scenting machines and premium fragrances
              <br/>crafted to elevate every space.
            </p>
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-7xl mx-auto px-6 h-[80vh] mt-16">
          {/* Machines Card */}
          <Link
            to="/products/machines"
            className="relative flex-1 rounded-3xl shadow-xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: "url('/assets/productcard/machines.png')",
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
