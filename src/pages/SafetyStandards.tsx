import React from 'react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

type Classable = { className?: string };

const SectionHeadline: React.FC<{
  title: string;
  align?: 'left' | 'center';
  className?: string;
}> = ({ title, align = 'left', className = '' }) => (
  <div className={`${align === 'center' ? 'text-center' : 'text-left'} mb-8 ${className}`}>
    <h2
      className="text-[#0c4384] font-extrabold uppercase tracking-widest
                 text-[clamp(40px,6vw,72px)] leading-tight relative inline-block break-words"
    >
      {title}
      <span className={`block mt-3 h-1 w-24 bg-[#0c4384] ${align === 'center' ? 'mx-auto' : ''}`}></span>
    </h2>
  </div>
);

const BulletWithLogo: React.FC<{ src: string; alt: string; label: string }> = ({
  src,
  alt,
  label,
}) => (
  <li className="flex items-center gap-3">
    <img
      src={src}
      alt={alt}
      className="h-8 w-8 md:h-9 md:w-9 object-contain"
      loading="lazy"
      width={36}
      height={36}
    />
    <span className="text-slate-800 text-[clamp(13px,1.8vw,16px)] leading-snug">{label}</span>
  </li>
);

const InfoCard: React.FC<
  Classable & { title: string; items: string[] }
> = ({ title, items, className }) => (
  <div className={`rounded-xl bg-slate-50 ring-1 ring-slate-100 p-5 ${className || ''}`}>
    <strong className="text-[#0c4384]">{title}</strong>
    <ul className="mt-2 list-disc pl-5 space-y-1 marker:text-[#0c4384] text-[clamp(12px,1.5vw,14px)] text-slate-700">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  </div>
);

export const SafetyStandards: React.FC = () => {
  return (
    <div className="pt-[180px] bg-transparent">
      <main className="bg-white text-slate-900">
        {/* ===== SAFETY ===== */}
        <section id="safety" className="relative py-12 md:py-16">
          <Container>
            <div className="lg:col-span-7">
              <SectionHeadline title="FRAGRANCE SAFETY STANDARDS" />
              <p className="mt-3 text-slate-700 max-w-2xl leading-relaxed text-[clamp(14px,1.9vw,18px)]">
                As a global organization, we know our products touch the lives of countless consumers.
                <span className="text-[#0c4384] font-semibold"> ScentAir</span> meets or exceeds
                safety and regulatory requirements including:
              </p>

              {/* Two-column list */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <BulletWithLogo src="/assets/logos/ifra.png" alt="IFRA" label="International Fragrance Association (IFRA) – Code of Practice" />
                  <BulletWithLogo src="/assets/logos/osha.png" alt="OSHA" label="Occupational Safety and Health Administration (OSHA)" />
                  <BulletWithLogo src="/assets/logos/reach.jpg" alt="REACH" label="EU REACH Compliant & Korea K-REACH Compliant" />
                  <BulletWithLogo src="/assets/logos/fragrancecreator.png" alt="FCA" label="Fragrance Creators Association" />
                  <BulletWithLogo src="/assets/logos/alcumus.png" alt="ALCUMUS" label="ALCUMUS SafeContractor Accredited" />
                  <BulletWithLogo src="/assets/logos/rifm.jpg" alt="RIFM" label="Research Institute for Fragrance Materials (RIFM)" />
                </ul>
                <ul className="space-y-3">
                  <BulletWithLogo src="/assets/logos/epa.jpg" alt="EPA" label="EPA Toxic Substances Control Act (TSCA)" />
                  <BulletWithLogo src="/assets/logos/carb.jpg" alt="CARB" label="California Air Resources Board (CARB)" />
                  <BulletWithLogo src="/assets/logos/oehha.png" alt="OEHHA" label="State of California’s Prop 65 per OEHHA" />
                  <BulletWithLogo src="/assets/logos/cites.jpg" alt="CITES" label="CITES Global Treaty Compliance" />
                  <BulletWithLogo src="/assets/logos/ecovadis.png" alt="EcoVadis" label="EcoVadis Sustainability Awarded" />
                </ul>
              </div>

              {/* Fine print */}
              <div className="mt-8 grid md:grid-cols-2 gap-5 text-sm text-slate-700">
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
