import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ServiceCard } from '@/components/Cards';
import { SectionHeading, Shell } from '@/components/SectionHeading';
import { services } from '@/data/site';

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Everything you need under photography and videography."
        text="From event coverage to portraits, weddings, product campaigns, and reels, Photo-Me International is structured to deliver a complete visual experience."
        image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80"
      />
      <section className="pb-20">
        <Shell>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => <ServiceCard key={item.title} {...item} />)}
          </div>

          <div className="mt-16 rounded-[34px] border border-white/10 bg-surface p-8 lg:p-12">
            <SectionHeading
              eyebrow="How We Work"
              title="A refined process from brief to final delivery."
              text="We discuss the project, align on creative direction, prepare the team and production needs, cover the session or event with precision, then deliver polished visuals ready for print, sharing, or campaign use."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {['Discover', 'Plan', 'Capture', 'Deliver'].map((step, index) => (
                <div key={step} className="rounded-[24px] border border-white/10 bg-black/25 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-brand">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{step}</h3>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex rounded-full bg-brand px-7 py-4 text-sm font-semibold text-black">Discuss Your Project</Link>
            </div>
          </div>
        </Shell>
      </section>
    </main>
  );
}
