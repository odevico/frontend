import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { cn } from '@/utils/classNames';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({ children, className, interactive = false }: CardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-panel border border-line/70 bg-card p-6 sm:p-8',
        interactive && 'transition-colors duration-500 hover:border-accent/50 hover:bg-raised',
        className
      )}
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function CardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-raised text-accent">
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}

export function ExploreLabel({ children = 'Learn More' }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-eyebrow text-mute transition-colors duration-300 group-hover:text-accent">
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      {children}
    </span>
  );
}
