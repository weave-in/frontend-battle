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

// Add these imports
import CustomerSection from './components/ui/customer/CustomerSection';
import Graph from './components/ui/graph/Graph';
import Loader from './components/ui/loader/Loader';
import ScrollToTop from './components/ui/scroll/ScrollToTop';
import Popup from './components/ui/popup/Popup';
import ShowcaseWork from './components/ui/showcase/ShowcaseWork';
import StatsComponent from './components/ui/stats/StatsComponent';
import StrikingSection from './components/ui/striking/StrikingSection';
import Testimonials from './components/ui/testimonials/Testimonials';

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

// Sample data for new components
const customerItems = [
  {
    id: '1',
    name: 'TechCorp',
    logo: 'https://placehold.co/200x100/0066FF/FFFFFF/png?text=TechCorp',
    industry: 'Technology'
  },
  {
    id: '2',
    name: 'FinanceHub',
    logo: 'https://placehold.co/200x100/FF6600/FFFFFF/png?text=FinanceHub',
    industry: 'Finance'
  },
  {
    id: '3',
    name: 'HealthPlus',
    logo: 'https://placehold.co/200x100/22C55E/FFFFFF/png?text=HealthPlus',
    industry: 'Healthcare'
  },
  {
    id: '4',
    name: 'EduLearn',
    logo: 'https://placehold.co/200x100/8B5CF6/FFFFFF/png?text=EduLearn',
    industry: 'Education'
  },
  {
    id: '5',
    name: 'RetailPro',
    logo: 'https://placehold.co/200x100/EC4899/FFFFFF/png?text=RetailPro',
    industry: 'Retail'
  }
];

const graphData = [
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 25 },
  { label: 'Apr', value: 60 },
  { label: 'May', value: 40 },
  { label: 'Jun', value: 80 }
];

const showcaseItems = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Tailwind CSS, featuring a responsive design and seamless checkout experience.',
    image: 'https://placehold.co/800x600/1E40AF/FFFFFF/png?text=E-commerce+Project',
    category: 'Web Development',
    link: '#'
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application with real-time transaction tracking and budget management features.',
    image: 'https://placehold.co/800x600/047857/FFFFFF/png?text=Banking+App',
    category: 'Mobile App',
    link: '#'
  },
  {
    id: '3',
    title: 'Healthcare Dashboard',
    description: 'An intuitive dashboard for healthcare professionals to monitor patient data and manage appointments efficiently.',
    image: 'https://placehold.co/800x600/7E22CE/FFFFFF/png?text=Healthcare+Dashboard',
    category: 'Dashboard',
    link: '#'
  },
  {
    id: '4',
    title: 'Educational Platform',
    description: 'An interactive learning platform with course management, progress tracking, and video conferencing capabilities.',
    image: 'https://placehold.co/800x600/B91C1C/FFFFFF/png?text=Educational+Platform',
    category: 'Web Development',
    link: '#'
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    description: 'A comprehensive fitness tracking application that monitors workouts, nutrition, and provides personalized recommendations.',
    image: 'https://placehold.co/800x600/0369A1/FFFFFF/png?text=Fitness+Tracker',
    category: 'Mobile App',
    link: '#'
  },
  {
    id: '6',
    title: 'Analytics Dashboard',
    description: 'A powerful analytics dashboard with interactive charts and data visualization tools for business intelligence.',
    image: 'https://placehold.co/800x600/A16207/FFFFFF/png?text=Analytics+Dashboard',
    category: 'Dashboard',
    link: '#'
  }
];

const statsItems = [
  {
    id: '1',
    value: '500+',
    label: 'Completed Projects',
  },
  {
    id: '2',
    value: '99%',
    label: 'Client Satisfaction',
  },
  {
    id: '3',
    value: '24/7',
    label: 'Support Available',
  },
  {
    id: '4',
    value: '50+',
    label: 'Team Members',
  }
];

const testimonialItems = [
  {
    id: '1',
    content: 'Working with this team was an absolute pleasure. They delivered our project on time and exceeded our expectations in every way.',
    author: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechCorp',
    avatar: 'https://placehold.co/200x200/1E40AF/FFFFFF/png?text=SJ',
    rating: 5
  },
  {
    id: '2',
    content: 'The attention to detail and technical expertise demonstrated by the team was impressive. Our new website has received countless compliments.',
    author: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GlobalBrand',
    avatar: 'https://placehold.co/200x200/047857/FFFFFF/png?text=MC',
    rating: 5
  },
  {
    id: '3',
    content: 'I was blown away by the quality of work and the level of communication throughout the project. Highly recommended!',
    author: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateTech',
    avatar: 'https://placehold.co/200x200/7E22CE/FFFFFF/png?text=ER',
    rating: 4
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

      {/* Customer Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <CustomerSection customers={customerItems} />
        </div>
      </section>

      {/* BSS/OSS Capabilities Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Capabilities 
            title="Unparalleled BSS/OSS Capabilities" 
            subtitle="EFFICIENCY, SCALABILITY, AND AGILITY"
            description="Comprehensive business support systems"
            tabs={capabilityTabs}
          />
        </div>
      </section>

      {/* Graph Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Graph data={graphData} title="Performance Metrics" />
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

      {/* Showcase Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ShowcaseWork items={showcaseItems} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <StatsComponent stats={statsItems} />
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Testimonials testimonials={testimonialItems} />
        </div>
      </section>

      {/* Call to Action with Ripple Button */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
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

      {/* Utility Components */}
      <Loader />
      <ScrollToTop />
      {/* <Popup /> */}
    </main>
  );
}