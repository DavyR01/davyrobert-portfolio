'use client'

import { motion } from "framer-motion";
import { projects } from "@/datas";
import { ProjectCard } from "./ProjectCard";
import { useTranslations } from 'next-intl';
import { useRichTextFormatters } from '@/utils/richTextFormatters';


const MyProjects = () => {
   const maxTagsCount = projects.reduce((max, project) => Math.max(max, project.tags.length), 0);
   const t = useTranslations('myProjects');
   const { formatProjectsIntro } = useRichTextFormatters();

   return (
      <section id="projets" className="pt-32 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] px-4">
         <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
            <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">{t('title1')}</span> {t('title2')} <span className="font-cambriaaa">&</span> {t('title3')}
         </h2>

         <div className='w-full flex'>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className='text-secondary dark:text-[#b1bad3] text-gray-600 text-[18px] max-w-4xl leading-[2.2rem] mx-auto text-justify'
            >
               {formatProjectsIntro()}
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

export default MyProjects;
