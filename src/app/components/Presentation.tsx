'use client'

import { useTheme } from '@/context/ThemeContext'
import { getQualities, methods, personalData } from '@/datas'
import { getKeywordsPresentation, highlightKeywordsPresentation } from '@/utils/formatText'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Button from './ui/Button'
import MatrixCanvas from './ui/MatrixCanvas'
import ProjectsButton from './ui/ProjectsButton'
import ArrowButton from './ui/ArrowButton'

const Presentation = () => {
   const sectionRef = useRef<HTMLElement>(null);
   const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const t = useTranslations('presentation');
   const tQualities = useTranslations('qualities');
   const locale = useLocale();

   const keywords = getKeywordsPresentation(locale);

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

               {/* Statut Badge */}
               <div className="relative">
                  <div className="flex justify-center lg:justify-start">
                     <div className={`inline-flex items-center text-center gap-4 px-4 py-2 bg-gradient-to-r ${personalData.available
                        ? 'from-green-300/10 to-green-400/10 border-[--border-dark] dark:border-[--border-light] text-[--primary-color]'
                        : 'from-red-300/10 to-red-400/10 border-[--border-dark] dark:border-[--border-light]'
                        } border rounded-full text-[0.9rem] font-medium`}>
                        <div className={`w-3 h-3 p-2 ${personalData.available ? 'bg-green-500' : 'bg-red-500'} rounded-full animate-pulse`}></div>
                        {personalData.available ? t('statusBadge') : t('statusBadgeUnavailable')}
                     </div>
                  </div>
               </div>

               {/* Profile Image >= 1024px */}
               <div className="aspect-square w-[280px] md:max-w-[500px] min-w-[320px] max-w-full rounded-2xl border-[0.25rem] animate-border-pulse overflow-hidden shrink-0 relative z-10">
                  <Image
                     src="/assets/profile/davyprofile1.png"
                     fill
                     // width={350}
                     // height={437}
                     alt="profile"
                     className="object-cover"
                     priority
                  // sizes="(max-width: 768px) 280px, (max-width: 1024px) 500px, 500px"
                  />
               </div>

               {/* Titles behind image for lg+ */}
               <div className="leading-[44px] text-left w-[320px]">
                  <h2 className="text-[2rem] font-bold">{t('hello')}</h2>
                  <h1 className="text-[3rem] my-4 font-bold">
                     <span className="">Davy ROBERT</span>
                  </h1>
                  <h2 className="text-[1.65rem] font-bold mb-4">
                     <span>{t('fullstackTitle')}</span>
                     <span className="text-[--primary-color]">{t('fullstackRole')}</span>
                     <span className="font-cambriaaa text-[--primary-color]">&</span>
                     <span className="text-[--primary-color]">{t('fullstackRole2')}</span>
                     <span className="">{t('fullstackRole3')}</span>
                  </h2>
               </div>

               {/* <span className="font-cambriaaa">&</span> */}

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
                  <div className="flex flex-col items-center sm:items-start gap-4 sm:mt-0 mt-4 w-full">
                     {/* Logos réseaux sociaux */}
                     <div className="flex gap-8">
                        <a
                           href="https://www.linkedin.com/in/davy-robert"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-[--primary-color] text-5xl   hover:scale-110 transition-transform"
                        >
                           <FaLinkedin />
                        </a>
                        <a
                           href="https://github.com/davyR01"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-[--primary-color] text-5xl  hover:scale-110 transition-transform"
                        >
                           <FaGithub />
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

            </div>



            {/* Right Section */}
            <div id="presentation" className="flex flex-col gap-3 relative z-10 w-full  text-left mb-8 lg:mb-0">

               {/* FOR Responsive LG- only : <1024px */}
               {/* Section Availability Badge */}
               <div className="relative lg:hidden">
                  {/* Statut Badge */}
                  <div className="flex justify-center lg:justify-start">
                     <div className={`inline-flex items-center text-center gap-4 px-4 py-2 bg-gradient-to-r ${personalData.available
                        ? 'from-green-300/10 to-green-400/10 border-[--border-dark] dark:border-[--border-light] text-[--primary-color]'
                        : 'from-red-300/10 to-red-400/10 border-[--border-dark] dark:border-[--border-light]'
                        } border rounded-full text-[0.9rem] font-medium`}>
                        <div className={`w-3 h-3 p-2 ${personalData.available ? 'bg-green-500' : 'bg-red-500'} rounded-full animate-pulse`}></div>
                        {personalData.available ? t('statusBadge') : t('statusBadgeUnavailable')}
                     </div>
                  </div>
               </div>

               {/* FOR Responsive LG- only : <1024px */}
               {/* Rôle and Title */}
               <div className="lg:hidden">
                  <h2 className="font-bold text-center presentation-clamp-h2">{t('hello')}</h2>
                  <h1 className="my-2 font-bold text-center presentation-clamp-h1">
                     <span className="">Davy ROBERT</span>
                  </h1>
                  <h2 className="font-bold mb-4 text-center presentation-clamp-h2 xs480:w-[80%] xs480:mx-auto ">
                     <span>{t('fullstackTitle')}</span>
                     <span className="text-[--primary-color]">{t('fullstackRole')}</span>
                     <span className="font-cambriaaa text-[--primary-color]">&</span>
                     <span className="text-[--primary-color]">{t('fullstackRole2')}</span>
                     <span className="">{t('fullstackRole3')}</span>
                  </h2>

                  {/* <h2 className="text-[2rem] font-bold mb-4">
                     {t('fullstackTitle')} <br />
                     <div className="text-[--primary-color]">{t('fullstackRole')}</div>
                     <span className="text-[--primary-color]">{t('fullstackRole2')} <span className="font-cambriaaa">&</span> {t('fullstackRole3')}</span>
                     <span className="">{t('fullstackRole4')}</span>
                  </h2> */}
               </div>

               {/* FOR Responsive LG- : <1024px */}
               {/* Profile Image block<1024px */}
               <div className="lg:hidden aspect-square w-[200px] xs480:w-[260px] min-w-[210px] max-w-full rounded-2xl border-[0.2rem] border-[--primary-color] flex items-center justify-center overflow-hidden shrink-0 mx-auto animate-border-pulse">
                  <Image
                     src="/assets/profile/davyprofile1.png"
                     width={240}
                     height={300}
                     alt="profile"
                     className="object-cover w-full h-full"
                  />
               </div>

               <div className="sm:hidden flex w-full justify-center gap-8 mt-2">
                  <a
                     href="https://www.linkedin.com/in/davy-robert"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[--primary-color] text-4xl sm:text-4xl  hover:scale-110 transition-transform"
                  >
                     <FaLinkedin />
                  </a>
                  <a
                     href="https://github.com/davyR01"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-[--primary-color] text-4xl sm:text-4xl hover:scale-110 transition-transform"
                  >
                     <FaGithub />
                  </a>
                  <a
                     href="mailto:contact@davyrobert.fr"
                     className="text-[--primary-color] text-4xl sm:text-4xl  hover:scale-110 transition-transform"
                  >
                     <MdEmail />
                  </a>
               </div>

               {/* Methods Section */}
               <div className="flex flex-col xl:flex-row items-center lg:items-start mb-6 gap-2 xl:gap-4">
                  <span className="text-lg font-bold text-[--primary-color] mb-2 mt-2 xl:mb-0 min-w-max xl:self-center">
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
               <div className={`text-base dark:text-[#b1bad3] text-gray-600 space-y-4 ${locale === 'fr' ? 'xl:space-y-6 xl:leading-[2.1rem]' : 'xl:leading-[2.38rem]'} leading-[1.65rem] space-y-6 lg:leading-normal text-justify`}>
                  <p dangerouslySetInnerHTML={{ __html: highlightKeywordsPresentation(t('paragraph1'), keywords.paragraph1) }} />

                  <p dangerouslySetInnerHTML={{ __html: highlightKeywordsPresentation(t('paragraph2'), keywords.paragraph2) }} />

                  <p dangerouslySetInnerHTML={{ __html: highlightKeywordsPresentation(t('paragraph3'), keywords.paragraph3) }} />
               </div>

               {/* Button projets redirection */}
               <div className="my-2 flex justify-center lg:justify-start">
                  <ProjectsButton />
               </div>

               {/* Qualities Section */}
               <div className="mb-4">
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
               <div className="flex lg:flex-col flex-wrap w-full xl:w-[66%] gap-4 sm:flex-nowrap sm:items-left mb-4">
                  <Button
                     variant="primary"
                     href="/download/CV_Davy_ROBERT_DEVELOPPEUR_2025.pdf"
                     download
                  >
                     {t('cvStandard')}
                  </Button>
                  <Button
                     variant="secondary"
                     href="/download/CV_DETAILLE_Davy_ROBERT_DEVELOPPEUR_2025.pdf"
                     download
                     withShineEffect
                  >
                     {t('cvLong')}
                  </Button>

                  {/* FOR Responsive LG- only : <1024px */}

                  <div className="lg:hidden flex w-full justify-center items-center sm:w-auto sm:justify-start gap-8 sm:mt-0 mt-4">
                     <a
                        href="https://www.linkedin.com/in/davy-robert"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--primary-color] text-5xl sm:text-4xl  hover:scale-110 transition-transform"
                     >
                        <FaLinkedin />
                     </a>
                     <a
                        href="https://github.com/davyR01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[--primary-color] text-5xl sm:text-4xl hover:scale-110 transition-transform"
                     >
                        <FaGithub />
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
            <ArrowButton />

         </section>
      </div>
   )
}


export default Presentation
