import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { features, type Feature } from '@/data/features';
import { cn } from '@/utils/classNames';

const columnSpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7', 'lg:col-span-7', 'lg:col-span-5'];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  return (
    <AnimatedSection delay={(index % 2) * 0.1} className={cn('h-full', columnSpans[index])}>
      <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-line/70 bg-card transition-colors duration-500 hover:border-accent/40">
        <div className="relative h-56 overflow-hidden sm:h-64">
          <img
            src={feature.image}
            alt={feature.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="text-2xl font-medium text-paper">{feature.title}</h3>
          <p className="mt-3 text-sm leading-[1.5] text-mute sm:text-base">{feature.summary}</p>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="space-y-3 pt-6">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-paper/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((open) => !open)}
            className="mt-auto inline-flex items-center gap-2 self-start pt-8 text-xs font-medium uppercase tracking-eyebrow text-mute transition-colors duration-300 hover:text-accent"
          >
            {expanded ? 'Close' : 'Explore'}
            <ChevronDown className={cn('h-4 w-4 transition-transform duration-500', expanded && 'rotate-180')} />
          </button>
        </div>
      </article>
    </AnimatedSection>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-20 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Everything You Need for Seamless Video Localization"
          description="Six connected areas cover the full path from source video to approved, delivered language versions."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
