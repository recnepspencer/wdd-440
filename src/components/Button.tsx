// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  color?: 'blue' | 'green' | 'red' | 'gray';  // Add color variants
  className?: string;
}

export default function Button({ label, onClick, type = 'button', color = 'blue', className = '' }: ButtonProps) {
  const baseStyles = 'w-full px-4 py-2 rounded-lg transition duration-200 ease-in-out';

  // Define color classes
  const colorClasses = {
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    red: 'bg-red-600 hover:bg-red-700 text-white',
    gray: 'bg-gray-600 hover:bg-gray-700 text-white',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${colorClasses[color]} ${className}`}
    >
      {label}
    </button>
  );
}
