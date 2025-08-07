'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Tilt from "react-parallax-tilt";
import { ProjectCardProps } from "@/types/types";
import { Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl";

export const ProjectCard: React.FC<ProjectCardProps> = ({
    index,
    name,
    descriptionKey,
    tags,
    image,
    sourceWeb,
    sourceGithub,
    projectSlug,
    maxTagsCount,
 }) => {
    //   const tiltRef = useRef(null);

    const t = useTranslations('myProjects');

 
    return (
       <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
       >
          <Tilt
             className="dark:bg-[--bg-dark-items1] bg-[--bg-light-items1] border dark:border-[#000] dark:hover:border-[var(--primary-color)] hover:border-[rgba(19,67,169,0.6)] rounded-2xl xs892-max:w-full sm:w-[360px] relative overflow-hidden flex flex-col"
             tiltMaxAngleX={15}
             tiltMaxAngleY={15}
             perspective={1000}
          >
             <div className="flex-1 flex flex-col">
                {/* Image du projet */}
                <div className="w-full aspect-[16/9] mb-5 relative overflow-hidden group">
                   <Link href={`/projects/${projectSlug}`} className="block w-full h-full">
                      <Image
                         src={image}
                         alt={name}
                         width={640}
                         height={360}
                         className="object-cover w-full h-auto"
                      />
                      {/* Overlay au hover */}
                      <div className="absolute inset-0 bg-black/70 hidden group-hover:flex items-center justify-center transition-opacity duration-300">
                         <span className="text-white text-2xl font-bold">{t("learnMore")}</span>
                      </div>
                   </Link>
                </div>
 
                {/* Titre + icônes */}
                <div className="mt-3 mb-2 flex items-center justify-between gap-4 px-5">
                   <p className="text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] font-bold text-[24px]">{name}</p>
                   <div className="flex gap-4">
                      {sourceWeb && (
                         <div
                            onClick={() => window.open(sourceWeb, "_blank")}
                            className="w-8 h-8 rounded-full dark:bg-[var(--bg-dark)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
                         >
                            <AiFillEye className="w-10 h-10" />
                         </div>
                      )}
                      {sourceGithub && (
                         <a
                            href={sourceGithub.startsWith("http") ? sourceGithub : `https://${sourceGithub}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-full dark:bg-[var(--bg-dark)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
                         >
                            <AiFillGithub className="w-10 h-10" />
                         </a>
                      )}
                   </div>
                </div>
 
                {/* Description */}
                <p className="text-secondary text-[16px] mt-3 line-clamp-4 min-h-[6rem] px-5">
                   {/* {t(descriptionKey)} */}
                   {t(`description.${descriptionKey}`)}
                </p>
 
 
 
                {/* Tags */}
                <div className="mt-4 px-5 mb-2">
                   <div
                      className="overflow-hidden project-tags-min-height mb-3"
                      style={
                        maxTagsCount
                          ? { ['--tags-min-height' as string]: `${Math.ceil(maxTagsCount / 4) * 1.2}rem` }
                          : undefined
                      }
                    >
                       <div className="flex flex-wrap gap-2">
                          {tags.map((tag, idx) => (
                             <span
                                key={idx}
                                className={`inline-flex text-[14px] xs893:text-[12px] ${tag.color} bg-[var(--bg-light-items2)] dark:bg-[var(--bg-dark-items2)] px-2 py-0.5 rounded-full font-semibold  `}
                             >
                                {tag.name}
                             </span>
                          ))}
                       </div>
                    </div>
                 </div>
             </div>
          </Tilt>
       </motion.div>
    );
 };