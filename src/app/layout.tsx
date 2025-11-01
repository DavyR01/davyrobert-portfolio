import { ThemeProvider } from '@/context/ThemeContext';
import { getServerThemeClass, THEME_INIT_SCRIPT } from '@/utils/theme';
import Script from 'next/script';
import { ReactNode } from 'react';
import { geistMono, geistSans, spaceGrotesk } from '../utils/fonts';
// import ThemeToggle from './components/ui/ThemeToggle';
import { Favicons } from '@/components/seo/Favicons';
import { routing } from '@/i18n/routing';
import { generateSEOMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { cookies } from 'next/headers';

import '@/styles';

type Props = {
  children: ReactNode;
};

// Métadonnées dynamiques pour le layout global
export async function generateMetadata(): Promise<Metadata> {
  // Detect locale from cookies or use default
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || routing.defaultLocale;
  return generateSEOMetadata(locale);
}

// According to next-intl documentation, root layout must have html/body structure
export default async function RootLayout({ children }: Props) {
  const cookieStore = await cookies();
  const themeClass = await getServerThemeClass();
  
  // Detect locale from cookies or use default
  const locale = cookieStore.get('NEXT_LOCALE')?.value || routing.defaultLocale;
  
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${themeClass}`}>
      <head>
        <Favicons />
      </head>
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {/* <ThemeToggle /> */}
            <div className="flex-1">
              {children}
            </div>
            {/* <Footer /> */}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}