'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

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
      <header className="
      fixed top-0 left-0 right-0 z-30 w-full max-w-[1400px] mx-auto
      bg-white text-black
      dark:bg-black  dark:text-white
    ">
         <div ref={navRef} className="flex flex-col md:flex-row md:justify-between md:items-center px-6 h-20">
            <div className="flex justify-between items-center w-full md:w-auto h-20">
               {/* <Link href="/" className="text-white text-xl font-bold italic">
                  <span className="font-normal">Davy </span>
                  <span className="text-[#5ce1e6]">Robert</span>
               </Link> */}

               <Link href="/" className="block w-[60px] h-[80px] relative select-none">
                  <Image
                     src="/assets/logos/davy-logo-white-trans.png"
                     alt="Logo Davy Robert"
                     fill
                     className="object-contain hidden dark:block"
                     priority
                  />
                  <Image
                     src="/assets/logos/davy-logo-black-trans.png"
                     alt="Logo sombre"
                     fill
                     className="object-contain dark:hidden"
                     priority
                  />
               </Link>

               {/* Menu burger mobile */}
               <div
                  className="md:hidden flex flex-col justify-center items-center w-10 h-6 space-y-1 cursor-pointer z-50"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  <Image
                     src="/assets/icons/burger-menu.svg"
                     alt="Ouvrir le menu"
                     width={48}
                     height={48}
                     className="object-contain"
                     priority
                  />
               </div>
            </div>

            {/* Menu navigation */}
            <nav
               className={`${menuOpen
                  ? 'flex bg-white dark:bg-black/90 absolute top-20 left-0 w-full pt-6 border-t border-[#5ce1e6]'
                  : 'hidden'
                  } flex-col md:flex md:static md:flex-row md:gap-20 items-center text-base transition-all duration-300`}
            >
               <ul className="flex flex-col md:flex-row gap-6 md:gap-9 items-center list-none">
                  <li>
                     <a href="#introduction" onClick={() => setMenuOpen(false)} className={styles.navLink}>
                        A PROPOS
                     </a>
                  </li>
                  <li>
                     <a href="#skills" onClick={() => setMenuOpen(false)} className={styles.navLink}>
                        COMPÉTENCES
                     </a>
                  </li>
                  <li>
                     <a href="#experience" onClick={() => setMenuOpen(false)} className={styles.navLink}>
                        EXPÉRIENCES
                     </a>
                  </li>
                  <li>
                     <a href="#projets" onClick={() => setMenuOpen(false)} className={styles.navLink}>
                        PROJETS
                     </a>
                  </li>
                  <li>
                     <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.navLink}>
                        CONTACT
                     </a>
                  </li>
               </ul>
               {menuOpen && (
                  <div className="md:hidden h-[1px] w-[100%] bg-[#5ce1e6] opacity-50 mx-auto mt-6" />
               )}
            </nav>
         </div>

         {/* Ligne sous le menu mobile */}
         {/* Ligne de séparation */}
         <div className="h-[1px] w-[97%] bg-[#5ce1e6] mx-auto" />
      </header>
   );
};

export default Navbar;
