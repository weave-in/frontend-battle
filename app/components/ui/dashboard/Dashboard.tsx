'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="bg-blue-900 text-white p-4 sm:p-8 rounded-lg relative overflow-hidden">
      {/* Add a background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://placehold.co/1200x800/0066FF/FFFFFF/png?text=Dashboard+Background" 
          alt="Dashboard background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10"> {/* Make content appear above the background */}
        <div className="hidden md:flex justify-center space-x-6 mb-8">
          <div className="flex items-center">
            <span className="text-white mr-2">★</span>
            <span>4.8 rating on</span>
            <span className="font-bold ml-1">Capterra</span>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-2">★</span>
            <span>4.8 rating on</span>
            <span className="font-bold ml-1">G2</span>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-2">★</span>
            <span>350+ reviews on</span>
            <span className="font-bold ml-1">xero</span>
          </div>
          <div className="flex items-center">
            <span className="text-white mr-2">★</span>
            <span>550+ reviews on</span>
            <span className="font-bold ml-1">Intuit Quickbooks</span>
          </div>
        </div>
        
        {/* Mobile ratings - visible only on small screens */}
        <div className="md:hidden grid grid-cols-2 gap-3 mb-6">
          <div className="flex items-center bg-blue-800/50 p-2 rounded">
            <span className="text-white mr-2">★</span>
            <div>
              <span className="text-xs">4.8 rating on</span>
              <span className="text-xs font-bold ml-1 block">Capterra</span>
            </div>
          </div>
          <div className="flex items-center bg-blue-800/50 p-2 rounded">
            <span className="text-white mr-2">★</span>
            <div>
              <span className="text-xs">4.8 rating on</span>
              <span className="text-xs font-bold ml-1 block">G2</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8 sm:mb-12">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Create reports, forecasts,<br className="hidden sm:block" />dashboards & consolidations
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center justify-center space-x-2 mb-8"
          >
            <span className="text-amber-400">✨</span>
            <span className="text-xl">Now with AI-insights</span>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-200 text-blue-900 font-medium px-6 py-3 rounded-md"
          >
            Start 14-day free trial &gt;
          </motion.button>
          
          <div className="mt-4">
            <button className="text-blue-200 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              See what we do
            </button>
          </div>
        </div>
      </div>
      
      {/* Add a feature image at the bottom */}
      <div className="mt-6 sm:mt-8 relative z-10 flex justify-center">
        <img 
          src="https://placehold.co/1200x600/FFFFFF/0066FF/png?text=Dashboard+Preview" 
          alt="Dashboard preview" 
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}