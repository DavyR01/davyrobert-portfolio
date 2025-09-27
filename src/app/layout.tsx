import { ThemeProvider } from '@/context/ThemeContext';
import { getServerThemeClass, THEME_INIT_SCRIPT } from '@/utils/theme';
import Script from 'next/script';
import { ReactNode } from 'react';
import { geistMono, geistSans, spaceGrotesk, spaceGrotesk500, spaceGrotesk600, spaceGrotesk700 } from '../utils/fonts';
// import ThemeToggle from './components/ui/ThemeToggle';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import { generateSEOMetadata } from '@/utils/seo';

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

// This layout only applies to pages that are not matched by [locale]
// According to next-intl documentation, root layout must have html/body structure
export default async function RootLayout({ children }: Props) {
  const themeClass = await getServerThemeClass();

  // Detect locale from cookies or use default
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || routing.defaultLocale;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${spaceGrotesk500.variable} ${spaceGrotesk600.variable} ${spaceGrotesk700.variable} ${themeClass}`}>
      <head>
        {/* Favicon principal pour Google et navigateurs */}
        <link rel="icon" href="/assets/logos/davy-logo-black-trans.png" sizes="32x32" />
        <link rel="icon" href="/assets/logos/davy-logo-black-trans.png" sizes="192x192" />
        <link rel="icon" href="/assets/logos/davy-logo-black-trans.png" sizes="512x512" />
        
        {/* Favicon SVG avec support thème intégré */}
        <link rel="icon" href="/assets/logos/davy-logo.svg" type="image/svg+xml" />
        
        {/* Pour Navigateurs : Favicons adaptatifs selon le thème */}
        <link
          rel="icon"
          href="/assets/logos/davy-logo-black-trans.png"
          media="(prefers-color-scheme: light)"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/assets/logos/davy-logo-white-trans.png"
          media="(prefers-color-scheme: dark)"
          sizes="32x32"
        />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/logos/davy-logo-black-trans.png" />
        
        {/* Manifest pour PWA */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Devicon icons stylesheet */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="antialiased font-grotesk flex flex-col min-h-screen overflow-x-hidden bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]">
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
//