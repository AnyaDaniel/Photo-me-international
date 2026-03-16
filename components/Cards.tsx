import Link from 'next/link';

export function ServiceCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-soft">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/65">{description}</p>
      </div>
    </article>
  );
}

export function PackageCard({ title, price, items }: { title: string; price: string; items: string[] }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-surface p-7 shadow-soft">
      <p className="text-sm uppercase tracking-[0.28em] text-brand">Package</p>
      <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-3xl font-semibold text-ink">{price}</p>
      <ul className="mt-6 space-y-3 text-sm text-white/70">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 text-brand">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link href="/contact" className="mt-8 inline-flex rounded-full border border-brand px-5 py-3 text-sm font-medium text-brand transition hover:bg-brand hover:text-black">
        Select Package
      </Link>
    </article>
  );
}

export function TeamCard({ name, role, bio, image }: { name: string; role: string; bio: string; image: string }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-soft">
      <div className="aspect-[4/4.5] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.28em] text-brand">{role}</p>
        <p className="mt-4 text-sm leading-7 text-white/65">{bio}</p>
      </div>
    </article>
  );
}

export function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-surface p-7 shadow-soft">
      <p className="text-base leading-8 text-white/80">“{text}”</p>
      <p className="mt-5 text-sm uppercase tracking-[0.28em] text-brand">{name}</p>
    </article>
  );
}

export function PortfolioCard({ title, category, image }: { title: string; category: string; image: string }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-surface shadow-soft">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-brand">{category}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
      </div>
    </article>
  );
}
