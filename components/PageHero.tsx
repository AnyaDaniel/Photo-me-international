import { Shell } from './SectionHeading';

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="py-16 sm:py-20">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-brand">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{text}</p>
          </div>
          <div>
            <img src={image} alt={title} className="h-[420px] w-full rounded-[32px] object-cover shadow-soft" />
          </div>
        </div>
      </Shell>
    </section>
  );
}
