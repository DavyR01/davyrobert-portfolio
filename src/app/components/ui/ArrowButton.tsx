'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ArrowButton = () => {
  const [mounted, setMounted] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Function to check if user has reached the skills section
    const checkSkillsReached = () => {
      const skillsSection = document.getElementById('skills');
      
      if (skillsSection) {
        // Get the top position of the skills section
        const skillsTop = skillsSection.offsetTop;
        // Current scroll position
        const scrollPosition = window.scrollY;
        
        // Show button when user has scrolled to the skills section
        // Add a small offset to show the button slightly before reaching the section
        const hasReachedSkills = scrollPosition >= skillsTop;
        setShowButton(hasReachedSkills);
      }
    };

    checkSkillsReached();

    window.addEventListener('scroll', checkSkillsReached);
    
    return () => {
      window.removeEventListener('scroll', checkSkillsReached);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't display the button before complete hydration
  if (!mounted) {
    return null;
  }

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[90px] right-5 z-50 w-12 h-12 dark:bg-black/50 bg-white/50 hover:bg-[--secondary-color] dark:hover:bg-[--secondary-color] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group border-2 border-[--secondary-color] transform-gpu"
          aria-label="Remonter en haut de la page"
        >
          <FaArrowUp className="text-[--secondary-color] text-2xl group-hover:text-white hover:scale-110" />
        </button>
      )}
    </>
  );
};

export default ArrowButton;
