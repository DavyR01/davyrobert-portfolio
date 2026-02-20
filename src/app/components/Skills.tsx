'use client';

import IconDisplay from '@/app/components/ui/IconDisplay';
import { categories } from '@/datas';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';

const Skills = () => {
   const t = useTranslations('mySkills');

   return (
      <motion.section
         id="skills"
         className="pt-32 w-full text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] dark:bg-[var(--bg-primary)] pb-8"
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 0.6, ease: 'easeOut' }}
      >
         <h2 className="text-center text-[var(--primary-color)] uppercase text-4xl font-bold mb-8">
            <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
               {t('title1')}
            </span>{' '}
            {t('title2')}
         </h2>

         <div className="w-full max-w-[1200px] mx-auto px-4 lg:px-[2.5rem] py-8">
            <div className="grid sm:grid-cols-2 gap-10 sm:gap-x-24 lg:gap-x-32">
               {categories.map((cat) => (
                  <div key={cat.titleKey} className="flex flex-col gap-6">
                     <h3 className="text-2xl font-semibold text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
                        {t(`categories.${cat.titleKey}`)}
                     </h3>

                     <div className="grid grid-cols-3 gap-6 justify-items-center">
                        {cat.featured.map(({ icon, label }, i) => (
                           <div
                              key={`${label}-${i}`}
                              className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                              title={label}
                           >
                              <div className="w-16 h-16 flex items-center justify-center">
                                 <IconDisplay icon={icon} label={label} sizeClass="text-6xl" />
                              </div>
                              <span className="uppercase text-xs tracking-wide text-center">
                                 {label}
                              </span>
                           </div>
                        ))}
                     </div>

                     {cat.secondary?.length ? (
                        <div className="mt-1">
                           <p className="text-sm text-[var(--text-color-main)] mb-2">
                              {t('otherSkills')}
                           </p>
                           <div className="flex flex-wrap gap-2">
                              {cat.secondary.map((s, i) => (
                                 <span
                                    key={`${s.label}-${i}`}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-secondary)] bg-[var(--bg-secondary)] text-xs"
                                 >
                                    {s.icon ? (
                                       <span className="w-4 h-4 flex items-center justify-center">
                                          {s.icon}
                                       </span>
                                    ) : null}
                                    <span className="whitespace-nowrap">{s.label}</span>
                                 </span>
                              ))}
                           </div>
                        </div>
                     ) : null}
                  </div>
               ))}
            </div>
         </div>
      </motion.section>
   );
};

export default Skills;
