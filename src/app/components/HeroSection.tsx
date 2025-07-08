'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex flex-col">
        {/* Hero content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          {/* Left side - Text content */}
          <motion.div 
            className="md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Lorem Lorem Lorem<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Lorem Lorem Lorem
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="pt-4">
              <Link 
                href="#projets" 
                className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-200 transition-colors"
              >
                Mes projets
              </Link>
            </div>

            {/* Apps row */}
            <div className="w-full">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start items-center gap-4 mt-8 w-full">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href="/download/CV_davy_robert_2025.pdf"
                    download
                    className="w-full sm:w-auto text-center bg-[--primary-color] text-[var(--text-color-dark)] font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 hover:bg-[var(--bg-light)] hover:text-[--primary-color] hover:border-[--primary-color] border-2 border-transparent"
                  >
                    Mon CV format standard
                  </a>
                  <a
                    href="/download/CV_davy_robert_détails_du_parcours_2025.pdf"
                    download
                    className="relative w-full sm:w-auto text-center overflow-hidden bg-gradient-to-r from-[#bfc9ca] via-[#e5e8e8] to-[#bfc9ca] text-[var(--text-color-dark)] font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 hover:from-[#e5e8e8] hover:to-[#bfc9ca] hover:text-[#1A3A34] hover:border-[#bfc9ca] border-2 border-transparent"
                  >
                    <span className="relative z-10">Mon CV format long</span>
                    <span
                      className="absolute left-[-75%] top-0 w-[80%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-80 blur-[1px] animate-shine pointer-events-none"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="flex justify-center sm:justify-start gap-6 w-full sm:w-auto mt-4 sm:mt-0">
                  <a
                    href="https://github.com/davyR01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl hover:scale-110 transition-transform"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/davy-robert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-3xl hover:scale-110 transition-transform"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="mailto:contact@davyrobert.fr"
                    className="text-white text-3xl hover:scale-110 transition-transform"
                  >
                    <MdEmail />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative w-full md:w-1/2 mt-16 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-20"></div>
              
              <div className="relative z-10 w-64 h-auto mx-auto">
                <div className="absolute -top-8 -left-4 w-72 h-auto">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gray-900 rounded-4xl p-2">
                      <div className="w-full h-full bg-gray-800 rounded-3xl overflow-hidden">
                        <div className="h-full bg-gradient-to-br from-purple-900 to-blue-900 p-6 flex flex-col">
                          <div className="flex justify-between items-center mb-8">
                            <span className="text-white font-medium">9:41</span>
                            <div className="flex space-x-2">
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                            </div>
                          </div>
                          <div className="flex-1 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-4"></div>
                              <h3 className="text-white font-medium">App Design</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-20 w-64 h-auto mx-auto mt-16">
                <div className="absolute -bottom-8 -right-4 w-72 h-auto">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gray-900 rounded-4xl p-2">
                      <div className="w-full h-full bg-gray-800 rounded-3xl overflow-hidden">
                        <div className="h-full bg-gradient-to-br from-blue-900 to-cyan-900 p-6 flex flex-col">
                          <div className="flex justify-between items-center mb-8">
                            <span className="text-white font-medium">9:41</span>
                            <div className="flex space-x-2">
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                              <span className="w-1 h-1 bg-white rounded-full"></span>
                            </div>
                          </div>
                          <div className="flex-1 flex items-center justify-center">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-cyan-500 rounded-2xl mx-auto mb-4"></div>
                              <h3 className="text-white font-medium">Web App</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
