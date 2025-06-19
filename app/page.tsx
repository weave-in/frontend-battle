'use client';

import React from 'react';
import Carousel from './components/ui/carousel/Carousel';
import Card from './components/ui/cards/Card';
import Parallax from './components/ui/parallax/Parallax';
import RippleButton from './components/ui/ripple/RippleButton';
import ThemeToggle from './components/ui/ThemeToggle';
import BrandKits from './components/ui/brand-kits/BrandKits';
import Capabilities from './components/ui/capabilities/Capabilities';
import Dashboard from './components/ui/dashboard/Dashboard';
import EnergyStats from './components/ui/stats/EnergyStats';
import { motion } from 'framer-motion';

// Sample data for carousel
const carouselItems = [
  {
    id: 1,
    image: 'https://placehold.co/1200x600/0066FF/FFFFFF/png?text=Modern+Web+Design',
    title: 'Modern Web Design',
    description: 'Creating beautiful and functional websites with Next.js'
  },
  {
    id: 2,
    image: 'https://placehold.co/1200x600/FF6600/FFFFFF/png?text=Responsive+Layouts',
    title: 'Responsive Layouts',
    description: 'Designs that work perfectly on any device'
  },
  {
    id: 3,
    image: 'https://placehold.co/1200x600/9900FF/FFFFFF/png?text=Interactive+Experiences',
    title: 'Interactive Experiences',
    description: 'Engaging animations and effects for better user experience'
  }
];

// Sample data for cards
const cardItems = [
  {
    title: 'Web Development',
    description: 'Building modern, responsive websites with the latest technologies.',
    image: 'https://placehold.co/600x400/1E40AF/FFFFFF/png?text=Web+Development'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces for better experiences.',
    image: 'https://placehold.co/600x400/047857/FFFFFF/png?text=UI/UX+Design'
  },
  {
    title: 'Mobile Apps',
    description: 'Developing cross-platform mobile applications that work everywhere.',
    image: 'https://placehold.co/600x400/7E22CE/FFFFFF/png?text=Mobile+Apps'
  }
];

// Sample data for brand kits
const brandItems = [
  {
    id: '1',
    name: 'ECorp',
    logo: 'https://placehold.co/100x100/10B981/FFFFFF/png?text=E',
    color: '#10B981'
  },
  {
    id: '2',
    name: 'ICorp',
    logo: 'https://placehold.co/100x100/F59E0B/FFFFFF/png?text=I',
    color: '#F59E0B'
  },
  {
    id: '3',
    name: 'The Agency',
    logo: 'https://placehold.co/100x100/EF4444/FFFFFF/png?text=A',
    color: '#EF4444'
  }
];

// Sample data for capabilities
const capabilityTabs = [
  {
    id: '1',
    name: 'Billing',
    icon: '💰',
    color: '#FFC2C2'
  },
  {
    id: '2',
    name: 'Charging',
    icon: '📊',
    color: '#FFE2A8'
  },
  {
    id: '3',
    name: 'Catalog',
    icon: '📋',
    color: '#D1FFD1'
  },
  {
    id: '4',
    name: 'Events',
    icon: '📅',
    color: '#C2F5FF'
  }
];

// Sample data for energy stats with proper typing
const energyStats = [
  {
    title: 'Managed portfolio carbon footprint',
    unit: 'tCO₂e',
    value: '45,048',
    change: {
      value: 16,
      direction: 'up' as const,
      year: 2019
    },
    yearlyData: [
      { year: 2022, value: '45,048' },
      { year: 2021, value: '14,111' },
      { year: 2020, value: '32,813' },
      { year: 2019, value: '38,673' }
    ]
  },
  {
    title: 'Managed portfolio energy intensity',
    unit: 'kWh/m²',
    value: '123',
    change: {
      value: 22,
      direction: 'down' as const,
      year: 2019
    },
    yearlyData: [
      { year: 2022, value: '123' },
      { year: 2021, value: '128' },
      { year: 2020, value: '135' },
      { year: 2019, value: '157' }
    ]
  },
  {
    title: 'Managed portfolio energy consumption',
    unit: 'kWh',
    value: '47,790,662',
    change: {
      value: 27,
      direction: 'down' as const,
      year: 2019
    },
    yearlyData: [
      { year: 2022, value: '47,790,662' },
      { year: 2021, value: '49,324,077' },
      { year: 2020, value: '48,784,205' },
      { year: 2019, value: '65,198,706' }
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header with Theme Toggle */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Modern UI</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="pt-20">
        <Carousel items={carouselItems} />
      </section>

      {/* Brand Kits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Brand Selection
          </motion.h2>
          
          <div className="flex justify-center">
            <BrandKits brands={brandItems} />
          </div>
        </div>
      </section>

      {/* BSS/OSS Capabilities Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Capabilities 
            title="Unparalleled BSS/OSS Capabilities" 
            subtitle="EFFICIENCY, SCALABILITY, AND AGILITY"
            description="Comprehensive business support systems"
            tabs={capabilityTabs}
          />
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Dashboard />
        </div>
      </section>

      {/* Energy Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Energy Consumption Statistics
          </motion.h2>
          
          <div className="max-w-7xl mx-auto">
            <EnergyStats stats={energyStats} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardItems.map((card, index) => (
              <Card 
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <Parallax className="h-[400px] bg-blue-600 dark:bg-blue-800 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">Parallax Effect</h2>
          <p className="text-xl max-w-2xl mx-auto">
            This section demonstrates the parallax scrolling effect, creating depth and visual interest as you scroll through the page.
          </p>
        </div>
      </Parallax>

      {/* Call to Action with Ripple Button */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us today and experience the power of modern web development with Next.js and beautiful UI components.
          </p>
          <RippleButton className="px-8 py-3 text-lg">
            Get Started
          </RippleButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Modern UI Components. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}