'use client';

import React, {createContext, useContext, useState, useEffect, ReactNode} from 'react';
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
  const [locale, setLocale] = useState<Locale>('fr');
  const [dict, setDict] = useState(messages['fr']);

  useEffect(() => {
    setDict(messages[locale]);
  }, [locale]);

  function t(key: string) {
    return dict[key] || key;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within an I18nProvider');
  return ctx;
}
