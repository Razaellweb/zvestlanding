import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zvest-50 dark:border-zvest-700/40 py-10">
      <div className="container mx-auto px-6 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zvest-700 to-accent-500 flex items-center justify-center text-white font-bold">Z</div>
            <div>
              <div className="font-semibold">Zvest</div>
              <div className="text-sm text-muted-foreground">Helping you save & grow</div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Zvest. All rights reserved.</div>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm">Privacy</Link>
            <Link href="#" className="text-sm">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
