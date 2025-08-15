import React from 'react';
import { Container } from '../ui/Container';

export const AboutHero: React.FC = () => {
  return (
    <section className="pt-5 pb-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Hello, We're ScentAir.
            </h1>
            <p className="text-xl text-secondary leading-relaxed mb-6">
              Founded with a passion for olfactory artistry, ScentAir has been at the forefront 
              of luxury fragrance creation. Our master perfumers blend traditional techniques 
              with innovative approaches to create scents that resonate with the modern individual.
            </p>
            <p className="text-xl text-secondary leading-relaxed">
              Each fragrance in our collection is carefully crafted using the finest ingredients 
              sourced from around the world. From the delicate petals of Bulgarian roses to the 
              rich woods of Indian sandalwood, we spare no effort in bringing you exceptional quality.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div>
            <img 
              src="/assets/homepage/pioneer.jpg" 
              alt="ScentAir Pioneer" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};