import React from "react";
import { motion } from "framer-motion";
import useAnimation from "@hooks/useAnimation";
import useClipboard from "@hooks/useClipboard";
import { pgpKey, pgpFingerprint } from "@data/pgp";

const SecureContact: React.FC = () => {
  const { fadeInUp } = useAnimation();
  const { copyToClipboard, isCopied } = useClipboard();

  const formatFingerprint = (fp: string): string => {
    return fp.match(/.{1,4}/g)?.join(" ") || fp;
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
          <div className="h-full flex flex-col p-5 bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-800/30 rounded-xl">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-2.5 rounded-lg shadow-lg shadow-green-500/20">
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
                <h4 className="text-lg font-semibold text-white">
                  Fingerprint
                </h4>
              </div>
            </div>

            <div
              className="group relative flex-1 bg-gray-800 p-3 rounded-lg font-mono text-green-300 text-sm tracking-wider border border-gray-700 select-all transition-colors duration-300 hover:text-green-200 hover:border-green-900/60 flex items-center cursor-pointer"
              onClick={() => copyToClipboard(pgpFingerprint, "fingerprint")}
              role="button"
              tabIndex={0}
              aria-label="Copy fingerprint"
              title="Click to copy"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  copyToClipboard(pgpFingerprint, "fingerprint");
                }
              }}
            >
              {formatFingerprint(pgpFingerprint)}
              <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {isCopied("fingerprint") ? (
                  <span className="text-green-400 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
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
                    Copied
                  </span>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
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
              <div className="relative flex-1">
                <div className="h-48 overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 whitespace-pre font-mono text-xs text-gray-300 p-2 border border-gray-700 rounded-md">
                  {pgpKey}
                </div>
                <div className="absolute top-2 right-2 p-1 flex gap-2">
                  <button
                    className="p-1.5 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-gray-800"
                    title="Copy"
                    onClick={() => copyToClipboard(pgpKey, "pgpkey")}
                    aria-label="Copy public key"
                  >
                    {isCopied("pgpkey") ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-green-400"
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
                        className="w-4 h-4 text-gray-300"
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
                  </button>
                </div>
              </div>

              <div className="mt-auto pt-3 border-t border-gray-700">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/exouth_publickey.asc"
                    download="exouth_publickey.asc"
                    className="flex-1 py-2 bg-gradient-to-r from-green-600/80 to-teal-600/80 hover:from-green-500 hover:to-teal-500 transition-colors rounded-lg text-white flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-green-500/30 group focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-label="Download public key"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:translate-y-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Public-Key
                  </a>

                  <a
                    href="https://keys.openpgp.org/search?q=Exouth@email.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg text-white flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-label="Visit key server"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Keyserver
                  </a>
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