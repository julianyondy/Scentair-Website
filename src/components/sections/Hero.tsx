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

  return (
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
          poster="/assets/video/your-video-thumbnail.jpg" // Optional: Add a poster image
        >
          <source src="/public/assets/Video/herovideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
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
                <Button
                  size="lg"
                  className="px-8 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:!bg-[#89C7D9]"
                >
                  Explore Collection
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  className="px-8 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:!bg-[#89C7D9]"
                >
                  Learn Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};