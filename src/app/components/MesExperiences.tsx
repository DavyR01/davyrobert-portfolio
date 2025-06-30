import Image from 'next/image'
import React from 'react'

const MesExperiences = () => {
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
         <h2 className="text-center text-[#5ce1e6] uppercase text-3xl font-bold mb-12">
            <span className="italic text-white">Mes</span> Expériences
         </h2>

         <div className="relative border-l-2 border-[#5ce1e6] mx-auto w-full max-w-[500px]">            {data.map((item, i) => (
            <div key={i} className="relative pl-10 mb-16">
               {/* Timeline point */}
               <div className="absolute top-0 left-[-9px] w-4 h-4 bg-[#5ce1e6] rounded-full border-2 border-black"></div>

               <div className="bg-[#0f0f0f] border border-[#5ce1e6] rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">{item.year}</h2>

                  {item.experiences.map((exp, idx) => (
                     <div key={idx} className="mb-4">
                        <h3 className="text-[#5ce1e6] font-semibold">{exp.title}</h3>
                        <ul className="list-disc ml-6 mt-1 text-sm space-y-1">
                           {exp.tasks.map((task, j) => (
                              <li key={j}>{task}</li>
                           ))}
                        </ul>
                     </div>
                  ))}

                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                     {item.icons.map((icon, k) => (
                        <Image
                           key={k}
                           src="/file.svg"
                           alt={icon}
                           width={40}
                           height={40}
                           className="hover:scale-110 transition-transform"
                        />
                     ))}
                  </div>
               </div>
            </div>
         ))}
         </div>
      </section>
   )
}

export default MesExperiences
