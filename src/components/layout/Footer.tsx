import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import Logo from '@/components/layout/Logo';

const sitemapLinks = [
  { label: 'Features', to: '/#features' },
  { label: 'About', to: '/#about' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Testimonials', to: '/#testimonials' },
  { label: 'Contact', to: '/#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
];

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

const mapUrl = (address: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="group inline-flex items-center text-sm text-mute transition-colors duration-300 hover:text-paper">
    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
    {label}
  </Link>
);

export default function Footer() {
  return (
    <footer className="border-t border-line/70 bg-panel">
      <Container className="grid gap-12 py-16 md:grid-cols-12 lg:py-20">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-[1.5] text-mute">
            A centralized workspace for managing video localization, translation records, dubbing coordination, reviews,
            and delivery.
          </p>
        </div>

        <nav aria-label="Sitemap" className="md:col-span-2">
          <p className="eyebrow mb-5">Sitemap</p>
          <ul className="flex flex-col gap-3">
            {sitemapLinks.map((link) => (
              <li key={link.label}>
                <FooterLink to={link.to} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className="md:col-span-2">
          <p className="eyebrow mb-5">Legal</p>
          <ul className="flex flex-col gap-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <FooterLink to={link.to} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow mb-5">Locations</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {offices.map((office) => (
              <div key={office.id}>
                <p className="text-sm font-medium text-paper">{office.legalName}</p>
                <p className="mt-1 text-xs uppercase tracking-eyebrow text-mute">{office.country}</p>
                <p className="mt-2 text-xs leading-[1.6] text-mute">{office.address}</p>
                <a
                  href={office.phoneHref}
                  className="mt-1 block text-xs text-mute transition-colors hover:text-accent"
                >
                  {office.phone}
                </a>
                <a
                  href={mapUrl(office.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center text-xs font-medium uppercase tracking-eyebrow text-accent transition-colors hover:text-paper"
                >
                  Open Map
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-line/70">
        <Container className="flex flex-col gap-2 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Odevico. All rights reserved.</p>
          <p>AI video localization workflow management</p>
        </Container>
      </div>
    </footer>
  );
}
