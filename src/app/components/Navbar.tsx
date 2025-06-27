'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const navRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth >= 768) {
            setMenuOpen(false);
         }
      };

      const handleClickOutside = (event: MouseEvent) => {
         if (
            menuOpen &&
            navRef.current &&
            !navRef.current.contains(event.target as Node)
         ) {
            setMenuOpen(false);
         }
      };

      window.addEventListener('resize', handleResize);
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         window.removeEventListener('resize', handleResize);
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [menuOpen]);

   return (
      <header className="fixed top-0 left-0 right-0 z-10 w-full max-w-[1400px] mx-auto bg-black">
         <div ref={navRef} className="flex flex-col md:flex-row md:justify-between md:items-center px-6 h-20">
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

            {/* Menu navigation */}
            <nav
               className={`${menuOpen
                  ? 'flex bg-black/90 absolute top-20 left-0 w-full pt-6 border-t border-[#5EE9B5]'
                  : 'hidden'
                  } flex-col md:flex md:static md:flex-row md:gap-20 items-center text-white text-lg transition-all duration-300`}
            >
               <ul className="flex flex-col md:flex-row gap-6 md:gap-20 items-center list-none">
                  <li>
                     <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-[#5EE9B5] transition-colors">
                        A propos
                     </a>
                  </li>
                  <li>
                     <a href="#formation" onClick={() => setMenuOpen(false)} className="hover:text-[#5EE9B5] transition-colors">
                        Formation
                     </a>
                  </li>
                  <li>
                     <a href="#projets" onClick={() => setMenuOpen(false)} className="hover:text-[#5EE9B5] transition-colors">
                        Projets
                     </a>
                  </li>
                  <li>
                     <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-[#5EE9B5] transition-colors">
                        Contact
                     </a>
                  </li>
               </ul>
                  {menuOpen && (
                     <div className="md:hidden h-[1px] w-[100%] bg-[#5EE9B5] opacity-50 mx-auto mt-6" />
                  )}
            </nav>
         </div>

         {/* Ligne sous le menu mobile */}
         {/* Ligne de séparation */}
         <div className="h-[1px] w-[97%] bg-[#5EE9B5] mx-auto" />
      </header>
   );
};

export default Navbar;
