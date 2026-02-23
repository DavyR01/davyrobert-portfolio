'use client';

import { useRichTextFormatters } from '@/utils/richTextFormatters';
import { useTranslations } from 'next-intl';

const Contact = () => {
   const t = useTranslations('contact');
   const { formatContactParagraph } = useRichTextFormatters();

   return (
      <section id="contact" className="pt-32 px-5">
         <div className="max-w-[1400px] mx-auto flex flex-col items-center">
            <h2 className="text-center text-[--primary-color] uppercase text-4xl font-bold mb-12">
               <span className="italic dark:text-white text-black">{t('title').split(' ')[0]}</span> {t('title').split(' ')[1]}
            </h2>

            <div className="max-w-[800px] text-lg leading-7 text-[var(--text-color-dark)] dark:text-[var(--text-color-main)] text-justify">
               <p className="mb-6">
                  {formatContactParagraph()}
               </p>

               <a
                  href="mailto:davyrobert90@gmail.com"
                  className="relative inline-block mt-6 text-lg font-semibold dark:text-[--primary-color] border-2 border-[--primary-color] text-[var(--text-color-dark)] px-10 py-4 overflow-hidden transition-colors duration-200 group rounded"
               >
                  <span className="relative z-10 dark:group-hover:text-[var(--text-color-dark)] group-hover:text-[var(--text-color-light)] transition-colors duration-200">davyrobert90@gmail.com</span>
                  <span className="absolute inset-0 bg-[--primary-color] w-0 group-hover:w-full transition-all duration-300" />
               </a>

               <p className="mt-2 text-sm text-white/70">
                  {t('promptResponse')}
               </p>
            </div>
         </div>
      </section>
   );
};

export default Contact;
