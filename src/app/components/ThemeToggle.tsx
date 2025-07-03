
'use client';

import { KeyboardEvent } from 'react';
import { useTheme } from '@/context/ThemeContext';
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
      className={`fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-colors
        ${theme === 'light' ? 'bg-white text-gray-700' : 'bg-gray-900 text-yellow-300'}`}
    >
      {theme === 'light' ? (
        <FaMoon className="text-gray-400 text-xl" />
      ) : (
        <FaSun className="text-gray-400 text-xl" />
      )}
    </button>
  );









};

export default ThemeToggle;


