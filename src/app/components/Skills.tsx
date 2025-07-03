'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { DiDotnet, DiJavascript } from 'react-icons/di';
import { FaDocker, FaGithub, FaGitlab, FaJava } from 'react-icons/fa';
import { FaAws, FaBitbucket } from 'react-icons/fa6';
import { GrMysql } from 'react-icons/gr';
import {
    SiFigma,
    SiTailwindcss,
    SiTypescript,
    SiReact,
    SiPostgresql,
    SiVercel,
    SiSharp,
    SiNodedotjs,
    SiNextdotjs,
    SiKotlin,
    SiAngular,
    SiFirebase,
    SiSqlite,
    SiOvh,
} from 'react-icons/si';

type SkillItem = {
    icon: React.ReactElement;
    label: string;
};

type SkillCategory = {
    title: string;
    items: SkillItem[];
};

const categories: SkillCategory[] = [
    {
        title: 'Langages',
        items: [
            { icon: <SiTypescript />, label: 'typescript' },
            { icon: <DiJavascript />, label: 'Javascript' },
            { icon: <FaJava />, label: 'Java' },
            { icon: <SiKotlin />, label: 'Kotlin' },
            { icon: <SiSharp />, label: 'C#' },
        ],
    },
    {
        title: 'Frontend',
        items: [
            { icon: <SiNextdotjs />, label: 'nextjs' },
            { icon: <SiReact />, label: 'react' },
            { icon: <SiTailwindcss />, label: 'TailwindCSS' },
            { icon: <SiAngular />, label: 'Angular' },
        ],
    },
    {
        title: 'Backend',
        items: [
            { icon: <SiNodedotjs />, label: 'NodeJS' },
            { icon: <DiDotnet />, label: '.NET' },
            { icon: <SiPostgresql />, label: 'postgresql' },
            { icon: <GrMysql />, label: 'MySQL' },
            { icon: <SiSqlite />, label: 'SQLite' },
        ],
    },
    {
        title: 'Outils',
        items: [
            { icon: <FaDocker />, label: 'Docker' },
            { icon: <FaAws />, label: 'AWS' },
            { icon: <SiFirebase />, label: 'Firebase' },
            { icon: <SiOvh />, label: 'OVH Cloud' },
            { icon: <SiVercel />, label: 'vercel' },
            { icon: <FaGithub />, label: 'git & github' },
            { icon: <FaGitlab />, label: 'gitlab' },
            { icon: <FaBitbucket />, label: 'Bitbucket' },
            { icon: <SiFigma />, label: 'figma' },
        ],
    },
];

const Skills = () => {
    return (
        <motion.section
            id="skills"
            className="pt-32 text-white px-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h2 className="text-center text-[#5ce1e6] uppercase text-4xl font-bold mb-12">
                <span className="italic text-white">Mes</span> Compétences
            </h2>

            {/* 🔹 Mobile <640px (flexible grid responsive) */}
            <div className="sm:hidden w-full max-w-[1400px] mx-auto flex flex-col gap-12">
                {categories.map((cat) => (
                    <div key={cat.title} className="flex flex-col items-center gap-6 px-4">
                        <h3 className="text-2xl font-semibold text-white">{cat.title}</h3>
                        <div className="grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-y-6 xxs:gap-x-12 xs:gap-x-20 w-full justify-items-center">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
                                >
                                    <span className="text-6xl sm:text-5xl text-[#5ce1e6]">{icon}</span>
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
                            ${idx !== 0 ? 'border-l border-gray-500/40' : ''} ${cat.title === 'Outils' ? 'md:border-l-0 lg:border-l' : ''} ${cat.title === 'Backend' ? 'sm:border-l-0 md:border-l lg:border-l' : ''}
                        `}
                    >

                        <h3 className="text-2xl font-semibold text-white">{cat.title}</h3>
                        <div className="grid grid-cols-2 gap-6 lg:gap-x-14 lg:gap-y-8 w-full">
                            {cat.items.map(({ icon, label }, i) => (
                                <div
                                    key={`${label}-${i}`}
                                    className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
                                >
                                    <span className="text-5xl lg:text-6xl text-[#5ce1e6]">{icon}</span>
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
