import { PageHero } from '@/components/PageHero';
import { SectionHeading, Shell } from '@/components/SectionHeading';
import { site } from '@/data/site';

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s talk about your project."
        text="Whether it&apos;s an event, wedding, portrait session, campaign, or full production brief, this page is built to convert interest into inquiries."
        image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
      />
      <section className="pb-24">
        <Shell>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[32px] border border-white/10 bg-surface p-8">
              <SectionHeading
                eyebrow="Studio Contact"
                title="Tell us what you need."
                text="Update the contact details, connect your preferred forms or CRM, and you are ready to receive leads."
              />
              <div className="mt-8 space-y-4 text-sm text-white/70">
                <p><span className="text-white">Email:</span> {site.email}</p>
                <p><span className="text-white">Phone:</span> {site.phone}</p>
                <p><span className="text-white">Location:</span> {site.location}</p>
                <p><span className="text-white">Instagram:</span> @photome.ng</p>
              </div>
            </div>
            <form className="rounded-[32px] border border-white/10 bg-surface p-8 shadow-soft">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">Full Name</label>
                  <input placeholder="Your full name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/70">Email Address</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/70">Phone Number</label>
                  <input placeholder="+234..." />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/70">Service of Interest</label>
                  <select defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Event Coverage</option>
                    <option>Wedding Photography</option>
                    <option>Wedding Videography</option>
                    <option>Portrait Session</option>
                    <option>Commercial Shoot</option>
                    <option>360 Booth / Video Booth</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-white/70">Preferred Date</label>
                <input type="date" />
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-white/70">Project Details</label>
                <textarea rows={6} placeholder="Tell us about the event, location, coverage needed, and your expectations." />
              </div>
              <button type="submit" className="mt-6 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-black">
                Send Inquiry
              </button>
            </form>
          </div>
        </Shell>
      </section>
    </main>
  );
}
