'use client';

import { motion } from 'framer-motion';
import { categories } from '../../datas/datas';
import React from 'react'
import iconColors from '../../utils/colors';

const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="pt-32 px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h2 className="text-center text-[#5ce1e6] uppercase text-4xl font-bold mb-12">
                <span className="italic dark:text-white text-black">Mes</span> Compétences
            </h2>

            {/* 🔹 Mobile <640px (flexible grid responsive) */}
            <div className="sm:hidden w-full max-w-[1400px] mx-auto flex flex-col gap-12">
                {categories.map((cat) => (
                    <div key={cat.title} className="flex flex-col items-center gap-6 px-4">
                        <h3 className="text-3xl font-semibold">{cat.title}</h3>
                        <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-y-6 xxs:gap-x-12 xs:gap-x-20 w-full justify-items-center">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        {label.toLowerCase() === 'git & github' ? (
                                            icon
                                        ) : (
                                            <span
                                                className="text-6xl sm:text-5xl"
                                                style={{ color: iconColors[label.toLowerCase()] || '#5ce1e6' }}
                                            >
                                                {icon}
                                            </span>
                                        )}
                                    </div>
                                    <span className="uppercase text-sm sm:text-xs tracking-wide text-center">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {/* 🔹 Desktop ≥640px (grid version) */}
            <div className="hidden sm:grid w-full max-w-[1400px] lg:max-w-[1600px] mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((cat, idx) => (
                    <div
                        key={cat.title}
                        className={`flex flex-col items-center gap-6 px-6 py-4
                            ${idx !== 0 ? 'border-l border-gray-500/40' : ''} ${cat.title === 'Outils' ? 'md:border-l-0 lg:border-l' : ''} ${cat.title === 'Backend' ? 'sm:border-l-0 md:border-l lg:border-l' : ''} ${cat.title === 'Outils' ? 'md:col-span-3 md:mx-auto lg:col-span-1 lg:mx-0' : ''}
                        `}
                    >

                        <h3 className="text-3xl font-semibold">{cat.title}</h3>
                        <div className="grid grid-cols-2 gap-6 lg:gap-x-14 lg:gap-y-8 w-full">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                                >
                                    <div className="w-16 h-16 flex items-center justify-center">
                                        {label.toLowerCase() === 'git & github' ? (
                                            icon
                                        ) : (
                                            <span
                                                className="text-5xl lg:text-6xl"
                                                style={{ color: iconColors[label.toLowerCase()] || '#5ce1e6' }}
                                            >
                                                {icon}
                                            </span>
                                        )}

                                    </div>
                                    <span className="uppercase text-sm tracking-wide text-center">{label}</span>
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
