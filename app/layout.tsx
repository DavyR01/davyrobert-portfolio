import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "My Portfolio",
   description: "Davy ROBERT portfolio's 2024",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <head>
            {/* <link rel="icon" href="" type="image/x-icon" /> */}
         </head>
         <body className={inter.className}>{children}
            <div>

            </div>
         </body>
      </html>
   );
}
