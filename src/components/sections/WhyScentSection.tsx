import React from 'react';
import { Brain, Smile, Star, TrendingUp, ShoppingCart, Clock3 } from 'lucide-react';

type Point = { icon: React.ReactNode; value: string; label: string };

/** Just value + label (no cards, no icons) */
const PointsSimple: React.FC<{ points: Point[] }> = ({ points }) => (
  <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
    {points.map((p, i) => (
      <li key={`${i}-${String(p.value)}`} className="space-y-1">
        <div className="font-extrabold text-2xl md:text-[26px] leading-none text-[#0c4384]">
          {p.value}
        </div>
        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
          {p.label}
        </p>
      </li>
    ))}
  </ul>
);

const BannerBlock: React.FC<{
  type: 'video' | 'image';
  src: string;
  headline: string;
  points: Point[];
  poster?: string;
}> = ({ type, src, headline, points, poster }) => {
  return (
    <section className="relative w-full py-8 md:py-12">
      {/* wide container with small side padding */}
      <div className="mx-auto w-full max-w-[120rem] px-1 sm:px-2">
        {/* Headline (centered) */}
        <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold tracking-tight text-center">
          {headline}
        </h2>

        {/* Points right below headline (no cards) */}
        <div className="mt-5 md:mt-6">
          <PointsSimple points={points} />
        </div>

        {/* Media below, smaller than before */}
        <div className="mt-6 md:mt-8 relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
          {type === 'video' ? (
            <video
              className="block w-full h-[38vh] md:h-[46vh] lg:h-[52vh] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
              poster={poster}
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <img
              src={src}
              alt={headline}
              className="block w-full h-[38vh] md:h-[46vh] lg:h-[52vh] object-cover"
              loading="eager"
              decoding="async"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export const WhyScentSection: React.FC = () => {
  const Header = () => (
    <section className="pt-4 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Why Scent</h1>
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-4" />
          <p className="text-lg text-secondary leading-relaxed max-w-3xl mx-auto">
            Discover the science behind scent marketing and how it can transform your business.
          </p>
        </div>
      </div>
    </section>
  );

  const emotionalPoints: Point[] = [
    { icon: <Brain size={20} />, value: '63%',  label: 'improvement in mood when exposed to a pleasing scent.' },
    { icon: <Smile size={20} />, value: '75%',  label: 'Of our emotions generated everyday are due to what we smell not by what we see' },
    { icon: <Star size={20} />, value: '100x', label: 'People are more likely to remember what they smell vs. what they see' },
  ];

  const behaviorPoints: Point[] = [
    { icon: <TrendingUp size={20} />, value: '60%', label: 'of consumers were significantly more inclined to purchase' },
    { icon: <ShoppingCart size={20} />, value: '22%', label: 'more products purchase' },
    { icon: <Clock3 size={20} />, value: '18%', label: 'increase linger time' },
  ];

  return (
    <div className="bg-white text-slate-900">
      <Header />

      {/* Video section */}
      <BannerBlock
        type="video"
        src="/assets/whyscent/emotional.mp4"
        headline="Scent Makes an Emotional Impact"
        points={emotionalPoints}
      />

      {/* Image section */}
      <BannerBlock
        type="image"
        src="/assets/whyscent/behaviour.png"
        headline="Scent Drives Customer Behavior"
        points={behaviorPoints}
      />

      {/* CTA */}
      <section className="bg-slate-50 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Ready to craft your signature scent?
          </h3>
          <p className="text-slate-700 mt-2">
            Elevate experience, increase conversions, and build lasting loyalty.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3
                         bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
