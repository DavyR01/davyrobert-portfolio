'use client';

import { smoothScrollTo } from '@/utils/scroll';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Contact from '../components/Contact';
import MesExperiences from '../components/MesExperiences';
import MyProjects from '../components/MyProjects';
import Navbar from '../components/Navbar';
import Presentation from '../components/Presentation';
import Skills from '../components/Skills';

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
    <main className="flex-1 flex flex-col pb-20 gap-16 dark:bg-[var(--bg-primary)] dark:text-[var(--text-color-light)] text-[var(--text-color-dark)]">
      <div className="flex flex-col items-center gap-8 w-full">
      <Navbar />
      {/* <HeroSection /> */}
      <Presentation />
      <Skills />
      <MesExperiences />
      <MyProjects />
      <Contact />
      </div>
    </main>
  );
}
