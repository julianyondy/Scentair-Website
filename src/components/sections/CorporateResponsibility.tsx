import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const CorporateResponsibility: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left column - text content */}
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ScentAir Responsibility & Sustainability
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl">
              As a worldwide organization, we take our role as global citizens seriously. We continuously strive to reduce our environmental impact and make our slice of the world a more just and equitable place.
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="px-8 py-3"
              onClick={() => window.open('https://heyzine.com/flip-book/7536231544.html', '_blank', 'noopener noreferrer')}
            >
              Read Report
            </Button>
          </div>
          
          {/* Right column - image */}
          <div className="md:w-1/2 w-full">
            <img 
              src="/assets/homepage/pioneer.jpg" 
              alt="Corporate Responsibility & Sustainability" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};