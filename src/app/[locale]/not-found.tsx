'use client';

import { useTranslations } from 'next-intl';
import Button from "@/app/components/ui/Button";
import { useParams } from 'next/navigation';
import NavbarBackProjects from '../components/NavbarProjects';

export default function NotFound() {
  const t = useTranslations('notFound');
  const params = useParams();
  const locale = params.locale as string;

  return (
    <main className="min-h-screen flex flex-col justify-center items-center font-grotesk font-extrabold px-4 sm:px-8 pb-20 gap-8 text-[var(--primary-color)] dark:text-[var(--primary-color)] bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
      <NavbarBackProjects />
      <h1 className="text-3xl sm:text-4xl mb-4 text-center whitespace-pre-line">
        {t('title')}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
        {t('description')}
      </p>
      <Button href={`/${locale}`} variant="primary" fullWidth={true}>
        {t('backHome')}
      </Button>
    </main>
  );
}
