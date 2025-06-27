'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);

   // Fermer le menu quand on repasse en écran large
   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            setMenuOpen(false);
         }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   return (
      <header className="fixed top-0 left-0 right-0 z-10 w-full max-w-[1400px] mx-auto bg-black">
         <div className="flex flex-col md:flex-row md:justify-between md:items-center px-6 h-20">
            <div className="flex justify-between items-center w-full md:w-auto h-20">
               <Link href="/" className="text-white text-xl font-bold italic">
                  <span className="font-normal">Davy </span>
                  <span className="text-[#5EE9B5]">Robert</span>
               </Link>

               {/* Menu burger mobile */}
               <div
                  className="md:hidden flex flex-col justify-center items-center w-8 h-6 space-y-1 cursor-pointer z-50"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  <span className="block w-6 h-0.5 bg-white" />
                  <span className="block w-6 h-0.5 bg-white" />
                  <span className="block w-6 h-0.5 bg-white" />
               </div>
            </div>

            {/* Menu de navigation */}
            <nav
               className={`${menuOpen ? 'flex bg-black/90 absolute top-20 left-0 w-full py-6' : 'hidden'
                  } flex-col md:flex md:static md:flex-row md:gap-20 items-center text-white text-lg transition-all duration-300`}
            >
               <ul className="flex flex-col md:flex-row gap-6 md:gap-20 items-center list-none">
                  <li>
                     <a
                        href="#home"
                        className="hover:text-[#5EE9B5] transition-colors"
                        onClick={() => setMenuOpen(false)}
                     >
                        A propos
                     </a>
                  </li>
                  <li>
                     <a
                        href="#formation"
                        className="hover:text-[#5EE9B5] transition-colors"
                        onClick={() => setMenuOpen(false)}
                     >
                        Formation
                     </a>
                  </li>
                  <li>
                     <a
                        href="#projets"
                        className="hover:text-[#5EE9B5] transition-colors"
                        onClick={() => setMenuOpen(false)}
                     >
                        Projets
                     </a>
                  </li>
                  <li>
                     <a
                        href="#contact"
                        className="hover:text-[#5EE9B5] transition-colors"
                        onClick={() => setMenuOpen(false)}
                     >
                        Contact
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Navbar;
