export interface LegalDocument {
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}

// Placeholder legal copy. Replace with reviewed policy text before launch.
export const legalDocuments: Record<'privacy' | 'terms', LegalDocument> = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'Last updated: placeholder',
    sections: [
      {
        heading: 'Information we collect',
        body: 'This placeholder describes the types of information Odevico may collect, such as contact details submitted through forms and account information.',
      },
      {
        heading: 'How we use information',
        body: 'This placeholder explains how submitted information is used to respond to inquiries and operate the platform.',
      },
      {
        heading: 'Your choices',
        body: 'This placeholder describes how visitors can request access to, correction of, or deletion of their personal information.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: 'Last updated: placeholder',
    sections: [
      {
        heading: 'Use of the platform',
        body: 'This placeholder sets out the conditions under which people may access and use the Odevico website and workspace.',
      },
      {
        heading: 'Content and responsibilities',
        body: 'This placeholder describes the responsibilities of customers for the media, translations, and approvals recorded in the platform.',
      },
      {
        heading: 'Limitation of liability',
        body: 'This placeholder describes the limits of liability that will apply once the final terms are approved.',
      },
    ],
  },
};
