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
            xs858: { max: "858px" },
            "xs859-min": { min: "859px" },
         },
         fontFamily: {
            sans: ['var(--font-geist-sans)', 'sans-serif'],
            mono: ['var(--font-geist-mono)', 'sans-serif'],
            grotesk: ['var(--font-space-grotesk)', 'serif'],
            grotesk500: ['var(--font-space-grotesk-500)', 'serif'],
            grotesk600: ['var(--font-space-grotesk-600)', 'serif'],
            grotesk700: ['var(--font-space-grotesk-700)', 'serif'],
         },
      },
   },
   plugins: [],
} satisfies Config;
