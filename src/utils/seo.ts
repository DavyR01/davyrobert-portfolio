import type { Metadata } from 'next';

export interface SEOContent {
  title: string;
  description: string;
  keywords: string[];
}

export const seoContent = {
  fr: {
    title: 'Davy Robert - Développeur Full Stack spécialisé en React, Next.js, Node.js et TypeScript',
    description: 'Développeur Full Stack passionné par les technologies web modernes. Spécialisé en React, Next.js, Node.js et TypeScript. Portfolio avec projets innovants et expertise technique approfondie.',
    keywords: ['développeur', 'full stack', 'react', 'nextjs', 'typescript', 'nodejs', 'développement web', 'portfolio', 'javascript', 'frontend', 'backend'],
  },
  en: {
    title: 'Davy Robert - Full Stack Developer specialized in React, Next.js, Node.js and TypeScript',
    description: 'Full Stack Developer passionate about modern web technologies. Specialized in React, Next.js, Node.js and TypeScript. Portfolio showcasing innovative projects and deep technical expertise.',
    keywords: ['developer', 'full stack', 'react', 'nextjs', 'typescript', 'nodejs', 'web development', 'portfolio', 'javascript', 'frontend', 'backend'],
  }
};

export function generateSEOMetadata(
  locale: string,
  pageTitle?: string,
  pageDescription?: string
): Metadata {
  const content = seoContent[locale as keyof typeof seoContent] || seoContent.fr;
  
  const title = pageTitle 
    ? `${pageTitle} | ${content.title.split(' - ')[0]}`
    : content.title;
  
  const description = pageDescription || content.description;

  return {
    title,
    description,
    keywords: content.keywords,
    authors: [{ name: 'Davy Robert' }],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
