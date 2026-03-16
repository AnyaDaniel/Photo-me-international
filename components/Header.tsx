'use client';

import Link from 'next/link';
import { useState } from 'react';
import { nav, site } from '@/data/site';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-canvas/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-sm font-semibold tracking-[0.3em] text-brand">
            PM
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand">Photo-Me</p>
            <p className="text-xs text-white/60">International</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/80 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="rounded-full border border-brand px-5 py-2.5 text-sm font-medium text-brand transition hover:bg-brand hover:text-black">
            Book a Session
          </Link>
        </div>

        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 md:hidden"
        >
          <span className="text-xl">{open ? '×' : '≡'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-white/80"
              >
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${site.email}`} className="mt-4 rounded-full bg-brand px-5 py-3 text-center font-medium text-black">
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
