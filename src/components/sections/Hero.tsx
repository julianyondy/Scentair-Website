import React, { useRef, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error: Error) => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  // ===== Image cards (swap image paths/links as needed) =====
  const cards = [
    { title: 'Diffusers',          img: '/assets/home/diffusers.jpg',       to: '/products/machines' },
    { title: 'All Fragrances',     img: '/assets/home/all-fragrances.jpg',  to: '/fragrances' },
    { title: 'Candles',            img: '/assets/home/candles.jpg',         to: '/products/candles' },
    { title: 'Samples',            img: '/assets/home/samples.jpg',         to: '/samples' },
    { title: 'Business Solutions', img: '/assets/home/business.jpg',        to: '/solutions' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="auto"
            poster="/assets/video/your-video-thumbnail.jpg"
          >
            {/* If your video is in public/, reference it as /assets/... (no /public prefix) */}
            <source src="/assets/Video/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Optional overlay */}
          <div className="absolute inset-0"></div>
        </div>

        {/* Hero Content */}
        <Container className="relative z-10 h-full">
          <div className="flex items-center justify-center min-h-screen py-20">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
                Trusted by Brands
                <span className="text-white/90 block">Loved by Families</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md">
                Differentiate your space with scent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products">
                  <Button size="lg" className="px-8 shadow-lg">
                    Explore Collection
                  </Button>
                </Link>
                <Link to="/why-scentair">
                  <Button size="lg" className="px-8 shadow-lg">
                    Why ScentAir
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== CATEGORY GRID (below hero) ===== */}
      <section className="py-10 md:py-14">
        <Container>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
            {/* Top row: two wide cards */}
            <Link to={cards[0].to} className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all lg:col-span-3">
              <img src={cards[0].img} alt={cards[0].title} className="h-56 sm:h-64 md:h-72 w-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-5 py-2 rounded-full bg-neutral-900/90 text-white font-semibold shadow-lg">
                  {cards[0].title}
                </span>
              </div>
            </Link>

            <Link to={cards[1].to} className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all lg:col-span-3">
              <img src={cards[1].img} alt={cards[1].title} className="h-56 sm:h-64 md:h-72 w-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-5 py-2 rounded-full bg-neutral-900/90 text-white font-semibold shadow-lg">
                  {cards[1].title}
                </span>
              </div>
            </Link>

            {/* Second row: three equal cards */}
            <Link to={cards[2].to} className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all lg:col-span-2">
              <img src={cards[2].img} alt={cards[2].title} className="h-56 sm:h-64 w-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-5 py-2 rounded-full bg-neutral-900/90 text-white font-semibold shadow-lg">
                  {cards[2].title}
                </span>
              </div>
            </Link>

            <Link to={cards[3].to} className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all lg:col-span-2">
              <img src={cards[3].img} alt={cards[3].title} className="h-56 sm:h-64 w-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-5 py-2 rounded-full bg-neutral-900/90 text-white font-semibold shadow-lg">
                  {cards[3].title}
                </span>
              </div>
            </Link>

            <Link to={cards[4].to} className="group relative block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all lg:col-span-2">
              <img src={cards[4].img} alt={cards[4].title} className="h-56 sm:h-64 w-full object-cover" />
              <div className="absolute inset-0 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-5 py-2 rounded-full bg-neutral-900/90 text-white font-semibold shadow-lg">
                  {cards[4].title}
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== WHY SCENTAIR CTA ===== */}
      <section className="pb-16">
        <Container>
          <div className="bg-slate-800 text-white rounded-3xl shadow-xl px-6 md:px-10 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why ScentAir?</h2>
            <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
              For over 30 years we’ve been enhancing environments, brands, and consumer experiences
              through improved air quality and the power of scent.
            </p>

            {/* If your Button forces bg-primary, replace with the <Link> below this block */}
            <Link to="/why-scentair">
              <Button size="lg" className="mt-8 rounded-full px-6 bg-white text-slate-900 hover:bg-white/90">
                Learn More
              </Button>
            </Link>

            {/* Fallback (use this if your Button always enforces bg-primary)
            <Link
              to="/why-scentair"
              className="inline-flex items-center justify-center mt-8 rounded-full px-6 py-3 bg-white text-slate-900 font-medium shadow-lg hover:bg-white/90 transition"
            >
              Learn More
            </Link>
            */}
          </div>
        </Container>
      </section>
    </>
  );
};
