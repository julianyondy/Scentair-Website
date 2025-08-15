import React from 'react';
import { Container } from '../ui/Container';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About ScentAir
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
              Crafting exceptional fragrances since our founding, we believe every scent tells a story.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-secondary">
                <p>
                  Founded with a passion for olfactory artistry, ScentAir has been at the forefront 
                  of luxury fragrance creation. Our master perfumers blend traditional techniques 
                  with innovative approaches to create scents that resonate with the modern individual.
                </p>
                <p>
                  Each fragrance in our collection is carefully crafted using the finest ingredients 
                  sourced from around the world. From the delicate petals of Bulgarian roses to the 
                  rich woods of Indian sandalwood, we spare no effort in bringing you exceptional quality.
                </p>
                <p>
                  Our commitment extends beyond creating beautiful fragrances. We believe in 
                  sustainable practices, ethical sourcing, and supporting the communities that 
                  provide our precious ingredients.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted">Unique Fragrances</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">10k+</div>
                  <div className="text-sm text-muted">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                <div className="bg-white/50 rounded-xl p-12 backdrop-blur-sm text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-muted">
                    Master Perfumer at Work
                  </p>
                  <p className="text-sm text-muted mt-2">
                    [About image placeholder - Replace with actual company/perfumer photography]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};