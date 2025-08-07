import frMessages from "@/messages/fr.json";
import Button from "./components/ui/Button";
import NavbarBackProjects from "./components/NavbarProjects";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
import Footer from "./components/Footer";
import { NextIntlClientProvider } from 'next-intl';

export default function NotFound() {
  const t = frMessages.globalNotFound;

  return (
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
  );
}
