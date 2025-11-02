import { useTranslations } from 'next-intl';
import React from 'react';


// Reusable formatting components for placeholders
export const RichTextComponents = {
  hl: (chunks: React.ReactNode) => (
    <strong className="keyword-highlight2">{chunks}</strong>
  ),
  br: () => <br />
};


// Generic function to format rich text with consistent placeholders
const formatRichText = (translationFunction: ReturnType<typeof useTranslations>, key: string) => {
  return translationFunction.rich(key, RichTextComponents);
};


// Hook to format rich text translations with next-intl
export const useRichTextFormatters = () => {
  const contactT = useTranslations('contact');
  const myProjectsT = useTranslations('myProjects');

  const formatContactParagraph = () => formatRichText(contactT, 'paragraph');
  const formatProjectsIntro = () => formatRichText(myProjectsT, 'intro');

  return {
    formatContactParagraph,
    formatProjectsIntro
  };
};