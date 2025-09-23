import type { Metadata } from 'next';

export interface SEOContent {
  title: string;
  description: string;
  keywords: string[];
}

export const seoContent = {
  fr: {
    title: 'ROBERT Davy | Portfolio | Concepteur Développeur Full Stack d\'Applications Web et Mobile',
    description: 'Concepteur Développeur Full Stack d\'Applications Web et Mobile. Spécialisé en React, Next.js, Node.js & TypeScript. Découvrez mon portfolio et mes projets.',
    keywords: ['Développeur Full Stack', 'Concepteur Développeur d\'Applications Web et Mobile', 'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Développement Web', 'Portfolio'],
  },
  en: {
    title: 'ROBERT Davy | Portfolio | Full Stack Web and Mobile Application Developer',
    description: 'Full Stack Web and Mobile Application Developer. Specialized in React, Next.js, Node.js & TypeScript. Explore my portfolio and projects.',
    keywords: ['Full Stack Developer', 'Web and Mobile Application Developer', 'React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Web Development', 'Portfolio'],
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
