import React from 'react';

// Define the type for our safety logo data
type SafetyLogo = {
  id: string;
  src: string;
  name: string;
  description: string;
  label: string;
  scale?: number;
};

// Safety logo data with information about each logo
const safetyLogos: SafetyLogo[] = [
  {
    id: 'ifra',
    src: '/assets/logos/ifra.png',
    name: 'International Fragrance Association (IFRA) Code of Practice',
    description: 'Global guideline ensuring that fragrances are safe for human use and the environment.',
    label: 'ScentAir is proud to be the first company from the environmental scent industry to become a direct and active member of IFRA.'
  },
  {
    id: 'osha',
    src: '/assets/logos/osha.png',
    name: 'Occupational Safety and Health Administration (OSHA)',
    description: 'U.S. regulatory body ensuring safe working conditions.',
    label: 'Compliance means ScentAir products and processes meet worker health & safety standards.'
  },
  {
    id: 'reach',
    src: '/assets/logos/reach.jpg',
    name: 'EU Reach Compliant & Korea K-Reach Compliant',
    description: 'REACH = Registration, Evaluation, Authorisation, and Restriction of Chemicals (EU law). K-REACH is Korea\'s equivalent.',
    label: 'Ensures all chemicals in products are assessed for safety, environmental impact, and restricted use.'
  },
  {
    id: 'fragrancecreator',
    src: '/assets/logos/fragrancecreator.png',
    name: 'Fragrance Creators Association',
    description: 'U.S. based trade group promoting safe, sustainable, and innovative fragrance',
    label: 'As a proud and active FCA member, Scentair is shaping the future of fragrance that is safe, sustainable, and responsible'
  },
  {
    id: 'rifm',
    src: '/assets/logos/rifm.jpg',
    name: 'Research Institute For Fragrance Materials',
    description: 'Scientific body that tests fragrance ingredients for safety and toxicology.',
    label: 'Ensures all fragrance ingredients are backed by scientific safety data.'
  },
  {
    id: 'epa',
    src: '/assets/logos/epa.jpg',
    name: 'EPA Toxic Substance Control Act',
    description: 'U.S. regulation that ensures chemicals are evaluated and managed for environmental & health safety.',
    label: 'Compliance = ingredients are safe and legally allowed in U.S. markets.'
  },
  {
    id: 'carb',
    src: '/assets/logos/carb.jpg',
    name: 'California Air Resource Board (CARB)',
    description: 'Regulates air quality and emissions in California. It is widely considered one of the most influential environmental regulatory.',
    label: 'Compliance means ScentAir fragrances are low-emission and air-safe.'
  },
  {
    id: 'oehha',
    src: '/assets/logos/oehha.png',
    name: 'State of California\'s Prop 65 per OEHHA',
    description: 'To protect California residents from exposure to chemicals known to cause cancer, birth defects, or other reproductive harm.',
    label: 'Compliance means products are tested and safe for California standards (one of the strictest globally).'
  },
  {
    id: 'cites',
    src: '/assets/logos/cites.jpg',
    name: 'CITES Global Treaty Compliance for Endangered Plants & Animals',
    description: 'Global treaty ensuring no endangered plants or animals are exploited in trade.',
    label: 'Compliance ensures ScentAir fragrances do not contain endangered botanicals or animal-derived substances.'
  },
  {
    id: 'alcumus',
    src: '/assets/logos/alcumus.png',
    name: 'ALCUMUS Safe Contractor Accredited',
    description: 'UK-based accreditation showing high standards of health, safety, and risk management in operations.',
    label: 'ScentAir has been evaluated and meets recognized UK standards for health and safety management for contractors.'
  },
  {
    id: 'ecovadis',
    src: '/assets/logos/ecovadis.png',
    name: 'ECOVADIS Sustainability Awarded',
    description: 'Independent global rating platform assessing corporate sustainability performance.',
    label: 'ScentAir is EcoVadis certified, demonstrating its commitment to the highest global standards of environmental, social, and ethical performance.'
  }
];

// Zigzag pattern background
const ZigzagPattern: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,_#ffffff_25%,_transparent_25%),_linear-gradient(225deg,_#ffffff_25%,_transparent_25%),_linear-gradient(315deg,_#ffffff_25%,_transparent_25%),_linear-gradient(45deg,_#60c4dc_25%,_#ffffff_25%)] bg-[length:40px_40px] opacity-10"></div>
  </div>
);

// “Copy & paste” text from the image
const AboveBeyond: React.FC = () => (
  <section className="py-6 md:py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-700 mb-5">
          ScentAir goes above and beyond industry regulations:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Our fragrances are compliant with the following regulatory bodies:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>National Toxicology Department (NTD)</li>
              <li>International Agency for Research on Cancer (IARC)</li>
              <li>Occupational Safety and Health Association (OSHA)</li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              ScentAir fragrances:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Have NO identified respiratory allergens</li>
              <li>Do NOT contain phthalates; known endocrine disruptor</li>
              <li>Do NOT contain R59; contributes to depletion of ozone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// New section for the bottom 3 cards (independent + centered)
const BottomThreeSection: React.FC<{ items: SafetyLogo[] }> = ({ items }) => (
  <section className="mt-10">
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      {/* Standalone centered grid, not tied to the 4-col rules above */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {items.map((logo) => (
          <div
            key={logo.id}
            className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100 h-full"
          >
            <div className="w-20 h-20 mb-4 flex items-center justify-center min-h-[80px]">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 font-[Futura] min-h-[60px]">{logo.name}</h3>
            <div className="border-t border-black w-16 my-2 mx-auto"></div>
            <p className="text-base text-gray-600 mb-3 leading-relaxed font-[Futura] flex-grow min-h-[80px]">{logo.description}</p>
            <div className="mt-auto pt-3 border-t border-black w-full">
              <p className="text-base text-gray-600 font-medium font-[Futura]">{logo.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SafetyStandardsSection: React.FC = () => {
  const Header = () => (
    <section className="pt-8 pb-10 md:pt-12 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            ScentAir Sustainability and Safety Standards
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="whitespace-nowrap text-lg md:text-2xl text-secondary leading-relaxed max-w-3xl mx-auto">
            As a global organization, we know our products touch the lives of countless consumers. <br />So we take our role as global corporate citizens very seriously.
          </p>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white font-[Futura] pb-16">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Zigzag background container */}
        <div className="relative">
          <ZigzagPattern />

          {/* Top 8 cards (unchanged, 4-col responsive grid) */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {safetyLogos.slice(0, 8).map((logo) => (
                <div
                  key={logo.id}
                  className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center text-center border border-gray-100 h-full"
                >
                  <div className="w-20 h-20 mb-4 flex items-center justify-center min-h-[80px]">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 font-[Futura] min-h-[60px]">{logo.name}</h3>
                  <div className="border-t border-black w-16 my-2 mx-auto"></div>
                  <p className="text-base text-gray-600 mb-3 leading-relaxed font-[Futura] flex-grow min-h-[80px]">{logo.description}</p>
                  <div className="mt-auto pt-3 border-t border-black w-full">
                    <p className="text-base text-gray-600 font-medium font-[Futura]">{logo.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* New independent, centered section for the last 3 cards */}
            <BottomThreeSection items={safetyLogos.slice(8)} />
          </div>
        </div>
      </div>

      {/* NEW: content from the screenshot - moved to bottom */}
      <AboveBeyond />
    </div>
  );
};
