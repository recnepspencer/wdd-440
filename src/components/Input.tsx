// src/components/Input.tsx
import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export default function Input({ label, type = 'text', value, onChange, placeholder, className = '' }: InputProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-800">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-black px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:ring focus:ring-opacity-50" 
      />
    </div>
  );
}
