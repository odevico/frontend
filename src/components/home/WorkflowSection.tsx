import { motion } from 'framer-motion';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { homeWorkflowSteps } from '@/data/workflow';

export default function WorkflowSection() {
  return (
    <section id="workflow" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From Source Media to Global Delivery"
          description="A coordinated path from project registration to delivery, with every step recorded in one place."
        />

        <ol className="relative mt-20 grid gap-12 lg:grid-cols-5 lg:gap-6">
          <motion.span
            aria-hidden
            className="absolute left-6 top-6 bottom-6 w-px origin-top-left bg-line lg:bottom-auto lg:right-6 lg:h-px lg:w-auto"
            initial={{ scaleX: 0, scaleY: 0 }}
            whileInView={{ scaleX: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {homeWorkflowSteps.map((step, index) => (
            <motion.li
              key={step.title}
              className="group relative pl-16 lg:pl-0 lg:pt-20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-canvas font-display text-sm font-medium text-accent transition-colors duration-500 group-hover:border-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-medium text-paper">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.5] text-mute">{step.description}</p>
            </motion.li>
          ))}
        </ol>

        <AnimatedSection className="mt-16 text-sm text-mute">
          <p>Odevico records and coordinates each stage. Translation, dubbing, and voice-over work is performed by your teams and partners.</p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
