import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/utils/classNames';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export default function AnimatedSection({ children, className, delay = 0, y = 32 }: AnimatedSectionProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
