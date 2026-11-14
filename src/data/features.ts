import { images } from '@/data/images';

export interface Feature {
  id: string;
  title: string;
  summary: string;
  points: string[];
  image: string;
  alt: string;
}

export const features: Feature[] = [
  {
    id: 'media-management',
    title: 'Media & Project Management',
    summary: 'Give every localization project a clear home, from the first brief to the final file.',
    points: [
      'Create video localization projects',
      'Maintain project descriptions, deadlines, and source languages',
      'Upload or reference video and audio assets',
      'Organize media by project, content category, and production status',
    ],
    image: images.features.media,
    alt: 'Editing suite with dark monitors displaying video projects',
  },
  {
    id: 'language-management',
    title: 'Language & Translation Management',
    summary: 'Keep every target language, translation record, and revision in one traceable place.',
    points: [
      'Register target languages',
      'Maintain translation records',
      'Manage subtitle versions and file references',
      'Track translation assignments, revisions, and reviewer comments',
    ],
    image: images.features.language,
    alt: 'World map displayed on a laptop screen representing global languages',
  },
  {
    id: 'dubbing-management',
    title: 'Dubbing & Voice-Over Management',
    summary: 'Coordinate voice-over work with the speaker context and audio references it depends on.',
    points: [
      'Maintain dubbing requirements',
      'Manage voice-over assignments',
      'Store speaker information and production notes',
      'Track audio references and synchronization reviews',
    ],
    image: images.features.dubbing,
    alt: 'Close-up of a studio microphone in a recording booth',
  },
  {
    id: 'review-management',
    title: 'Review & Delivery Management',
    summary: 'Move translated text and subtitles from review to approval without losing track of changes.',
    points: [
      'Manage translated text and subtitle reviews',
      'Track correction requests',
      'Record approval decisions',
      'Maintain final delivery information',
    ],
    image: images.features.review,
    alt: 'Video editing timeline shown on a computer screen',
  },
  {
    id: 'workflow-visibility',
    title: 'Workflow Visibility',
    summary: 'See where every project stands and where the bottlenecks are before deadlines slip.',
    points: [
      'Monitor project progress',
      'View pending reviews',
      'Track language coverage',
      'Maintain revision and activity histories',
    ],
    image: images.features.visibility,
    alt: 'Dual monitors used for color grading and review',
  },
  {
    id: 'governance',
    title: 'Governance & Traceability',
    summary: 'Know who did what, when, and under which permissions across every localized version.',
    points: [
      'Role-based access',
      'Project permissions',
      'Activity records',
      'Traceable workflow changes',
    ],
    image: images.features.governance,
    alt: 'Video editor reviewing footage with headphones',
  },
];
