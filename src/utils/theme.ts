import { cookies } from "next/headers";

export const THEME_COOKIE_KEY = "theme";

export async function getServerThemeClass(): Promise<string> {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_COOKIE_KEY)?.value;
  return theme === "dark" ? "dark" : "";
}

// Dark mode defined by default in class attribute
export const THEME_INIT_SCRIPT = `
  (() => {
    try {
      // Vérifier si nous sommes côté client
      if (typeof window === 'undefined') return;
      
      // Récupérer le thème depuis les cookies ou le stockage local
      const match = document.cookie.match(/(?:^|; )${THEME_COOKIE_KEY}=([^;]+)/);
      const theme = (match && match[1]) || localStorage.getItem('${THEME_COOKIE_KEY}');
      
      // Si le thème est 'light', retirer la classe 'dark'
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      // Si le thème est 'dark', ajouter la classe 'dark'
      } else if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      // Sinon, vérifier les préférences de l'utilisateur pour le mode sombre
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // En cas d'erreur, forcer le thème sombre
      document.documentElement.classList.add('dark');
    }
  })();
`;
