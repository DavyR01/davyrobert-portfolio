'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { data_experiences } from '../datas/datas'

const MesExperiences = () => {
   const [isMobile, setIsMobile] = useState(false)

   useEffect(() => {
      const handleResize = () => {
         setIsMobile(window.innerWidth <= 1150)
      }

      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
   }, [])

   return (
      <section id="experience" className="pt-32 px-4 text-black dark:text-white">
         <h2 className="text-center text-[#5ce1e6] uppercase text-4xl font-bold mb-12">
            <span className="italic text-black dark:text-white">Mes</span> Expériences
         </h2>

         {isMobile ? (
            // Responsive layout (<= 1150px)
            <div className="relative mx-auto w-full max-w-[800px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#5ce1e6] z-0 rounded"></div>
               {data_experiences.map((item, i) => (
                  <div key={`${item.year}-${i}`} className="relative flex flex-col w-full mb-16" data-index={i}>
                     <div className="w-full flex justify-center mb-6">
                        <div className="relative w-full max-w-[95%] sm:max-w-[97%]">
                           <div className="dark:bg-[#0f0f0f] bg-white border border-[#5ce1e6] rounded-lg p-6 w-full text-base">

                              <h2 className="text-3xl font-bold mb-4 w-fit mx-auto">{item.year}</h2>
                              {item.experiences.map((exp, expIndex) => (
                                 <div key={`${exp.title}-${expIndex}`} className="mb-4">
                                    <h3 className="text-[#5ce1e6] font-bold text-2xl break-words">{exp.title}</h3>
                                    <ul className="list-disc ml-8 mt-1 space-y-1">
                                       {exp.tasks.map((task, taskIndex) => (
                                          <li key={`${task}-${taskIndex}`} className="break-words">{task}</li>
                                       ))}
                                    </ul>
                                 </div>
                              ))}
                              <div className="flex flex-wrap justify-center gap-4 mt-6">
                                 {item.icons.map((icon, k) => (
                                    <Image key={`mobile-${item.year}-${icon}-${k}`} src={`/assets/icons/${icon}`}
                                       alt={icon} width={50} height={50} className="hover:scale-110 transition-transform" />
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
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#5ce1e6] z-0 rounded"></div>
               {data_experiences.map((item, i) => (
                  <div key={`desktop-${item.year}-${i}`} className="relative w-full flex mb-24">
                     {/* Icônes positionnés à gauche ou à droite */}
                     {!isMobile && (
                        <div
                           className={`
                                 absolute 
                                 top-1/2 -translate-y-1/2 
                                 z-20 
                                 w-[500px]
                                 flex flex-wrap gap-8
                                 ${i % 2 === 0
                                 ? 'left-[calc(50%+40px)] justify-center'
                                 : 'right-[calc(55%-0px)] justify-center'} 
                              `}
                        >

                           {item.icons.map((icon, k) => (
                              <Image
                                 key={`desktop-${item.year}-${icon}-${k}`}
                                 src={`/assets/icons/${icon}`}
                                 alt={icon}
                                 width={60}
                                 height={60}
                                 className="hover:scale-110 transition-transform"
                              />
                           ))}
                        </div>
                     )}

                     {i % 2 === 0 ? (
                        <>
                           <div className="w-1/2 flex justify-end pr-10">
                              <div className="relative">
                                 <div className="absolute top-1/2 right-[-40px] -translate-y-1/2 h-1 w-10 bg-[#5ce1e6] z-20 rounded"></div>
                                 <div className="border dark:bg-[#0f0f0f] border-[#5ce1e6] rounded-lg p-6 w-[500px] text-base">
                                    <h2 className="text-4xl font-bold mb-4 text-center">{item.year}</h2>
                                    {item.experiences.map((exp, expIndex) => (
                                       <div key={`desktop-${exp.title}-${expIndex}`} className="mb-4">
                                          <h3 className="text-[#5ce1e6] font-bold text-3xl break-words">{exp.title}</h3>
                                          <ul className="list-disc ml-10 mt-1 space-y-1">
                                             {exp.tasks.map((task, taskIndex) => (
                                                <li key={`desktop-${task}-${taskIndex}`} className="break-words">{task}</li>
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
                                 <div className="absolute top-1/2 left-[-40px] -translate-y-1/2 h-1 w-10 bg-[#5ce1e6] z-20 rounded"></div>
                                 <div className="dark:bg-[#0f0f0f] bg-white border border-[#5ce1e6] rounded-lg p-6 w-[500px] text-base">
                                    <h2 className="text-4xl font-bold mb-4 text-center">{item.year}</h2>
                                    {item.experiences.map((exp, expIndex) => (
                                       <div key={`desktop-${exp.title}-${expIndex}`} className="mb-4">
                                          <h3 className="text-[#5ce1e6] font-bold text-3xl break-words">{exp.title}</h3>
                                          <ul className="list-disc ml-10 mt-1 space-y-1">
                                             {exp.tasks.map((task, taskIndex) => (
                                                <li key={`desktop-${task}-${taskIndex}`} className="break-words">S{task}</li>
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