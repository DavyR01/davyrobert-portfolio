const BurgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="650"
    height="450"
    viewBox="0 0 650 450"
    className="w-10 h-10"
  >
    <rect x="0" y="0" width="650" height="70" rx="15" fill="var(--primary-color)" />
    <rect x="0" y="190" width="650" height="70" rx="5" fill="var(--primary-color)" />
    <rect x="0" y="380" width="650" height="70" rx="5" fill="var(--primary-color)" />
  </svg>
);

export default BurgerIcon;


// <Image
//   src={theme === 'dark' ? '/assets/icons/burger-menu.svg' : '/assets/icons/burger-menu-blue.svg'}
//   alt="Ouvrir le menu"
//   width={48}
//   height={48}
//   className="object-contain"
//   priority
