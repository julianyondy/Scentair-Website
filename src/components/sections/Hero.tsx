import React, { useEffect, useRef, useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const whyVideoRef = useRef<HTMLVideoElement>(null);
  const [isWhyPlaying, setIsWhyPlaying] = useState(false);

  useEffect(() => {
    if (bgVideoRef.current) {
      bgVideoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      {/* ===== 1) HERO VIDEO ===== */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={bgVideoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="auto"
            poster="/assets/video/your-video-thumbnail.jpg"
          >
            <source src="/assets/Video/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay with opacity */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <Container className="relative z-10 h-full">
          <div className="flex items-center justify-center min-h-screen py-24">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                Trusted by Brands
                <span className="text-white/90 block">Loved by Families</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Differentiate your space with scent.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2) WHY SCENT? (Simplified & Centered) ===== */}
      <section className="relative py-14 md:py-20">
        {/* soft background accents */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(60% 60% at 50% 50%, #0c4384 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute right-6 bottom-0 h-40 w-40 rounded-full blur-3xl opacity-20"
            style={{
              background: 'radial-gradient(60% 60% at 50% 50%, #60a5fa 0%, transparent 70%)',
            }}
          />
        </div>

        <Container>
          {/* Centered Headline */}
          <div className="text-center">
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Why <span className="text-[#0c4384]">Scent</span>?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Scent engages memory and emotion faster than any other sense—shaping how guests
              feel, stay, and spend. See how it transforms spaces in seconds.
            </p>
          </div>

          {/* Bigger, simplified video card */}
          <div className="relative mt-8">
            <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] bg-white shadow-2xl">
              <div className="relative">
                <video
                  ref={whyVideoRef}
                  className="w-full aspect-video md:aspect-[16/9]"
                  controls
                  playsInline
                  preload="metadata"
                  src="/assets/Video/whyscentvid.mp4"
                  onPlay={() => setIsWhyPlaying(true)}
                  onPause={() => setIsWhyPlaying(false)}
                  onEnded={() => setIsWhyPlaying(false)}
                >
                  Sorry, your browser doesn’t support the video tag.
                </video>

                {/* Play overlay */}
                {!isWhyPlaying && (
                  <button
                    type="button"
                    onClick={() => whyVideoRef.current?.play()}
                    className="group absolute inset-0 flex items-center justify-center focus:outline-none"
                    aria-label="Play Why Scent video"
                  >
                    <span className="relative inline-flex items-center gap-3 rounded-full bg-white/95 px-5 py-3 font-semibold text-slate-900 shadow-lg ring-1 ring-slate-200 transition-transform group-hover:scale-105">
                      <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[#0c4384] text-white">
                        ▶
                        <span className="absolute inset-0 rounded-full ring-2 ring-[#0c4384]/40 animate-ping" />
                      </span>
                      Play Video
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/why-scent"
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' })}
            >
              <Button
                size="lg"
                className="px-7 rounded-full bg-[#0c4384] text-white shadow-lg hover:bg-[#0c4384]/90"
              >
                Learn More About Scent
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== 3) WHY SCENTAIR CTA ===== */}
      <section className="pb-16">
        <Container>
          <div className="bg-[#0c4384] text-white rounded-3xl shadow-xl px-6 md:px-10 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why ScentAir?</h2>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
              For over 30 years we’ve been enhancing environments, brands, and consumer experiences
              through improved air quality and the power of scent.
            </p>

            <Link to="/why-scentair">
              <Button
                size="lg"
                className="mt-8 rounded-full px-6 bg-white text-slate-900 hover:bg-white/90"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};
