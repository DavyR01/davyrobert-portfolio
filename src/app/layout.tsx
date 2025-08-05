import { ReactNode } from 'react';
import { getServerThemeClass } from '@/utils/theme';
import { THEME_INIT_SCRIPT } from '@/utils/theme';
import { geistMono, geistSans, spaceGrotesk, spaceGrotesk500, spaceGrotesk600, spaceGrotesk700 } from '../utils/fonts';

type Props = {
  children: ReactNode;
};

// This layout only applies to pages that are not matched by [locale]
// According to next-intl documentation, root layout must have html/body structure
export default async function RootLayout({ children }: Props) {
  const themeClass = await getServerThemeClass();
  
  return (
    <html className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${spaceGrotesk500.variable} ${spaceGrotesk600.variable} ${spaceGrotesk700.variable} ${themeClass}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
