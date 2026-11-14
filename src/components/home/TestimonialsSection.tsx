import { Quote } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { testimonials } from '@/data/testimonials';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Teams Sharing Stories Worldwide"
          description="See how content teams use Odevico to keep translation, dubbing, subtitles, and reviews in one organized workflow."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={(index % 2) * 0.1} className="h-full">
              <figure className="flex h-full flex-col rounded-panel border border-line/70 bg-card p-8 transition-colors duration-500 hover:border-accent/40 sm:p-10">
                <Quote className="h-8 w-8 text-accent" aria-hidden="true" />
                <blockquote className="mt-6 flex-1 text-base leading-[1.6] text-paper/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line/70 pt-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-raised font-display text-sm font-medium text-paper">
                    {initials(testimonial.name)}
                  </span>
                  <span>
                    <span className="block font-display text-base font-medium text-paper">{testimonial.name}</span>
                    <span className="mt-0.5 block text-xs uppercase tracking-eyebrow text-mute">
                      {testimonial.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
