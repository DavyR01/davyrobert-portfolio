// "use client";

// import { useEffect } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { smoothScrollTo } from "@/utils/scroll";
// import Navbar from "./components/Navbar";
// import Presentation from "./components/Presentation";
// import Skills from "./components/Skills";
// import MesExperiences from "./components/MesExperiences";
// import MesProjets from "./components/MesProjets";
// import Contact from "./components/Contact";

// export default function HomeContent() {
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   useEffect(() => {
//     if (searchParams.get('scrollToProjets') === '1') {
//       setTimeout(() => {
//         const el = document.getElementById('projets');
//         if (el) {
//           const headerHeight = window.innerWidth < 640 ? 70 : 100;
//           const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
//           smoothScrollTo(y, 400);
//           router.replace('/', { scroll: false });
//         }
//       }, 0);
//     }
//   }, [searchParams, router]);

//   return (
//     <div className="flex flex-col items-center gap-8 w-full">
//       <Navbar />
//       {/* <Numbers /> */}
//       <Presentation />
//       {/* <HeroSection /> */}
//       <Skills />
//       <MesExperiences />
//       <MesProjets />
//       <Contact />
//     </div>
//   );
// }
