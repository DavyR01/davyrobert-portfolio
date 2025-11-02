'use client';

import { useTranslations } from 'next-intl';
import Footer from './components/Footer';
import NavbarBackProjects from "./components/NavbarProjects";
import Button from "./components/ui/Button";
import ThemeToggle from './components/ui/ThemeToggle';

export default function NotFound() {
  const t = useTranslations('globalNotFound');

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center font-bold px-4 sm:px-8 pb-20 gap-8 text-[var(--primary-color)] dark:text-[var(--primary-color)] bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]">
        <NavbarBackProjects />
        <h1 className="text-3xl sm:text-4xl mb-4 text-center whitespace-pre-line">
          {t('title')}
        </h1>
        <p className="text-lg text-[var(--text-color-dark)] dark:text-[var(--text-color-main)] mb-8 text-center">
          {t('description')}
        </p>
        <Button href="/" variant="primary">
          {t('backHome')}
        </Button>
      </div>
      <Footer />
      <ThemeToggle />
    </>
  );
}
