import { cookies } from "next/headers";

export const THEME_COOKIE_KEY = "theme";

export async function getServerThemeClass(): Promise<string> {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_COOKIE_KEY)?.value;
  return theme === "dark" ? "dark" : "";
}

export const THEME_INIT_SCRIPT = `(() => {
  try {
    const match = document.cookie.match(/(?:^|; )${THEME_COOKIE_KEY}=([^;]+)/);
    const theme = (match && match[1]) || localStorage.getItem('${THEME_COOKIE_KEY}');
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch {
    document.documentElement.classList.add('dark');
  }
})();`;
