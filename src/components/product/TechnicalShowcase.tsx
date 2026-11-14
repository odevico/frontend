import { Check } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Card, { CardIcon } from '@/components/common/Card';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { technicalCapabilities } from '@/data/technologies';
import ArchitectureDiagram from '@/components/product/ArchitectureDiagram';

export default function TechnicalShowcase() {
  return (
    <section id="technical-showcase" className="scroll-mt-20 border-t border-line/70 bg-panel py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Technical Showcase"
          title="The Technologies Shaping Modern AI Media"
          description="NVIDIA technologies relevant to speech, language, and model deployment. They are presented to explain the technical landscape, not as components of the Odevico application."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {technicalCapabilities.map((capability, index) => (
            <AnimatedSection key={capability.title} delay={index * 0.1} className="h-full">
              <Card interactive className="flex h-full flex-col">
                <CardIcon icon={capability.icon} />
                <p className="eyebrow mt-8 text-accent">{capability.vendor}</p>
                <h3 className="mt-3 text-2xl font-medium text-paper">{capability.title}</h3>
                <p className="mt-4 text-sm leading-[1.5] text-mute">{capability.description}</p>
                <ul className="mt-6 space-y-3 border-t border-line/70 pt-6">
                  {capability.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-paper/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-24">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <p className="eyebrow mb-4">Conceptual Architecture</p>
            <h3 className="text-3xl font-medium text-paper sm:text-4xl">How the Layers Relate</h3>
            <p className="mt-4 text-sm leading-[1.5] text-mute sm:text-base">
              The solid layers describe the Odevico application. The dashed layer is a conceptual showcase of
              technologies and is not integrated into the application.
            </p>
          </AnimatedSection>
          <ArchitectureDiagram />
        </div>
      </Container>
    </section>
  );
}
