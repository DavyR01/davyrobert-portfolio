import { ThemeProvider } from "@/context/ThemeContext";
import { routing } from '@/i18n/routing';
import { SCROLL_RESTORATION_SCRIPT } from '@/utils/scroll';
import { generateSEOMetadata } from '@/utils/seo';
import { THEME_INIT_SCRIPT, getServerThemeClass } from "@/utils/theme";
import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from "next/script";
import { geistMono, geistSans } from "../../utils/fonts";
import Footer from '../components/Footer';
import ThemeToggle from "../components/ui/ThemeToggle";

// import "@/styles/index.css";

// Métadonnées dynamiques basées sur la locale
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isMaintenanceMode = process.env.APP_MAINTENANCE === "false";
  const themeClass = await getServerThemeClass();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${themeClass}`}>
      <body className="antialiased font-saans flex flex-col min-h-screen overflow-x-hidden bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)]">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {SCROLL_RESTORATION_SCRIPT}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {isMaintenanceMode ? (
              <div className="h-screen flex justify-center items-center font-medium text-3xl text-center dark:bg-[var(--bg-primary)] dark:text-[var(--text-color-light)]">
                <div className="border border-[--primary-color] text-[--primary-color] p-16">Le site est actuellement en cours d&apos;élaboration. <br /> Veuillez patienter...............</div>
              </div>
            ) : (
              <>
                <ThemeToggle />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </>
            )}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
