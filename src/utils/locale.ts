import { cookies } from "next/headers";

export type Locale = 'fr' | 'en';

export const LOCALE_COOKIE_KEY = "locale";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get(LOCALE_COOKIE_KEY)?.value as Locale;
  return locale === "en" ? "en" : "fr"; // Défaut à 'fr'
}

// Script d'initialisation pour définir la langue côté client avant l'hydratation
export const LOCALE_INIT_SCRIPT = `
  (() => {
    try {
      // Vérifier si nous sommes côté client
      if (typeof window === 'undefined') return;
      
      // Récupérer la langue depuis les cookies ou le stockage local
      const match = document.cookie.match(/(?:^|; )${LOCALE_COOKIE_KEY}=([^;]+)/);
      const locale = (match && match[1]) || localStorage.getItem('${LOCALE_COOKIE_KEY}') || 'fr';
      
      // IMPORTANT: Synchroniser vers localStorage (comme THEME_INIT_SCRIPT)
      localStorage.setItem('${LOCALE_COOKIE_KEY}', locale);
      
      // Définir l'attribut lang sur l'élément html
      document.documentElement.setAttribute('lang', locale);
      
      // Ajouter une classe pour indiquer que la locale est prête
      document.documentElement.classList.add('locale-ready');
      
      // Retirer la classe locale-not-ready du body si elle existe
      document.body.classList.remove('locale-not-ready');
      
    } catch (e) {
      // En cas d'erreur, forcer le français
      localStorage.setItem('${LOCALE_COOKIE_KEY}', 'fr');
      document.documentElement.setAttribute('lang', 'fr');
      document.documentElement.classList.add('locale-ready');
      document.body.classList.remove('locale-not-ready');
    }
  })();
`;
