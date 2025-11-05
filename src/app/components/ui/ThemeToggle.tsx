
'use client';

import { useTheme } from '@/context/ThemeContext';
import { KeyboardEvent, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  // Don't display the button before complete hydratation
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Bouton toggle theme */}
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        onKeyDown={handleKey}
        className={`fixed bottom-3 right-3 z-50 w-16 h-16 flex items-center justify-center transition-colors hover:border hover:border-gray-400 rounded-full
          ${theme === 'light' ? 'hover:bg-[var(--bg-button)] text-gray-700' : 'hover:bg-[var(--bg-button)]  text-yellow-300'}`}
      >
        {theme === 'light' ? (
          <FaMoon className="text-gray-400 text-3xl" />
        ) : (
          <FaSun className="text-gray-400 text-3xl" />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;


