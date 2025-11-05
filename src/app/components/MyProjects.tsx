'use client'

import { projects } from "@/datas";
import { useRichTextFormatters } from '@/utils/richTextFormatters';
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { ProjectCard } from "./ProjectCard";


const MyProjects = () => {
   const maxTagsCount = projects.reduce((max, project) => Math.max(max, project.tags.length), 0);
   const t = useTranslations('myProjects');
   const { formatProjectsIntro } = useRichTextFormatters();

   return (
      <section id="projets" className="pt-32 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] w-full">
         <div className='w-full py-8'>
            <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-8 px-5">
               <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">{t('title1')}</span> {t('title2')} <span className="">&</span> {t('title3')}
            </h2>

            <div className='w-full flex bg-[var(--bg-secondary)] border-y border-[var(--border-secondary)] py-8 px-5'>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className='text-secondary dark:text-[--text-color-main] text-[var(--text-color-dark)] text-[18px] max-w-4xl leading-[2.2rem] mx-auto text-justify'
            >
               {formatProjectsIntro()}
            </motion.p>
         </div>
         </div>

         <div className="mt-8 flex justify-center w-full px-4">
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
