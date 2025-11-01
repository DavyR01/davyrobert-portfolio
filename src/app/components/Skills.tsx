'use client';

import IconDisplay from '@/app/components/ui/IconDisplay';
import { categories } from '@/datas';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import React from 'react';

const Skills = () => {
    const t = useTranslations('mySkills')

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
                <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">{t('title1')}</span> {t('title2')}
            </h2>

            {/* Sections d'intervention et stacks techniques */}
            <div className="w-full mb-12 bg-[var(--bg-primary-menu)] py-8">
                <div className='max-w-[1200px] mx-auto px-[2.5rem] lg:px-[4rem]'>
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">
                        <div>
                            <h3 className="font-semibold text-[--primary-color] mb-4 text-xl">{t('interventionTitle')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
                                <li className='keyword-highlight'>{t('intervention1')}</li>
                                <li className='keyword-highlight'>{t('intervention2')}</li>
                                <li className='keyword-highlight'>{t('intervention3')}</li>
                                <li className='dark:text-[var(--text-color-main)]'>{t('intervention4')}</li>
                                <li className='dark:text-[var(--text-color-main)]'>{t('intervention5')}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-[--primary-color] mb-4 text-xl">{t('stacksTitle')}</h3>
                            <ul className="list-disc list-inside space-y-2 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
                                <li className='keyword-highlight'>{t('stack1')}</li>
                                <li className='keyword-highlight'>{t('stack2')}</li>
                                <li className='keyword-highlight'>{t('stack3')}</li>
                                <li className='keyword-highlight'>{t('stack4')}</li>
                                <li> <span className='keyword-highlight'>{t('stack5')}</span><span className='text-[var(--text-color-main)]'>{t('stack8')}</span></li>
                                <li> <span className='keyword-highlight'>{t('stack6')}</span><span className='text-[var(--text-color-main)]'>{t('stack8')}</span></li>
                                <li className='dark:text-[var(--text-color-main)]'>{t('stack7')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 Mobile <640px (flexible grid responsive) */}
            <div className="sm:hidden w-full max-w-[1200px] mx-auto flex flex-col gap-12 px-4">
                {categories.map((cat) => (
                    <div key={cat.titleKey} className="flex flex-col items-center gap-6 px-4">
                        <h3 className="text-3xl font-semibold dark:text-[var(--text-color-light)] text-[var(--text-color-dark)]">{t(`categories.${cat.titleKey}`)}</h3>
                        <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-y-6 xxs:gap-x-12 xs:gap-x-20 w-full justify-items-center">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <IconDisplay icon={icon} label={label} sizeClass="text-6xl" />
                                    </div>
                                    <span className="uppercase text-sm sm:text-xs tracking-wide text-center text-[var(--text-color-dark)] dark:text-white">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {/* 🔹 Desktop ≥640px (grid version) */}
            <div className="hidden sm:grid w-full max-w-[1200px] mx-auto lg:px-[2.5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((cat, idx) => (
                    <div
                        key={cat.titleKey}
                        className={`flex flex-col items-center gap-6 px-6 py-4
                            ${idx !== 0 ? 'border-l border-[var(--border-color)]' : ''} ${cat.titleKey === 'tools' ? 'md:border-l-0 lg:border-l lg:border-[var(--border-color)]' : ''} ${cat.titleKey === 'backend' ? 'sm:border-l-0 md:border-l md:border-[var(--border-color)] lg:border-l lg:border-[var(--border-color)]' : ''} ${cat.titleKey === 'tools' ? 'md:col-span-3 md:mx-auto lg:col-span-1 lg:mx-0' : ''}
                        `}
                    >

                        <h3 className="text-3xl font-semibold text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">{t(`categories.${cat.titleKey}`)}</h3>
                        <div className="grid grid-cols-2 gap-6 lg:gap-x-14 lg:gap-y-8 w-full">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <IconDisplay icon={icon} label={label} sizeClass="text-6xl" />
                                    </div>
                                    <span className="uppercase text-sm tracking-wide text-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">{label}</span>
                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;
