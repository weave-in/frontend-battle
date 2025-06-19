import React from 'react';
import { motion } from 'framer-motion';

interface StrikingSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  imagePosition?: 'left' | 'right' | 'background';
  ctaText?: string;
  ctaLink?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export default function StrikingSection({ 
  title,
  subtitle,
  description,
  image,
  imagePosition = 'right',
  ctaText,
  ctaLink = '#',
  backgroundColor,
  textColor,
  className = ''
}: StrikingSectionProps) {
  // Default styles
  const bgStyle = backgroundColor ? { backgroundColor } : {};
  const textStyle = textColor ? { color: textColor } : {};
  
  // Background image style
  const bgImageStyle = imagePosition === 'background' && image 
    ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } 
    : {};
  
  return (
    <section 
      className={`relative overflow-hidden py-20 ${className}`} 
      style={{ ...bgStyle, ...bgImageStyle }}
    >
      {/* Overlay for background image */}
      {imagePosition === 'background' && image && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`flex flex-col ${imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          {/* Content */}
          <div className={`w-full ${imagePosition !== 'background' ? 'lg:w-1/2' : 'text-center max-w-3xl mx-auto'}`}>
            {subtitle && (
              <motion.p 
                className="text-sm font-semibold uppercase tracking-wider mb-2"
                style={textStyle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {subtitle}
              </motion.p>
            )}
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={textStyle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            
            {description && (
              <motion.p 
                className="text-lg mb-8"
                style={textStyle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {description}
              </motion.p>
            )}
            
            {ctaText && (
              <motion.a
                href={ctaLink}
                className="inline-block px-8 py-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {ctaText}
              </motion.a>
            )}
          </div>
          
          {/* Image (if not background) */}
          {imagePosition !== 'background' && image && (
            <div className="w-full lg:w-1/2">
              <motion.img 
                src={image} 
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}