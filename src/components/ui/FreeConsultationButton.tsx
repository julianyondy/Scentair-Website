import React from 'react';
import { useNavigate } from 'react-router-dom';

export const FreeConsultationButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <button
      className="cursor-pointer fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg px-6 py-4 text-lg font-bold border border-primary transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
      onClick={handleClick}
    >
      Free Consultation
    </button>
  );
};
