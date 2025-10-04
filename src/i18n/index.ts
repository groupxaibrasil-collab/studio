import { createI18n } from 'next-international';

export const {
  useI18n,
  useScopedI18n,
  I18nProvider,
  useChangeLocale,
  useCurrentLocale,
  getLocaleProps,
  getCurrentLocale,
} = createI18n({
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
