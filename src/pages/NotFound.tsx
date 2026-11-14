import Button from '@/components/common/Button';
import Container from '@/components/common/Container';

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center py-32">
      <Container className="max-w-2xl text-center">
        <p className="eyebrow text-accent">Error 404</p>
        <h1 className="mt-6 text-5xl font-medium text-paper sm:text-6xl">This page could not be found</h1>
        <p className="mx-auto mt-6 max-w-md text-base text-mute">
          The link may be outdated, or the page may have moved. Head back to the workspace overview to continue.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/" showArrow>
            Back to Home
          </Button>
          <Button to="/product" variant="secondary">
            View the Product
          </Button>
        </div>
      </Container>
    </section>
  );
}
