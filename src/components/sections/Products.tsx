import React, { useState } from 'react';
import { Container } from '../ui/Container';

// Fragrance types
const fragranceTypes = [
  'Clean Routine',
  'Crisp & Invigorating',
  'Lux & Sophisticated',
  'Passionate & Sensual',
  'Relaxing & Soothing',
  'Savoury & Gourmand',
  'Timeless & Floral',
  'Voyage & Escape',
  'Warm & Inviting'
];

export const Products: React.FC = () => {
  const [activeFragrance, setActiveFragrance] = useState<string | null>(null);

  const handleFragranceClick = (fragrance: string) => {
    setActiveFragrance(fragrance);
    // Scroll to the section
    const element = document.getElementById(`fragrance-${fragrance.replace(/ /g, '-').replace(/&/g, 'and')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Our Fragrance Collection
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated selection of premium fragrances, each crafted
            to tell a unique story and complement your individual style.
          </p>
        </div>

        {/* Fragrance Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-20">
          {fragranceTypes.map((fragrance) => (
            <div
              key={fragrance}
              onClick={() => handleFragranceClick(fragrance)}
              className={`cursor-pointer transition-all duration-300 rounded-xl p-4 flex flex-col items-center ${
                activeFragrance === fragrance
                  ? 'bg-primary/10 border-2 border-primary shadow-md'
                  : 'bg-white border border-gray-200 hover:border-primary hover:shadow-md'
              }`}
            >
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <img
                  src={`/assets/fragrance/${fragrance}.png`}
                  alt={fragrance}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-center text-sm font-medium text-primary">
                {fragrance}
              </h3>
            </div>
          ))}
        </div>

        {/* Fragrance Details Sections */}
        <div className="space-y-24">
          {fragranceTypes.map((fragrance) => (
            <section
              key={fragrance}
              id={`fragrance-${fragrance.replace(/ /g, '-').replace(/&/g, 'and')}`}
              className="scroll-mt-20"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                  {fragrance}
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 flex-shrink-0 mx-auto md:mx-0">
                    <img
                      src={`/assets/fragrance/${fragrance}.png`}
                      alt={fragrance}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-secondary mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Characteristics:</h3>
                        <ul className="list-disc list-inside text-secondary">
                          <li>Premium quality ingredients</li>
                          <li>Long-lasting fragrance</li>
                          <li>Perfect for {fragrance.toLowerCase()} environments</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">Best for:</h3>
                        <ul className="list-disc list-inside text-secondary">
                          <li>Living rooms</li>
                          <li>Bedrooms</li>
                          <li>Offices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
};