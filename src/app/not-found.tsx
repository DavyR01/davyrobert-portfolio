import frMessages from "@/messages/fr.json";
import "@/styles/globals.css";
import Button from "./components/ui/Button";
import NavbarBackProjects from "./components/NavbarProjects";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import Footer from "./components/Footer";
import Script from "next/script";
import { THEME_INIT_SCRIPT, getServerThemeClass } from "@/utils/theme";
import { geistMono, geistSans, spaceGrotesk, spaceGrotesk500, spaceGrotesk600, spaceGrotesk700 } from "../utils/fonts";
import { NextIntlClientProvider } from 'next-intl';

export default async function NotFound() {
  const t = frMessages.globalNotFound;
  const themeClass = await getServerThemeClass();

  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${spaceGrotesk500.variable} ${spaceGrotesk600.variable} ${spaceGrotesk700.variable} ${themeClass}`}>
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <NextIntlClientProvider messages={frMessages}>
          <ThemeProvider>
            <ThemeToggle />
            <main className="flex-1 min-h-screen flex flex-col justify-center items-center font-grotesk font-extrabold px-4 sm:px-8 pb-20 gap-8 text-[var(--primary-color)] dark:text-[var(--primary-color)] bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
              <NavbarBackProjects />
              <h1 className="text-3xl sm:text-4xl mb-4 text-center whitespace-pre-line">
                {t.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-center">
                {t.description}
              </p>
              <Button href="/" variant="primary">
                {t.backHome}
              </Button>
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
