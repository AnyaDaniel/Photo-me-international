import Link from 'next/link';
import { nav, site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-brand">Photo-Me International</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
            Premium photography and videography for weddings, events, portraits, brands, and unforgettable experiences.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Pages</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <p>{site.location}</p>
            <p>{site.phone}</p>
            <p>{site.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-white">Social</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            <a href={site.instagram} target="_blank" className="transition hover:text-white" rel="noreferrer">
              Instagram / @photome.ng
            </a>
            <Link href="/contact" className="transition hover:text-white">
              Let&apos;s Talk About Your Project
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45">
        © 2026 Photo-Me International. Built with Love Senpai Anya.
      </div>
    </footer>
  );
}
