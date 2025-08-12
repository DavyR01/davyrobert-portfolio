'use client'

import IconDisplay from '@/app/components/ui/IconDisplay'
import React, { useEffect, useState } from 'react'
import { data_experiences } from '@/datas'
import { useTranslations } from 'next-intl'

const MesExperiences = () => {
   const [isMobile, setIsMobile] = useState(false)
   const t = useTranslations('myExperiences')

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 1150)
      }

      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return (
      <section id="experience" className="pt-32 px-4 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
         <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
            <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">{t('title1')}</span> {t('title2')}
         </h2>

         {isMobile ? (
            // Responsive layout (<= 1150px)
            <div className="relative mx-auto w-full max-w-[800px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[--primary-color] z-0 rounded"></div>
               {data_experiences.map((item, i) => (
                  <div key={`${item.yearKey}-${i}`} className="relative flex flex-col w-full mb-16" data-index={i}>
                     <div className="w-full flex justify-center mb-6">
                        <div className="relative w-full max-w-[95%] sm:max-w-[97%]">
                           <div className="dark:bg-[--bg-dark-items2] bg-[var(--bg-light)] border border-[--primary-color] rounded-lg p-6 w-full text-base">

                               <h2 className="text-3xl font-bold mb-4 w-full text-center">{t(item.yearKey)}</h2>
                              {item.experiencesKey.map((exp, expIndex) => (
                                 <div key={`${exp.titleKey}-${expIndex}`} className="mb-4">
                                     <h3 className="text-[--primary-color] font-bold text-2xl break-words">{t(exp.titleKey)}</h3>
                                    <ul className="list-disc ml-8 mt-1 space-y-1">
                                       {exp.tasksKey.map((task, taskIndex) => (
                                           <li key={`${task}-${taskIndex}`} className="break-words">{t(task)}</li>
                                       ))}
                                    </ul>
                                 </div>
                              ))}
                               <div className="flex flex-wrap justify-center gap-6 mt-6">
                                  {item.icons.map(({ icon, label }, k) => (
                                     <div key={`mobile-${item.yearKey}-${label}-${k}`} className="w-12 h-12 flex items-center justify-center">
                                        <IconDisplay icon={icon} label={label} sizeClass="text-5xl" />
                                     </div>
                                  ))}
                               </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            // Desktop layout (> 1150px)
            <div className="relative mx-auto w-full max-w-[1400px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[--primary-color] z-0 rounded"></div>
               {data_experiences.map((item, i) => (
                  <div key={`desktop-${item.yearKey}-${i}`} className="relative w-full flex">
                     {/* Icônes positionnés à gauche ou à droite */}
                     {!isMobile && (
                        <div
                           className={`
                                 absolute 
                                 top-1/2 -translate-y-1/2 
                                 z-20 
                                 w-[500px]
                                 flex flex-wrap gap-10
                                 ${i % 2 === 0
                                 ? 'left-[calc(50%+40px)] justify-center'
                                 : 'right-[calc(55%-0px)] justify-center'} 
                              `}
                        >

                           {item.icons.map(({ icon, label }, k) => (
                              <div key={`desktop-${item.yearKey}-${label}-${k}`} className="w-25 h-25 flex items-center justify-center">
                                 <IconDisplay icon={icon} label={label} sizeClass="text-7xl" />
                              </div>
                           ))}
                        </div>
                     )}

                     {i % 2 === 0 ? (
                        <>
                           <div className="w-1/2 flex justify-end pr-10">
                              <div className="relative">
                                 <div className="absolute top-1/2 right-[-40px] -translate-y-1/2 h-1 w-10 bg-[--primary-color] z-20 rounded"></div>
                                 <div className="border dark:bg-[--bg-dark-items2] border-[--primary-color] rounded-lg p-6 w-[500px] text-base">
                                     <h2 className="text-4xl font-bold mb-4 text-center">{t(item.yearKey)}</h2>
                                    {item.experiencesKey.map((exp, expIndex) => (
                                       <div key={`desktop-${exp.titleKey}-${expIndex}`} className="mb-4">
                                           <h3 className="text-[--primary-color] font-bold text-3xl break-words">{t(exp.titleKey)}</h3>
                                          <ul className="list-disc ml-10 mt-1 space-y-1">
                                             {exp.tasksKey.map((task, taskIndex) => (
                                                 <li key={`desktop-${task}-${taskIndex}`} className="break-words">{t(task)}</li>
                                             ))}
                                          </ul>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                           <div className="w-1/2"></div>
                        </>
                     ) : (
                        <>
                           <div className="w-1/2"></div>
                           <div className="w-1/2 flex justify-start pl-10">
                              <div className="relative">
                                 <div className="absolute top-1/2 left-[-40px] -translate-y-1/2 h-1 w-10 bg-[--primary-color] z-20 rounded"></div>
                                 <div className="dark:bg-[--bg-dark-items2] bg-[var(--bg-light)] border border-[--primary-color] rounded-lg p-6 w-[500px] text-base">
                                     <h2 className="text-4xl font-bold mb-4 text-center">{t(item.yearKey)}</h2>
                                    {item.experiencesKey.map((exp, expIndex) => (
                                       <div key={`desktop-${exp.titleKey}-${expIndex}`} className="mb-4">
                                           <h3 className="text-[--primary-color] font-bold text-3xl break-words">{t(exp.titleKey)}</h3>
                                          <ul className="list-disc ml-10 mt-1 space-y-1">
                                             {exp.tasksKey.map((task, taskIndex) => (
                                                 <li key={`desktop-${task}-${taskIndex}`} className="break-words">{t(task)}</li>
                                             ))}
                                          </ul>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </>
                     )}
                  </div>
               ))}
            </div>
         )}
      </section>
   )
}

export default MesExperiences
