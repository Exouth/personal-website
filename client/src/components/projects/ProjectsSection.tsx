import React from 'react';
import ProjectsSlider from '@components/projects/ProjectSlider';
import { motion } from 'framer-motion';
import useAnimation from '@hooks/useAnimation';

const ProjectsSection: React.FC = () => {
  const { fadeInUp, hoverScaleOnly } = useAnimation();

  return (
    <div id="projects" className="lg:col-span-12 relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-gray-800/60 to-blue-900/40 backdrop-blur-sm"></div>
      <div className="relative p-10 z-10">
        <motion.div {...fadeInUp(0)} className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-500">
            Projects
          </h2>
        </motion.div>

        <motion.div {...fadeInUp(0.2)}>
          <ProjectsSlider />
        </motion.div>

        <motion.div {...fadeInUp(0.4)} className="text-center mt-10">
          <motion.a
            href="https://github.com/exouth?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transform active:scale-95"
            {...hoverScaleOnly()}
          >
            View all Projects
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;
