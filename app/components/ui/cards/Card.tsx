'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
}

export default function Card({ title, description, icon, image, className = '' }: CardProps) {
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="w-full h-40 sm:h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-3 sm:mb-4">
          {icon && <div className="mr-3 text-blue-600 dark:text-blue-400">{icon}</div>}
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base flex-grow">{description}</p>
      </div>
    </motion.div>
  );
}