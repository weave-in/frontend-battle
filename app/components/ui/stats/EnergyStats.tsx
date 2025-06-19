'use client';

import React from 'react';

interface StatItemProps {
  title: string;
  unit: string;
  value: string | number;
  change: number | {
    value: number;
    direction: 'up' | 'down';
    year: number;
  };
  yearlyData?: {
    year: number;
    value: string | number;
  }[];
  chartImage?: string;
}

interface EnergyStatsProps {
  stats: StatItemProps[];
}

function StatItem({ title, unit, value, change, yearlyData, chartImage }: StatItemProps) {
  // Determine if change is an object or a number
  const isChangeObject = typeof change !== 'number';
  const changeValue = isChangeObject ? change.value : change;
  const changeDirection = isChangeObject ? change.direction : (change >= 0 ? 'up' : 'down');
  const changeYear = isChangeObject ? change.year : new Date().getFullYear() - 1;

  return (
    <div className="mb-12">
      <div className="mb-2">
        <h3 className="text-gray-700 font-medium mb-1">{title}</h3>
        <div className="flex items-baseline">
          <span className="text-5xl font-light text-gray-800 mr-2">{value}</span>
          <span className="text-gray-600">{unit}</span>
        </div>
      </div>
      
      <div className="flex items-center mb-4">
        <span className="text-gray-500 text-sm mr-2">from {changeYear}</span>
        <div className={`flex items-center ${changeDirection === 'up' ? 'text-red-500' : 'text-green-500'}`}>
          {changeDirection === 'up' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 1.414z" clipRule="evenodd" />
            </svg>
          )}
          <span className="ml-1">{Math.abs(changeValue)}%</span>
        </div>
      </div>
      
      {yearlyData && yearlyData.map((data, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>{data.year}</span>
            <span>{data.value}</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-red-400 h-full rounded-full" 
              style={{ width: `${Math.min(100, (Number(data.value) / Number(yearlyData[0].value)) * 100)}%` }}
            ></div>
          </div>
        </div>
      ))}
      
      {chartImage && (
        <div className="mt-4">
          <img 
            src={chartImage} 
            alt={`${title} chart`} 
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      )}
      
      <button className="flex items-center text-gray-600 text-sm mt-6 hover:text-gray-800">
        {title.includes('carbon') ? (
          <span>See full breakdown of carbon footprint</span>
        ) : (
          <span>Download the data</span>
        )}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 10.586V7a1 1 0 012 0v3.586l1.293-1.293a1 1 0 011.414 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default function EnergyStats({ stats }: EnergyStatsProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}