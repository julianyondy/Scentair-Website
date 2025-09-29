import React from 'react';
import { Container } from '../components/ui/Container';

type Classable = { className?: string };

const BulletWithLogo: React.FC<{ src: string; alt: string; label: string }> = ({
  src,
  alt,
  label,
}) => (
  <li className="break-inside-avoid mb-6">
    <div className="flex items-center justify-center sm:justify-start gap-5">
      <img
        src={src}
        alt={alt}
        className="h-16 w-16 md:h-20 md:w-20 object-contain flex-none"
        loading="lazy"
        width={80}
        height={80}
      />
      <span className="text-slate-800 text-[clamp(14px,1.8vw,18px)] leading-snug text-left">
        {label}
      </span>
    </div>
  </li>
);

const InfoCard: React.FC<Classable & { title: string; items: string[] }> = ({
  title,
  items,
  className,
}) => (
  <div className={`rounded-xl bg-slate-50 ring-1 ring-slate-100 p-6 ${className || ''}`}>
    <strong className="text-[#0c4384]">{title}</strong>
    <ul className="mt-3 list-disc pl-5 space-y-1 marker:text-[#0c4384] text-[clamp(12px,1.5vw,14px)] text-slate-700">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  </div>
);

export const SafetyStandards: React.FC = () => {
  const safetyItems = [
    { src: '/assets/logos/ifra.png', alt: 'IFRA', label: 'International Fragrance Association (IFRA) – Code of Practice' },
    { src: '/assets/logos/osha.png', alt: 'OSHA', label: 'Occupational Safety and Health Administration (OSHA)' },
    { src: '/assets/logos/reach.jpg', alt: 'REACH', label: 'EU REACH Compliant & Korea K-REACH Compliant' },
    { src: '/assets/logos/fragrancecreator.png', alt: 'FCA', label: 'Fragrance Creators Association' },
    { src: '/assets/logos/alcumus.png', alt: 'ALCUMUS', label: 'ALCUMUS SafeContractor Accredited' },
    { src: '/assets/logos/rifm.jpg', alt: 'RIFM', label: 'Research Institute for Fragrance Materials (RIFM)' },
    { src: '/assets/logos/epa.jpg', alt: 'EPA', label: 'EPA Toxic Substances Control Act (TSCA)' },
    { src: '/assets/logos/carb.jpg', alt: 'CARB', label: 'California Air Resources Board (CARB)' },
    { src: '/assets/logos/oehha.png', alt: 'OEHHA', label: 'State of California’s Prop 65 per OEHHA' },
    { src: '/assets/logos/cites.jpg', alt: 'CITES', label: 'CITES Global Treaty Compliance' },
    { src: '/assets/logos/ecovadis.png', alt: 'EcoVadis', label: 'EcoVadis Sustainability Awarded' },
  ];

  return (
    <div className="pt-[180px] bg-transparent">
      <main className="bg-white text-slate-900">
        {/* ===== Page Header ===== */}
        <section className="pt-10 md:pt-14 pb-6">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Fragrance Safety Standards
            </h1>
            <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-4" />
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              As a global organization, we know our products touch the lives of countless consumers.
              So we take our role as global corporate citizens very seriously.
              <span className="block mt-2">
                <span className="text-[#0c4384] font-semibold">ScentAir</span> meets or exceeds
                safety and regulatory requirements including:
              </span>
            </p>
          </div>
        </section>

        {/* ===== SAFETY LIST (flow ke kolom berikut & di-center halaman) ===== */}
        <section id="safety" className="relative py-12 md:py-16">
          <Container>
            <div className="lg:col-span-7">
              {/* Center wrapper */}
              <div className="flex justify-center">
                {/* Satu UL, multi-column, dan di-center via inline-block */}
                <ul
                  className="
                    mt-8 inline-block
                    columns-1 sm:columns-2
                    gap-x-12 md:gap-x-16
                    sm:[column-rule:1px_solid_#eef2f7]
                    sm:pr-8
                  "
                >
                  {safetyItems.map((it) => (
                    <BulletWithLogo key={it.label} {...it} />
                  ))}
                </ul>
              </div>

              {/* Fine print - tetap center container-nya */}
              <div className="mt-12 grid md:grid-cols-2 gap-6 text-sm text-slate-700 max-w-5xl mx-auto">
                <InfoCard
                  title="ScentAir scents do NOT contain:"
                  items={[
                    'Components found to be carcinogenic per NTD & IARC',
                    'Identified respiratory allergens',
                    'Phthalates; known endocrine disruptors',
                    'R59 compounds contributing to ozone depletion',
                  ]}
                />
                <InfoCard
                  title="ScentAir Fragrances:"
                  items={[
                    'Have NO identified respiratory allergens',
                    'Do NOT contain phthalates; known endocrine disruptors',
                    'Do NOT contain R59; contributes to depletion of ozone',
                  ]}
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default SafetyStandards;
