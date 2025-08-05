'use client';

import { SiVercel } from 'react-icons/si';

import { motion } from 'framer-motion';
import { categories } from '@/datas/datas';
import React from 'react'
import iconColors from '@/utils/colors';

// Helper component to render an icon with optional color logic
const IconDisplay = ({ icon, label, sizeClass }: { icon: React.ReactNode; label: string; sizeClass: string }) => {
    const lower = label.toLowerCase();
    if (lower === 'git & github') return <>{icon}</>;
    if (lower === 'vercel') {
        return (
            <span className={`${sizeClass} text-black dark:text-white`}>
                <SiVercel />
            </span>
        );
    }
    return (
        <span className={sizeClass} style={{ color: iconColors[lower] || 'var(--primary-color)' }}>
            {icon}
        </span>
    );
}; 

const Skills = () => {
    
    return (
        <motion.section
            id="skills"
            className="pt-32 px-4 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-8">
                <span className="italic">Mes</span> Compétences
            </h2>
            
            {/* Sections d'intervention et stacks techniques */}
            <div className="max-w-[1000px] mx-auto mb-12 px-4">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-[--primary-color] mb-4 text-xl">Mes domaines d&#39;intervention et expertises :</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
                            <li>Conception, création d&#39;applications web modernes et intuitives orientées utilisateur</li>
                            <li>Analyse, Recherche de solutions numériques et Résolution de problèmes divers</li>
                            <li>Tests unitaires, intégration et end-to-end...</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-[--primary-color] mb-4 text-xl">Mes stacks techniques prédominantes à ce jour :</h3>
                        <ul className="list-disc list-inside space-y-2 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">
                            <li>NextJS, ReactJS, NodeJS avec TailwindCSS</li>
                            <li>Angular, C#</li>
                            <li>Java / Kotlin avec Android Studio</li>
                            <li>Et plus encore...</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 🔹 Mobile <640px (flexible grid responsive) */}
            <div className="sm:hidden w-full max-w-[1200px] mx-auto flex flex-col gap-12">
                {categories.map((cat) => (
                    <div key={cat.title} className="flex flex-col items-center gap-6 px-4">
                        <h3 className="text-3xl font-semibold dark:text-[var(--text-color-light)] text-[var(--text-color-dark)]">{cat.title}</h3>
                        <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-y-6 xxs:gap-x-12 xs:gap-x-20 w-full justify-items-center">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <IconDisplay icon={icon} label={label} sizeClass="text-6xl sm:text-5xl" />
                                    </div>
                                    <span className="uppercase text-sm sm:text-xs tracking-wide text-center text-[var(--text-color-dark)] dark:text-white">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {/* 🔹 Desktop ≥640px (grid version) */}
            <div className="hidden sm:grid w-full max-w-[1200px] lg:max-w-[1200px] mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((cat, idx) => (
                    <div
                        key={cat.title}
                        className={`flex flex-col items-center gap-6 px-6 py-4
                            ${idx !== 0 ? 'border-l border-[var(--border-color)]' : ''} ${cat.title === 'Outils' ? 'md:border-l-0 lg:border-l lg:border-[var(--border-color)]' : ''} ${cat.title === 'Backend' ? 'sm:border-l-0 md:border-l md:border-[var(--border-color)] lg:border-l lg:border-[var(--border-color)]' : ''} ${cat.title === 'Outils' ? 'md:col-span-3 md:mx-auto lg:col-span-1 lg:mx-0' : ''}
                        `}
                    >

                        <h3 className="text-3xl font-semibold text-[var(--text-color-dark)] dark:text-[var(--text-color-light)]">{cat.title}</h3>
                        <div className="grid grid-cols-2 gap-6 lg:gap-x-14 lg:gap-y-8 w-full">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        <IconDisplay icon={icon} label={label} sizeClass="text-5xl lg:text-6xl" />
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
