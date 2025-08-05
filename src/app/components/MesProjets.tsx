'use client'

import { motion } from "framer-motion";
import { projects } from "@/datas/datas";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from '@/context/I18nContext';


const MesProjets = () => {
   const maxTagsCount = projects.reduce((max, project) => Math.max(max, project.tags.length), 0);
   const { t } = useTranslation();

   return (
      <section id="projets" className="pt-32 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] px-4">
         <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
            {t('mesProjets.title')}
         </h2>

         <div className='w-full flex'>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className='text-secondary text-[18px] max-w-4xl leading-[28px] text-center mx-auto'
               dangerouslySetInnerHTML={{__html: t('mesProjets.intro')}}
            />
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
