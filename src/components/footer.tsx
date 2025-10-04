import Link from 'next/link';
import { CineWriteIcon } from './icons';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Coluna 1: Logo & Info */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <CineWriteIcon className="h-8 w-8" />
              <span className="text-lg font-bold font-headline">
                CineWrite <span style={{ color: '#FF0000' }}>X</span> AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              An initiative of Group <span style={{ color: '#FF0000' }}>X</span> AI Brasil. Developed in Brazil.
            </p>
          </div>

          {/* Coluna 2: Navigate */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Navigate</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary">Features</Link></li>
              <li><Link href="#features" className="hover:text-primary">Tools</Link></li>
              <li><Link href="#pricing" className="hover:text-primary">Plans</Link></li>
              <li><Link href="#blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="/login" className="hover:text-primary">Login</Link></li>
              <li><Link href="/register" className="hover:text-primary">Get Started</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Partnerships */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Partnerships</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Become a Content Partner</Link></li>
              <li><Link href="#" className="hover:text-primary">Become a Print Partner</Link></li>
              <li><Link href="#education" className="hover:text-primary">For Educational Institutions</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Legal */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Printing Services</Link></li>
            </ul>
          </div>

          {/* Coluna 5: About Us */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">About Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">About</Link></li>
              <li><a href="mailto:service@groupxai.com.br" className="hover:text-primary">service@groupxai.com.br</a></li>
              <li><Link href="#" className="hover:text-primary">Support the Project</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 CineWrite <span style={{ color: '#FF0000' }}>X</span> AI – All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
