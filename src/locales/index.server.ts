import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getCurrentLocale } = createI18nServer({
  en: () => import('./en'),
  pt: () => import('./pt'),
  es: () => import('./es'),
  it: () => import('./it'),
  fr: () => import('./fr'),
  de: () => import('./de'),
  ru: () => import('./ru'),
  ja: () => import('./ja'),
  zh: () => import('./zh'),
});
