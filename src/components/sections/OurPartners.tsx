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

// ====== RANKING: 1 (paling luxury) → 99 (paling biasa) ======
const logoRank: Record<string, number> = {
  // ——— Hotels & Resorts ———
  '/assets/hotel/fours.png': 1,        // Four Seasons
  '/assets/hotel/ritz.png': 1,         // The Ritz-Carlton
  '/assets/hotel/st.png': 1,           // St. Regis
  '/assets/hotel/w.png': 1,            // W Hotels
  '/assets/hotel/jw.png': 1,           // JW Marriott
  '/assets/hotel/langham.png': 1,      // The Langham
  '/assets/hotel/shang.png': 1,        // Shangri-La
  '/assets/hotel/park.png': 1,         // Park Hyatt
  '/assets/hotel/venet.png': 2,        // The Venetian
  '/assets/hotel/man.png': 2,          // Mandarin Oriental (asumsi 'man')
  '/assets/hotel/Le.png': 2,           // Le Méridien
  '/assets/hotel/westin.png': 2,       // Westin
  '/assets/hotel/sheraton.png': 2,     // Sheraton
  '/assets/hotel/hil.png': 2,          // Hilton
  '/assets/hotel/doubletree.png': 3,   // DoubleTree
  '/assets/hotel/mov.png': 3,          // Mövenpick
  '/assets/hotel/rad.png': 3,          // Radisson
  '/assets/hotel/hard.png': 3,         // Hard Rock
  '/assets/hotel/fourpoints.png': 4,   // Four Points
  '/assets/hotel/aloft.png': 4,        // Aloft
  '/assets/hotel/court.png': 4,        // Courtyard
  '/assets/hotel/fairfield.png': 4,    // Fairfield
  '/assets/hotel/hol.png': 4,          // Holiday Inn
  '/assets/hotel/embassy.png': 4,      // Embassy Suites

  // ——— Retail & Mall ———
  '/assets/retail/tif.png': 1,         // Tiffany & Co.
  '/assets/retail/gal.png': 1,         // Galeries Lafayette
  '/assets/retail/saks.png': 2,        // Saks Fifth Avenue
  '/assets/retail/bloom.png': 2,       // Bloomingdale's
  '/assets/retail/nord.png': 2,        // Nordstrom
  '/assets/retail/mac.png': 3,         // M·A·C
  '/assets/retail/sony.png': 3,        // Sony
  '/assets/retail/jim.png': 3,         // Jim Thompson
  '/assets/retail/ash.png': 3,         // ASH
  '/assets/retail/zar.png': 4,         // Zara
  '/assets/retail/stra.png': 4,        // Stradivarius
  '/assets/retail/guess.png': 4,       // Guess
  '/assets/retail/gap.png': 4,         // GAP
  '/assets/retail/luck.png': 4,        // Lucky Brand (asumsi)
  '/assets/retail/lulu.png': 4,        // Lulu
  '/assets/retail/bod.png': 4,         // Bath & Body Works (asumsi 'bod')
  '/assets/retail/hall.png': 5,        // Hallmark
  '/assets/retail/toys.png': 5,        // Toys"R"Us
  '/assets/retail/ifc.png': 2,         // IFC (premium mall)
  '/assets/retail/ion.png': 2,         // ION Orchard (premium mall)

  // ——— Spa & Fitness (brand dari hotel di-heritage-kan rank hotelnya) ———
  // pakai logo hotelnya:
  '/assets/hotel/ritz.png#spa': 1,
  '/assets/hotel/langham.png#spa': 1,

  // ——— Airports & Lounges ———
  '/assets/airport/Changi_Airport_logo.svg.png': 2,   // Changi
  '/assets/airport/Heathrow.png': 2,                  // Heathrow
  '/assets/airport/HongKongAirportlogo.svg.png': 2,   // Hong Kong
  '/assets/airport/Air_France_Logo.svg.png': 2,       // Air France (lounge/brand)
  '/assets/airport/Paris_Aéroport_logo.svg.png': 3,   // Paris Aéroport (operator)
  '/assets/airport/Melbourne_Airport_logo.svg.png': 3,
  '/assets/airport/Flughafen_Charlotte_Logo.svg.png': 3,
  '/assets/airport/Delta_logo.svg.png': 3,
  '/assets/airport/Air_New_Zealand_logo.svg.png': 3,

  // ——— Showroom (automotive) ———
  '/assets/showroom/bentley-logo-2002-download.png': 1, // Bentley
  '/assets/showroom/maserati.png': 1,                   // Maserati
  '/assets/showroom/BMW.png': 2,                        // BMW
  '/assets/showroom/genesis.png': 2,                    // Genesis
  '/assets/showroom/loyloy.png': 5,                     // (unknown → mass)

  // ——— Hospitals & Healthcare ———
  '/assets/hospital/pondok.jpg': 3,     // RS Pondok Indah (premium private)
  '/assets/hospital/horizon.png': 4,
  '/assets/hospital/florida.jpg': 4,
  '/assets/hospital/west.png': 4,
  '/assets/hospital/morning.png': 5,

  // ——— Real Estate & Homebuilders ———
  '/assets/realestate/toll.png': 3,     // Toll Brothers (upscale in US)
  '/assets/realestate/baker.png': 3,
  '/assets/realestate/post.png': 3,
  '/assets/realestate/centex.png': 4,
  '/assets/realestate/horton.png': 4,
  '/assets/realestate/sp.png': 4,
};

