import React from 'react';
import { Container } from '../ui/Container';

// Define the card data
const cardData = [
  {
    title: "Global Reach",
    description: "We enhance environments in 119 countries, creating experiences worth sharing.",
    image: "/assets/fragrance/Voyage & Escape.png"
  },
  {
    title: "Made in America",
    description: "Proudly designed and manufactured in the USA with the highest quality standards.",
    image: "/assets/fragrance/Warm & Inviting.png"
  },
  {
    title: "Premium Quality",
    description: "Our fragrances are crafted with the finest ingredients for an exceptional experience.",
    image: "/assets/fragrance/Lux & Sophisticated.png"
  },
  {
    title: "Innovation",
    description: "Pioneering scent technology since 1994, turning moments into magical memories.",
    image: "/assets/fragrance/Crisp & Invigorating.png"
  },
  {
    title: "Sustainability",
    description: "Committed to eco-friendly practices in our products and operations.",
    image: "/assets/fragrance/Relaxing & Soothing.png"
  },
  {
    title: "Customer Focus",
    description: "Dedicated to delivering powerful ROI through cutting-edge scented experiences.",
    image: "/assets/fragrance/Timeless & Floral.png"
  }
];

export const WhatMakesUsDifferent: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#e3f2f9] to-[#f9f9f9]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the unique qualities that set ScentAir apart from the competition and make us the world's leading provider of experiential fragrance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div 
              key={index}
              className="glassmorphism-card rounded-2xl p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};