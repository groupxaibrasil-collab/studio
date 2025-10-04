'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { CineWriteIcon } from './icons';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './language-switcher';
import { useI18n } from '@/locales/client';

export function Header() {
  const t = useI18n();

  const navLinks = [
    { href: '#features', label: t('header.tools') },
    { href: '#blog', label: t('header.blog') },
    { href: '#pricing', label: t('header.pricing') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <CineWriteIcon className="h-6 w-6" />
            <span className="font-bold sm:inline-block font-headline">
              CineWrite <span style={{ color: '#FF0000' }}>X</span> AI
            </span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="secondary" asChild>
            <Link href="/login">{t('header.login')}</Link>
          </Button>
          <Button asChild>
            <Link href="/register">{t('header.get-started')}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
