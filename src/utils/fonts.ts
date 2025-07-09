import localFont from "next/font/local";

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
 const spaceGrotesk = localFont({
    src: "../fonts/SpaceGroteskRegular.woff2",
    variable: "--font-space-grotesk",
    weight: "100 900",
 });
 const spaceGrotesk500 = localFont({
    src: "../fonts/SpaceGrotesk500.woff2",
    variable: "--font-space-grotesk-500",
    weight: "100 900",
 });
 const spaceGrotesk600 = localFont({
    src: "../fonts/SpaceGrotesk600.woff2",
    variable: "--font-space-grotesk-600",
    weight: "100 900",
 });
 const spaceGrotesk700 = localFont({
    src: "../fonts/SpaceGrotesk700.woff2",
    variable: "--font-space-grotesk-700",
    weight: "100 900",
 });

 export {geistSans, geistMono, spaceGrotesk, spaceGrotesk700, spaceGrotesk500, spaceGrotesk600};