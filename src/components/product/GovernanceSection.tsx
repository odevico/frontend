import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { governanceItems } from '@/data/platform';

export default function GovernanceSection() {
  return (
    <section id="governance" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Governance & Enterprise Readiness"
            title="Control, Accountability, and a Record for Every Change"
            description="Enterprise teams need to know who changed what, who approved it, and who can see it. Odevico keeps those answers in the workflow itself."
          />
        </div>

        <AnimatedSection delay={0.15} className="lg:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-panel border border-line bg-line sm:grid-cols-2">
            {governanceItems.map((item) => (
              <div key={item.title} className="group bg-card p-6 transition-colors duration-500 hover:bg-raised sm:p-8">
                <item.icon className="h-5 w-5 text-accent transition-transform duration-500 group-hover:-translate-y-0.5" />
                <h3 className="mt-5 text-lg font-medium text-paper">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.5] text-mute">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
