import AnimatedSection from '@/components/common/AnimatedSection';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

export default function ProductCTA() {
  return (
    <section className="border-t border-line/70 py-24 lg:py-32">
      <Container>
        <AnimatedSection className="rounded-panel border border-line/70 bg-panel px-8 py-16 text-center sm:px-16 sm:py-24">
          <p className="eyebrow mb-6 text-accent">Next Step</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-medium text-paper sm:text-5xl lg:text-6xl">
            Bring Your Localization Workflow Into Focus
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-[1.5] text-mute sm:text-lg">
            Create a more organized way to manage multilingual video production.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/#contact" showArrow className="h-14 px-8">
              Contact Us
            </Button>
            <Button to="/" variant="secondary" className="h-14 px-8">
              Back to Home
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
