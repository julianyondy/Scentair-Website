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

      {/* ===== 2) WHY SCENT? Video ===== */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              WHY SCENT?
            </h2>
          </div>

          <div className="relative w-full rounded-3xl overflow-hidden shadow-xl">
            <video
              ref={whyVideoRef}
              className="w-full aspect-video"
              controls
              playsInline
              src="/assets/Video/whyscentvid.mp4"
              onPlay={() => setIsWhyPlaying(true)}
              onPause={() => setIsWhyPlaying(false)}
              onEnded={() => setIsWhyPlaying(false)}
            >
              Sorry, your browser doesn’t support the video tag.
            </video>

            {!isWhyPlaying && (
              <button
                type="button"
                onClick={() => whyVideoRef.current?.play()}
                className="absolute inset-0 flex items-center justify-center focus:outline-none"
                aria-label="Play WHY SCENT video"
              >
                <span className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/95 text-slate-900 font-semibold shadow-lg hover:scale-105 transition">
                  ▶ Play Me
                </span>
              </button>
            )}
          </div>

          {/* Learn More button under the video */}
          <div className="mt-8 flex justify-center">
            <Link to="/why-scent">
              <Button
                size="lg"
                className="px-6 rounded-full bg-[#0c4384] text-white hover:bg-[#0c4384]/90 shadow-lg"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== 3) WHY SCENTAIR CTA ===== */}
      <section className="pb-16">
        <Container>
          <div className="bg-[#0c4384] text-white rounded-3xl shadow-xl px-6 md:px-10 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Why ScentAir?
            </h2>
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
