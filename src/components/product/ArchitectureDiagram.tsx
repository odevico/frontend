import AnimatedSection from '@/components/common/AnimatedSection';
import { cn } from '@/utils/classNames';

interface Layer {
  label: string;
  caption: string;
  items: string[];
  variant: 'solid' | 'conceptual';
}

const layers: Layer[] = [
  {
    label: 'Presentation Layer',
    caption: 'What teams see and act on',
    items: ['Project workspace', 'Dashboards and reviews', 'Contact and onboarding'],
    variant: 'solid',
  },
  {
    label: 'Odevico Application & Data Layer',
    caption: 'The platform that records the work',
    items: ['Project and media records', 'Translation and subtitle records', 'Approvals and activity logs'],
    variant: 'solid',
  },
  {
    label: 'Technical Showcase Layer',
    caption: 'Conceptual reference only',
    items: ['NVIDIA Nemotron Speech & Riva', 'NVIDIA NeMo', 'NVIDIA NIM & Triton'],
    variant: 'conceptual',
  },
];

export default function ArchitectureDiagram() {
  return (
    <AnimatedSection className="mx-auto max-w-4xl">
      <div className="flex flex-col gap-3">
        {layers.map((layer, index) => (
          <div key={layer.label}>
            <div
              className={cn(
                'rounded-panel p-6 sm:p-8',
                layer.variant === 'solid'
                  ? 'border border-line/80 bg-card'
                  : 'border border-dashed border-mute/60 bg-transparent'
              )}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-display text-lg font-medium text-paper">{layer.label}</h4>
                <span
                  className={cn(
                    'text-xs uppercase tracking-eyebrow',
                    layer.variant === 'conceptual' ? 'text-accent' : 'text-mute'
                  )}
                >
                  {layer.caption}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm',
                      layer.variant === 'solid' ? 'bg-raised text-paper/90' : 'border border-mute/40 text-mute'
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {index < layers.length - 1 && (
              <div aria-hidden className="mx-auto h-6 w-px bg-gradient-to-b from-line to-accent/40" />
            )}
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
