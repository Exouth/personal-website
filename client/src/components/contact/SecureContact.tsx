import React from 'react';
import { motion } from 'framer-motion';
import useAnimation from '@hooks/useAnimation';
import useClipboard from '@hooks/useClipboard';
import useDownload from '@hooks/useDownload';
import { pgpKey, pgpFingerprint } from '@data/pgp';
import { FiCopy, FiDownload, FiExternalLink } from 'react-icons/fi';

const SecureContact: React.FC = () => {
  const { fadeInUp } = useAnimation();
  const { copyToClipboard, isCopied } = useClipboard();
  const { markAsDownloaded, isDownloaded } = useDownload();

  const formatFingerprint = (fp: string): string => {
    return fp.match(/.{1,4}/g)?.join(' ') || fp;
  };

  const handleDownload = () => {
    markAsDownloaded('pgp-key');
  };

  return (
    <motion.div
      className="bg-gray-900/60 border border-gray-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-green-900/10 hover:border-green-900/30 transition-all duration-300"
      {...fadeInUp(0)}
    >
      <div className="p-6 border-b border-gray-800/80 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">PGP-Public Key</h3>
        </div>
        <div className="bg-green-500/10 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-green-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="group h-full flex flex-col p-5 bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-800/30 rounded-xl transition-all duration-300 hover:bg-green-900/40 hover:border-green-700/40">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-2.5 rounded-lg shadow-lg shadow-green-500/20 group-hover:shadow-green-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-white">Fingerprint</h4>
              </div>
            </div>

            <div className="relative w-full group">
              <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg break-all text-sm font-mono flex justify-between items-center text-green-300 transition-all duration-300 group-hover:bg-gray-700 group-hover:border-green-800">
                <div className="flex-grow mr-2 select-all">{formatFingerprint(pgpFingerprint)}</div>
                <motion.button
                  className="p-2 hover:bg-gray-700/70 rounded-md transition-colors"
                  title="Copy Fingerprint"
                  onClick={() => copyToClipboard(pgpFingerprint, 'fingerprint')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Copy fingerprint to clipboard"
                >
                  {isCopied('fingerprint') ? (
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
                    <FiCopy className="w-5 h-5 text-gray-400 group-hover:text-gray-300" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
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
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              Public Key
            </h4>

            <div className="flex-1 flex flex-col bg-gray-800 rounded-lg p-4">
              <div className="relative">
                <pre className="h-48 overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 whitespace-pre font-mono text-xs text-gray-300 p-3 border border-gray-700 rounded-md">
                  {pgpKey}
                </pre>
                <div className="absolute top-3 right-3">
                  <motion.button
                    onClick={() => copyToClipboard(pgpKey, 'pgpkey')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1.5 rounded transition-colors"
                    aria-label="Copy PGP public key"
                    title="Copy to clipboard"
                  >
                    <FiCopy size={14} />
                    {isCopied('pgpkey') ? 'Copied!' : 'Copy'}
                  </motion.button>
                </div>
              </div>

              <div className="mt-auto pt-3 border-t border-gray-700">
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="/exouth_publickey.asc"
                    download="exouth_publickey.asc"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 bg-gradient-to-r from-green-600/80 to-teal-600/80 hover:from-green-500 hover:to-teal-500 transition-colors rounded-lg text-white flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-green-500/30"
                    aria-label="Download public key"
                    title="Download as .asc file"
                    onClick={handleDownload}
                  >
                    <FiDownload size={16} />
                    <span>{isDownloaded('pgp-key') ? 'Downloaded!' : 'Download Public-Key'}</span>
                  </motion.a>

                  <motion.a
                    href="https://keys.openpgp.org/search?q=Exouth@email.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg text-white flex items-center justify-center gap-2"
                    aria-label="Visit key server"
                  >
                    <FiExternalLink size={16} />
                    <span>Keyserver</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SecureContact;
