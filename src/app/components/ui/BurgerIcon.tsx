import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const BurgerIcon = () => {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === 'dark' ? '/assets/icons/burger-menu.svg' : '/assets/icons/burger-menu-blue.svg'}
      alt="Ouvrir le menu"
      width={48}
      height={48}
      className="object-contain"
      priority
    />
  );
};

export default BurgerIcon; 