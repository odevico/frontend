import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import { images } from '@/data/images';

const focusAreas = ['Versions', 'Feedback', 'Approvals', 'Responsibilities'];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-24 lg:py-32">
      <Container className="grid items-stretch gap-6 lg:grid-cols-12">
        <AnimatedSection className="flex flex-col justify-center rounded-panel border border-line/70 bg-card p-8 sm:p-12 lg:col-span-6 lg:p-14">
          <p className="eyebrow text-accent">About Odevico</p>
          <h2 className="mt-6 text-4xl font-medium text-paper sm:text-5xl">Bringing Global Stories to Life</h2>

          <div className="mt-8 space-y-5 text-base leading-[1.5] text-mute">
            <p>
              Odevico is an AI-powered video localization platform founded by Mugilan Suthakaran on 15 March 2024. It
              brings AI translation, voice dubbing, and subtitle creation into one workspace, helping businesses and
              creators make videos accessible to global audiences.
            </p>
            <p>
              Odevico simplifies localization workflows, saves time, and helps teams manage multilingual video content
              through better coordination and collaboration.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-eyebrow text-paper/80"
              >
                {area}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="group relative min-h-[420px] overflow-hidden rounded-panel lg:col-span-6">
          <img
            src={images.about}
            alt="Video editor reviewing footage on a staircase with a dark coat and phone"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas/50 via-transparent to-transparent" />
        </AnimatedSection>
      </Container>
    </section>
  );
}
