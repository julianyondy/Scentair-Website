import React, { useState } from 'react';

interface TwoSidedButtonProps {
  onMachineClick?: () => void;
  onFragranceClick?: () => void;
  className?: string;
}

export const TwoSidedButton: React.FC<TwoSidedButtonProps> = ({
  onMachineClick,
  onFragranceClick,
  className = ''
}) => {
  const [activeSide, setActiveSide] = useState<'machine' | 'fragrance'>('fragrance');

  const handleMachineClick = () => {
    setActiveSide('machine');
    if (onMachineClick) {
      onMachineClick();
    }
  };

  const handleFragranceClick = () => {
    setActiveSide('fragrance');
    if (onFragranceClick) {
      onFragranceClick();
    }
  };

  return (
    <div className={`inline-flex rounded-lg bg-gray-200 p-1 ${className}`}>
      <button
        type="button"
        onClick={handleMachineClick}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          activeSide === 'machine'
            ? 'bg-white text-primary shadow-sm'
            : 'text-gray-600 hover:text-gray-900 hover:scale-105'
        }`}
      >
        Machines
      </button>
      <button
        type="button"
        onClick={handleFragranceClick}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          activeSide === 'fragrance'
            ? 'bg-white text-primary shadow-sm'
            : 'text-gray-600 hover:text-gray-900 hover:scale-105'
        }`}
      >
        Fragrances
      </button>
    </div>
  );
};