import type { LucideIcon } from 'lucide-react';
import { images } from '@/data/images';
import {
  CheckCheck,
  FileCheck,
  FolderKanban,
  GitBranch,
  History,
  KeyRound,
  LayoutDashboard,
  Languages,
  ListChecks,
  Mic2,
  ScrollText,
  Shield,
  Users,
} from 'lucide-react';

export interface Highlight {
  image: string;
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    image: images.highlights.projectManagement,
    title: 'Project Management',
    description: 'Organize video assets, projects, deadlines, and localization requirements in one structured workspace.',
  },
  {
    image: images.highlights.languageCoordination,
    title: 'Language Coordination',
    description: 'Manage target languages, translation assignments, subtitle records, and language-specific requirements.',
  },
  {
    image: images.highlights.dubbingWorkflows,
    title: 'Dubbing Workflows',
    description: 'Coordinate voice-over assignments, dubbing references, audio versions, and synchronization reviews.',
  },
  {
    image: images.highlights.reviewDelivery,
    title: 'Review & Delivery',
    description: 'Track feedback, revisions, approvals, and final localized content delivery.',
  },
];

export interface Stat {
  value: string;
  label: string;
}

// Placeholder figures for layout only. Replace with verified company metrics before launch.
export const stats: Stat[] = [
  { value: '100+', label: 'Language Workflows' },
  { value: '500+', label: 'Localization Projects' },
  { value: '1', label: 'Centralized Workspace' },
  { value: 'End-to-End', label: 'Workflow Visibility' },
];

export interface PlatformModule {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
}

export const platformModules: PlatformModule[] = [
  {
    icon: FolderKanban,
    title: 'Project & Media Management',
    description: 'Register video projects, source languages, deadlines, and the audio and video assets behind each one.',
    highlights: ['Project records and deadlines', 'Asset references by project', 'Production status tracking'],
  },
  {
    icon: Languages,
    title: 'Language & Translation Management',
    description: 'Define target languages and keep translation records, subtitle versions, and assignments aligned.',
    highlights: ['Target language registry', 'Translation and subtitle records', 'Assignment and revision history'],
  },
  {
    icon: Mic2,
    title: 'Dubbing & Voice-Over Management',
    description: 'Maintain dubbing requirements, speaker information, and voice-over assignments in one place.',
    highlights: ['Speaker and casting notes', 'Voice-over assignments', 'Audio references and sync reviews'],
  },
  {
    icon: CheckCheck,
    title: 'Review & Delivery Management',
    description: 'Collect reviewer feedback, track correction requests, and record approvals before delivery.',
    highlights: ['Subtitle and text reviews', 'Correction request tracking', 'Final delivery information'],
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard & Governance',
    description: 'See progress, pending reviews, and language coverage while keeping permissions and records under control.',
    highlights: ['Progress and coverage views', 'Role-based permissions', 'Activity and audit records'],
  },
];

export interface GovernanceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const governanceItems: GovernanceItem[] = [
  {
    icon: Shield,
    title: 'Media Governance',
    description: 'Keep media records, categories, and production status consistent across every project.',
  },
  {
    icon: GitBranch,
    title: 'Localization Traceability',
    description: 'Follow each language version from source request through review to final delivery.',
  },
  {
    icon: Users,
    title: 'Role-Based Access',
    description: 'Give internal teams, agencies, and reviewers access that matches their responsibilities.',
  },
  {
    icon: ListChecks,
    title: 'Workflow Accountability',
    description: 'Assign owners to each stage so every open task has a clear person responsible for it.',
  },
  {
    icon: History,
    title: 'Revision History',
    description: 'Keep a record of subtitle and script revisions with the context behind each change.',
  },
  {
    icon: FileCheck,
    title: 'Approval Records',
    description: 'Store approval decisions alongside the version they applied to for later reference.',
  },
  {
    icon: KeyRound,
    title: 'Project Permissions',
    description: 'Control who can view, edit, review, or approve work on each individual project.',
  },
  {
    icon: ScrollText,
    title: 'Activity Logs',
    description: 'Review a timeline of workflow changes to understand what happened and when.',
  },
];
