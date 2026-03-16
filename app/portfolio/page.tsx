import { PageHero } from '@/components/PageHero';
import { PortfolioCard } from '@/components/Cards';
import { Shell } from '@/components/SectionHeading';
import { portfolio } from '@/data/site';

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portfolio"
        title="A gallery experience that feels premium, editorial, and full of life."
        text="This page is built as a strong portfolio foundation for replacing placeholders with real client work, event highlights, and your best Instagram content."
        image="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=1400&q=80"
      />
      <section className="pb-20">
        <Shell>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.map((item) => <PortfolioCard key={item.title} {...item} />)}
            {portfolio.map((item, index) => <PortfolioCard key={`${item.title}-${index}`} {...item} />)}
          </div>
        </Shell>
      </section>
    </main>
  );
}
