'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import Tilt from "react-parallax-tilt";
import { projects } from "../datas/datas";

const MesProjets = () => {
   return (
      <section id="projets" className="pt-32 text-white px-4">
         <h2 className="text-center text-[#5ce1e6] uppercase text-4xl font-bold mb-12">
            <span className="italic text-white">Mes</span> Projets & Réalisations
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

type ProjectCardProps = {
   index: number;
   name: string;
   description: string;
   tags: { name: string; color: string }[];
   image: string;
   sourceWeb?: string;
   sourceGithub?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
   index,
   name,
   description,
   tags,
   image,
   sourceWeb,
   sourceGithub,
}) => {
   //   const tiltRef = useRef(null);

   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
      >
         <Tilt
            className="bg-[#1A1A1A] p-5 rounded-2xl xs843:w-full sm:w-[360px] relative overflow-hidden flex flex-col xs843-min:h-full xs843-min:min-h-[480px]"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
         >
            <div className="flex-1 flex flex-col">
               {/* Image du projet */}
               <div className="w-full aspect-[16/9] mb-5 relative overflow-hidden rounded-2xl">
                  <Image
                     src={image}
                     alt={name}
                     width={640}
                     height={360}
                     className="rounded-2xl object-cover w-full h-auto"
                  />
               </div>

               {/* Titre + icônes */}
               <div className="mt-3 mb-2 flex items-center justify-between gap-4">
                  <p className="text-white font-bold text-[24px]">{name}</p>
                  <div className="flex gap-4">
                     {sourceWeb && (
                        <div
                           onClick={() => window.open(sourceWeb, "_blank")}
                           className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white cursor-pointer"
                        >
                           <AiFillEye className="w-10 h-10" />
                        </div>
                     )}
                     {sourceGithub && (
                        <a
                           href={sourceGithub.startsWith("http") ? sourceGithub : `https://${sourceGithub}`}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white cursor-pointer"
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
                        className={`inline-flex text-[14px] ${tag.color} bg-black/30 px-2 py-0.5 rounded-full font-semibold`}
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
