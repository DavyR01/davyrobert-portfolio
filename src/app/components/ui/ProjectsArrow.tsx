// 'use client';

// import { useEffect, useState } from 'react';
// import { FaArrowDown } from 'react-icons/fa';

// const ProjectsArrow = () => {
//   const [mounted, setMounted] = useState(false);
//   const [hasReachedProjects, setHasReachedProjects] = useState(false);

//   useEffect(() => {
//     setMounted(true);
    
//     // Fonction pour vérifier si on a atteint la section projets
//     const checkProjectsReached = () => {
//       const projectsSection = document.getElementById('projets');
      
//       if (projectsSection) {
//         const rect = projectsSection.getBoundingClientRect();
//         // Si le haut de la section projets est visible ou dépassé
//         const hasReached = rect.top <= window.innerHeight;
//         setHasReachedProjects(hasReached);
//       }
//     };

//     // Vérifier au chargement
//     checkProjectsReached();

//     // Écouter le scroll
//     window.addEventListener('scroll', checkProjectsReached);
    
//     return () => {
//       window.removeEventListener('scroll', checkProjectsReached);
//     };
//   }, []);

//   const handleArrowClick = () => {
//     const projectsSection = document.getElementById('projets');
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Don't display the arrow before complete hydration
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* Flèche orange - visible seulement avant d'atteindre la section projets */}
//       {!hasReachedProjects && (
//         <button
//           onClick={handleArrowClick}
//           className="fixed bottom-7 right-[5.5rem] z-50 animate-pulse hover:scale-110 transition-transform"
//           aria-label="Aller aux projets"
//         >
//           <FaArrowDown className="text-orange-500 text-2xl" />
//         </button>
//       )}
//     </>
//   );
// };

// export default ProjectsArrow;
