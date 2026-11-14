import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useId, useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { faqs, type Faq } from '@/data/faqs';
import { cn } from '@/utils/classNames';

function FaqItem({ faq, open, onToggle }: { faq: Faq; open: boolean; onToggle: () => void }) {
  const panelId = useId();

  return (
    <li className="border-b border-line/70 first:border-t">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className={cn('font-display text-lg font-medium transition-colors duration-300 sm:text-xl', open ? 'text-paper' : 'text-paper/80 hover:text-paper')}>
            {faq.question}
          </span>
          <span
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500',
              open ? 'rotate-45 border-accent text-accent' : 'border-line text-mute'
            )}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-8 text-sm leading-[1.5] text-mute sm:text-base">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title="Everything About Video Localization" />
        </div>

        <AnimatedSection delay={0.1} className="lg:col-span-8">
          <ul>
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                open={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </ul>
        </AnimatedSection>
      </Container>
    </section>
  );
}
