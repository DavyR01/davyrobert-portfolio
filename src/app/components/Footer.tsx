'use client';

import { motion } from "framer-motion"; // 👈 Import
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
   return (
      <motion.footer
         id="contact"
         className="bg-black text-white py-10"
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
      >
         {/* Ligne verte */}
         <div className="h-[2px] bg-[#5ce1e6] w-[80%] mx-auto mb-6" />

         {/* Titre */}
         <h3 className="text-center text-xl font-semibold mb-4">
            ME CONTACTER :
         </h3>

         {/* Icônes */}
         <div className="flex justify-center items-center gap-6">
            <a
               href="https://github.com/davyR01"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#5ce1e6] text-3xl hover:scale-110 transition-transform"
            >
               <FaGithub />
            </a>
            <a
               href="https://www.linkedin.com/in/davy-robert"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#5ce1e6] text-3xl hover:scale-110 transition-transform"
            >
               <FaLinkedin />
            </a>
            <a
               href="mailto:contact@davyrobert.fr"
               className="text-[#5ce1e6] text-3xl hover:scale-110 transition-transform"
            >
               <MdEmail />
            </a>
         </div>
         {/* Copyright*/}
         <div className="mt-10 text-center space-y-2 mx-4">
            <p className="text-sm text-gray-500">
               Design et Développement réalisés en NextJS & TailwindCSS
            </p>
            <p className="text-sm text-[#5ce1e6]">
               © 2025 Davy Robert – Tous droits réservés
            </p>
         </div>

      </motion.footer>
   );
};

export default Footer;
