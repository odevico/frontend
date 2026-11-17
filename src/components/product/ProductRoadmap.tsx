import { ArrowRight, Mic2, Network, Sparkles } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';

const roadmapStages = [
  {
    number: '01',
    icon: Mic2,
    title: 'Make speech work travel further',
    technology: 'NVIDIA Riva',
    description:
      'Build toward speech recognition and natural voice generation that can turn dialogue into timed subtitle-ready text and localized voice tracks.',
    detail: '100+ languages · word-level timestamps · multilingual TTS',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Adapt language and voices to the story',
    technology: 'NVIDIA NeMo + Nemotron Speech',
    description:
      'Explore specialized translation and speech models, with GPU-based training and speaker adaptation to better preserve the intent, voice, and delivery of each original.',
    detail: 'Multilingual NMT · GPU model training · speaker adaptation',
  },
  {
    number: '03',
    icon: Network,
    title: 'Scale the complete localization flow',
    technology: 'NVIDIA NIM + Triton',
    description:
      'Move toward optimized speech and translation services that can process stages together, respond with low latency, and support larger production volumes.',
    detail: 'Optimized services · concurrent inference · dynamic batching',
  },
];

const technologyNames = ['Riva', 'NeMo + Nemotron Speech', 'NIM', 'Triton Inference Server'];

export default function ProductRoadmap() {
  return (
    <section id="roadmap" className="scroll-mt-20 border-t border-line/70 bg-panel py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Where Odevora Is Headed"
          title="A Clearer Path From Coordination to AI-Assisted Localization"
          description="Odevora brings localization work into one place today. The roadmap builds on that foundation, with speech, translation, and GPU-powered scale introduced as future capabilities."
        />

        <AnimatedSection className="mt-14 rounded-panel border border-accent/40 bg-canvas/70 p-7 sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className="shrink-0 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium uppercase tracking-eyebrow text-accent">
              Available today
            </span>
            <div>
              <h3 className="text-xl font-medium text-paper">A connected workspace for the people behind every release</h3>
              <p className="mt-2 max-w-4xl text-sm leading-[1.6] text-mute">
                Organize source media and projects, coordinate target languages and translation records, manage dubbing
                assignments, and keep reviews, approvals, and delivery status visible to the team.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {roadmapStages.map((stage, index) => (
            <AnimatedSection key={stage.number} delay={index * 0.1} className="relative h-full">
              <article className="flex h-full flex-col rounded-panel border border-line/80 bg-card p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-raised text-accent">
                    <stage.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm text-mute">{stage.number}</span>
                </div>
                <p className="eyebrow mt-7 text-accent">Planned direction</p>
                <h3 className="mt-3 text-xl font-medium text-paper">{stage.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-mute">{stage.description}</p>
                <div className="mt-auto pt-7">
                  <p className="border-t border-line/70 pt-5 text-sm font-medium text-paper/90">{stage.technology}</p>
                  <p className="mt-2 text-xs leading-[1.5] text-mute">{stage.detail}</p>
                </div>
              </article>
              {index < roadmapStages.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-accent lg:block"
                />
              )}
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-8 text-center text-xs leading-[1.5] text-mute">
          NVIDIA technologies shown as a forward-looking roadmap; these integrations are not presented as available in Odevora today.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2" aria-label="Roadmap technology names">
          {technologyNames.map((name) => (
            <span key={name} className="rounded-full border border-line/80 px-3 py-1.5 text-xs text-mute">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
