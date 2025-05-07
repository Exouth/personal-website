import React from 'react';
import DirectContact from '@components/contact/DirectContact';
import SecureContact from '@components/contact/SecureContact';
import { motion } from 'framer-motion';
import useAnimation from '@hooks/useAnimation';

const ContactSection: React.FC = () => {
  const { fadeInUp } = useAnimation();

  return (
    <div id="contact" className="lg:col-span-12 relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-800/60 to-purple-900/40 backdrop-blur-sm"></div>
      <div className="relative p-10 z-10">
        <motion.div {...fadeInUp(0)} className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
            Contact
          </h2>
        </motion.div>

        <motion.div {...fadeInUp(0.2)} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DirectContact />
          <SecureContact />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
