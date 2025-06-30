// import Link from "next/link";
import { default as MesExperiences } from "./components/MesExperiences";
import MesProjets from "./components/MesProjets";
import Numbers from "./components/Numbers";
import Presentation from "./components/Presentation";

export default function Home() {
   return (
      <main className="flex-1 px-2 sm:px-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
         <div className="flex flex-col items-center gap-8 text-white w-full">
            <Numbers />
            <Presentation />
            <MesExperiences />
            <MesProjets />
         </div>
      </main>
   );
}