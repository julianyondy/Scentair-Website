import React from 'react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export const HeroVideo: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        preload="auto"
        poster="/assets/infocard/smell.png"
      >
        <source src="/assets/Video/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Scent Makes an Emotional Impact
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-md">
            Scent is the strongest sense linked to memory & emotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-8 shadow-lg"
              onClick={handleGetStartedClick}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 shadow-lg"
              onClick={() => navigate('/contact')}
            >
              Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};