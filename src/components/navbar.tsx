'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

type Props = {
  onToggleTheme?: () => void;
  theme?: 'light' | 'dark';
};

export default function Navbar({ onToggleTheme, theme = 'light' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zvest-700 to-accent-500 flex items-center justify-center text-white font-bold">Z</div>
            <div>
              <div className="text-lg font-semibold">Zvest</div>
              <div className="text-xs text-muted-foreground">Smart savings & investments</div>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:underline">Features</a>
          <a href="#testimonials" className="text-sm font-medium hover:underline">Testimonials</a>
          <a href="#faq" className="text-sm font-medium hover:underline">FAQ</a>
          <Link href="/signup" className="btn-primary">Get started — open an account</Link>
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="p-2 rounded-full bg-zvest-50 dark:bg-zvest-700/30">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="p-2 rounded-full bg-zvest-50 dark:bg-zvest-700/30">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Open menu" className="p-2 rounded-lg bg-zvest-50 dark:bg-zvest-700/30">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 md:hidden bg-white dark:bg-zvest-900/90 border border-zvest-50 dark:border-zvest-700/40 rounded-xl p-4 shadow-sm">
          <a href="#features" className="block py-2">Features</a>
          <a href="#testimonials" className="block py-2">Testimonials</a>
          <a href="#faq" className="block py-2">FAQ</a>
          <Link href="/signup" className="block mt-3 btn-primary">Get started — open an account</Link>
        </div>
      )}
    </header>
  );
}
