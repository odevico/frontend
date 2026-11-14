export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What is Odevico?',
    answer:
      'Odevico is a centralized platform for managing video localization. It brings video assets, language requirements, translation and subtitle records, dubbing coordination, reviews, approvals, and final delivery into one organized workspace.',
  },
  {
    question: 'Who is Odevico designed for?',
    answer:
      'Odevico is built for broadcasting and media companies, video localization agencies, streaming platforms, content creators, and multilingual marketing teams that need structured visibility over their localization work.',
  },
  {
    question: 'Can I manage multiple language versions of a video?',
    answer:
      'Yes. You can register target languages for each project, then track the translation records, subtitle versions, and delivery status of every language version side by side.',
  },
  {
    question: 'Does Odevico support subtitle and dubbing workflows?',
    answer:
      'Odevico supports the management side of subtitle and dubbing work. You can maintain subtitle version records, voice-over assignments, speaker information, and audio references, and track synchronization reviews.',
  },
  {
    question: 'Does the platform automatically translate or dub videos?',
    answer:
      'No. The current platform scope focuses on management and workflow coordination. Odevico does not perform automated translation, speech recognition, voice generation, or video rendering. Translation and dubbing work is carried out by your teams or partners and recorded in Odevico.',
  },
  {
    question: 'Can teams review and approve localized content?',
    answer:
      'Yes. Reviewers can capture feedback on translated text and subtitles, correction requests can be tracked to completion, and approval decisions are recorded against the version they apply to.',
  },
  {
    question: 'How does Odevico maintain workflow traceability?',
    answer:
      'Odevico keeps revision histories, approval records, and activity logs for each project. Workflow changes are traceable, so teams can see who changed what and when.',
  },
  {
    question: 'Is enterprise customization available?',
    answer:
      'Enterprise plans are designed for larger organizations and can include custom project capacity, customizable workflows, advanced permissions, organization-level governance, and dedicated support options. Contact our sales team to discuss your requirements.',
  },
];
