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
               className='mt-3 text-secondary text-[18px] max-w-3xl leading-[28px] text-center mx-auto'
            >
               Découvrez mes projets récents et à venir. Certains ont été déployés par mes soins et d&apos;autres ont été déployés dans un cadre professionnel.
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

const ProjectCard: React.FC<ProjectCardProps> = ({ index, name, description, tags, image, sourceWeb, sourceGithub }) => {
   //   const tiltRef = useRef(null);

   return (
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: index * 0.2, duration: 0.75, type: "spring" }}
      >
         <Tilt
            className='bg-[#1A1A1A] p-5 rounded-2xl sm:w-[360px] w-full relative overflow-hidden'
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
         >
            <div className='relative w-full h-[200px]'>
               <Image
                  src={image}
                  alt={name}
                  fill
                  className='object-cover rounded-2xl'
               />

               <div className="absolute bottom-2 right-2 z-10 flex gap-2">
                  {sourceWeb && (
                     <div
                        onClick={() => window.open(sourceWeb, '_blank')}
                        className="w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white cursor-pointer"
                     >
                        <AiFillEye className="w-6 h-6" />
                     </div>
                  )}
                  {sourceGithub && (
                     <a
                        href={sourceGithub.startsWith('http') ? sourceGithub : `https://${sourceGithub}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-black/70 flex items-center justify-center text-white cursor-pointer"
                     >
                        <AiFillGithub className="w-6 h-6" />
                     </a>
                  )}
               </div>
            </div>

            <div className='mt-5'>
               <p className='text-white font-bold text-[24px]'>{name}</p>
               <p className='mt-2 text-secondary text-[16px]'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
               {tags.map((tag, idx) => (
                  <p key={idx} className={`text-[14px] ${tag.color}`}>
                     #{tag.name}
                  </p>
               ))}
            </div>
         </Tilt>

      </motion.div>
   );
};

export default MesProjets;
