import React from 'react';
import { useTranslations } from 'next-intl';


// Reusable formatting components for placeholders
export const RichTextComponents = {
  hl: (chunks: React.ReactNode) => (
    <strong className="text-black dark:text-white font-bold rich-text-shadow">{chunks}</strong>
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







// export const useRichTextFormatters = () => {
//   const contactT = useTranslations('contact');
//   const myProjectsT = useTranslations('myProjects');

//   const formatContactParagraph = () => {
//     return contactT.rich('paragraph', {
//       hl: (chunks) => <strong className="text-black dark:text-white font-bold">{chunks}</strong>,
//       br: () => <br />
//     });
//   };

//   const formatProjectsIntro = () => {
//     return myProjectsT.rich('intro', {
//       hl: (chunks) => <strong className="text-black dark:text-white font-bold">{chunks}</strong>,
//       br: () => <br />
//     });
//   };

//   return {
//     formatContactParagraph,
//     formatProjectsIntro
//   };
// };



// // Reusable formatting components for placeholders

// export const RichTextComponents = {
//   highlight: (chunks: React.ReactNode) => (
//     <strong className="text-black dark:text-white font-bold">{chunks}</strong>
//   ),
//   br: () => <br />
// };
