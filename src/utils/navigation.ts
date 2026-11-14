export const NAV_LINKS = [
  { label: 'Home', to: '/', sectionId: null },
  { label: 'Features', to: '/#features', sectionId: 'features' },
  { label: 'Pricing', to: '/#pricing', sectionId: 'pricing' },
  { label: 'About', to: '/#about', sectionId: 'about' },
  { label: 'Contact', to: '/#contact', sectionId: 'contact' },
] as const;

export const SECTION_IDS = ['about', 'features', 'pricing', 'contact'] as const;
