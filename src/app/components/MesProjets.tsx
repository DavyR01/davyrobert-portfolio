'use client'

import { motion } from "framer-motion";
import { projects } from "@/datas/datas";
import { ProjectCard } from "./ProjectCard";


const MesProjets = () => {
   return (
      <section id="projets" className="pt-32 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] px-4">
         <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
            <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">Mes</span> Projets & Réalisations
         </h2>

         <div className='w-full flex'>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className='mt-3 text-secondary text-[18px] max-w-4xl leading-[28px] text-center mx-auto'
            >
               Découvrez mes projets réalisés, récents et à venir. Certains ont été déployés par mes soins et d&apos;autres l&rsquo;ont été dans un cadre professionnel en collaboration avec d&apos;autres développeurs. <br /> Par soucis de confidentialité, je ne pourrais pas fournir le code source des projets réalisés en entreprise. <br />
               Toutefois, j&apos;ai réalisé quelques vidéos de démonstration afin d&apos;illustrer les fonctionnalités et l&apos;ergonomie de ces projets.
            </motion.p>
         </div>

         <div className="mt-20 flex justify-center">
            <div className="flex flex-wrap justify-center gap-7 max-w-[1200px]">
               {projects.map((project, index) => (
                  <ProjectCard key={`project-${index}`} index={index} {...project} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default MesProjets;
