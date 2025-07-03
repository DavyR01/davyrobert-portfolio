import type { Config } from "tailwindcss";

export default {
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
            xs: "390px",        // ➜ 3 colonnes
            xs420: "420px", 
            xs858: { max: "858px" },
            "xs859-min": { min: "859px" },
         },
      },
   },
   plugins: [],
} satisfies Config;
