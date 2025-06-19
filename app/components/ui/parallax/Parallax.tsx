'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function Parallax({ 
  children, 
  speed = 0.5, 
  direction = 'up',
  className = ''
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollY } = useScroll();

  // Calculate the transform values based on direction
  const getTransformValue = () => {
    switch (direction) {
      case 'up':
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${speed * 100}%`, `${-speed * 100}%`]
        );
      case 'down':
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${-speed * 100}%`, `${speed * 100}%`]
        );
      case 'left':
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${speed * 100}%`, `${-speed * 100}%`]
        );
      case 'right':
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${-speed * 100}%`, `${speed * 100}%`]
        );
      default:
        return useTransform(
          scrollY,
          [elementTop - clientHeight, elementTop + clientHeight],
          [`${speed * 100}%`, `${-speed * 100}%`]
        );
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransformValue() : undefined;
  const x = direction === 'left' || direction === 'right' ? getTransformValue() : undefined;

  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      setElementTop(ref.current?.offsetTop || 0);
      setClientHeight(window.innerHeight);
    };
    
    setValues();
    window.addEventListener('resize', setValues);
    
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, x }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}