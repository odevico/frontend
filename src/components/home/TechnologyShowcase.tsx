import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/common/AnimatedSection';
import Button from '@/components/common/Button';
import Card, { CardIcon, ExploreLabel } from '@/components/common/Card';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { technologies } from '@/data/technologies';
import { cn } from '@/utils/classNames';

export default function TechnologyShowcase() {
  return (
    <section id="technology" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Exploring the Technologies Behind Modern AI Media"
          description="Discover the AI technologies relevant to speech processing, language-based systems, and scalable model deployment."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <AnimatedSection
              key={tech.name}
              delay={(index % 3) * 0.1}
              className={cn('h-full', index < 2 ? 'lg:col-span-3' : 'lg:col-span-2')}
            >
              <Card interactive className="group flex h-full flex-col">
                <CardIcon icon={tech.icon} />
                <h3 className="mt-8 text-xl font-medium text-paper">{tech.name}</h3>
                <p className="mt-3 text-sm leading-[1.5] text-mute">{tech.description}</p>
                <Link to="/product#technical-showcase" className="mt-auto pt-8" aria-label={`Learn more about ${tech.name}`}>
                  <ExploreLabel />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 flex flex-col items-start gap-6 rounded-panel border border-line/70 bg-panel p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="max-w-2xl text-sm leading-[1.5] text-mute">
            These technologies are included for technical demonstration and product positioning only. Odevico does not
            currently integrate or implement them.
          </p>
          <Button to="/product" variant="secondary" showArrow className="shrink-0">
            Explore the Technology Showcase
          </Button>
        </AnimatedSection>
      </Container>
    </section>
  );
}
