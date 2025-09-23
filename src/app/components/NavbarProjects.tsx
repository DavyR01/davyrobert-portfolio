'use client'

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';


const NavbarBackProjects = () => {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const toggleLocale = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    router.push(pathname, { locale: newLocale });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 w-[100%] mx-auto bg-[var(--bg-light)] text-[var(--text-color-dark)] dark:bg-[var(--bg-dark)] dark:text-[var(--text-color-light)]">
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
            className="md:mt-0 block border border-[--primary-color] px-2 py-1 rounded"
          >
            {locale === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
        {/* <div className="w-[60px] h-[80px]" /> */}

        {/* Menu navigation */}
        {/* <nav
          className={`${menuOpen
            ? 'flex bg-[var(--bg-light)] dark:bg-[rgba(var(--bg-dark-menu),0.9)] absolute top-20 left-0 w-full pt-6 border-t border-[--primary-color]'
            : 'hidden'
            } flex-col md:flex md:static md:flex-row md:gap-20 items-center text-base transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-7 items-center list-none">
            <li>
              <button
                onClick={toggleLocale}
                className="mt-6 md:mt-0 hidden md:block border border-[--primary-color] px-2 py-1 rounded"
              >
                {locale === 'fr' ? 'EN' : 'FR'}
              </button>
            </li>
          </ul>
        </nav> */}

      </div>
      <div className="h-[1px] w-[97%] bg-[--primary-color] mx-auto" />

    </header>
  );
};

export default NavbarBackProjects;
