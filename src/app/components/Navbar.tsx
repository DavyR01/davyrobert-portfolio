'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/context/I18nContext';
import styles from './Navbar.module.css';
import BurgerIcon from './ui/BurgerIcon';

const sections = ['introduction', 'skills', 'experience', 'projets', 'contact'] as const;

type SectionId = typeof sections[number];

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [activeSection, setActiveSection] = useState<SectionId | null>(null);
   const navRef = useRef<HTMLDivElement>(null);
   const { t, locale, setLocale } = useTranslation();
   const toggleLocale = () => setLocale(locale === 'fr' ? 'en' : 'fr');

   useEffect(() => {
      // Intersection Observer to detect active section
      const observer = new IntersectionObserver(
         (entries) => {
            // Filtrer les sections actuellement visibles
            const visibleEntries = entries.filter((e) => e.isIntersecting);
            if (visibleEntries.length === 0) return;

            // Sélectionner celle qui possède la plus grande portion visible
            const mostVisible = visibleEntries.reduce(
               (prev, current) =>
                 prev.intersectionRatio > current.intersectionRatio ? prev : current,
               visibleEntries[0]
             );

            setActiveSection(mostVisible.target.id as SectionId);
         },
         { 
            root: null,
            // Décale la zone d’observation pour compenser la hauteur du header (80 px) et
            // réduit le seuil d’intersection pour que les sections plus petites soient détectées.
            rootMargin: '-80px 0px 0px 0px',
            threshold: 0.1,
          }
      );

      sections.forEach((id) => {
         const el = document.getElementById(id);
         if (el) observer.observe(el);
      });

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
         observer.disconnect();
         window.removeEventListener('resize', handleResize);
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [menuOpen]);

   return (
      <header className="
      fixed top-0 left-0 right-0 z-30 w-full mx-auto
      bg-[var(--bg-light)] text-[var(--text-color-dark)]
      dark:bg-[var(--bg-dark)]  dark:text-[var(--text-color-light)]
    ">
         <div ref={navRef} className="flex flex-col md:flex-row md:justify-between md:items-center px-6 h-20">
            <div className="flex justify-between items-center w-full md:w-auto h-20">
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
               <button
                  className="md:hidden flex flex-col justify-center items-center w-10 h-6 space-y-1 cursor-pointer z-50"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  <BurgerIcon />
               </button>
            </div>

            {/* Menu navigation */}
            <nav
               className={`${menuOpen
                  ? 'flex bg-[var(--bg-light)] dark:bg-[rgba(var(--bg-dark-menu),0.9)] absolute top-20 left-0 w-full pt-6 border-t border-[--primary-color]'
                  : 'hidden'
                  } flex-col md:flex md:static md:flex-row md:gap-20 items-center text-base transition-all duration-300`}
            >
               <ul className="flex flex-col md:flex-row gap-6 md:gap-9 items-center list-none">
                  <li>
                     <a href="#introduction" onClick={() => setMenuOpen(false)} className={`${styles.navLink} ${activeSection==='introduction'?'text-[--primary-color]':''}`}>
                        {t('navbar.about')}
                     </a>
                  </li>
                  <li>
                     <a href="#skills" onClick={() => setMenuOpen(false)} className={`${styles.navLink} ${activeSection==='skills'?'text-[--primary-color]':''}`}>
                        {t('navbar.skills')}
                     </a>
                  </li>
                  <li>
                     <a href="#experience" onClick={() => setMenuOpen(false)} className={`${styles.navLink} ${activeSection==='experience'?'text-[--primary-color]':''}`}>
                        {t('navbar.experience')}
                     </a>
                  </li>
                  <li>
                     <a href="#projets" onClick={() => setMenuOpen(false)} className={`${styles.navLink} ${activeSection==='projets'?'text-[--primary-color]':''}`}>
                        {t('navbar.projects')}
                     </a>
                  </li>
                  <li>
                     <a href="#contact" onClick={() => setMenuOpen(false)} className={`${styles.navLink} ${activeSection==='contact'?'text-[--primary-color]':''}`}>
                        {t('navbar.contact')}
                     </a>
                  </li>
               </ul>
               <button
                  onClick={toggleLocale}
                  className="mt-6 md:mt-0 md:ml-4 border border-[--primary-color] px-2 py-1 rounded"
               >
                  {locale === 'fr' ? 'EN' : 'FR'}
               </button>
               {menuOpen && (
                  <div className="md:hidden h-[1px] w-[100%] bg-[--primary-color] opacity-50 mx-auto mt-6" />
               )}
            </nav>
         </div>

         <div className="h-[1px] w-[97%] bg-[--primary-color] mx-auto" />
      </header>
   );
};

export default Navbar;
