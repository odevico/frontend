import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { useCases } from '@/data/workflow';
import { cn } from '@/utils/classNames';

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="scroll-mt-20 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Industries & Use Cases"
          title="Built for Teams Creating Content Without Borders"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <AnimatedSection
              key={useCase.title}
              delay={(index % 3) * 0.1}
              className={cn('h-full', index === 0 && 'md:col-span-2 lg:col-span-2')}
            >
              <Link
                to="/#contact"
                className="group relative flex h-full min-h-[320px] flex-col justify-end overflow-hidden rounded-panel border border-line/70 bg-card lg:min-h-[400px]"
              >
                <img
                  src={useCase.image}
                  alt={useCase.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-[1.2s] ease-out group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/60 to-canvas/10" />

                <div className="relative p-8">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 bg-canvas/40 text-paper transition-all duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                  </div>
                  <h3 className="text-2xl font-medium text-paper">{useCase.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-[1.5] text-paper/80">{useCase.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
