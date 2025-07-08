import { default as MesExperiences } from "./components/MesExperiences";
import MesProjets from "./components/MesProjets";
import Numbers from "./components/Numbers";
// import Presentation from "./components/Presentation";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Presentation from "./components/Presentation";
import Navbar from "./components/Navbar";

export default function Home() {
   return (
      <main className="flex-1 px-2 sm:px-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)] dark:bg-[var(--bg-dark)] dark:text-[var(--text-color-light)] text-[var(--text-color-dark)]">
         <div className="flex flex-col items-center gap-8 w-full">
            <Navbar />
            {/* <Numbers /> */}
            <HeroSection />
            <Presentation />
            <Skills />
            <MesExperiences />
            <MesProjets />
            <Contact />
         </div>
      </main>
   );
}