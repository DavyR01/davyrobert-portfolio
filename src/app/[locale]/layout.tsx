import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import { THEME_INIT_SCRIPT, getServerThemeClass } from "@/utils/theme";
import Script from "next/script";
import { geistMono, geistSans, spaceGrotesk, spaceGrotesk500, spaceGrotesk600, spaceGrotesk700 } from "../../utils/fonts";
import ThemeToggle from "../components/ui/ThemeToggle";

export const metadata = {
  title: "Davy Robert - Portfolio",
  description: "Portfolio de Davy Robert - Développeur Full Stack",
};

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
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${spaceGrotesk500.variable} ${spaceGrotesk600.variable} ${spaceGrotesk700.variable} ${themeClass}`}>
      <body className="antialiased flex flex-col min-h-screen font-grotesk overflow-x-hidden bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            {isMaintenanceMode ? (
              <div className="h-screen flex justify-center items-center font-medium text-3xl text-center dark:bg-[var(--bg-dark)] dark:text-[var(--text-color-light)]">
                <div className="border border-[--primary-color] text-[--primary-color] p-16">Le site est actuellement en cours d&apos;élaboration. <br /> Veuillez patienter...............</div>
              </div>
            ) : (
              <>
                <ThemeToggle />
                <main className="flex-1">
                  {children}
                </main>
                {/* <Footer /> */}
              </>
            )}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
