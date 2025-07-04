'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Tilt from "react-parallax-tilt";
import { projects } from "@/datas/datas";
import { ProjectCardProps } from "@/types/types";
import Link from "next/link";

const MesProjets = () => {
   return (
      <section id="projets" className="pt-32 text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] px-4">
         <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
            <span className="italic text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">Mes</span> Projets & Réalisations
         </h2>

         <div className='w-full flex'>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className='mt-3 text-secondary text-[18px] max-w-4xl leading-[28px] text-center mx-auto'
            >
               Découvrez mes projets réalisés, récents et à venir. Certains ont été déployés par mes soins et d&apos;autres l&rsquo;ont été dans un cadre professionnel en collaboration avec d&apos;autres développeurs. <br /> Par soucis de confidentialité, je ne pourrais pas fournir le code source des projets réalisés en entreprise. <br />
               Toutefois, j&apos;ai réalisé quelques vidéos de démonstration afin d&apos;illustrer les fonctionnalités et l&apos;ergonomie de ces projets.
            </motion.p>
         </div>

         <div className="mt-20 flex justify-center">
            <div className="flex flex-wrap justify-center gap-7 max-w-[1200px]">
               {projects.map((project, index) => (
                  <ProjectCard key={`project-${index}`} index={index} {...project} />
               ))}
            </div>
         </div>
      </section>
   );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
   index,
   name,
   description,
   tags,
   image,
   sourceWeb,
   sourceGithub,
   readmore,
}) => {
   //   const tiltRef = useRef(null);

   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
      >
         <Tilt
            className="dark:bg-[--bg-dark-items1] bg-[--bg-light-items1] p-5 rounded-2xl xs858:w-full sm:w-[360px] relative overflow-hidden flex flex-col xs859-min:h-full xs859-min:min-h-[480px]"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
         >
            <div className="flex-1 flex flex-col">
               {/* Image du projet */}
               <div className="w-full aspect-[16/9] mb-5 relative overflow-hidden rounded-2xl">
                  <Link href={readmore}>
                     <Image
                        src={image}
                        alt={name}
                        width={640}
                        height={360}
                        className="rounded-2xl object-cover w-full h-auto"
                     />
                  </Link>
               </div>

               {/* Titre + icônes */}
               <div className="mt-3 mb-2 flex items-center justify-between gap-4">
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
               <p className="text-secondary text-[16px] mt-3 line-clamp-4 min-h-[6rem]">
                  {description}
               </p>



               {/* Tags */}
               <div className="mt-4 flex flex-wrap gap-2 mb-2">
                  {tags.map((tag, idx) => (
                     <p
                        key={idx}
                        className={`inline-flex text-[14px] ${tag.color} bg-[var(--bg-light-items2)] dark:bg-[var(--bg-dark-items1)] px-2 py-0.5 rounded-full font-semibold`}
                     >
                        {tag.name}
                     </p>
                  ))}
               </div>
            </div>
         </Tilt>
      </motion.div>
   );
};

export default MesProjets;
