import React, { useMemo, useState, useEffect } from 'react';
import { Container } from '../ui/Container';

type Category = {
  id: number;
  name: string;
  slug: string;      // folder name for logos
  img: string;       // background image for button
  logoCount: number; // number of logos for this category
  logos?: string[];  // optional explicit logo paths
};

export const OurPartners: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1, name: 'Hotel & Resort',
      slug: 'hotel-resort',
      img: '/assets/hotel/westin.png',
      logoCount: 25,
      logos: [
        '/assets/hotel/aloft.png',
        '/assets/hotel/cod.png',
        '/assets/hotel/court.png',
        '/assets/hotel/doubletree.png',
        '/assets/hotel/embassy.png',
        '/assets/hotel/fairfield.png',
        '/assets/hotel/fourpoints.png',
        '/assets/hotel/fours.png',
        '/assets/hotel/hard.png',
        '/assets/hotel/hil.png',
        '/assets/hotel/hol.png',
        '/assets/hotel/jw.png',
        '/assets/hotel/langham.png',
        '/assets/hotel/Le.png',
        '/assets/hotel/man.png',
        '/assets/hotel/mov.png',
        '/assets/hotel/park.png',
        '/assets/hotel/rad.png',
        '/assets/hotel/ritz.png',
        '/assets/hotel/shang.png',
        '/assets/hotel/sheraton.png',
        '/assets/hotel/st.png',
        '/assets/hotel/venet.png',
        '/assets/hotel/w.png',
        '/assets/hotel/westin.png',
      ],
    },
    {
      id: 2,
      name: 'Retail & Mall',
      slug: 'retail-mall',
      img: '/assets/retail/mac.png',
      logoCount: 20,
      logos: [
        '/assets/retail/ash.png',
        '/assets/retail/bloom.png',
        '/assets/retail/bod.png',
        '/assets/retail/gal.png',
        '/assets/retail/gap.png',
        '/assets/retail/guess.png',
        '/assets/retail/hall.png',
        '/assets/retail/ifc.png',
        '/assets/retail/ion.png',
        '/assets/retail/jim.png',
        '/assets/retail/luck.png',
        '/assets/retail/lulu.png',
        '/assets/retail/mac.png',
        '/assets/retail/nord.png',
        '/assets/retail/saks.png',
        '/assets/retail/sony.png',
        '/assets/retail/stra.png',
        '/assets/retail/tif.png',
        '/assets/retail/toys.png',
        '/assets/retail/zar.png',
      ],
    },
    {
      id: 3,
      name: 'Spa & Fitness',
      slug: 'spa-fitness',
      img: '/assets/hotel/langham.png',
      logoCount: 2,
      logos: [
        '/assets/hotel/langham.png',
        '/assets/hotel/ritz.png',
      ],
    },
    {
      id: 4,
      name: 'Airport & Lounge',
      slug: 'airport-lounge',
      img: '/assets/airport/Heathrow.png',
      logoCount: 9,
      logos: [
        '/assets/airport/Air_France_Logo.svg.png',
        '/assets/airport/Air_New_Zealand_logo.svg.png',
        '/assets/airport/Changi_Airport_logo.svg.png',
        '/assets/airport/Delta_logo.svg.png',
        '/assets/airport/Flughafen_Charlotte_Logo.svg.png',
        '/assets/airport/Heathrow.png',
        '/assets/airport/HongKongAirportlogo.svg.png',
        '/assets/airport/Melbourne_Airport_logo.svg.png',
        '/assets/airport/Paris_Aéroport_logo.svg.png',
      ],
    },
    {
      id: 5,
      name: 'Showroom',
      slug: 'showroom',
      img: '/assets/showroom/BMW.png',
      logoCount: 5,
      logos: [
        '/assets/showroom/bentley-logo-2002-download.png',
        '/assets/showroom/BMW.png',
        '/assets/showroom/genesis.png',
        '/assets/showroom/maserati.png',
        '/assets/showroom/loyloy.png',
      ],
    },
    {
      id: 6,
      name: 'Hospitals & Healthcare',
      slug: 'hospitals-care',
      img: '/assets/hospital/florida.jpg',
      logoCount: 6,
      logos: [
        '/assets/hospital/bethsaida.png',
        '/assets/hospital/florida.jpg',
        '/assets/hospital/horizon.png',
        '/assets/hospital/morning.png',
        '/assets/hospital/pondok.jpg',
        '/assets/hospital/west.png',
      ],
    },
    {
      id: 7,
      name: 'Real Estate & Homebuilders',
      slug: 'real-estate-homebuilders',
      img: '/assets/realestate/horton.png',
      logoCount: 6,
      logos: [
        '/assets/realestate/baker.png',
        '/assets/realestate/centex.png',
        '/assets/realestate/horton.png',
        '/assets/realestate/post.png',
        '/assets/realestate/sp.png',
        '/assets/realestate/toll.png',
      ],
    },
  ];

  const [selected, setSelected] = useState<Category | null>(null);

  const logosForSelected = useMemo(() => {
    if (!selected) return [];
    if (selected.logos && selected.logos.length) return selected.logos;
    return Array.from(
      { length: selected.logoCount },
      (_, i) => `/assets/logos/${selected.slug}/logo-${i + 1}.png`
    );
  }, [selected]);

  useEffect(() => {
    if (selected) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const restoreScroll = () => {
        window.scrollTo(scrollX, scrollY);
      };
      const rafId = requestAnimationFrame(restoreScroll);
      const timeoutId = setTimeout(restoreScroll, 10);
      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timeoutId);
      };
    }
  }, [selected]);

  const handlePick = (cat: Category, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setSelected(cat);
  };

  return (
    <section id="our-partners" className="pt-5 pb-20 bg-white relative overflow-visible">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mb-16 -mr-16 opacity-20 shadow-xl"></div>
      <div className="absolute top-1/3 left-1/10 w-16 h-16 bg-secondary/20 rounded-full opacity-30 shadow-lg"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-primary/30 rounded-full opacity-40 shadow-sm"></div>

      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Partners</h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We collaborate with industry leaders and innovative companies to bring you the best fragrance solutions.
            </p>
          </div>

          {/* Description */}
          <div className="prose max-w-none mb-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 shadow-lg animate-fadeInSlide">
            <p className="text-gray-700 mb-6 text-lg">
              Our partnerships span across various industries, from luxury hotels and spas to retail chains and corporate offices.
              Each partner shares our commitment to excellence and quality in creating exceptional olfactory experiences.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Through these strategic alliances, we're able to deliver customized scenting solutions that enhance brand identity
              and create memorable experiences for customers in diverse environments.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="mt-8 animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Partner Categories</h3>
            
            <div className="flex flex-nowrap justify-center gap-6 overflow-x-auto overflow-y-visible px-4 py-4">
              {categories.map((cat) => {
                const isActive = selected?.id === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={(e) => handlePick(cat, e)}
                    onFocus={(e) => e.preventDefault()}
                    tabIndex={-1}
                    className={[
                      "cursor-pointer relative rounded-full overflow-hidden w-32 h-32 flex-shrink-0 flex items-center justify-center group",
                      "focus:outline-none focus:ring-0 transform transition-transform duration-300 hover:scale-[1.03]",
                      "shadow-lg hover:shadow-xl",
                      isActive ? "ring-4 ring-primary ring-offset-2 ring-offset-white scale-[1.03]" : "ring-2 ring-gray-300 ring-offset-2 ring-offset-white",
                    ].join(" ")}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${cat.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    aria-pressed={isActive}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-70 group-hover:opacity-50 transition-opacity rounded-full"></div>
                    <span className="relative z-10 text-white font-semibold text-center px-3 text-sm">
                      {cat.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Logos Section */}
          {selected && (
            <div className="mt-8 animate-fadeInSlide">
              <div className="text-center mb-10">
                <h4 className="text-2xl font-semibold text-gray-900 mb-2">
                  {selected.name} — Partner Logos
                </h4>
                <p className="text-sm text-gray-500">
                  Showing {selected.logos?.length ?? selected.logoCount} logos
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-3 rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {logosForSelected.map((src, idx) => (
                  <div
                    key={src}
                    className="bg-white border border-gray-200 rounded-xl p-3 h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-0.5"
                  >
                    <img
                      src={src}
                      alt={`${selected.name} partner logo ${idx + 1}`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-3 h-24 flex items-center justify-center shadow-sm">
                  <span className="text-primary font-bold">and many more</span>
                </div>
              </div>
            </div>
          )}

          {/* Contact */}
          <div className="mt-10 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 animate-fadeInSlide">
            <p className="text-gray-700 text-lg">
              Interested in becoming a partner?{' '}
              <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a>{' '}
              to learn more about our partnership opportunities.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
