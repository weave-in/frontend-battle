import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

interface ShowcaseWorkProps {
  title?: string;
  subtitle?: string;
  items: WorkItem[];
  categories?: string[];
}

export default function ShowcaseWork({ 
  title = 'Our Work', 
  subtitle = 'Check out our latest projects',
  items,
  categories = []
}: ShowcaseWorkProps) {
  // If no categories provided, extract unique categories from items
  const allCategories = categories.length > 0 
    ? categories 
    : ['All', ...Array.from(new Set(items.map(item => item.category)))];
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
  
  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);
  
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
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Work Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredItems.map((item) => (
          <motion.div 
            key={item.id}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedItem(item)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={item.image} 
                alt={item.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <div className="relative aspect-w-16 aspect-h-9">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title} 
                className="object-cover w-full h-full" 
              />
              <button 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
              <p className="text-sm text-blue-500 dark:text-blue-400 mb-4">{selectedItem.category}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedItem.description}</p>
              {selectedItem.link && (
                <a 
                  href={selectedItem.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}