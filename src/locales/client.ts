'use client';
import { createI18nClient } from 'next-international/client';

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
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
