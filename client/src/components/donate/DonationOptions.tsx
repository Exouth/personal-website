import { motion } from 'framer-motion';
import { SiKofi } from 'react-icons/si';
import useAnimation from '@hooks/useAnimation';
import { CryptoCurrencySelector } from '@components/donate/CryptoCurrencySelector';
import { cryptoOptions } from '@data/crypto';
import { DonationOptionsProps } from '@/types/donate';

export const DonationOptions = ({ selectedOption, setSelectedOption }: DonationOptionsProps) => {
  const { hoverScaleOnly } = useAnimation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-7 rounded-xl bg-gradient-to-br from-indigo-900/40 via-gray-800/60 to-purple-900/40 backdrop-blur-sm shadow-lg border border-gray-700/60 hover:shadow-indigo-900/10 hover:border-indigo-900/30 transition-all duration-300"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Buy Me a Coffee
          </h2>
          <p className="text-gray-300">Support me with a one-time donation through Ko-fi</p>
        </div>

        <div className="flex justify-center">
          <motion.a
            href="https://ko-fi.com/exouth"
            target="_blank"
            rel="noopener noreferrer"
            {...hoverScaleOnly()}
            className="group flex items-center justify-center gap-3 py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 transition-all rounded-lg text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30"
            aria-label="Support on Ko-fi"
          >
            <SiKofi size={24} className="text-white" />
            <span>Support on Ko-fi</span>
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="p-7 rounded-xl bg-gradient-to-br from-purple-900/40 via-gray-800/60 to-blue-900/40 backdrop-blur-sm shadow-lg border border-gray-700/60 hover:shadow-purple-900/10 hover:border-purple-900/30 transition-all duration-300"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Cryptocurrency Donations
          </h2>
          <p className="text-gray-300">Support me through various cryptocurrency options</p>
        </div>

        <CryptoCurrencySelector
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          containerVariants={containerVariants}
          cryptoOptions={cryptoOptions}
        />
      </motion.div>
    </div>
  );
};
