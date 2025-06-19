import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  type?: 'spinner' | 'dots' | 'pulse';
  text?: string;
  fullScreen?: boolean;
}

export default function Loader({ 
  size = 'medium', 
  color = 'blue', 
  type = 'spinner',
  text,
  fullScreen = false
}: LoaderProps) {
  // Size mapping
  const sizeMap = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };
  
  // Color mapping
  const colorMap = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500',
    purple: 'border-purple-500',
    gray: 'border-gray-500'
  };
  
  const containerClasses = fullScreen 
    ? 'fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50' 
    : 'flex items-center justify-center';
  
  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center">
        {type === 'spinner' && (
          <div className={`${sizeMap[size]} border-4 border-t-transparent rounded-full animate-spin ${colorMap[color as keyof typeof colorMap] || colorMap.blue}`} />
        )}
        
        {type === 'dots' && (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className={`${size === 'small' ? 'w-2 h-2' : size === 'large' ? 'w-4 h-4' : 'w-3 h-3'} rounded-full ${color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : color === 'red' ? 'bg-red-500' : color === 'yellow' ? 'bg-yellow-500' : color === 'purple' ? 'bg-purple-500' : 'bg-gray-500'}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        )}
        
        {type === 'pulse' && (
          <motion.div
            className={`${sizeMap[size]} rounded-full ${color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : color === 'red' ? 'bg-red-500' : color === 'yellow' ? 'bg-yellow-500' : color === 'purple' ? 'bg-purple-500' : 'bg-gray-500'}`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
        
        {text && <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{text}</p>}
      </div>
    </div>
  );
}