import { cookies } from "next/headers";

export const THEME_COOKIE_KEY = "theme";

export async function getServerThemeClass(): Promise<string> {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_COOKIE_KEY)?.value;
  // Par défaut 'dark' si aucun cookie (évite flash white→dark au premier rendu)
  return theme === "light" ? "" : "dark";
}

// Dark mode defined by default in class attribute
export const THEME_INIT_SCRIPT = `
  (() => {
    try {
      // Vérifier si nous sommes côté client
      if (typeof window === 'undefined') return;
      
      // Récupérer le thème depuis les cookies ou le stockage local
      const match = document.cookie.match(/(?:^|; )${THEME_COOKIE_KEY}=([^;]+)/);
      const cookieTheme = match && match[1];
      const storageTheme = localStorage.getItem('${THEME_COOKIE_KEY}');
      
      // Déterminer le thème final
      let finalTheme = cookieTheme || storageTheme;
      
      // Si aucun thème n'est défini, utiliser les préférences système
      if (!finalTheme) {
        finalTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      // IMPORTANT: Synchroniser vers localStorage ET cookies
      localStorage.setItem('${THEME_COOKIE_KEY}', finalTheme);
      document.cookie = \`${THEME_COOKIE_KEY}=\${finalTheme}; path=/; max-age=\${60 * 60 * 24 * 365}\`; // 1 an
      
      // Appliquer le thème
      if (finalTheme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {
      // En cas d'erreur, forcer le thème sombre
      document.documentElement.classList.add('dark');
    }
  })();
`;
