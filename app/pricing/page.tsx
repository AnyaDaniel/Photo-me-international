import { PageHero } from '@/components/PageHero';
import { PackageCard } from '@/components/Cards';
import { SectionHeading, Shell } from '@/components/SectionHeading';
import { packages } from '@/data/site';

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Clear packages for quick decisions, with room for custom briefs."
        text="These pricing blocks are inspired by the category-and-package clarity seen on studio websites, but elevated into a cleaner premium presentation."
        image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
      />
      <section className="pb-20">
        <Shell>
          <div className="grid gap-6 lg:grid-cols-4">
            {packages.map((item) => <PackageCard key={item.title} {...item} />)}
          </div>
          <div className="mt-16 rounded-[34px] border border-white/10 bg-surface p-8 lg:p-12">
            <SectionHeading
              eyebrow="Need Something Bespoke?"
              title="Large weddings, destination coverage, campaigns, and multi-day productions can be tailored."
              text="You can easily customize these pages with real rates, extra add-ons, drone coverage, reels, live feed support, 360 booth options, and post-production upgrades."
            />
          </div>
        </Shell>
      </section>
    </main>
  );
}
