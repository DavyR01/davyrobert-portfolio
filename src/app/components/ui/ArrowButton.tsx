'use client';

import { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ArrowButton = () => {
  const [mounted, setMounted] = useState(false);
  const [hasReachedProjects, setHasReachedProjects] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Function to check whether the projects section has been reached
    const checkProjectsReached = () => {
      const projectsSection = document.getElementById('projets');
      
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        // If the top of the projects section is visible or exceeded
        const hasReached = rect.top <= window.innerHeight;
        setHasReachedProjects(hasReached);
      }
    };

    checkProjectsReached();

    window.addEventListener('scroll', checkProjectsReached);
    
    return () => {
      window.removeEventListener('scroll', checkProjectsReached);
    };
  }, []);

  const handleArrowClick = () => {
    const projectsSection = document.getElementById('projets');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Don't display the arrow before complete hydration
  if (!mounted) {
    return null;
  }

  return (
    <>
      {!hasReachedProjects && (
        <button
          onClick={handleArrowClick}
          className="fixed bottom-7 right-[5.5rem] z-50 animate-pulse hover:scale-110 transition-transform"
          aria-label="Aller aux projets"
        >
          <FaArrowDown className="text-orange-500 text-2xl" />
        </button>
      )}
    </>
  );
};

export default ArrowButton;
