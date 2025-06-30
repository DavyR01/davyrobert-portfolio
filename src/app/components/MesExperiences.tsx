'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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

   const data = [
      {
         year: 'xxxxx',
         experiences: [
            {
               title: 'xxxxx',
               tasks: [
                  'Lorem ipsum dolor sit amet',
                  'Consectetur adipiscing elit',
               ],
            },
            {
               title: 'xxxxx',
               tasks: [
                  'Sed do eiusmod tempor incididunt eiusmod tempor incididunt incididunt eiusmod tempor incididunt',
                  'Sed do eiusmod tempor incididunt',
               ],
            },
            {
               title: 'xxxxx',
               tasks: [
                  'Ex task',
               ],
            }
         ],
         icons: ['file', 'file', 'file']
      },
      {
         year: 'xxxxx',
         experiences: [
            {
               title: 'xxxxx',
               tasks: [
                  'Lorem ipsum dolor sit amet',
                  'Consectetur adipiscing elit',
               ],
            },
            {
               title: 'xxxxx',
               tasks: [
                  'Sed do eiusmod tempor incididunt',
                  'Sed do eiusmod tempor incididunt eiusmod tempor incididunt',
               ],
            },
            {
               title: 'xxxxx',
               tasks: [
                  'Ex task',
               ],
            }
         ],
         icons: ['file', 'file', 'file']
      },
      {
         year: 'xxxxx',
         experiences: [
            {
               title: 'xxxxx',
               tasks: [
                  'Lorem ipsum dolor sit asum dolordolordolordolordolo rdolordolordolord olordolord olodolordolordolordolordolo rdolordolordolord olordolrdolord olodolordolordolordolordolo rdolordolordolord olordolrdolord olodolordolordolordolordolo rdolordolordolord olordolord olordolordolo rdolordolordolo dolordolordolordolordolo rdolordolordolord olordolord olordolordolo rdolordolordolo m dolor sit asum dolor sit amet',
                  'Consectetur adipiscing elit',
               ],
            },
            {
               title: 'xxxxx',
               tasks: [
                  'Sed do eiusmod tempor incididunt',
                  'Sed do eiusmod tempor incididunt',
               ],
            },
            {
               title: 'xxxxx',
               tasks: [
                  'Ex task',
               ],
            }
         ],
         icons: ['file', 'file', 'file']
      },
   ]

   return (
      <section id="experience" className="pt-52 text-white px-4">
         <h2 className="text-center text-[#5ce1e6] uppercase text-4xl font-bold mb-12">
            <span className="italic text-white">Mes</span> Expériences
         </h2>

         {/* === Layout selon la taille d’écran === */}
         {isMobile ? (
            // ✅ VERSION RESPONSIVE (< 1150px)
            <div className="relative mx-auto w-full max-w-[700px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#5ce1e6] z-0 rounded"></div>
               {data.map((item, i) => (
                  <div key={i} className="relative flex flex-col md:flex-row w-full mb-16">
                     <div className="w-full flex justify-center mb-6">
                        <div className="relative w-full max-w-[500px]">
                           <div className="bg-[#0f0f0f] border border-[#5ce1e6] rounded-lg p-6 w-full text-base">
                              <h2 className="text-4xl font-bold mb-4">{item.year}</h2>
                              {item.experiences.map((exp, idx) => (
                                 <div key={idx} className="mb-4">
                                    <h3 className="text-[#5ce1e6] font-bold text-2xl break-words">{exp.title}</h3>
                                    <ul className="list-disc ml-6 mt-1 space-y-1">
                                       {exp.tasks.map((task, j) => (
                                          <li key={j} className="break-words">{task}</li>
                                       ))}
                                    </ul>
                                 </div>
                              ))}
                              <div className="flex flex-wrap justify-center gap-4 mt-4">
                                 {item.icons.map((icon, k) => (
                                    <Image key={k} src="/file.svg" alt={icon} width={40} height={40} className="hover:scale-110 transition-transform" />
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            // ✅ VERSION DESKTOP (> 1150px)
            <div className="relative mx-auto w-full max-w-[1400px]">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-[#5ce1e6] z-0 rounded"></div>
               {data.map((item, i) => (
                  <div key={i} className="relative w-full flex mb-16">
                     {i % 2 === 0 ? (
                        <>
                           <div className="w-1/2 flex justify-end pr-4">
                              <div className="relative">
                                 <div className="absolute top-10 right-[-40px] h-1 w-10 bg-[#5ce1e6] z-20"></div>
                                 <div className="bg-[#0f0f0f] border border-[#5ce1e6] rounded-lg p-6 w-[500px] text-base">
                                    <h2 className="text-4xl font-bold mb-4">{item.year}</h2>
                                    {item.experiences.map((exp, idx) => (
                                       <div key={idx} className="mb-4">
                                          <h3 className="text-[#5ce1e6] font-bold text-2xl break-words">{exp.title}</h3>
                                          <ul className="list-disc ml-6 mt-1 space-y-1">
                                             {exp.tasks.map((task, j) => (
                                                <li key={j} className="break-words">{task}</li>
                                             ))}
                                          </ul>
                                       </div>
                                    ))}
                                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                                       {item.icons.map((icon, k) => (
                                          <Image key={k} src="/file.svg" alt={icon} width={40} height={40} className="hover:scale-110 transition-transform" />
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="w-1/2"></div>
                        </>
                     ) : (
                        <>
                           <div className="w-1/2"></div>
                           <div className="w-1/2 flex justify-start pl-4">
                              <div className="relative">
                                 <div className="absolute top-10 left-[-40px] h-1 w-10 bg-[#5ce1e6] z-20"></div>
                                 <div className="bg-[#0f0f0f] border border-[#5ce1e6] rounded-lg p-6 w-[500px] text-base">
                                    <h2 className="text-4xl font-bold mb-4">{item.year}</h2>
                                    {item.experiences.map((exp, idx) => (
                                       <div key={idx} className="mb-4">
                                          <h3 className="text-[#5ce1e6] font-bold text-2xl break-words">{exp.title}</h3>
                                          <ul className="list-disc ml-6 mt-1 space-y-1">
                                             {exp.tasks.map((task, j) => (
                                                <li key={j} className="break-words">{task}</li>
                                             ))}
                                          </ul>
                                       </div>
                                    ))}
                                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                                       {item.icons.map((icon, k) => (
                                          <Image key={k} src="/file.svg" alt={icon} width={40} height={40} className="hover:scale-110 transition-transform" />
                                       ))}
                                    </div>
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
