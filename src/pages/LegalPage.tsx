import Container from '@/components/common/Container';
import { legalDocuments } from '@/data/legal';

interface LegalPageProps {
  document: keyof typeof legalDocuments;
}

export default function LegalPage({ document }: LegalPageProps) {
  const legal = legalDocuments[document];

  return (
    <section className="py-32 lg:py-40">
      <Container className="max-w-3xl">
        <p className="eyebrow text-accent">Legal</p>
        <h1 className="mt-6 text-5xl font-medium text-paper sm:text-6xl">{legal.title}</h1>
        <p className="mt-4 text-sm text-mute">{legal.updated}</p>

        <div className="mt-14 space-y-12">
          {legal.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-medium text-paper">{section.heading}</h2>
              <p className="mt-4 text-base leading-[1.5] text-mute">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
