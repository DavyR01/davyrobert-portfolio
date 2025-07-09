'use client'

import { default as MesExperiences } from "./components/MesExperiences";
import MesProjets from "./components/MesProjets";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { smoothScrollTo } from "@/utils/scroll";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get('scrollToProjets') === '1') {
      setTimeout(() => {
        const el = document.getElementById('projets');
        if (el) {
          const headerHeight = window.innerWidth < 640 ? 70 : 100;
          const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          smoothScrollTo(y, 400);
          // Clean URL to remove the parameter
          router.replace('/', { scroll: false });
        }
      }, 0); // delay before starting the scroll (adjust if needed)
    }
  }, [searchParams, router]);
  
  return (
    <main className="flex-1 px-2 sm:px-8 pb-20 gap-16 font-grotesk font-[800] dark:bg-[var(--bg-dark)] dark:text-[var(--text-color-light)] text-[var(--text-color-dark)]">
      <div className="flex flex-col items-center gap-8 w-full">
        <Navbar />
        {/* <Numbers /> */}
        <Presentation />
        {/* <HeroSection /> */}
        <Skills />
        <MesExperiences />
        <MesProjets />
        <Contact />
      </div>
    </main>
  );
}