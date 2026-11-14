import heroImage from '@/assets/Hero.png';
import aboutImage from '@/assets/About.png';
import mediaImage from '@/assets/Media & Project Management.png';
import languageImage from '@/assets/Language & Translation Management.png';
import dubbingImage from '@/assets/Dubbing & Voice-Over Management.png';
import reviewImage from '@/assets/Review & Delivery Management.png';
import visibilityImage from '@/assets/Workflow Visibility.png';
import governanceImage from '@/assets/Governance & Traceability.png';
import broadcastingImage from '@/assets/Broadcasting & Media.png';
import agenciesImage from '@/assets/Video Localization Agencies.png';
import streamingImage from '@/assets/Streaming Platforms.png';
import creatorsImage from '@/assets/Content Creators.png';
import marketingImage from '@/assets/Multilingual Marketing Teams.png';
import projectManagementImage from '@/assets/Project Management.png';
import languageCoordinationImage from '@/assets/Language Coordination.png';
import dubbingWorkflowsImage from '@/assets/Dubbing Workflows.png';
import reviewDeliveryImage from '@/assets/Review & Delivery.png';

export const images = {
  hero: heroImage,
  productHero: heroImage,
  about: aboutImage,
  features: {
    media: mediaImage,
    language: languageImage,
    dubbing: dubbingImage,
    review: reviewImage,
    visibility: visibilityImage,
    governance: governanceImage,
  },
  highlights: {
    projectManagement: projectManagementImage,
    languageCoordination: languageCoordinationImage,
    dubbingWorkflows: dubbingWorkflowsImage,
    reviewDelivery: reviewDeliveryImage,
  },
  useCases: {
    broadcasting: broadcastingImage,
    agencies: agenciesImage,
    streaming: streamingImage,
    creators: creatorsImage,
    marketing: marketingImage,
  },
} as const;
