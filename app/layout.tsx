import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `${site.name} | Premium Photography & Videography`,
  description: 'A full multi-page website for Photo-Me International, built as a premium Next.js project.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
