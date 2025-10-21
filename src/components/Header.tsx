'use client';

import Link from 'next/link';
import { Volume2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-accent">
      {/* Top cyan banner with logo */}
      <div className="bg-primary py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🔥</span>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-background">
              CHUPAPI MUNAYNO
            </h1>
          </Link>

          {/* Social icons on right */}
          <div className="flex items-center gap-3">
            <button
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Sound toggle"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Dark navigation bar */}
      <nav className="bg-card border-b-2 border-accent/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <ul className="flex items-center justify-center gap-6 md:gap-8 text-sm md:text-base font-bold uppercase">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors"
              >
                MEMES
              </Link>
            </li>
            <li>
              <Link
                href="/generator"
                className="hover:text-primary transition-colors"
              >
                VIDEOS
              </Link>
            </li>
            <li>
              <Link
                href="/generator"
                className="hover:text-primary transition-colors"
              >
                SOUND CLIPS
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-accent transition-colors"
              >
                SUBMIT
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-primary transition-colors"
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
