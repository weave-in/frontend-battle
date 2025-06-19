'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BrandKitProps {
  brands: {
    id: string;
    name: string;
    logo: string; // Changed from React.ReactNode to string for image URL
    color: string;
  }[];
  onSelect?: (id: string) => void;
}

export default function BrandKits({ brands, onSelect }: BrandKitProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedBrand(id);
    if (onSelect) onSelect(id);
  };

  return (
    <div className="bg-black rounded-3xl p-6 border border-gray-800 w-full max-w-md">
      <h2 className="text-2xl font-bold text-white mb-6">Brand Kits</h2>
      <div className="space-y-3">
        {brands.map((brand) => (
          <div 
            key={brand.id}
            className="bg-gray-900 rounded-xl p-4 flex items-center justify-between cursor-pointer"
            onClick={() => handleSelect(brand.id)}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded flex items-center justify-center border border-gray-700">
                {selectedBrand === brand.id && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4 rounded bg-indigo-500 flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full" style={{ backgroundColor: brand.color }}></div>
                {brand.logo ? (
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                )}
                <span className="text-white font-medium">{brand.name}</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12z" />
                <path d="M15 8a1 1 0 00-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}