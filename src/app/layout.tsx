'use client';

import React, { useEffect, useState } from 'react';
import './globals.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
  title: 'Zvest — Smart, secure digital savings',
  description: 'Smart, secure digital savings — invest in your future with ease',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar onToggleTheme={toggleTheme} theme={theme} />
        <main className="container mx-auto px-6 md:px-10 lg:px-20 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
