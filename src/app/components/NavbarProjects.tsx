'use client'

import { Link, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';


const NavbarBackProjects = () => {
   const pathname = usePathname();
   const locale = useLocale();

   const toggleLocale = () => {
      const newLocale = locale === 'fr' ? 'en' : 'fr';
      // Force a full page reload to avoid hydration mismatch 
      const newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
      window.location.href = newPath;
   };

   return (
      <header className="fixed top-0 left-0 right-0 z-30 w-[100%] mx-auto bg-[var(--bg-primary)] text-[var(--text-color-dark)] dark:bg-[var(--bg-secondary)] dark:text-[var(--text-color-light)]">
         <div className="flex flex-row justify-between items-center px-6 h-20 relative">
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
            <div className="flex items-center">
               <button
                  onClick={toggleLocale}
                  className="md:mt-0 block border border-[--primary-color] hover:bg-[--primary-color] hover:text-[--text-color-dl-invert] px-2 py-1 rounded"
               >
                  {locale === 'fr' ? 'EN' : 'FR'}
               </button>
            </div>
         </div>
         <div className="h-[1px] w-[97%] bg-[--primary-color] mx-auto" />

      </header>
   );
};

export default NavbarBackProjects;
