'use client';

import Link from 'next/link';
import { Volume2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t-2 border-accent py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-black text-xl">CHUPAPI MUNAYNO</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm font-bold uppercase">
            <Link href="/" className="hover:text-primary transition-colors">
              TERMS
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              PRIVACY
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              CONTACT
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              CAREERS
            </Link>
          </nav>

          {/* Sound button */}
          <button
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Sound toggle"
          >
            <Volume2 className="w-5 h-5 text-background" />
          </button>
        </div>

        {/* Bottom text */}
        <div className="mt-6 text-center text-sm opacity-70">
          <p className="flex items-center justify-center gap-2">
            🔥 GET FAMOUS! 😎😎😎 GET FAMOUS! GO VIRAL 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
