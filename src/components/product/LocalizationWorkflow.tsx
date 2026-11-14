import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { productWorkflowStages } from '@/data/workflow';
import { cn } from '@/utils/classNames';

export default function LocalizationWorkflow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stage = productWorkflowStages[activeIndex];
  const progress = (activeIndex / (productWorkflowStages.length - 1)) * 100;

  return (
    <section id="workflow-showcase" className="scroll-mt-20 border-t border-line/70 bg-panel py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Localization Workflow"
          title="Follow a Project From Source to Delivery"
          description="Select any stage to see what it records and which outputs the team can track. This is an interactive overview of the workflow."
        />

        <AnimatedSection className="mt-16">
          <div className="-mx-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0">
            <div className="relative min-w-[720px]">
              <div className="absolute left-6 right-6 top-6 h-px bg-line" />
              <motion.div
                className="absolute left-6 top-6 h-px origin-left bg-accent"
                style={{ width: `calc((100% - 3rem) * ${progress / 100})` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="relative grid grid-cols-7 gap-4">
                {productWorkflowStages.map((item, index) => {
                  const selected = index === activeIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setActiveIndex(index)}
                      className="group flex flex-col items-center text-center"
                    >
                      <span
                        className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-full border font-display text-sm font-medium transition-all duration-500',
                          selected
                            ? 'scale-110 border-accent bg-accent text-canvas'
                            : index < activeIndex
                              ? 'border-accent/60 bg-canvas text-accent'
                              : 'border-line bg-canvas text-mute group-hover:border-mute group-hover:text-paper'
                        )}
                      >
                        {index < activeIndex ? <Check className="h-4 w-4" /> : String(index + 1).padStart(2, '0')}
                      </span>
                      <span
                        className={cn(
                          'mt-4 text-sm leading-tight transition-colors duration-300',
                          selected ? 'text-paper' : 'text-mute group-hover:text-paper'
                        )}
                      >
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-10 rounded-panel border border-line/70 bg-card p-8 sm:p-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <p className="eyebrow text-accent">
                  Stage {String(activeIndex + 1).padStart(2, '0')} of {String(productWorkflowStages.length).padStart(2, '0')}
                </p>
                <h3 className="mt-4 text-3xl font-medium text-paper sm:text-4xl">{stage.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-[1.5] text-mute">{stage.description}</p>
              </div>
              <div className="lg:col-span-5 lg:border-l lg:border-line/70 lg:pl-10">
                <p className="eyebrow mb-4">What gets recorded</p>
                <ul className="space-y-3">
                  {stage.outputs.map((output) => (
                    <li key={output} className="flex items-center gap-3 text-sm text-paper/90">
                      <Check className="h-4 w-4 shrink-0 text-accent" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
