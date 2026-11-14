import { ArrowRight, Eye } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Card, { CardIcon } from '@/components/common/Card';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { platformModules } from '@/data/platform';

export default function ProductOverview() {
  const [first, second, third, fourth, dashboard] = platformModules;
  const flow = [first, second, third, fourth];

  return (
    <section id="overview" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Platform Overview"
          title="Five Modules, One Connected Workflow"
          description="Each module records a part of the localization process. Together they keep every project, language version, and approval in step."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {flow.map((module, index) => (
            <AnimatedSection key={module.title} delay={index * 0.1} className="relative h-full">
              <Card interactive className="group flex h-full flex-col lg:mx-2">
                <div className="flex items-center justify-between">
                  <CardIcon icon={module.icon} />
                  <span className="font-display text-sm text-mute">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-medium text-paper">{module.title}</h3>
                <p className="mt-3 text-sm leading-[1.5] text-mute">{module.description}</p>
                <ul className="mt-6 space-y-2 border-t border-line/70 pt-6 text-sm text-paper/85">
                  {module.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Card>
              {index < flow.length - 1 && (
                <ArrowRight
                  aria-hidden
                  className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent lg:block"
                />
              )}
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-6">
          <div className="flex flex-col gap-6 rounded-panel border border-dashed border-line bg-panel p-8 sm:flex-row sm:items-center sm:p-10">
            <CardIcon icon={dashboard.icon} />
            <div className="flex-1">
              <p className="eyebrow mb-2 text-accent">Governs every module</p>
              <h3 className="text-2xl font-medium text-paper">{dashboard.title}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-[1.5] text-mute">{dashboard.description}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-xs uppercase tracking-eyebrow text-mute">
              <Eye className="h-4 w-4" />
              Visible to every team
            </span>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
