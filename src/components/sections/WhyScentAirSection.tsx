import React from 'react';
import { Container } from '../ui/Container';

type Stat = { labelTop?: string; value: string; labelBottom?: string; color: string; className: string };

const stats: Stat[] = [
  { value: '119+', labelBottom: 'Countries', color: 'bg-orange-500', className: 'left-4 bottom-6 sm:left-8 sm:bottom-8' },
  { value: '30+', labelBottom: 'Years of Industry Experience', color: 'bg-blue-700', className: 'left-1/2 -translate-x-1/2 bottom-3 sm:bottom-5' },
  { value: '40,000+', labelTop: 'Over', labelBottom: 'Customers in a Variety of Industries', color: 'bg-orange-600', className: 'right-4 bottom-6 sm:right-8 sm:bottom-8' },
  { value: '65+', labelBottom: 'International Distributors', color: 'bg-indigo-700', className: 'right-6 top-6 sm:right-10 sm:top-8' },
];

const Bubble: React.FC<Stat> = ({ labelTop, value, labelBottom, color, className }) => (
  <div
    className={`absolute ${className} text-white rounded-full shadow-xl px-4 py-3 sm:px-5 sm:py-4 max-w-[12rem] sm:max-w-[14rem]`}
    style={{ backgroundColor: 'transparent' }}
  >
    <div className={`rounded-full ${color} px-3 py-2 sm:px-4 sm:py-3`}>
      {labelTop && <div className="text-[10px] sm:text-xs leading-none opacity-90">{labelTop}</div>}
      <div className="text-lg sm:text-2xl font-extrabold leading-tight">{value}</div>
      {labelBottom && <div className="text-[10px] sm:text-xs leading-tight opacity-90">{labelBottom}</div>}
    </div>
  </div>
);

export const WhyScentAirSection: React.FC = () => {
  return (
    <section id="why-scentair" className="py-14 md:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Copy (Pioneer & Prestigious) */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              7 Why ScentAir – <span className="text-gray-700">1. Pioneer & 2. Prestigious</span>
            </h2>

            {/* Pioneer */}
            <div className="flex gap-4 mb-8">
              <div className="text-5xl md:text-6xl font-extrabold text-lime-600 leading-none">1</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Pioneer</h3>
                <p className="mt-2 text-gray-700 max-w-prose">
                  ScentAir adalah pelopor <em>environment scenting</em>, lahir pada tahun 1994 dari seorang Disney
                  Imagineer untuk menghadirkan pengalaman “dimensi ke-5” bagi pengunjung.
                </p>
              </div>
            </div>

            {/* Prestigious */}
            <div className="flex gap-4">
              <div className="text-5xl md:text-6xl font-extrabold text-lime-600 leading-none">2</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Prestigious</h3>
                <p className="mt-2 text-gray-700 max-w-prose">
                  Dipercaya jaringan hotel internasional papan atas, korporasi besar, bandara, dan institusi
                  pemerintahan untuk meningkatkan identitas merek dan pengalaman pelanggan.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visuals + Bubbles (stats) */}
          <div className="space-y-4">
            {/* Top image (Pioneer visual) */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/whyscentair/pioneer.jpg" // ganti dengan asetmu
                alt="ScentAir Pioneer – Disney Imagineer heritage"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Bottom image (Prestigious + stats bubbles) */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/whyscentair/prestigious.jpg" // ganti dengan asetmu
                alt="Prestigious global presence"
                className="w-full h-auto object-cover"
              />
              {/* Stat bubbles */}
              {stats.map((s, i) => (
                <Bubble key={i} {...s} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyScentAirSection;
