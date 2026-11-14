import { Building2, MapPin, Phone } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import ContactForm from '@/components/home/ContactForm';

const offices = [
  {
    id: 'sri-lanka',
    country: 'Sri Lanka',
    legalName: 'Odevico Software (Private) Limited',
    address: '37, Willow Crescent, Anuradhapura, Sri Lanka',
    phone: '+94 72 383 5089',
    phoneHref: 'tel:+94723835089',
  },
  {
    id: 'usa',
    country: 'United States',
    legalName: 'Odevico Software Inc.',
    address: '920 West 6th Street, Suite 403, Los Angeles, CA 90017, USA',
    phone: '+1 914 494 2350',
    phoneHref: 'tel:+19144942350',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Bring Your Content to the World"
            description="Discover how Odevico can help your team organize multilingual video production and localization workflows."
          />

          <AnimatedSection delay={0.15} className="mt-12 space-y-4">
            {offices.map((office) => (
              <div key={office.id} className="rounded-panel border border-line/70 bg-panel p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-card text-accent">
                    <Building2 className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-eyebrow text-mute">{office.country}</p>
                    <p className="mt-1 font-display text-base font-medium text-paper">{office.legalName}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm leading-[1.5] text-mute">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{office.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0 text-accent" />
                    <a href={office.phoneHref} className="transition-colors hover:text-accent">
                      {office.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </AnimatedSection>
      </Container>
    </section>
  );
}
