import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

type Classable = { className?: string };

// ========== Reusable bits ==========
const SectionTitle = ({
  title,
  accent = 'text-[#0c4384]',
  className = '',
}: {
  title: string;
  accent?: string;
  className?: string;
}) => (
  <div className={`flex items-center ${className}`}>
    <h2
      className={`font-extrabold tracking-tight ${accent} 
      text-[clamp(22px,2.2vw,28px)] md:text-[clamp(28px,2.2vw,36px)]`}
    >
      {title}
    </h2>
  </div>
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

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <li className="rounded-xl bg-slate-50 ring-1 ring-slate-100 p-4 text-center">
    <div className="font-extrabold text-[#0c4384] text-[clamp(18px,2.2vw,24px)]">{value}</div>
    <div className="text-slate-600 text-[clamp(11px,1.5vw,13px)]">{label}</div>
  </li>
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

const FiveLogosRow: React.FC<{ logos: { src: string; alt: string }[] } & Classable> = ({
  logos,
  className,
}) => (
  <div className={`w-full px-3 ${className || ''}`}>
    <div className="mx-auto grid grid-cols-5 gap-3 max-w-[520px]">
      {logos.map((i) => (
        <div
          key={i.src}
          className="aspect-square grid place-items-center rounded-lg bg-white/85 ring-1 ring-slate-200/60 backdrop-blur supports-[backdrop-filter]:bg-white/70"
        >
          <img
            src={i.src}
            alt={i.alt}
            className="h-9 w-9 md:h-10 md:w-10 object-contain opacity-90"
            loading="lazy"
            width={40}
            height={40}
          />
        </div>
      ))}
    </div>
  </div>
);

// ========== Page ==========
export const WhyScentAirSection: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* ===== PIONEER ===== */}
      <section id="pioneer" className="relative">
        <div className="absolute inset-0">
          <img
            src="/assets/whyscentair/pioneer.jpg"
            alt="ScentAir pioneer heritage"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent" />
        </div>

        <Container>
          <div className="relative min-h-[460px] md:min-h-[560px] flex items-center py-10 md:py-0">
            <div className="max-w-xl">
              <SectionTitle title="Pioneer" className="mb-2 md:mb-3" />
              <h1 className="sr-only">Pioneer</h1>
              <p className="mt-3 text-slate-800/90 leading-relaxed text-[clamp(14px,1.9vw,18px)]">
                When a Disney Imagineer was tasked with adding scent to a few popular attractions, the idea of ScentAir was born. In 1994 we were founded on the notion that scent could turn a moment into a magical memory.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 md:my-12" />

      {/* ===== PRESTIGIOUS ===== */}
      <section id="prestigious" className="relative py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image card */}
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(2,6,23,0.08)] ring-1 ring-slate-100">
                <div className="aspect-[4/3] w-full">
                  <img
                    src="/assets/whyscentair/prestigious.jpg"
                    alt="Prestigious clients worldwide"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="order-1 md:order-2">
              <SectionTitle title="Prestigious" className="mb-3 md:mb-4" />
              <p className="text-slate-700 leading-relaxed max-w-xl text-[clamp(14px,1.9vw,18px)]">
                Nearly all the famous and top-tier international hotel chains, leading corporations,
                airports, as well as government institutions are proudly using ScentAir to enhance
                their corporate identity and customer experience.
              </p>

              {/* Micro stats */}
              <ul className="mt-6 grid grid-cols-2 gap-3 md:gap-4 max-w-lg">
                <Stat value="119+" label="Countries" />
                <Stat value="30+" label="Years Experience" />
                <Stat value="40,000+" label="Customers" />
                <Stat value="65+" label="Distributors" />
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 md:my-12" />

      {/* ===== SAFETY ===== */}
      <section id="safety" className="relative py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT: big image + 5 logos underneath */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-100 shadow-[0_10px_30px_rgba(2,6,23,0.08)]">
                <div className="aspect-[3/4] w-full">
                  <img
                    src="/assets/whyscentair/momandchild.jpg"
                    alt="Family enjoying clean and safe air"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <FiveLogosRow
                className="mt-4"
                logos={[
                  { src: '/assets/logos/respir.png', alt: 'No respiratory allergens' },
                  { src: '/assets/logos/free.png', alt: 'Phthalate free' },
                  { src: '/assets/logos/cruelty.png', alt: 'Cruelty free' },
                  { src: '/assets/logos/ecovadiscer.png', alt: 'EcoVadis certified' },
                  { src: '/assets/logos/safe.png', alt: 'Internationally certified safe' },
                ]}
              />
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7">
              <SectionTitle title="Fragrance safety standards" />
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
                  <BulletWithLogo src="/assets/logos/alcumus.png" alt="Alcumus" label="ALCUMUS SafeContractor Accredited" />
                  <BulletWithLogo src="/assets/logos/ecovadis.png" alt="EcoVadis" label="ECOVADIS Sustainability Awarded" />
                </ul>
                <ul className="space-y-3">
                  <BulletWithLogo src="/assets/logos/rifm.jpg" alt="RIFM" label="Research Institute for Fragrance Materials (RIFM)" />
                  <BulletWithLogo src="/assets/logos/epa.jpg" alt="EPA" label="EPA Toxic Substances Control Act (TSCA)" />
                  <BulletWithLogo src="/assets/logos/carb.jpg" alt="CARB" label="California Air Resources Board (CARB)" />
                  <BulletWithLogo src="/assets/logos/oehha.png" alt="OEHHA" label="State of California’s Prop 65 per OEHHA" />
                  <BulletWithLogo src="/assets/logos/cites.jpg" alt="CITES" label="CITES Global Treaty Compliance" />
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
          </div>
        </Container>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 md:my-12" />

      {/* ===== GREEN (static like mock) ===== */}
      <section id="green" className="relative py-12 md:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Text & Button */}
            <div>
              <SectionTitle title="Corporate Responsibility & Sustainability" />
              <p className="mt-4 text-slate-700 leading-relaxed text-[clamp(14px,1.9vw,18px)]">
                As a worldwide organization, we take our role as global citizens seriously.
                We continuously strive to reduce our environmental impact and make our slice
                of the world a more just and equitable place.
              </p>
              <div className="mt-6">
                <a
                  href="https://heyzine.com/flip-book/7536231544.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="px-7 py-3 md:px-8 md:py-4 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold shadow text-[clamp(13px,1.8vw,16px)]"
                  >
                    Read Report
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Static image */}
            <div className="flex justify-center">
              <img
                src="/assets/whyscentair/green-report.jpg"
                alt="Corporate responsibility & sustainability report"
                className="w-full max-w-[560px] rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default WhyScentAirSection;
