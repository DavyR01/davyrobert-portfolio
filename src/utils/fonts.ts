import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
   subsets: ['latin'],
   variable: '--font-opensans',
   display: 'swap',
   weight: ['300', '400', '500', '600', '700', '800'],
   style: ['normal', 'italic'],
});

const geistSans = localFont({
   src: "../fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900",
});
const geistMono = localFont({
   src: "../fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

export { geistMono, geistSans, openSans };
