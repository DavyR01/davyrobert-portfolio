'use client'

import { useTheme } from '@/context/ThemeContext'
import { getQualities, methods, personalData } from '@/datas'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ArrowButton from './ui/ArrowButton'
import Button from './ui/Button'
import MatrixCanvas from './ui/MatrixCanvas'
import ProjectsButton from './ui/ProjectsButton'

const Presentation = () => {
   const sectionRef = useRef<HTMLElement>(null)
   const { theme } = useTheme()
   const [mounted, setMounted] = useState(false)

   const t = useTranslations('presentation')
   const tQualities = useTranslations('qualities')

   useEffect(() => {
      setMounted(true)
   }, [])

   const SocialLinks = ({ sizeClass }: { sizeClass: string }) => (
      <div className="flex gap-8">
         <a
            href="https://www.linkedin.com/in/davy-robert"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`text-[--primary-color] ${sizeClass} hover:text-[--secondary-color] hover:scale-110 transition-transform`}
         >
            <FaLinkedin />
         </a>

         <a
            href="https://github.com/davyR01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={`text-[--primary-color] ${sizeClass} hover:text-[--secondary-color] hover:scale-110 transition-transform`}
         >
            <FaGithub />
         </a>

         <a
            href="mailto:contact@davyrobert.fr"
            aria-label="Email"
            className={`text-[--primary-color] ${sizeClass} hover:text-[--secondary-color] hover:scale-110 transition-transform`}
         >
            <MdEmail />
         </a>
      </div>
   )

   const AvailabilityBadge = () => {
      const isAvailable = personalData.available

      return (
         <div className="flex justify-center lg:justify-start">
            <div
               className={`inline-flex items-center text-center gap-4 px-4 py-2 bg-gradient-to-r ${isAvailable
                  ? 'from-green-300/10 to-green-400/10 border-[--border-primary] dark:border-[--border-primary] text-[--primary-color]'
                  : 'from-red-300/10 to-red-400/10 border-[--border-primary] dark:border-[--border-primary]'
                  } border rounded-full text-[0.9rem] font-medium`}
            >
               <div
                  className={`w-3 h-3 p-2 ${isAvailable ? 'bg-green-500' : 'bg-red-500'
                     } rounded-full animate-pulse`}
               />
               {isAvailable ? t('statusBadge') : t('statusBadgeUnavailable')}
            </div>
         </div>
      )
   }

   const bullets = [t('bullet1'), t('bullet2'), t('bullet3'), t('bullet4'), t('bullet5')]

   return (
      <div>
         <section
            ref={sectionRef}
            id="introduction"
            className="flex flex-row flex-wrap lg:flex-nowrap justify-between max-w-[1400px] mx-auto px-6 relative gap-14 pt-[110px] lg:pt-[7.3rem] scroll-mt-20 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]"
         >
            {/* Matrix background (dark only) */}
            {mounted && theme === 'dark' && <MatrixCanvas sectionRef={sectionRef} />}

            {/* LEFT (LG+) */}
            <div className="hidden lg:flex flex-col items-center gap-4 z-10 min-w-[360px]">
               <AvailabilityBadge />

               <div className="aspect-square w-[280px] md:max-w-[500px] min-w-[320px] max-w-full rounded-md border-[0.25rem] animate-border-pulse overflow-hidden shrink-0 relative z-10">
                  <Image
                     src="/assets/profile/davyprofile1.png"
                     fill
                     alt="profile"
                     className="object-cover"
                     priority
                  />
               </div>

               <div className="leading-[48px] text-left w-[320px]">
                  <h2 className="text-[2rem]">{t('hello')}</h2>
                  <h1 className="text-[3rem] my-4">
                     <span>Davy ROBERT</span>
                  </h1>

                  <h2 className="text-[1.65rem] mb-4">
                     <span className="text-[--primary-color] font-semibold">{t('fullstackRole')}</span>
                  </h2>
               </div>

               <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:items-center mb-4">
                  <div className="flex flex-col items-center sm:items-start gap-4 sm:mt-0 mt-4 w-full">
                     <SocialLinks sizeClass="text-5xl" />
                  </div>
               </div>
            </div>

            {/* RIGHT */}
            <div id="presentation" className="flex flex-col gap-3 relative z-10 w-full text-left mb-8 lg:mb-0">
               {/* Mobile / <lg : Badge */}
               <div className="relative lg:hidden">
                  <AvailabilityBadge />
               </div>

               {/* Mobile / <lg : Titles */}
               <div className="lg:hidden">
                  <h2 className="text-center presentation-clamp-h2">{t('hello')}</h2>
                  <h1 className="my-2 text-center presentation-clamp-h1">
                     <span>Davy ROBERT</span>
                  </h1>
                  <h2 className="mb-4 text-center presentation-clamp-h2 xs481:w-[80%] xs481:mx-auto">
                     <span className="text-[--primary-color] font-semibold">{t('fullstackRole')}</span>
                  </h2>
               </div>

               {/* Mobile / <lg : Image */}
               <div className="lg:hidden aspect-square w-[200px] xs481:w-[260px] min-w-[210px] max-w-full rounded-md border-[0.2rem] border-[--primary-color] flex items-center justify-center overflow-hidden shrink-0 mx-auto animate-border-pulse">
                  <Image
                     src="/assets/profile/davyprofile1.png"
                     width={240}
                     height={300}
                     alt="profile"
                     className="object-cover w-full h-full"
                     priority
                  />
               </div>

               {/* Social links very small screens */}
               <div className="sm:hidden flex w-full justify-center gap-8 mt-2">
                  <SocialLinks sizeClass="text-4xl" />
               </div>

               {/* Methods */}
               <div className="flex flex-col xl:flex-row items-center lg:items-start mb-8 lg:mb-6 gap-2 xl:gap-4">
                  <span className="text-lg font-bold text-[--primary-color] mb-2 mt-2 xl:mb-0 min-w-max xl:self-center">
                     {t('methodsTitle')}
                  </span>
                  <div className="flex flex-row flex-wrap gap-2 xl:gap-4 justify-center mt-0">
                     {methods.items.map((m) => (
                        <span
                           key={m.label}
                           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-medium shadow-sm text-base border border-gray-300 dark:border-white/20"
                        >
                           {m.icon}
                           {m.label}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Presentation */}
               <div className="text-base text-[var(--text-color-dark)] dark:text-[var(--text-color-main)]">
                  {/* Intro 1 */}
                  <p className="mb-3 text-justify font-medium leading-[1.9rem]">
                     {t('headline')}
                  </p>

                  {/* Intro 2 */}
                  <p className="mb-6 text-justify leading-[1.85rem]">
                     {t('subheadline')}
                  </p>

                  {/* Bullets title */}
                  <p className="mb-3 font-semibold text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
                     {t('bulletsTitle')}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 leading-[1.85rem]">
                     {bullets.map((b, idx) => (
                        <li key={`p-bullet-${idx}`} className="flex gap-3">
                           <span className="mt-[0.55rem] h-2 w-2 shrink-0 rounded-full bg-[--primary-color]" />
                           <span>{b}</span>
                        </li>
                     ))}
                  </ul>

                  {/* Concrete line */}
                  <p className="mt-6 font-semibold text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
                     {t('concreteLine')}
                  </p>
               </div>

               {/* CTA Projects */}
               <div className="my-4 flex justify-center lg:justify-start">
                  <ProjectsButton />
               </div>

               {/* Qualities */}
               <div className="mb-4">
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                     {getQualities(tQualities).items.map((q, index) => (
                        <div
                           key={q.label}
                           className="group flex items-center gap-1 xs481:gap-2 hover:bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 border border-gray-400 dark:border-gray-600 px-2 xs481:px-5 py-2 rounded-full font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 hover:border-[--primary-color]/30 cursor-default"
                           style={{ animationDelay: `${index * 80}ms` }}
                        >
                           <div className="text-[--primary-color] group-hover:text-[--secondary-color] transition-colors duration-300">
                              {q.icon}
                           </div>
                           <span className="transition-colors duration-300">{q.label}</span>
                        </div>
                     ))}
                  </div>
               </div>

               {/* CV Buttons */}
               <div className="flex lg:flex-col flex-wrap w-full xl:w-[66%] gap-4 sm:flex-nowrap sm:items-left mb-4">
                  <Button variant="primary" href="/download/CV_Davy_ROBERT_DEVELOPPEUR.pdf" download>
                     {t('cvStandard')}
                  </Button>

                  <Button
                     variant="secondary"
                     href="/download/CV_Details_Projets_Davy_ROBERT_DEVELOPPEUR_WEB.pdf"
                     download
                     withShineEffect
                  >
                     {t('cvLong')}
                  </Button>

                  {/* Social links (<lg) */}
                  <div className="lg:hidden flex w-full justify-center items-center sm:w-auto sm:justify-start gap-8 sm:mt-0 mt-4">
                     <SocialLinks sizeClass="text-5xl sm:text-4xl" />
                  </div>
               </div>
            </div>

            <ArrowButton />
         </section>
      </div>
   )
}

export default Presentation
