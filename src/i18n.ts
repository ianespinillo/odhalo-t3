import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ["es", "en", "fr"];

type Messages = Record<string, string>;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();
  return {
    messages: (await import(`./locales/${locale}.json`) as { default: Messages }).default
  };
});
