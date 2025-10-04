import Link from 'next/link';
import { CineWriteIcon } from './icons';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <CineWriteIcon className="h-6 w-6" />
          <p className="text-sm text-muted-foreground">
            © 2025 CineWrite X AI – All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:gap-4">
          <p>
            Developed by{' '}
            <a
              href="#"
              className="font-semibold text-foreground hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Group X AI Brasil
            </a>
          </p>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex gap-4">
            <Link
              href="#"
              className="hover:text-foreground"
              prefetch={false}
            >
              Contact
            </Link>
            <Link
              href="#"
              className="hover:text-foreground"
              prefetch={false}
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
