import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import { stats } from '@/data/platform';

export default function PlatformStats() {
  return (
    <section aria-label="Platform overview" className="border-y border-line/70 bg-panel py-16 lg:py-20">
      <Container className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <AnimatedSection
            key={stat.label}
            delay={index * 0.08}
            className="px-4 sm:px-6 lg:border-l lg:border-line/70 lg:px-10 lg:first:border-l-0"
          >
            <p className="font-display text-4xl font-medium text-paper sm:text-5xl lg:text-6xl">{stat.value}</p>
            <p className="eyebrow mt-4">{stat.label}</p>
          </AnimatedSection>
        ))}
      </Container>
    </section>
  );
}
