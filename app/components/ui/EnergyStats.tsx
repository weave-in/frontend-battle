import { motion } from 'framer-motion';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface EnergyStatsProps {
  stats: {
    title: string;
    value: number;
    unit: string;
    change: number;
    chartImage: string; // URL to chart image
  }[];
}

export default function EnergyStats({ stats }: EnergyStatsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">{stat.title}</h3>
            <div className="flex items-baseline mt-2">
              <p className="text-3xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="ml-2 text-sm text-gray-500 dark:text-gray-400">{stat.unit}</p>
              <div className={`ml-auto flex items-center ${stat.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change >= 0 ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
                <span className="text-sm font-medium ml-1">{Math.abs(stat.change)}%</span>
              </div>
            </div>
          </div>
          <div className="px-6 pb-6">
            <img 
              src={stat.chartImage} 
              alt={`${stat.title} chart`} 
              className="w-full h-32 object-cover rounded-lg"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}