'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CapabilityProps {
  title: string;
  subtitle: string;
  description: string;
  tabs: {
    id: string;
    name: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

export default function Capabilities({ title, subtitle, description, tabs }: CapabilityProps) {
  return (
    <div className="bg-gray-300 bg-opacity-80 p-8 rounded-lg">
      <div className="text-center mb-12">
        <p className="text-gray-600 text-sm tracking-wider mb-2">[{subtitle}]</p>
        <h2 className="text-5xl font-light text-gray-800 mb-4">{title}</h2>
        <p className="text-xl text-gray-700">{description}</p>
      </div>
      
      <div className="flex gap-4 mb-8 justify-center">
        {tabs.map((tab) => (
          <motion.div 
            key={tab.id}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-md"
            style={{ backgroundColor: tab.color }}
          >
            <span className="text-white">{tab.icon}</span>
            <span className="text-white font-medium uppercase text-sm">{tab.name}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-2">Real-Time Convergent Billing</h3>
            <p className="text-gray-600">Instantaneous, accurate billing across all services and platforms.</p>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4 w-80">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-black rounded p-1">
                <span className="text-white text-xs font-bold">EMS</span>
              </div>
              <div className="flex">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <span className="font-medium">Billing</span>
              <div className="flex space-x-4">
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm text-gray-500">17 DAYS</div>
            </div>
          </div>
        </div>
        
        <div className="flex mt-8 space-x-2">
          <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
            <span>PRODUCTS</span>
            <span className="ml-2">+</span>
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
            <span>SOLUTIONS</span>
            <span className="ml-2">+</span>
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
            <span>RESOURCES</span>
            <span className="ml-2">+</span>
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
            <span>SERVICES</span>
          </button>
          <button className="bg-cyan-400 text-white px-4 py-2 rounded">
            BOOK A MEETING
          </button>
        </div>
      </div>
    </div>
  );
}