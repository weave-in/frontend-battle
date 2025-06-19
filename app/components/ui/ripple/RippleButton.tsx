'use client';

import React, { useState, useEffect } from 'react';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

export default function RippleButton({ children, onClick, className = '' }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  
  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    
    ripples.forEach((ripple) => {
      const timeoutId = setTimeout(() => {
        setRipples((prevRipples) => prevRipples.filter((r) => r.id !== ripple.id));
      }, 800); // Match this with the CSS animation duration
      
      timeoutIds.push(timeoutId);
    });
    
    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [ripples]);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const size = Math.max(rect.width, rect.height) * 2;
    
    setRipples([...ripples, { x, y, size, id: Date.now() }]);
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <button
      className={`relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 ${className}`}
      onClick={handleClick}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  );
}