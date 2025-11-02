import type { Config } from "tailwindcss";

export default {
   darkMode: 'class',
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
         },
         screens: {
            xxs: "280px",
            xs: "390px",
            xs420: "420px",
            xs481: "481px",
            xs893: { min: "893px" }, // xs893: "893px",
         },
         fontFamily: {
            saans: ['var(--font-geist-sans)', 'sans-serif'], // sans appliqué par défaut quand non spécifié
            monoo: ['var(--font-geist-mono)', 'sans-serif'],
            opensaans: ['var(--font-opensans)', 'sans-serif'],
         },
      },
   },
   plugins: [],
} satisfies Config;
