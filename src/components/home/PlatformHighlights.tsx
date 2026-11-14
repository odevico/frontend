import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/common/AnimatedSection';
import Card, { ExploreLabel } from '@/components/common/Card';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { highlights } from '@/data/platform';

export default function PlatformHighlights() {
  return (
    <section id="highlights" className="scroll-mt-20 py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Platform Highlights" title="Speak to the World Through Video" />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1} className="h-full">
              <Card interactive className="group flex h-full flex-col">
                <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-line bg-raised">
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </span>
                <h3 className="mt-8 text-xl font-medium text-paper">{item.title}</h3>
                <p className="mt-3 text-sm leading-[1.5] text-mute">{item.description}</p>
                <Link to="/#features" className="mt-auto pt-8" aria-label={`Learn more about ${item.title}`}>
                  <ExploreLabel />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
