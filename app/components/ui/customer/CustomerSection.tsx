import React from 'react';
import { motion } from 'framer-motion';

interface Customer {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

interface CustomerSectionProps {
  title?: string;
  subtitle?: string;
  customers: Customer[];
}

export default function CustomerSection({ 
  title = 'Our Trusted Customers', 
  subtitle = 'Join thousands of companies already using our platform',
  customers 
}: CustomerSectionProps) {
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
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        viewport={{ once: true }}
      >
        {customers.map((customer) => (
          <motion.div 
            key={customer.id}
            className="flex flex-col items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src={customer.logo} 
              alt={`${customer.name} logo`} 
              className="h-12 w-auto object-contain mb-3" 
            />
            <h3 className="text-sm font-medium text-center">{customer.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{customer.industry}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}