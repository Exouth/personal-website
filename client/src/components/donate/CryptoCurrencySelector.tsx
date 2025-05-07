import { motion } from 'framer-motion';
import { CryptoCurrencySelectorProps } from '@/types/donate';

export const CryptoCurrencySelector = ({
  selectedOption,
  setSelectedOption,
  containerVariants,
  cryptoOptions,
}: CryptoCurrencySelectorProps) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 sm:grid-cols-3 gap-3"
    >
      {cryptoOptions.map((option) => (
        <motion.button
          key={option.id}
          variants={itemVariants}
          onClick={() => setSelectedOption(option.id)}
          className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all ${
            selectedOption === option.id
              ? `${option.color} bg-opacity-20 ring-2 ring-opacity-50 ring-white`
              : 'bg-gray-800/60 hover:bg-gray-700/60'
          }`}
          aria-pressed={selectedOption === option.id}
          aria-label={`Select ${option.name} for donation`}
        >
          <div className={`p-2 rounded-full ${option.color} mb-2`}>{option.icon}</div>
          <span className="text-sm font-medium">{option.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};
