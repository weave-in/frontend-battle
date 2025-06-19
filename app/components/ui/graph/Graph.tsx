import React from 'react';
import { motion } from 'framer-motion';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface GraphProps {
  title: string;
  data: DataPoint[];
  type?: 'bar' | 'line';
  height?: number;
  showLabels?: boolean;
  showValues?: boolean;
  className?: string;
}

export default function Graph({ 
  title, 
  data, 
  type = 'bar', 
  height = 200, 
  showLabels = true, 
  showValues = true,
  className = ''
}: GraphProps) {
  const maxValue = Math.max(...data.map(item => item.value));
  const defaultColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
  
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Y-axis grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, index) => (
            <div 
              key={index} 
              className="border-t border-gray-200 dark:border-gray-700 w-full h-0"
            />
          ))}
        </div>
        
        {/* Graph content */}
        <div className="absolute inset-0 flex items-end justify-between pt-6 pb-2">
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * 100;
            const color = item.color || defaultColors[index % defaultColors.length];
            
            return (
              <div key={index} className="flex flex-col items-center justify-end h-full">
                {type === 'bar' ? (
                  <motion.div 
                    className="w-8 rounded-t-sm" 
                    style={{ backgroundColor: color }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${barHeight}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ) : (
                  <div className="w-2 h-2 rounded-full z-10" style={{ backgroundColor: color }} />
                )}
                
                {showLabels && (
                  <div className="text-xs mt-2 text-gray-600 dark:text-gray-400">{item.label}</div>
                )}
                
                {showValues && (
                  <div className="text-xs font-medium absolute -top-6">{item.value}</div>
                )}
              </div>
            );
          })}
          
          {/* Line graph connecting points */}
          {type === 'line' && (
            <svg className="absolute inset-0 h-full w-full" style={{ top: '0', left: '0' }}>
              <motion.path
                d={`M ${data.map((item, index) => {
                  const x = (index / (data.length - 1)) * 100;
                  const y = 100 - (item.value / maxValue) * 100;
                  return `${x}% ${y}%`;
                }).join(' L ')}`}
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}