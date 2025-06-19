import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  layout?: 'slider' | 'grid' | 'masonry';
  showRating?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export default function Testimonials({ 
  title = 'What Our Clients Say',
  subtitle = 'Hear from our satisfied customers',
  testimonials,
  layout = 'slider',
  showRating = true,
  autoPlay = true,
  interval = 5000
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto play
  React.useEffect(() => {
    if (!autoPlay || layout !== 'slider') return;
    
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex, layout]);
  
  // Render star rating
  const renderRating = (rating: number = 5) => {
    return (
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };
  
  // Render testimonial card
  const renderTestimonialCard = (testimonial: Testimonial, index: number) => {
    return (
      <motion.div 
        key={testimonial.id}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {showRating && testimonial.rating && renderRating(testimonial.rating)}
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>
        
        <div className="flex items-center">
          {testimonial.avatar && (
            <img 
              src={testimonial.avatar} 
              alt={testimonial.author} 
              className="w-12 h-12 rounded-full mr-4 object-cover" 
            />
          )}
          <div>
            <h4 className="font-semibold">{testimonial.author}</h4>
            {(testimonial.role || testimonial.company) && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role}{testimonial.role && testimonial.company && ', '}{testimonial.company}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  };
  
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <motion.h2 
          className="text-3xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      </div>
      
      {layout === 'slider' && (
        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              {renderTestimonialCard(testimonials[currentIndex], 0)}
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={handlePrevious}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      
      {layout === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => (
            renderTestimonialCard(testimonial, index)
          ))}
        </div>
      )}
      
      {layout === 'masonry' && (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 px-4 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="break-inside-avoid">
              {renderTestimonialCard(testimonial, index)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}