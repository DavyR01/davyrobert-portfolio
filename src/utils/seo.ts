import type { Metadata } from 'next';

export interface SEOContent {
   title: string;
   description: string;
   keywords: string[];
}

export const seoContent: Record<string, SEOContent> = {
   fr: {
      title: 'Davy ROBERT | Portfolio | Développeur Web Full Stack',
      description: 'Développeur Web Full Stack. Découvrez mon portfolio en ligne et accédez à mes projets réalisés et en cours de réalisation.',
      keywords: ['Développeur Full Stack', 'Concepteur Développeur d\'Applications Web', 'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Développement Web', 'Portfolio'],
   },
   en: {
      title: 'Davy ROBERT | Portfolio | Full Stack Web and Mobile Application Developer',
      description: 'Full Stack Web Developer. Explore my portfolio online and access to my projects realized and in progress.',
      keywords: ['Full Stack Developer', 'Web and Mobile Application Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Web Development', 'Portfolio'],
   }
};

export function generateSEOMetadata(
   locale: string,
   pageTitle?: string,
   pageDescription?: string,
): Metadata {
   const content = seoContent[locale as keyof typeof seoContent] || seoContent.fr;

   const title = pageTitle
      ? `${pageTitle} | ${content.title.split(' - ')[0]}`
      : content.title;

   const description = pageDescription || content.description;

   const siteUrl = 'https://www.davyrobert.com';

   return {
      title,
      description,
      keywords: content.keywords,
      authors: [{ name: 'Davy ROBERT' }],
      creator: 'Davy ROBERT',
      publisher: 'Davy ROBERT',
      applicationName: 'Davy ROBERT Portfolio',
      openGraph: {
         title,
         description,
         type: 'website',
         locale: locale === 'fr' ? 'fr_FR' : 'en_US',
         siteName: 'Davy ROBERT Portfolio',
         url: siteUrl,
      },
      twitter: {
         card: 'summary',
         title,
         description,
         creator: '@davyrobert',
      },
      metadataBase: new URL(siteUrl),
      robots: {
         index: true,
         follow: true,
         googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
         },
      },
      verification: {
      },
   };
}
