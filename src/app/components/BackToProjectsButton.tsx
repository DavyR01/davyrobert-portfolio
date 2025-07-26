"use client"

import { useRouter } from 'next/navigation';
import { useTranslation } from '@/context/I18nContext';

const BackToProjectsButton = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const handleClick = () => {
    router.push('/?scrollToProjets=1');
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 text-black dark:text-white font-medium bg-[#f6f6f6] dark:bg-[#222] px-4 py-2 rounded-lg shadow hover:bg-[#ececec] dark:hover:bg-[#333] border border-[#e5e5e5] dark:border-[#444] mb-6 mx-0"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 15L6.25 10L11.25 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-semibold text-sm md:text-base">{t('backToProjects')}</span>
    </button>
  );
};
export default BackToProjectsButton;
