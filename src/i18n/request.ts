import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

// Import messages statically
import frMessages from '../messages/fr.json';
import enMessages from '../messages/en.json';

const messages = {
  fr: frMessages,
  en: enMessages
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});
