
'use client';

import { useTheme } from '@/context/ThemeContext';
import { KeyboardEvent } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();



  const handleKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      onKeyDown={handleKey}
      className={`fixed bottom-3 right-3 z-50 w-16 h-16 flex items-center justify-center transition-colors hover:border hover:border-gray-400 rounded-full
        ${theme === 'light' ? 'hover:bg-[var(--bg-button-light)] text-gray-700' : 'hover:bg-[var(--bg-button-dark)]  text-yellow-300'}`}
    >
      {theme === 'light' ? (
        <FaMoon className="text-gray-400 text-3xl" />
      ) : (
        <FaSun className="text-gray-400 text-3xl" />
      )}
    </button>
  );
};

export default ThemeToggle;


