import Link from 'next/link';
import { PackageCard, PortfolioCard, ServiceCard, TeamCard, TestimonialCard } from '@/components/Cards';
import { SectionHeading, Shell } from '@/components/SectionHeading';
import { packages, portfolio, services, site, stats, team, testimonials } from '@/data/site';

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <Shell>
          <div className="grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand">We create magic</p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Premium images. Cinematic films. Beautifully covered moments.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                {site.name} delivers modern photography and videography for weddings, events, portraits, brands, and everything in between. We blend elegance, energy, and detail so your memories never feel ordinary.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="rounded-full bg-brand px-7 py-4 text-center text-sm font-semibold text-black transition hover:opacity-90">
                  Book Your Session
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white transition hover:border-brand hover:text-brand">
                  Explore Portfolio
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-white/55">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full border border-brand/30 bg-brand/10 lg:block" />
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" alt="Wedding couple" className="mt-14 h-[420px] w-full rounded-[30px] object-cover shadow-soft" />
                <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80" alt="Portrait session" className="h-[420px] w-full rounded-[30px] object-cover shadow-soft" />
              </div>
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <SectionHeading
            eyebrow="Services"
            title="Everything under photography and videography, handled with polish."
            text="Inspired by strong service-led studio websites, this experience is built to help clients understand what you do fast, trust your quality, and inquire with confidence."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((item) => <ServiceCard key={item.title} {...item} />)}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <div className="grid gap-10 rounded-[34px] border border-white/10 bg-surface p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-brand">Why clients choose us</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">We don&apos;t just show up with cameras. We shape the experience.</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                'Clear pre-production planning and responsive communication.',
                'A polished on-site team that blends professionalism with warmth.',
                'Fast previews and clean final delivery for modern clients.',
                'A premium visual style inspired by timeless editorial storytelling.'
              ].map((point) => (
                <div key={point} className="rounded-[26px] border border-white/10 bg-black/30 p-6 text-sm leading-7 text-white/70">{point}</div>
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <SectionHeading
            eyebrow="Selected Work"
            title="A portfolio designed to feel rich, intentional, and alive."
            text="Use these sections as polished placeholders now, then replace images with your actual work from events, weddings, portrait sessions, and Instagram highlights."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((item) => <PortfolioCard key={item.title} {...item} />)}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible packages for portraits, events, weddings, and brand visuals."
            text="Borrowing the clarity of strong studio pricing layouts, these cards make decision-making easy while keeping room for tailored quotes."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {packages.map((item) => <PackageCard key={item.title} {...item} />)}
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Crew"
                title="A creative team built for calm execution and standout delivery."
                text="From directors and photographers to editors and coordinators, your crew page signals that the brand is structured, skilled, and dependable."
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {team.map((member) => <TeamCard key={member.name} {...member} />)}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Instagram Showcase"
                title="Keep the brand feeling current with your latest social moments."
                text="This section is inspired by the Instagram-focused presentation style used by modern studios. It points visitors to your latest energy, styling, and finished work on @photome.ng."
              />
              <a href={site.instagram} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-brand px-7 py-4 text-sm font-semibold text-black">
                Visit @photome.ng
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80',
                'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
                'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80',
                'https://images.unsplash.com/photo-1513279922550-250c2129b13a?auto=format&fit=crop&w=900&q=80',
                'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
                'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80'
              ].map((image, index) => (
                <img key={image} src={image} alt={`Instagram style preview ${index + 1}`} className="aspect-square w-full rounded-[24px] object-cover" />
              ))}
            </div>
          </div>
        </Shell>
      </section>

      <section className="py-20">
        <Shell>
          <SectionHeading
            eyebrow="Testimonials"
            title="Words that help sell the experience before the first call."
            text="Premium social proof builds trust. These writeups can later be swapped with real client quotes and names."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => <TestimonialCard key={item.name} {...item} />)}
          </div>
        </Shell>
      </section>

      <section className="pb-24 pt-8">
        <Shell>
          <div className="rounded-[36px] border border-brand/30 bg-brand/10 p-8 text-center sm:p-12">
            <p className="text-xs uppercase tracking-[0.35em] text-brand">Let&apos;s Talk About Your Project</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl">Tell us what you&apos;re planning and we&apos;ll help shape a smooth, premium coverage experience.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70">Weddings, private events, corporate functions, portraits, campaigns, launches, and visual storytelling for brands — we are ready when you are.</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-brand px-7 py-4 text-sm font-semibold text-black">Start Your Booking</Link>
              <a href={`mailto:${site.email}`} className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white">Email the Studio</a>
            </div>
          </div>
        </Shell>
      </section>
    </main>
  );
}
