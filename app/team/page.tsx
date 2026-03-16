import { PageHero } from '@/components/PageHero';
import { TeamCard } from '@/components/Cards';
import { Shell } from '@/components/SectionHeading';
import { team } from '@/data/site';

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="Crew"
        title="The people behind the calm energy and polished visual delivery."
        text="A premium team page adds credibility and helps clients picture the humans behind the cameras, direction, logistics, and final edits."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
      />
      <section className="pb-20">
        <Shell>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => <TeamCard key={member.name} {...member} />)}
          </div>
        </Shell>
      </section>
    </main>
  );
}
