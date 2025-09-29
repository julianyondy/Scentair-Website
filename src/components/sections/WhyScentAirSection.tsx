import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

type Classable = { className?: string };

/* ===================== Reusable Headline (matches PRESTIGIOUS) ===================== */
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

// Boleh dibiarkan meskipun tidak dipakai di section safety
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

/* ===================== Page ===================== */
export const WhyScentAirSection: React.FC = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* ===== PAGE HEADER (without bottom line) ===== */}
      <section className="w-full bg-white py-6 md:py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why ScentAir
        </h1>
        <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-6"></div>
        <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
          Discover why global brands and businesses trust ScentAir to create 
          memorable experiences through fragrance.
        </p>
      </section>

      {/* ===== PIONEER (responsive proportional image) ===== */}
      <section id="pioneer" className="w-full bg-white flex justify-center">
        <img
          src="/assets/whyscentair/pioneer.png"
          alt="ScentAir Pioneer"
          className="rounded-3xl w-full max-w-7xl max-h-[90vh] object-contain"
          loading="lazy"
        />
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 md:my-12" />

      {/* ===== PRESTIGIOUS (responsive proportional image) ===== */}
      <section id="prestigious" className="w-full bg-white flex justify-center">
        <img
          src="/assets/whyscentair/prestigious.png"
          alt="Prestigious clients worldwide"
          className="w-full max-w-7xl max-h-[90vh] object-contain rounded-3xl"
          loading="lazy"
        />
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-8 md:my-12" />

      {/* ===== SAFETY (raw picture only) ===== */}
      <section id="safety" className="w-full bg-white flex justify-center">
        <img
          src="/assets/whyscentair/scentaircares.png"
          alt="ScentAir Cares"
          className="rounded-3xl w-full max-w-7xl max-h-[90vh] object-contain"
          loading="lazy"
        />
      </section>

      {/* Divider — diperkecil jaraknya */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4 md:my-6" />

      {/* ===== GREEN ===== */}
      {/* Padding atas diperkecil agar lebih rapat dengan divider di atas */}
      <section id="green" className="relative pt-6 md:pt-8 pb-12 md:pb-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Text & Button */}
            <div>
              {/* Font size disamakan dengan header "Why ScentAir" */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#0c4384] leading-tight mb-6">
                Corporate Responsibility &amp; Sustainability
              </h1>
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
                src="/assets/whyscentair/sustain.png"
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
