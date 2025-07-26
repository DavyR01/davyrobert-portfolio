import Script from "next/script";
import { THEME_INIT_SCRIPT } from "@/utils/theme";
import NavbarBackProjects from "./components/NavbarProjects";
import Button from "./components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Script id="theme-init-404" strategy="beforeInteractive">
        {THEME_INIT_SCRIPT}
      </Script>
      <main className="min-h-screen flex flex-col justify-center items-center font-grotesk font-extrabold px-2 sm:px-8 pb-20 gap-8 dark:bg-[var(--bg-dark)] dark:text-[var(--primary-color)] text-[var(--primary-color)]">
          <NavbarBackProjects />
      <h1 className="text-3xl sm:text-4xl mb-4 text-center">Cette page n&apos;existe pas.<br />Merci de vous rediriger vers l&apos;accueil.</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">Désolé, la page que vous cherchez est inaccessible ou a été déplacée.</p>
        <Button href="/" variant="primary">
          Retour à l&apos;accueil
        </Button>
      </main>
    </>
  );
}