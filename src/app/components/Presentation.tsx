'use client'

import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import MatrixCanvas from './ui/MatrixCanvas';
import { useTheme } from '@/context/ThemeContext';
import { getQualities, methods } from '@/datas';
import Button from './ui/Button';
import { useTranslations } from 'next-intl';

const Presentation = () => {
   const sectionRef = useRef<HTMLElement>(null);
   const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const t = useTranslations('presentation');
   const tQualities = useTranslations('qualities');

   // Function to highlight keywords based on language
   const highlightKeywords = (text: string, keywords: string[]) => {
      const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
      return text.replace(regex, '<span class="keyword-highlight">$1</span>');
   };

   // Keywords for different paragraphs in French and English
   const getKeywords = () => {
      const locale = t('hello').includes('Bonjour') ? 'fr' : 'en';

      if (locale === 'fr') {
         return {
            paragraph1: ['spécialiser', 'informatique', 'développement web', 'conception d\'applications', 'entrepreneuriat', 'nouvelles technologies'],
            paragraph2: ['conçois', 'développe', 'optimise', 'me former en autodidacte'],
            paragraph3: ['projets ambitieux', 'transformations']
         };
      } else {
         return {
            paragraph1: ['specialize', 'computer science', 'web development', 'application design', 'entrepreneurship', 'new technologies'],
            paragraph2: ['design', 'develop', 'optimize', 'self-training'],
            paragraph3: ['ambitious', 'transformative projects']
         };
      }
   };

   const keywords = getKeywords();

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <div>
         <section
            ref={sectionRef}
            id="introduction"
            className="flex flex-row flex-wrap lg:flex-nowrap justify-between max-w-[1400px] mx-auto px-6 relative gap-14 pt-[110px] lg:pt-[7.3rem] scroll-mt-20 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]"
         >
            {/* Canvas Matrix background effect */}
            {mounted && theme === 'dark' && <MatrixCanvas sectionRef={sectionRef} />}

            {/* FOR LG+ : >=1024px */}

            {/* Left Section for lg+ (>=1024px) : Image + Titles */}
            <div className="hidden lg:flex flex-col items-center gap-4 z-10 min-w-[360px]">

               {/* Hero Section */}
               <div className="relative">
                  {/* Statut Badge */}
                  <div className="flex justify-center lg:justify-start">
                     <div className="inline-flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-[--primary-color]/10 to-[--tertiary-color]/10 border border-[--primary-color]/20 rounded-full text-[0.9rem] font-medium text-[--primary-color]">
                        <div className="w-3 h-3 p-2 bg-green-500 rounded-full animate-pulse"></div>
                        {t('statusBadge')}
                     </div>
                  </div>
               </div>

               {/* Profile Image >= 1024px */}
               <div className=" /* aspect-[4/5] */ aspect-square w-[280px] md:max-w-[500px] min-w-[320px] max-w-full rounded-2xl border-2 border-[--primary-color] flex items-center justify-center overflow-hidden shrink-0 relative z-10">
                  <Image
                     src="/assets/logos/davyprofile.png"
                     width={350}
                     height={437}
                     alt="profile"
                     className="w-full h-full"
                  // priority
                  />
               </div>

               {/* Titres behind image for lg+ */}
               <div className="leading-tight">
                  <h2 className="text-[2rem] font-bold">{t('hello')}</h2>
                  <h1 className="text-[3.3rem] my-4 font-bold">
                     <span className="">Davy ROBERT</span>
                  </h1>
                  <h2 className="text-[2rem] font-bold mb-4">
                     {t('fullstackTitle')} <br />
                     <span className="text-[--primary-color]">{t('fullstackRole')}</span>
                  </h2>
               </div>

               {/* Buttons Section for lg+ */}
               <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:items-center mb-4">
                  {/* <Button
                     variant="primary"
                     href="/download/CV_davy_robert_2025.pdf"
                     download
                  >
                     {t('cvStandard')}
                  </Button>
                  <Button
                     variant="secondary"
                     href="/download/CV_davy_robert_détails_du_parcours_2025.pdf"
                     download
                     withShineEffect
                  >
                     {t('cvLong')}
                  </Button> */}
                  <div className="flex w-full justify-center sm:w-auto sm:justify-start gap-8 sm:mt-0 mt-4">
                     <a
                        href="https://github.com/davyR01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--primary-color] text-5xl  hover:scale-110 transition-transform"
                     >
                        <FaGithub />
                     </a>
                     <a
                        href="https://www.linkedin.com/in/davy-robert"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--primary-color] text-5xl   hover:scale-110 transition-transform"
                     >
                        <FaLinkedin />
                     </a>
                     <a
                        href="mailto:contact@davyrobert.fr"
                        className="text-[--primary-color] text-5xl   hover:scale-110 transition-transform"
                     >
                        <MdEmail />
                     </a>
                  </div>
               </div>

            </div>



            {/* Right Section */}
            <div id="presentation" className="flex flex-col gap-2 relative z-10 w-full  text-left mb-8 lg:mb-0">

               {/* FOR Responsive LG- only : <1024px */}
               {/* Section Availability Badge */}
               <div className="relative lg:hidden">
                  {/* Statut Badge */}
                  <div className="flex justify-center lg:justify-start mb-2">
                     <div className="inline-flex items-center text-center gap-3 px-3 py-2 bg-gradient-to-r from-[--primary-color]/10 to-[--tertiary-color]/10 border border-[--primary-color]/20 rounded-full text-sm font-medium text-[--primary-color]">
                        <div className="p-2 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                           {t('statusBadge')}
                        </div>
                     </div>
                  </div>
               </div>

               {/* FOR Responsive LG- only : <1024px */}
               {/* Rôle and Title */}
               <div className="lg:hidden">
                  <h2 className="font-bold text-center presentation-clamp-h2">{t('hello')}</h2>
                  <h1 className="my-4 font-bold text-center presentation-clamp-h1">
                     <span className="">Davy ROBERT</span>
                  </h1>
                  <h2 className="font-bold mb-4 text-center presentation-clamp-h2">
                     {t('fullstackTitle')} <br />
                     <span className="text-[--primary-color]">{t('fullstackRole')}</span>
                  </h2>
               </div>

               {/* FOR Responsive LG- : <1024px */}
               {/* Profile Image block<1024px */}
               <div className="lg:hidden aspect-square w-[200px] xs480:w-[240px] min-w-[150px] max-w-full rounded-2xl border-2 border-[--primary-color] flex items-center justify-center overflow-hidden shrink-0 mx-auto mb-4">
                  <Image
                     src="/assets/logos/davyprofile.png"
                     width={240}
                     height={300}
                     alt="profile"
                     className="object-cover w-full h-full"
                  />
               </div>

               {/* Methods Section */}
               <div className="flex flex-col xl:flex-row items-center lg:items-start mb-6 gap-2 xl:gap-4">
                  <span className="text-lg font-bold text-[--primary-color] mb-2 xl:mb-0 min-w-max xl:self-center">
                     {t('methodsTitle')}
                  </span>
                  <div className="flex flex-row flex-wrap gap-2 xl:gap-4 justify-center mt-0">
                     {methods.items.map((m) => (
                        <span key={m.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow-sm text-base border border-gray-300 dark:border-white/20">
                           {m.icon}
                           {m.label}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Text Introduction Section */}
               <div className="text-base mb-8 dark:text-gray-300 text-gray-700 space-y-4 xl:space-y-6 leading-relaxed lg:leading-normal xl:leading-loose text-justify">
                  <p dangerouslySetInnerHTML={{ __html: highlightKeywords(t('paragraph1'), keywords.paragraph1) }} />

                  <p dangerouslySetInnerHTML={{ __html: highlightKeywords(t('paragraph2'), keywords.paragraph2) }} />

                  <p dangerouslySetInnerHTML={{ __html: highlightKeywords(t('paragraph3'), keywords.paragraph3) }} />
               </div>

               {/* Qualities Section */}
               <div className="mb-8">
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                     {getQualities(tQualities).items.map((q, index) => (
                        <div
                           key={q.label}
                           className="group flex items-center gap-1 xs480:gap-2  hover:bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 px-2 xs480:px-5 py-2 rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-[--primary-color]/30 "
                           style={{
                              animationDelay: `${index * 80}ms`
                           }}
                        >

                           <div className="text-[--primary-color] group-hover:text-[--tertiary-color] transition-colors duration-300">
                              {q.icon}
                           </div>
                           <span className="transition-colors duration-300">
                              {q.label}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>



               {/* Buttons Section */}
               <div className="flex lg:flex-col flex-wrap w-full lg:w-[75%] gap-4 sm:flex-nowrap sm:items-left mb-4">
                  <Button
                     variant="primary"
                     href="/download/CV_davy_robert_2025.pdf"
                     download
                  >
                     {t('cvStandard')}
                  </Button>
                  <Button
                     variant="secondary"
                     href="/download/CV_davy_robert_détails_du_parcours_2025.pdf"
                     download
                     withShineEffect
                  >
                     {t('cvLong')}
                  </Button>



                  {/* FOR Responsive LG- only : <1024px */}

                  <div className="lg:hidden flex w-full justify-center items-center sm:w-auto sm:justify-start gap-8 sm:mt-0 mt-4">
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
         </section>
      </div>
   )
}


export default Presentation
