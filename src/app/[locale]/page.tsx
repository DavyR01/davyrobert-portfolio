'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Presentation from '../components/Presentation';
import MesProjets from '../components/MesProjets';
import MesExperiences from '../components/MesExperiences';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import { smoothScrollTo } from '@/utils/scroll';

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('scrollToProjets') === '1') {
      setTimeout(() => {
        const el = document.getElementById('projets');
        if (el) {
          // const headerHeight = window.innerWidth < 640 ? 70 : 100;
          const y = el.getBoundingClientRect().top + window.pageYOffset/*  - headerHeight */;
          smoothScrollTo(y, 400);
          router.replace('/', { scroll: false });
        }
      }, 0);
    }
  }, [searchParams, router]);

  return (
    <main className="flex-1 flex flex-col px-2 sm:px-8 pb-20 gap-16 font-grotesk font-[800] dark:bg-[var(--bg-dark)] dark:text-[var(--text-color-light)] text-[var(--text-color-dark)]">
      <div className="flex flex-col items-center gap-8 w-full">
      <Navbar />
      {/* <HeroSection /> */}
      <Presentation />
      <Skills />
      <MesExperiences />
      <MesProjets />
      <Contact />
      </div>
    </main>
  );
}