const rankOf = (src: string) => logoRank[src] ?? 99;

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
      // gunakan suffix #spa untuk bisa punya rank khusus bila diperlukan
      logos: ['/assets/hotel/langham.png#spa','/assets/hotel/ritz.png#spa'],
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

  // Helper untuk ambil list logo dari kategori
  const getLogos = (cat: Category) =>
    (cat.logos?.length
      ? cat.logos
      : Array.from({ length: cat.logoCount }, (_, i) => `/assets/logos/${cat.slug}/logo-${i + 1}.png`)
    );

  // Flatten semua logo, beri rank, lalu urutkan
  const sortedLogos = categories
    .flatMap((cat) => getLogos(cat).map((src, idx) => ({
      src,
      alt: `${cat.name} partner logo ${idx + 1}`,
      rank: rankOf(src),
    })))
    .sort((a, b) => a.rank - b.rank);

  return (
    <section id="our-partners" className="pt-8 pb-10 md:pt-12 md:pb-16 relative overflow-visible">
      <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Who We Work With
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              We collaborate with industry leaders and innovative companies to bring you the best fragrance solutions.
            </p>
          </div>

          {/* Circle kategori (tetap terlihat, dekoratif) */}
          <div className="mt-6">
            <div className="flex flex-nowrap justify-center gap-6 overflow-x-auto overflow-y-visible px-4 py-4">
              {categories.map((cat) => (
                <div key={cat.id} className="flex flex-col items-center">
                  <div
                    role="img"
                    aria-label={cat.name}
                    className="relative rounded-full overflow-hidden w-32 h-32 flex-shrink-0
                               flex items-center justify-center shadow-lg ring-2 ring-gray-300
                               ring-offset-2 ring-offset-white cursor-default select-none"
                    style={{
                      backgroundImage: `url(${cat.img})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                  </div>
                  <span className="mt-2 text-gray-900 font-semibold text-center text-sm">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid semua logo — sudah terurut by luxury */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {sortedLogos.map(({ src, alt }, i) => (
              <LogoCell key={`${src}-${i}`} src={src} alt={alt} />
            ))}
            <div className="bg-white border border-primary/20 rounded-xl p-3 h-24 flex items-center justify-center shadow-sm">
              <span className="text-primary font-bold">and many more ...</span>
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
