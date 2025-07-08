'use client'

import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import MatrixCanvas from './MatrixCanvas';
import { useTheme } from '@/context/ThemeContext';
import { qualities } from '@/datas/datas';

const Presentation = () => {
   const sectionRef = useRef<HTMLElement>(null);
   const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <section
         ref={sectionRef}
         id="introduction"
         className="flex flex-row flex-wrap lg:flex-nowrap justify-between max-w-[1400px] mx-auto px-6 relative gap-12 lg:pt-16 pt-10"
      >
         {/* Canvas Matrix background effect */}
         {mounted && theme === 'dark' && <MatrixCanvas sectionRef={sectionRef} />}

         {/* Présentation texte */}
         <div id="presentation" className="relative z-10 w-full max-w-[700px] text-left mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-center lg:text-left">Bonjour je me présente</h2>
            <h1 className="text-[64px] my-4 font-bold text-center lg:text-left">
               <span className="italic font-light">Davy</span>{' '}
               <span className="">ROBERT</span>
            </h1>
            <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">
               Et j&#39;exerce en tant que <br />
               <span className="text-[--primary-color]">Développeur Full</span>{' '}
               <span className="text-[--primary-color]">Stack</span>
            </h2>

            {/* Image profil <=1024px */}
            <div className="lg:hidden aspect-square w-[250px] md:w-[300px] min-w-[150px] max-w-full rounded-full border-2 border-[--primary-color] flex items-center justify-center overflow-hidden shrink-0 mx-auto my-6">
               <Image
                  src="/assets/logos/davyprofile.png"
                  width={300}
                  height={300}
                  alt="profile"
                  className="object-cover w-full h-full"
               />
            </div>
            <p className="text-base mb-8 dark:text-gray-400 text-gray-600 ">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?     Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugit ab totam laboriosam ut reiciendis corrupti libero reprehenderit nesciunt! Nulla nihil, non blanditiis veritatis fugiat fuga alias mollitia enim eius?
            </p>

            <div className="flex flex-wrap gap-4 mb-8 w-full justify-center md:justify-start">
              {qualities.items.map((q) => (
                <span
                  key={q.label}
                  className="
                    flex items-center gap-2
                    bg-white/10 text-black border border-[#232946]
                    px-4 py-2 rounded-xl font-semibold text-base shadow transition-all
                    hover:bg-[#232946] hover:text-white
                    dark:bg-white/10 dark:text-white dark:border-white/20
                    dark:hover:bg-white/20
                  "
                >
                  {q.icon}{q.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:items-center mb-4">
               <a
                  className="bg-[--primary-color] font-semibold py-3 px-6 text-lg rounded-lg transition-all hover:scale-105 hover:bg-[var(--bg-light)] hover:text-[--primary-color] hover:border-[--primary-color] border-2 border-transparent break-words w-full sm:w-auto text-center text-[var(--text-color-dark)]"
                  href="/download/CV_davy_robert_2025.pdf"
                  download
               >
                  Mon CV format standard
               </a>
               <a
                  className="relative overflow-hidden bg-gradient-to-r from-[#bfc9ca] via-[#e5e8e8] to-[#bfc9ca] text-[var(--text-color-dark)] font-semibold py-3 px-6 text-lg rounded-lg transition-all hover:scale-105 hover:from-[#e5e8e8] hover:to-[#bfc9ca] hover:text-[#1A3A34] hover:border-[#bfc9ca] border-2 border-transparent break-words w-full sm:w-auto text-center shadow-md"
                  href="/download/CV_davy_robert_détails_du_parcours_2025.pdf"
                  download
               >
                  <span className="relative z-10">Mon CV format long</span>
                  <span
                     className="absolute left-[-75%] top-0 w-[80%] h-full bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-80 blur-[1px] animate-shine pointer-events-none"
                     aria-hidden="true"
                  />
               </a>
               <div className="flex w-full justify-center sm:w-auto sm:justify-start gap-8 sm:mt-0 mt-4">
                  <a
                     href="https://github.com/davyR01"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[--primary-color] text-5xl sm:text-4xl hover:scale-110 transition-transform"
                  >
                     <FaGithub />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/davy-robert"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[--primary-color] text-5xl sm:text-4xl  hover:scale-110 transition-transform"
                  >
                     <FaLinkedin />
                  </a>
                  <a
                     href="mailto:contact@davyrobert.fr"
                     className="text-[--primary-color] text-5xl sm:text-4xl  hover:scale-110 transition-transform"
                  >
                     <MdEmail />
                  </a>
               </div>
            </div>
         </div>

         {/* Image profil > 1024px */}
         <div className="hidden lg:flex aspect-square w-[250px] md:w-[400px] min-w-[150px] max-w-full rounded-full border-2 border-[--primary-color] items-center justify-center overflow-hidden shrink-0 self-start mx-auto lg:mx-0 relative z-10">
            <Image
               src="/assets/logos/davyprofile.png"
               width={400}
               height={400}
               alt="profile"
               className="object-cover w-full h-full"
            />
         </div>
      </section>
   )
}

export default Presentation
