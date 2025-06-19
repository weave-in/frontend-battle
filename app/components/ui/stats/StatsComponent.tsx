import React from 'react';
import { motion } from 'framer-motion';

interface StatItem {
  id: string;
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

interface StatsComponentProps {
  title?: string;
  subtitle?: string;
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  animated?: boolean;
  className?: string;
}

export default function StatsComponent({ 
  title, 
  subtitle,
  stats, 
  columns = 4,
  animated = true,
  className = ''
}: StatsComponentProps) {
  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };
  
  return (
    <div className={`py-12 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && (
            <motion.h2 
              className="text-3xl font-bold mb-3"
              initial={animated ? { opacity: 0, y: 20 } : { opacity: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={animated ? { opacity: 0, y: 20 } : { opacity: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      
      <div className={`grid ${columnClasses[columns]} gap-6`}>
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.id}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            initial={animated ? { opacity: 0, y: 20 } : { opacity: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {stat.icon && (
              <div className="mb-4 text-blue-500 dark:text-blue-400">
                {stat.icon}
              </div>
            )}
            <div className="flex items-baseline">
              {stat.prefix && <span className="text-2xl font-medium mr-1">{stat.prefix}</span>}
              <motion.span 
                className="text-4xl font-bold text-gray-900 dark:text-white"
                initial={animated ? { opacity: 0 } : { opacity: 1 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.span>
              {stat.suffix && <span className="text-2xl font-medium ml-1">{stat.suffix}</span>}
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}