import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
   /* config options here */
   typescript: {
      // ignoreBuildErrors: true
   },
   experimental: {
      // optimizeCss: true, // Désactivé car nécessite le module 'critters'
   },
   images: {
      formats: ['image/webp', 'image/avif'],
   },
   // Optimisations de performance
   compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
   },
   // Améliore le prefetching et la navigation
   reactStrictMode: true,
};

export default withNextIntl(nextConfig);
