import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import QRCode from "react-qr-code";
import useClipboard from "@hooks/useClipboard";
import { cryptoOptions } from "@data/crypto";
import { CryptoAddressDisplayProps } from "@/types/donate";

export const CryptoAddressDisplay = ({ selectedOption }: CryptoAddressDisplayProps) => {
  const { copyToClipboard, isCopied } = useClipboard();
  
  const handleCopyAddress = (address: string, id: string) => {
    copyToClipboard(address, id);
  };

  const handleCopyPGP = (pgpSignature: string, id: string) => {
    copyToClipboard(pgpSignature, id + "-pgp");
  };

  const selectedCrypto = selectedOption 
    ? cryptoOptions.find(option => option.id === selectedOption) 
    : null;
    
  if (!selectedCrypto) return null;

  return (
    <motion.div
      key={selectedCrypto.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3 }}
      className="mt-8 p-7 rounded-xl bg-gradient-to-br from-blue-900/40 via-gray-800/60 to-purple-900/40 backdrop-blur-sm shadow-lg border border-gray-700/60 hover:shadow-blue-900/10 hover:border-blue-900/30 transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-2"
        >
          <div className={`p-3 rounded-full ${selectedCrypto.color}`}>
            {selectedCrypto.icon}
          </div>
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
            {selectedCrypto.name} Address
          </h3>
        </motion.div>

        {selectedCrypto.network && (
          <div className="mb-4 text-center">
            <span className="text-sm text-gray-400">
              Network: {selectedCrypto.network}
            </span>
          </div>
        )}

        <div className="grid md:grid-cols-5 gap-6 w-full">
          <div className="md:col-span-3">
            <div className="relative w-full group mb-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-400">Address</h4>
              </div>
              <div className="p-4 bg-gray-800/70 border border-gray-700/60 rounded-lg break-all text-sm md:text-base font-mono flex justify-between items-center">
                <div className="flex-grow mr-2 select-all">{selectedCrypto.address}</div>
                <motion.button
                  className="p-2 hover:bg-gray-700/70 rounded-md transition-colors"
                  title="Copy Address"
                  onClick={() => handleCopyAddress(selectedCrypto.address, selectedCrypto.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Copy address to clipboard"
                >
                  {isCopied(selectedCrypto.id) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </motion.button>
              </div>
              {isCopied(selectedCrypto.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-2 -bottom-8 text-xs text-green-400"
                >
                  Address copied to clipboard!
                </motion.div>
              )}
            </div>

            {selectedCrypto.explorerUrl && (
              <div className="mb-4">
                <a 
                  href={selectedCrypto.explorerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-400 hover:text-indigo-300 items-center gap-1.5 inline-flex"
                  aria-label={`View ${selectedCrypto.name} address on blockchain explorer`}
                >
                  <FiExternalLink size={14} />
                  <span>View on blockchain explorer</span>
                </a>
              </div>
            )}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 flex justify-center items-center p-3 bg-white rounded-lg"
          >
            <QRCode 
              value={selectedCrypto.address}
              size={150}
              level="M"
              className="mx-auto"
              aria-label={`QR code for ${selectedCrypto.name} address`}
            />
          </motion.div>
        </div>
        
        {selectedCrypto.pgpSignature && (
          <div className="mt-6 w-full">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-400">PGP Verification</h4>
              <motion.button
                onClick={() => handleCopyPGP(selectedCrypto.pgpSignature!, selectedCrypto.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-xs bg-gray-700/70 hover:bg-gray-600/70 px-3 py-1 rounded transition-colors"
                aria-label="Copy PGP signature"
              >
                {isCopied(selectedCrypto.id + "-pgp") ? "Copied!" : "Copy Signature"}
              </motion.button>
            </div>
            <div className="w-full bg-gray-800/70 border border-gray-700/60 rounded-lg">
              <pre className="p-4 overflow-x-auto text-xs font-mono whitespace-pre-wrap text-gray-300 flex-grow max-h-60 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
                {selectedCrypto.pgpSignature}
              </pre>
            </div>
          </div>
        )}

        {selectedCrypto.memo && (
          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-sm">
            <h4 className="font-semibold text-yellow-500 mb-1">Important Note</h4>
            <p className="text-gray-300">{selectedCrypto.memo}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}; 