import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiDownload } from 'react-icons/fi';
import { pgpFingerprint, pgpKey } from '@data/pgp';
import useClipboard from '@hooks/useClipboard';
import useDownload from '@hooks/useDownload';
import { IoWarningOutline } from 'react-icons/io5';
import { PGPKeyDisplayProps } from '@/types/donate';

export const PGPKeyDisplay = ({ showPgpKey, setShowPgpKey }: PGPKeyDisplayProps) => {
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-8 p-6 rounded-xl bg-gray-800/30 border border-gray-700/60 shadow-md backdrop-blur-sm hover:shadow-indigo-900/10 hover:border-indigo-900/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 text-gray-300">
        <IoWarningOutline size={24} className="text-yellow-500 flex-shrink-0" />
        <p>
          Always verify cryptocurrency addresses before sending funds. You can check the PGP
          signature of each address with my{' '}
          <button
            onClick={() => setShowPgpKey(!showPgpKey)}
            className="text-indigo-400 hover:text-indigo-300 underline"
            aria-expanded={showPgpKey}
          >
            public key
          </button>
          .
        </p>
      </div>

      <AnimatePresence>
        {showPgpKey && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <div className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/60">
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-blue-400">
                    PGP Public Key
                  </h3>
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={() => copyToClipboard(pgpKey, 'pgp-public-key')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-xs bg-gray-700/70 hover:bg-gray-600/70 px-3 py-1.5 rounded transition-colors"
                      aria-label="Copy PGP public key"
                      title="Copy to clipboard"
                    >
                      <FiCopy size={14} />
                      {isCopied('pgp-public-key') ? 'Copied!' : 'Copy'}
                    </motion.button>
                    <div className="relative">
                      <motion.a
                        href="/exouth_publickey.asc"
                        download="exouth_publickey.asc"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-xs bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 px-3 py-1.5 rounded transition-all shadow-sm shadow-indigo-500/20 hover:shadow-indigo-500/30"
                        aria-label="Download PGP public key"
                        title="Download as .asc file"
                        onClick={handleDownload}
                      >
                        <FiDownload size={14} />
                        <span>{isDownloaded('pgp-key') ? 'Downloaded!' : 'Download'}</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400 italic">
                  Fingerprint:{' '}
                  <span className="font-mono">{formatFingerprint(pgpFingerprint)}</span>
                </div>
              </div>
              <pre className="mt-3 text-xs text-gray-300 font-mono overflow-x-auto whitespace-pre-wrap max-h-60 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 border border-gray-700/60 p-3 rounded bg-gray-900/50">
                {pgpKey}
              </pre>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
