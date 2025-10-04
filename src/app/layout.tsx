import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { I18nProviderClient } from '@/locales/client';
import { getCurrentLocale } from '@/locales/index.server';

export const metadata: Metadata = {
  title: 'CineWrite AI',
  description:
    'A plataforma definitiva para escritores, roteiristas e quadrinistas. Uma plataforma inteligente criada para escritores, roteiristas e quadrinistas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getCurrentLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProviderClient locale={locale}>
            {children}
          </I18nProviderClient>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
