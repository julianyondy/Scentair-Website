import React, { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

export const WhatsAppButton: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Initialize position to bottom-right corner
  useEffect(() => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth;
      const buttonHeight = buttonRef.current.offsetHeight;
      
      setPosition({
        x: window.innerWidth - buttonWidth - 24, // 24px = 6 * 4 (tailwind spacing)
        y: window.innerHeight - buttonHeight - 24
      });
    }
  }, []);

  // Handle window resize to keep button on screen
  useEffect(() => {
    const handleResize = () => {
      if (buttonRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth;
        const buttonHeight = buttonRef.current.offsetHeight;
        
        setPosition(prev => ({
          x: Math.min(prev.x, window.innerWidth - buttonWidth - 24),
          y: Math.min(prev.y, window.innerHeight - buttonHeight - 24)
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  const handleDrag = (e: MouseEvent | TouchEvent) => {
    if (isDragging) {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      setPosition({
        x: clientX - dragStart.x,
        y: clientY - dragStart.y
      });
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', stopDragging);
      document.addEventListener('touchmove', handleDrag);
      document.addEventListener('touchend', stopDragging);
    } else {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('touchend', stopDragging);
    }

    return () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, dragStart]);
return (
  <button
    ref={buttonRef}
    className="fixed z-50 bg-white rounded-full shadow-lg px-4 py-2 text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-move"
    style={{
      left: `${position.x}px`,
      top: `${position.y}px`,
    }}
    onMouseDown={handleMouseDown}
    onTouchStart={handleTouchStart}
    onClick={() => window.open('https://wa.me/PHONE_NUMBER?text=Hello,%20I%20need%20a%20free%20consultation', '_blank')}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-green-500"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497-.1-.248-.371-.416-.67-.515-.297-.1-.67-.15-1.042-.15-.372 0-.967.124-1.464.621-.497.497-.967 1.092-.967 2.39 0 1.297.94 2.593 1.04 2.741.099.149 1.413 2.19 3.405 3.033.46.192.81.312 1.12.423.372.125.67.101.868-.074.198-.175.819-.99.967-1.164.149-.175.298-.15.446-.075.149.075.94.44 1.81.688.87.248 1.717.402 1.965.497.248.099.397.149.446.248.05.099.05.198 0 .298-.05.099-.223.149-.497.273-.272.124-.52.211-.767.286-.247.074-.545.124-.842.124-.297 0-.767-.124-1.439-.819z"/>
      <path d="M20.5 2.5c-.827 0-1.656.225-2.39.67-.735.446-1.304 1.092-1.653 1.81-.348.719-.497 1.514-.497 2.309 0 .596.075 1.191.223 1.761.149.57.372 1.115.67 1.612.298.497.67.94 1.12 1.313.446.372.967.67 1.54.893.57.224 1.191.372 1.81.446.621.075 1.267.075 1.89.075.621 0 1.242 0 1.84-.075.621-.074 1.217-.223 1.761-.446.545-.224 1.042-.521 1.464-.894.423-.372.795-.816 1.092-1.313.298-.497.521-1.042.67-1.612.149-.57.223-1.165.223-1.761 0-.795-.149-1.59-.497-2.309-.349-.718-.918-1.364-1.653-1.81-.734-.445-1.563-.67-2.39-.67zm-2.25 4.5c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm-3.75 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm-3.75 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z"/>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
    </svg>
    Free Consultation
  </button>
);

};