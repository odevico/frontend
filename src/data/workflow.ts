import { images } from '@/data/images';

export interface WorkflowStep {
  title: string;
  description: string;
}

export const homeWorkflowSteps: WorkflowStep[] = [
  {
    title: 'Create a Project',
    description: 'Register the video project, source language, media assets, and deadlines.',
  },
  {
    title: 'Define Languages',
    description: 'Select target languages and configure localization requirements.',
  },
  {
    title: 'Coordinate Production',
    description: 'Manage translation, subtitle, dubbing, and voice-over records.',
  },
  {
    title: 'Review & Approve',
    description: 'Collect feedback, manage revisions, and record approval decisions.',
  },
  {
    title: 'Deliver Localized Content',
    description: 'Track final localized versions and delivery status.',
  },
];

export interface ProductWorkflowStage {
  id: string;
  title: string;
  description: string;
  outputs: string[];
}

export const productWorkflowStages: ProductWorkflowStage[] = [
  {
    id: 'source-video',
    title: 'Source Video',
    description: 'The original master file and its metadata are registered as the reference for every language version.',
    outputs: ['Source asset reference', 'Duration and format notes', 'Content category'],
  },
  {
    id: 'project-setup',
    title: 'Project Setup',
    description: 'Teams define the project scope, owners, deadlines, and production status before any localized work begins.',
    outputs: ['Project record', 'Deadlines and owners', 'Production status'],
  },
  {
    id: 'language-configuration',
    title: 'Language Configuration',
    description: 'Target languages and their localization requirements are selected so every market is tracked from the start.',
    outputs: ['Target language list', 'Language-specific requirements', 'Coverage tracking'],
  },
  {
    id: 'translation-subtitles',
    title: 'Translation & Subtitle Records',
    description: 'Translation assignments, subtitle versions, and file references are logged with their revision history.',
    outputs: ['Translation records', 'Subtitle version history', 'Reviewer comments'],
  },
  {
    id: 'dubbing-coordination',
    title: 'Dubbing Coordination',
    description: 'Voice-over assignments, speaker notes, and audio references are coordinated for each dubbed version.',
    outputs: ['Voice-over assignments', 'Speaker information', 'Audio references'],
  },
  {
    id: 'review-approval',
    title: 'Review & Approval',
    description: 'Reviewers collect feedback, correction requests are tracked, and approval decisions are recorded.',
    outputs: ['Correction requests', 'Approval decisions', 'Revision trail'],
  },
  {
    id: 'final-delivery',
    title: 'Final Delivery',
    description: 'Approved localized versions are marked as delivered with the delivery information kept on record.',
    outputs: ['Delivery status', 'Final version record', 'Activity history'],
  },
];

export interface UseCase {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const useCases: UseCase[] = [
  {
    title: 'Broadcasting & Media',
    description: 'Manage multilingual video production and localization activities across broadcasting teams.',
    image: images.useCases.broadcasting,
    alt: 'Cameraman filming in a dimly lit film set',
  },
  {
    title: 'Video Localization Agencies',
    description: 'Coordinate translators, dubbing teams, reviewers, and project managers.',
    image: images.useCases.agencies,
    alt: 'World map letters on a wooden surface',
  },
  {
    title: 'Streaming Platforms',
    description: 'Organize localized content versions and manage review and delivery processes.',
    image: images.useCases.streaming,
    alt: 'Silhouetted filmmaker working with professional equipment',
  },
  {
    title: 'Content Creators',
    description: 'Maintain language versions, subtitles, and localized content records.',
    image: images.useCases.creators,
    alt: 'Camera operator filming a live performance',
  },
  {
    title: 'Multilingual Marketing Teams',
    description: 'Coordinate translated video content and manage production requirements across markets.',
    image: images.useCases.marketing,
    alt: 'Person holding a globe in their hands',
  },
];
