import Image from 'next/image';
import Link from 'next/link';

const NavbarBackProjects = () => {
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
        <div className="w-[60px] h-[80px]" />
      </div>
      <div className="h-[1px] w-[97%] bg-[--primary-color] mx-auto" />
    </header>
  );
};

export default NavbarBackProjects; 