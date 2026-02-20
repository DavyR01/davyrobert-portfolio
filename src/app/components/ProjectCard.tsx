'use client'

import { Link } from '@/i18n/navigation';
import { ProjectCardProps } from "@/types/index";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Tilt from "react-parallax-tilt";

export const ProjectCard: React.FC<ProjectCardProps> = ({
   index,
   name,
   descriptionKey,
   tags,
   image,
   sourceWeb,
   sourceGithub,
   learnMore,
   projectSlug,
}) => {

   const t = useTranslations('myProjects');

   const MAX_TAGS = 5;
   const visibleTags = tags.slice(0, MAX_TAGS);
   const hiddenCount = Math.max(0, tags.length - MAX_TAGS);

   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
      >
         <Tilt
            className="bg-[--bg-items-card] hover:shadow-[0_0_0_2px_var(--primary-color)] hover:bg-[var(--primary-color-hover)] rounded-md w-full xs893:w-[360px] relative overflow-hidden flex flex-col transition-all duration-300 group"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
         >
            <div className="flex-1 flex flex-col">
               {/* Image du projet */}
               <div className="w-full aspect-[16/9] mb-5 relative overflow-hidden group">
                  <Link
                     href={`/projects/${projectSlug}`}
                     prefetch={true}
                     className="block w-full h-full"
                  >
                     <Image
                        src={image}
                        alt={name}
                        width={640}
                        height={360}
                        className="object-cover w-full h-auto"
                        priority={index < 3}
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
                     {learnMore && (
                        <div
                           onClick={() => window.open(learnMore, "_blank")}
                           className="w-8 h-8 rounded-full dark:bg-[var(--bg-primary)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
                        >
                           <AiFillEye className="w-10 h-10 hover:text-[--primary-color]" />
                        </div>
                     )}
                     {sourceWeb && (
                        <div
                           onClick={() => window.open(sourceWeb, "_blank")}
                           className="w-8 h-8 rounded-full dark:bg-[var(--bg-primary)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
                        >
                           <AiFillEye className="w-10 h-10 hover:text-[--primary-color]" />
                        </div>
                     )}
                     {sourceGithub && (
                        <a
                           href={sourceGithub.startsWith("http") ? sourceGithub : `https://${sourceGithub}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-8 h-8 rounded-full dark:bg-[var(--bg-primary)]/70 flex items-center justify-center text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] cursor-pointer"
                        >
                           <AiFillGithub className="w-10 h-10 hover:text-[--primary-color]" />
                        </a>
                     )}
                  </div>
               </div>

               {/* Description */}
               <p className="text-secondary text-[16px] mt-3 line-clamp-4 min-h-[6rem] px-5 text-[var(--text-color-main)]">
                  {/* {t(descriptionKey)} */}
                  {t(`description.${descriptionKey}`)}
               </p>

               {/* Tags */}
               <div className="mt-6 px-5 pb-6">
                  <div className="flex flex-wrap gap-2 items-center">
                     {visibleTags.map((tag, idx) => (
                        <span
                           key={idx}
                           className={`inline-flex text-[14px] xs893:text-[12px] ${tag.color} bg-[var(--bg-stack-card)] px-2 py-0.5 rounded-full uppercase tag-shadow hover:text-[var(--secondary-color)] dark:hover:text-[var(--secondary-color)] hover:bg-transparent cursor-default transition-all duration-300`}
                        >
                           {tag.name}
                        </span>
                     ))}

                     {hiddenCount > 0 ? (
                        <span
                           className="inline-flex text-[12px] px-2 py-0.5 rounded-full border border-[var(--border-secondary)] text-[var(--text-color-main)]"
                           title={tags.slice(MAX_TAGS).map(t => t.name).join(', ')}
                        >
                           +{hiddenCount}
                        </span>
                     ) : null}
                  </div>
               </div>
            </div>
         </Tilt>
      </motion.div>
   );
};