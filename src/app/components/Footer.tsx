'use client';

import { motion } from "framer-motion"; // 👈 Import
import { useTranslations } from 'next-intl';
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
   const t = useTranslations('footer');
   return (
      <motion.footer
         id="contact"
         className="bg-[var(--bg-secondary)] bg-[var(--bg-primary)] text-[var(--text-color-dark)] dark:text-[var(--text-color-light)] pb-6 "
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
      >
         {/* Ligne verte */}
         <div className="h-[2px] bg-[--primary-color] w-[80%] mx-auto mb-6" />

         {/* Titre */}
         {/* <h3 className="text-center text-xl font-semibold mb-4">
            ME CONTACTER :
         </h3> */}

         {/* Icônes */}
         <div className="flex justify-center items-center gap-6">
            <a
               href="https://www.linkedin.com/in/davy-robert"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[--primary-color] text-4xl hover:text-[--secondary-color] hover:scale-110 transition-transform"
            >
               <FaLinkedin />
            </a>
            <a
               href="https://github.com/davyR01"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[--primary-color] text-3xl hover:text-[--secondary-color]  hover:scale-110 transition-transform"
            >
               <FaGithub />
            </a>
            <a
               href="mailto:contact@davyrobert.fr"
               className="text-[--primary-color] text-4xl hover:text-[--secondary-color] hover:scale-110 transition-transform"
            >
               <MdEmail />
            </a>
         </div>
         {/* Copyright*/}
         <div className="mt-10 text-center space-y-2 mx-4">
            <p className="text-sm dark:text-gray-500 text-gray-900">
               <a 
                  href="https://github.com/DavyR01/davyrobert-portfolio" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
               >
                  {t('madeWith')}
               </a>
            </p>
            <p className="text-sm text-[--primary-color] font-semibold">
               {t('rights')}
            </p>
         </div>

      </motion.footer>
   );
};

export default Footer;
