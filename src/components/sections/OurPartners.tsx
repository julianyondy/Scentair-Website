import React, { useMemo, useRef, useState } from 'react';
import { Container } from '../ui/Container';

type Category = {
  id: number;
  name: string;
  slug: string;      // folder name for logos
  img: string;       // background image for button
  logoCount: number; // number of logos for this category
};

export const OurPartners: React.FC = () => {
  const categories: Category[] = [
    { id: 1, name: 'Hotel & Resort',             slug: 'hotel-resort',             img: '/assets/fragrance/hotel.jpg',       logoCount: 25 },
    { id: 2, name: 'Retail & Mall',              slug: 'retail-mall',              img: '/assets/fragrance/retail.jpg',      logoCount: 20 },
    { id: 3, name: 'Spa & Fitness',              slug: 'spa-fitness',              img: '/assets/fragrance/spa.jpg',         logoCount: 9 },
    { id: 4, name: 'Airport & Lounge',           slug: 'airport-lounge',           img: '/assets/fragrance/airport.jpg',     logoCount: 9 },
    { id: 5, name: 'Showroom',                   slug: 'showroom',                 img: '/assets/fragrance/showroom.jpg',    logoCount: 5 },
    { id: 6, name: 'Hospitals & Care',           slug: 'hospitals-care',           img: '/assets/fragrance/hospital.jpg',    logoCount: 7 },
    { id: 7, name: 'Real Estate & Homebuilders', slug: 'real-estate-homebuilders', img: '/assets/fragrance/realestate.jpg',  logoCount: 7 },
  ];

  const [selected, setSelected] = useState<Category | null>(null);
  const logosSectionRef = useRef<HTMLDivElement | null>(null);

  // Create the logo paths for the selected category
  const logosForSelected = useMemo(() => {
    if (!selected) return [];
    return Array.from({ length: selected.logoCount }, (_, i) => `/assets/logos/${selected.slug}/logo-${i + 1}.png`);
  }, [selected]);

  const handlePick = (cat: Category) => {
    setSelected(cat);
    requestAnimationFrame(() => {
      logosSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section id="our-partners" className="pt-5 pb-20 bg-white">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Partners</h1>
            <div className="w-24 h-0.5 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We collaborate with industry leaders and innovative companies to bring you the best fragrance solutions.
            </p>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-16">
            <p className="text-secondary mb-6">
              Our partnerships span across various industries, from luxury hotels and spas to retail chains and corporate offices.
              Each partner shares our commitment to excellence and quality in creating exceptional olfactory experiences.
            </p>
            <p className="text-secondary mb-6">
              Through these strategic alliances, we're able to deliver customized scenting solutions that enhance brand identity
              and create memorable experiences for customers in diverse environments.
            </p>
          </div>

          {/* Category Buttons */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Partner Categories</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((cat) => {
                const isActive = selected?.id === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handlePick(cat)}
                    className={[
                      "relative rounded-lg overflow-hidden h-32 flex items-center justify-center group focus:outline-none",
                      "transition-transform hover:scale-[1.01]",
                      isActive ? "ring-2 ring-primary" : "ring-1 ring-gray-200"
                    ].join(" ")}
                    style={{
                      backgroundImage: `url(${cat.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* 70% gray overlay */}
                    <div className="absolute inset-0 bg-gray-700 opacity-70 group-hover:opacity-50 transition-opacity"></div>
                    <span className="relative z-10 text-white font-semibold text-center px-3">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Logos Section */}
          {selected && (
            <div ref={logosSectionRef} className="mt-12">
              <div className="text-center mb-6">
                <h4 className="text-xl font-semibold text-gray-900">
                  {selected.name} — Partner Logos
                </h4>
                <p className="text-sm text-gray-500">Showing {selected.logoCount} logos</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {logosForSelected.map((src, idx) => (
                  <div
                    key={src}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-28 flex items-center justify-center"
                  >
                    <img
                      src={src}
                      alt={`${selected.name} partner logo ${idx + 1}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}

                {/* "And many more" card */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 h-28 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">and many more</span>
                </div>
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="mt-16 text-center">
            <p className="text-muted">
              Interested in becoming a partner?{' '}
              <a href="/contact" className="text-primary hover:underline">Contact us</a>{' '}
              to learn more about our partnership opportunities.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
