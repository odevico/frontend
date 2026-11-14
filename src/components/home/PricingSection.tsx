import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { pricingPlans, type PricingPlan } from '@/data/pricing';
import { cn } from '@/utils/classNames';

type Billing = 'monthly' | 'annual';

const billingOptions: { value: Billing; label: string }[] = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'annual', label: 'Annual' },
];

function PlanCard({ plan, billing }: { plan: PricingPlan; billing: Billing }) {
  const isCustom = plan.priceMonthly === 'Custom';
  const price = billing === 'annual' ? plan.priceAnnual : plan.priceMonthly;
  const note = isCustom ? plan.priceNote : billing === 'annual' ? 'per month, billed annually' : 'per month';

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-panel border p-8 transition-all duration-500 hover:-translate-y-1 sm:p-10',
        plan.highlighted
          ? 'border-accent/60 bg-raised shadow-lift hover:border-accent'
          : 'border-line/70 bg-card hover:border-mute/60'
      )}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow text-canvas">
          Recommended
        </span>
      )}

      <h3 className="text-2xl font-medium text-paper">{plan.name}</h3>
      <p className="mt-2 text-sm leading-[1.5] text-mute">{plan.audience}</p>

      <div className="mt-8 flex items-end gap-3 border-b border-line/70 pb-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={price}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="font-display text-5xl font-medium text-paper"
          >
            {price}
          </motion.span>
        </AnimatePresence>
        <span className="pb-2 text-sm text-mute">{note}</span>
      </div>

      <ul className="mt-8 flex flex-1 flex-col gap-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-paper/90">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        to="/#contact"
        variant={plan.highlighted ? 'primary' : 'secondary'}
        showArrow
        className="mt-10 w-full"
      >
        {plan.cta}
      </Button>
    </article>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Pricing"
            title="Flexible Plans for Global Video Content"
            description="Choose the level of project capacity, team access, and governance your organization needs."
          />

          <AnimatedSection delay={0.2}>
            <div
              role="group"
              aria-label="Billing period"
              className="inline-flex rounded-full border border-line bg-panel p-1"
            >
              {billingOptions.map((option) => {
                const active = billing === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setBilling(option.value)}
                    className={cn(
                      'relative rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300',
                      active ? 'text-canvas' : 'text-mute hover:text-paper'
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="billing-pill"
                        className="absolute inset-0 rounded-full bg-paper"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.1} className="h-full">
              <PlanCard plan={plan} billing={billing} />
            </AnimatedSection>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-mute">
          Placeholder pricing shown for layout only. Final plans and prices are not yet confirmed.
        </p>
      </Container>
    </section>
  );
}
