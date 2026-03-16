import { ReactNode } from 'react';

export function SectionHeading({ eyebrow, title, text, align = 'left' }: { eyebrow: string; title: string; text: string; align?: 'left' | 'center'; }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-xs uppercase tracking-[0.35em] text-brand">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-white/70">{text}</p>
    </div>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}
