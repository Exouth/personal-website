import React from 'react';
import { motion } from 'framer-motion';
import useAnimation from '@hooks/useAnimation';
import useClipboard from '@hooks/useClipboard';

const DirectContact: React.FC = () => {
  const { fadeInUp, hoverScaleOnly } = useAnimation();
  const { copyToClipboard, isCopied } = useClipboard();

  return (
    <motion.div
      className="bg-gray-900/60 border border-gray-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:shadow-blue-900/10 hover:border-blue-900/30 transition-all duration-300"
      {...fadeInUp(0)}
    >
      <div className="p-6 border-b border-gray-800/80 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-white">Direct Communication</h3>
        </div>
        <div className="bg-blue-500/10 p-3 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="group h-full flex flex-col p-4 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-800/30 rounded-xl transition-all duration-300 hover:bg-blue-900/40 hover:border-blue-700/40">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">E-Mail</h4>
              </div>
            </div>

            <div className="flex-1 flex items-center">
              <a
                href="mailto:Exouth@email.de"
                className="text-blue-400 hover:text-blue-300 transition-all text-lg inline-flex items-center gap-1 group-hover:gap-2"
              >
                Exouth@email.de
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="group h-full flex flex-col p-4 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-800/30 rounded-xl transition-all duration-300 hover:bg-purple-900/40 hover:border-purple-700/40">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Platforms</h4>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <motion.a
                href="https://github.com/exouth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/90 transition-all py-3 px-3 rounded-xl group"
                {...hoverScaleOnly()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-medium">GitHub</span>
              </motion.a>

              <motion.a
                href="https://next.nexusmods.com/profile/Exouth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/90 transition-all py-3 px-3 rounded-xl group"
                {...hoverScaleOnly()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 2c5.513 0 10 4.487 10 10s-4.487 10-10 10S2 17.513 2 12 6.487 2 12 2zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
                </svg>
                <span className="font-medium">Nexus Mods</span>
              </motion.a>

              <motion.a
                href="https://ko-fi.com/exouth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-800/80 hover:bg-gray-700/90 transition-all py-3 px-3 rounded-xl group"
                {...hoverScaleOnly()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.67-.906-.887-2.368-.287-3.354.585-.956 1.83-1.956 4.209-1.001 1.48.594 2.606 1.787 2.606 1.787s.954-1.278 2.578-1.787c2.717-1.002 4.283.299 4.695.936.699 1.187.428 2.727-.338 3.464zM8.667 6.87H4.099v5.49h4.568V6.87z" />
                </svg>
                <span className="font-medium">Ko-fi</span>
              </motion.a>
            </div>
          </div>

          <div className="group h-full flex flex-col p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-800/30 rounded-xl transition-all duration-300 hover:bg-indigo-900/40 hover:border-indigo-700/40">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/30 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  fill="#ffffff"
                  className="w-6 h-6"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Discord</h4>
              </div>
            </div>

            <div className="flex-1 bg-[#2B2D31] rounded-lg p-4 flex flex-col shadow-lg overflow-hidden border border-gray-800">
              <div className="flex items-start">
                <div className="w-full bg-[#232428] rounded-md overflow-hidden p-4">
                  <div className="flex flex-col">
                    <div className="font-bold text-white text-lg">Marcel</div>
                    <div className="text-gray-400 text-sm">@exouth</div>

                    <div className="mt-4 flex items-center bg-[#1E1F22] p-2 rounded-md">
                      <span className="text-xs font-mono text-gray-400 mr-2">ID:</span>
                      <span className="text-xs font-mono text-gray-300 select-all">
                        285464053437038595
                      </span>
                      <motion.button
                        className="ml-auto p-1 hover:bg-gray-700 rounded-md transition-colors"
                        title="Copy ID"
                        onClick={() => copyToClipboard('285464053437038595', true)}
                        {...hoverScaleOnly()}
                      >
                        {isCopied(true) ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3.5 h-3.5 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
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
                            className="w-3.5 h-3.5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DirectContact;
