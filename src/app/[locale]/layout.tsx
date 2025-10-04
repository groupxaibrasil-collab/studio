import { I18nProviderClient } from '@/locales/client';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <I18nProviderClient locale={locale}>
      <FirebaseClientProvider>
        {children}
      </FirebaseClientProvider>
    </I18nProviderClient>
  );
}
