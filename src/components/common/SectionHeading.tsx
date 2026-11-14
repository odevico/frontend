import type { ReactNode } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { cn } from '@/utils/classNames';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', className }: SectionHeadingProps) {
  return (
    <AnimatedSection className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-4xl font-medium text-paper sm:text-5xl lg:text-6xl">{title}</h2>
      {description && <p className="mt-6 text-base leading-[1.5] text-mute sm:text-lg">{description}</p>}
    </AnimatedSection>
  );
}
