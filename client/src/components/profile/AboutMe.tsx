import React from "react";
import { motion } from "framer-motion";
import TechTags from "@components/profile/TechTags";
import AboutBio from "@components/profile/AboutMeText";
import StatsCards from "@components/profile/StatsCards";
import useAnimation from "@hooks/useAnimation";
import logoImage from "@assets/logo.png";

const AboutMe: React.FC = () => {
  const { scaleIn, fadeInUp } = useAnimation();

  return (
    <div
      id="about-me"
      className="lg:col-span-12 relative rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-gray-800/60 to-purple-900/40 backdrop-blur-sm"></div>
      <div className="relative p-10 z-10">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <motion.div
            {...scaleIn(0)}
            className="flex justify-center items-center"
          >
            <div className="relative w-56 h-56 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-75 blur-xl"></div>

              <img
                src={logoImage}
                alt="Exouth Logo"
                className="relative w-full h-full object-contain rounded-full border border-white/10 bg-gray-900/50 backdrop-blur-sm p-4 hover:scale-105 transition-transform duration-300 shadow-xl"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-8">
            <motion.div
              {...fadeInUp(0.2)}
              className="bg-gray-900/60 border border-gray-800/60 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-indigo-900/10 hover:border-indigo-900/30 transition-all duration-300"
            >
              <AboutBio />
            </motion.div>

            <motion.div
              {...fadeInUp(0.4)}
              className="pt-2"
            >
              <TechTags />
            </motion.div>
          </div>
        </div>

        <motion.div
          {...fadeInUp(0.6)}
          className="mt-12 pt-8 border-t border-gray-700/30"
        >
          <StatsCards />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
