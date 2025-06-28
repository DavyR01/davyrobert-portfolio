import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
   return (
      <footer id="contact" className="bg-black text-white py-10">
         {/* Ligne verte */}
         <div className="h-[2px] bg-[#5ce1e6] w-[80%] mx-auto mb-6" />

         {/* Titre */}
         <h3 className="text-center text-xl font-semibold mb-4">
            Me Contacter :
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
      </footer>
   );
};

export default Footer;
