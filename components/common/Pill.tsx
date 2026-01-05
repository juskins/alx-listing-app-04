import React from 'react';

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        isActive
          ? 'bg-black text-white shadow-md'
          : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:shadow-sm'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
