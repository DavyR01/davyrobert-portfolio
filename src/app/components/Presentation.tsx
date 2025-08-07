'use client'

import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import MatrixCanvas from './ui/MatrixCanvas';
// import MatrixCanvas from '@/app/components/ui/MatrixCanvas';
import { useTheme } from '@/context/ThemeContext';
import { qualities, methods } from '@/datas/datas';
import Button from './ui/Button';
import { useTranslations } from 'next-intl';

const Presentation = () => {
   const sectionRef = useRef<HTMLElement>(null);
   const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);
   const t = useTranslations('presentation');

   useEffect(() => {
      setMounted(true);
   }, []);

   return (
      <section
         ref={sectionRef}
         id="introduction"
         className="flex flex-row flex-wrap lg:flex-nowrap justify-between max-w-[1200px] mx-auto px-6 relative gap-12 pt-[100px] xs480:pt-32 scroll-mt-20 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]"
      >
         {/* Canvas Matrix background effect */}
         {mounted && theme === 'dark' && <MatrixCanvas sectionRef={sectionRef} />}

         {/* Présentation texte */}
         <div id="presentation" className="relative z-10 w-full max-w-[700px] text-left mb-8 lg:mb-0">
            <h2 className="xs480:text-4xl text-[1.4rem] font-bold text-center lg:text-left ">{t('hello')}</h2>
            <h1 className="xs480:text-[64px] text-[2rem] my-4 font-bold text-center lg:text-left ">
               <span className="italic font-light">Davy</span>{' '}
               <span className="">ROBERT</span>
            </h1>
            <h2 className="xs480:text-4xl text-[1.4rem] font-bold mb-6 text-center lg:text-left ">
               Et j&apos;exerce en tant que <br />
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

            <div className="flex flex-col xl:flex-row items-center lg:items-start my-6 gap-2 xl:gap-4">
              <span className="text-lg font-bold text-[--primary-color] mb-2 xl:mb-0 flex items-center gap-2 min-w-max">
                {t('methodsTitle')}
              </span>
              <div className="flex flex-row flex-wrap gap-2 xl:gap-4 lg:justify-start mt-0 justify-center">
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

            <div className="text-base mb-8 dark:text-gray-300 text-gray-700 space-y-4">
               <p>
                  Après un parcours riche, varié et diversifié, j&apos;ai décidé de me <span className="keyword-highlight">spécialiser</span> dans le domaine de l&apos;<span className="keyword-highlight">informatique</span> et plus particulièrement dans le <span className="keyword-highlight">développement web</span> et la <span className="keyword-highlight">conception d&apos;applications</span>.
                  Épris par le monde de l&apos;<span className="keyword-highlight">entrepreneuriat</span> et les <span className="keyword-highlight">nouvelles technologies</span>, j&apos;apprends et évolue continuellement selon les compétences requises et la demande sur le marché.
               </p>
               
               <p>
                  Je <span className="keyword-highlight">conçois</span>, <span className="keyword-highlight">développe</span> et <span className="keyword-highlight">optimise</span> des applications web, d&apos;une idée à la réalisation jusqu&apos;à la mise en production.
                  Je consacre du temps à me former en <span className="keyword-highlight">autodidacte</span> et m&apos;adapte en permanence aux innovations et nouvelles technologies émergentes. <br /> L&apos;objectif est donc de viser à exploiter celles qui s&apos;avèrent pertinentes pour mener à bien les missions qui me sont confiées.
               </p>
               
               <p>
                  De ce fait, je souhaite apporter ma contribution dans des <span className="keyword-highlight">projets ambitieux</span> et porteurs de <span className="keyword-highlight">transformations</span>, auprès d&apos;entreprises engagées et partageant des valeurs fortes.
               </p>
               

            </div>

            <div className="flex flex-wrap gap-4 mb-8 w-full justify-center md:justify-start">
               {qualities.items.map((q) => (
                  <span
                     key={q.label}
                     className="
                    flex items-center gap-2
                    bg-white/10 text-black border border-[#232946]
                    px-2 md:px-4 py-2 rounded-xl font-semibold text-base shadow transition-all
                    hover:bg-black/70 hover:text-white
                    dark:bg-white/10 dark:text-white dark:border-white/20
                    dark:hover:bg-white/20
                  "
                  >
                     {q.icon}{q.label}
                  </span>
               ))}
            </div>
            <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:items-center mb-4">
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
