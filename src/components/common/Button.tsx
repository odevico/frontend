import { ArrowUpRight } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/classNames';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'sm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  showArrow?: boolean;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-accent text-canvas hover:bg-accent-hover',
  secondary: 'border border-line bg-transparent text-paper hover:border-mute hover:bg-raised/60',
  ghost: 'text-paper hover:text-accent',
};

const sizeClasses: Record<Size, string> = {
  md: 'h-12 px-6 text-sm',
  sm: 'h-10 px-4 text-sm',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  showArrow = false,
  type = 'button',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 active:scale-[0.98]',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
