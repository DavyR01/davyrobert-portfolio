import { ReactNode } from 'react';
import { getServerThemeClass } from '@/utils/theme';
import { THEME_INIT_SCRIPT } from '@/utils/theme';
import { geistMono, geistSans, spaceGrotesk, spaceGrotesk500, spaceGrotesk600, spaceGrotesk700 } from '../utils/fonts';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import Script from 'next/script';
// import ThemeToggle from './components/ui/ThemeToggle';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { cookies } from 'next/headers';
import Footer from './components/Footer';

type Props = {
  children: ReactNode;
};

// This layout only applies to pages that are not matched by [locale]
// According to next-intl documentation, root layout must have html/body structure
export default async function RootLayout({ children }: Props) {
  const themeClass = await getServerThemeClass();
  
  // Detect locale from cookies or use default
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || routing.defaultLocale;
  
  // Get messages for the detected locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${spaceGrotesk500.variable} ${spaceGrotesk600.variable} ${spaceGrotesk700.variable} ${themeClass}`}>
      <head>
        {/* Favicons adaptatifs selon le thème */}
        <link
          rel="icon"
          href="/assets/logos/davy-logo-black-trans.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/assets/logos/davy-logo-white-trans.png"
          media="(prefers-color-scheme: dark)"
        />

        {/* Favicon par défaut (fallback) */}
        {/* <link rel="icon" href="/assets/logos/davy-logo-black-trans.png" />
         */}
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/assets/logos/davy-logo-black-trans.png" />
      </head>
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {/* <ThemeToggle /> */}
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
