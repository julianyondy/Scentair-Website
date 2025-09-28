import React from 'react';
import { Container } from '../ui/Container';

type Category = {
  id: number;
  name: string;
  slug: string;
  img: string;
  logoCount: number;
  logos?: string[];
};

const LogoCell: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div
    className="bg-white border border-gray-200 rounded-xl shadow-sm 
               hover:shadow-md transition-shadow duration-300 
               transform hover:-translate-y-0.5 
               flex items-center justify-center"
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="object-contain 
                 max-h-16 md:max-h-20 lg:max-h-24 
                 max-w-[80%] mx-auto"
    />
  </div>
);

export const OurPartners: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1, name: 'Hotel & Resort', slug: 'hotel-resort', img: '/assets/logos/hotel.jpg', logoCount: 25,
      logos: [
        '/assets/hotel/aloft.png','/assets/hotel/cod.png','/assets/hotel/court.png','/assets/hotel/doubletree.png',
        '/assets/hotel/embassy.png','/assets/hotel/fairfield.png','/assets/hotel/fourpoints.png','/assets/hotel/fours.png',
        '/assets/hotel/hard.png','/assets/hotel/hil.png','/assets/hotel/hol.png','/assets/hotel/jw.png',
        '/assets/hotel/langham.png','/assets/hotel/Le.png','/assets/hotel/man.png','/assets/hotel/mov.png',
        '/assets/hotel/park.png','/assets/hotel/rad.png','/assets/hotel/ritz.png','/assets/hotel/shang.png',
        '/assets/hotel/sheraton.png','/assets/hotel/st.png','/assets/hotel/venet.png','/assets/hotel/w.png',
        '/assets/hotel/westin.png',
      ],
    },
    {
      id: 2, name: 'Retail & Mall', slug: 'retail-mall', img: '/assets/logos/mall.jpg', logoCount: 20,
      logos: [
        '/assets/retail/ash.png','/assets/retail/bloom.png','/assets/retail/bod.png','/assets/retail/gal.png','/assets/retail/gap.png',
        '/assets/retail/guess.png','/assets/retail/hall.png','/assets/retail/ifc.png','/assets/retail/ion.png','/assets/retail/jim.png',
        '/assets/retail/luck.png','/assets/retail/lulu.png','/assets/retail/mac.png','/assets/retail/nord.png','/assets/retail/saks.png',
        '/assets/retail/sony.png','/assets/retail/stra.png','/assets/retail/tif.png','/assets/retail/toys.png','/assets/retail/zar.png',
      ],
    },
    {
      id: 3, name: 'Spa & Fitness', slug: 'spa-fitness', img: '/assets/logos/spa.jpg', logoCount: 2,
      logos: ['/assets/hotel/langham.png','/assets/hotel/ritz.png'],
    },
    {
      id: 4, name: 'Airport & Lounge', slug: 'airport-lounge', img: '/assets/logos/airport.jpg', logoCount: 9,
      logos: [
        '/assets/airport/Air_France_Logo.svg.png','/assets/airport/Air_New_Zealand_logo.svg.png',
        '/assets/airport/Changi_Airport_logo.svg.png','/assets/airport/Delta_logo.svg.png',
        '/assets/airport/Flughafen_Charlotte_Logo.svg.png','/assets/airport/Heathrow.png',
        '/assets/airport/HongKongAirportlogo.svg.png','/assets/airport/Melbourne_Airport_logo.svg.png',
        '/assets/airport/Paris_Aéroport_logo.svg.png',
      ],
    },
    {
      id: 5, name: 'Showroom', slug: 'showroom', img: '/assets/logos/Maserati.png', logoCount: 5,
      logos: [
        '/assets/showroom/bentley-logo-2002-download.png','/assets/showroom/BMW.png','/assets/showroom/genesis.png',
        '/assets/showroom/maserati.png','/assets/showroom/loyloy.png',
      ],
    },
    {
      id: 6, name: 'Hospitals & Healthcare', slug: 'hospitals-care', img: '/assets/logos/hospital.png', logoCount: 6,
      logos: [
        '/assets/hospital/bethsaida.png','/assets/hospital/florida.jpg','/assets/hospital/horizon.png',
        '/assets/hospital/morning.png','/assets/hospital/pondok.jpg','/assets/hospital/west.png',
      ],
    },
    {
      id: 7, name: 'Real Estate & Homebuilders', slug: 'real-estate-homebuilders', img: '/assets/logos/builder.png', logoCount: 6,
      logos: [
        '/assets/realestate/baker.png','/assets/realestate/centex.png','/assets/realestate/horton.png',
        '/assets/realestate/post.png','/assets/realestate/sp.png','/assets/realestate/toll.png',
      ],
    },
  ];

  const getLogos = (cat: Category) =>
    (cat.logos?.length ? cat.logos : Array.from(
      { length: cat.logoCount },
      (_, i) => `/assets/logos/${cat.slug}/logo-${i + 1}.png`
    ));

  return (
    <section id="our-partners" className="pt-4 pb-20 relative overflow-visible">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header styled like Contact page */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Who We Work With
            </h1>
            <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-lg text-secondary leading-relaxed max-w-3xl mx-auto">
              We collaborate with industry leaders and innovative companies to bring you the best fragrance solutions.
            </p>
          </div>

          {/* Category circles — visible, decorative, non-interactive */}
          <div className="mt-6">
            <div className="flex flex-nowrap justify-center gap-6 overflow-x-auto overflow-y-visible px-4 py-4">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  role="img"
                  aria-label={cat.name}
                  className="relative rounded-full overflow-hidden w-32 h-32 flex-shrink-0 
                             flex items-center justify-center shadow-lg ring-2 ring-gray-300
                             ring-offset-2 ring-offset-white cursor-default select-none"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${cat.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className="relative z-10 text-white font-semibold text-center px-3 text-sm">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* All logos in one grid */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {categories.flatMap((cat) =>
              getLogos(cat).map((src, idx) => (
                <LogoCell
                  key={`${cat.slug}-${idx}`}
                  src={src}
                  alt={`${cat.name} partner logo ${idx + 1}`}
                />
              ))
            )}
            <div className="bg-white border border-primary/20 rounded-xl p-3 h-24 flex items-center justify-center shadow-sm">
              <span className="text-primary font-bold">and many more</span>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center rounded-2xl p-6">
            <p className="text-gray-700 text-lg">
              Interested in becoming a partner?{' '}
              <a href="/contact" className="text-primary hover:underline font-semibold">Contact us</a>{' '}
              to learn more about our partnership opportunities.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-0.5 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
