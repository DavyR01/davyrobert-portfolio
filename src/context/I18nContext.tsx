'use client';

import React, {createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo} from 'react';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

export type Locale = 'fr' | 'en';

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const messages: Record<Locale, Record<string, string>> = { fr, en };

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "fr";
    
    // Lire d'abord les cookies (comme ThemeContext)
    const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
    const cookieLocale = match && match[1];
    
    // Puis localStorage en fallback
    const storageLocale = localStorage.getItem("locale");
    
    const savedLocale = (cookieLocale || storageLocale) as Locale;
    return savedLocale === "en" ? "en" : "fr";
  });
  const [dict, setDict] = useState(() => messages[locale] || messages['fr']);

  useEffect(() => {
    setDict(messages[locale]);
    document.documentElement.setAttribute('lang', locale);
    localStorage.setItem("locale", locale);
  }, [locale]);

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(() => {
      if (typeof document !== "undefined") {
        document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
      }
      return newLocale;
    });
  }, []);

  const t = useCallback((key: string) => {
    return dict[key] || key;
  }, [dict]);

  const ctx = useMemo(() => ({ locale, setLocale: changeLocale, t }), [locale, changeLocale, t]);

  return (
    <I18nContext.Provider value={ctx}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within an I18nProvider');
  return ctx;
}
