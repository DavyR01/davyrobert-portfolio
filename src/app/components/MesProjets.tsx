'use client'

import { motion } from "framer-motion";
import { projects } from "@/datas/datas";
import { ProjectCard } from "./ProjectCard";


const MesProjets = () => {
   const maxTagsCount = projects.reduce((max, project) => Math.max(max, project.tags.length), 0);

   return (
      <section id="projets" className="pt-32 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] px-4">
         <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
            <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">Mes</span> Projets <span className="font-mono">&</span> Réalisations
         </h2>

         <div className='w-full flex'>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className='text-secondary text-[18px] max-w-4xl leading-[28px] text-center mx-auto'
            >
               Découvrez mes projets réalisés, récents et à venir. Certains ont été déployés par mes soins et d&apos;autres l&apos;ont été dans un cadre professionnel en collaboration avec d&apos;autres développeurs. <br /> Par soucis de confidentialité, je ne pourrais pas fournir le code source des projets réalisés en entreprise. <br />
               Toutefois, j&apos;ai réalisé quelques vidéos de démonstration afin d&apos;illustrer les fonctionnalités et l&apos;ergonomie de ces projets.
            </motion.p>
         </div>

         <div className="mt-20 flex justify-center w-full">
            <div className="w-full max-w-[1200px]">
               <div className="flex flex-wrap justify-center gap-7 w-full">
                  {projects.map((project, index) => (
                     <div key={`project-${index}`} className="w-full xs893:w-auto">
                        <ProjectCard index={index} {...project} maxTagsCount={maxTagsCount} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default MesProjets;
