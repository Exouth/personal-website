import React from 'react';
import { motion } from 'framer-motion';
import useAnimation from '@hooks/useAnimation';
import { StatsCardsProps } from '@/types/ui';
import { defaultStats as dataDefaultStats } from '@data/stats';

const defaultStats = dataDefaultStats.map((stat, index) => {
  const icons = [
    // Projects
    <svg
      key="projects"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>,
    // Active Projects
    <svg
      key="active-projects"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
      <circle cx="18" cy="6" r="3" fill="currentColor" strokeWidth="0" />
    </svg>,
    // Commits
    <svg
      key="commits"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="21" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
    </svg>,
    // Lines of Code
    <svg
      key="lines-of-code"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      />
    </svg>,
    // Security Reports
    <svg
      key="security-reports"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>,
  ];

  return {
    ...stat,
    icon: icons[index] || null,
  };
});

const StatsCards: React.FC<StatsCardsProps> = ({ stats = defaultStats }) => {
  const { staggerContainer, staggerItem, hoverScale, scaleIn } = useAnimation();

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
      {...staggerContainer()}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          {...staggerItem()}
          {...hoverScale(1.02)}
          className="bg-gray-900/60 border border-gray-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-indigo-900/15 hover:border-indigo-900/30 transition-all duration-300 group p-6"
          style={{ y: 0 }}
        >
          <div className="flex flex-col items-center justify-center text-center">
            {stat.icon && (
              <div className="mb-3 p-3 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:text-indigo-300 group-hover:bg-indigo-500/15 transition-all duration-300">
                {stat.icon}
              </div>
            )}
            <motion.span
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300"
              {...scaleIn(index * 0.1 + 0.2)}
            >
              {stat.value}
            </motion.span>
            <span className="text-gray-400 mt-2 text-lg group-hover:text-gray-300 transition-colors duration-300">
              {stat.label}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsCards;
