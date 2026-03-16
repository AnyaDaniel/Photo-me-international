import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SectionHeading, Shell } from '@/components/SectionHeading';
import { stats } from '@/data/site';

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A modern visual studio built to preserve atmosphere, emotion, and detail."
        text="Photo-Me International exists for clients who want more than simple coverage. We create polished photography and cinematic video that feel elegant in the moment and timeless years later."
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1400&q=80"
      />

      <section className="pb-20">
        <Shell>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[30px] border border-white/10 bg-surface p-8">
              <h2 className="text-2xl font-semibold text-white">Our Story</h2>
              <p className="mt-5 text-sm leading-8 text-white/70">
                We are a premium Nigerian photography and videography company focused on event coverage and every major visual service around it — portraits, weddings, brands, campaigns, documentaries, and social media content. Our approach blends coordination, style, and storytelling, so every client feels guided from inquiry to final delivery.
              </p>
            </div>
            <div className="rounded-[30px] border border-white/10 bg-surface p-8">
              <h2 className="text-2xl font-semibold text-white">Our Promise</h2>
              <p className="mt-5 text-sm leading-8 text-white/70">
                We care about visual quality, clean communication, punctual delivery, and a calm client experience. Whether the project is intimate or high-scale, we work to make it feel smooth, premium, and beautifully documented.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/55">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[34px] border border-brand/30 bg-brand/10 p-8 sm:p-12">
            <SectionHeading
              eyebrow="What Makes Us Different"
              title="We balance artistry and execution."
              text="The visuals matter, but so does how the team shows up, directs people, works a room, manages time, and delivers afterward. That is the Photo-Me standard."
            />
            <div className="mt-8">
              <Link href="/contact" className="inline-flex rounded-full bg-brand px-7 py-4 text-sm font-semibold text-black">Work With Us</Link>
            </div>
          </div>
        </Shell>
      </section>
    </main>
  );
}
