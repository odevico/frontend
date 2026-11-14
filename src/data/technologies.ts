import type { LucideIcon } from 'lucide-react';
import { Boxes, Cpu, Layers, Mic, Server, Volume2 } from 'lucide-react';

export interface Technology {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const technologies: Technology[] = [
  {
    name: 'NVIDIA Nemotron Speech',
    icon: Mic,
    description: 'Speech-focused models for recognizing and understanding spoken audio in multilingual media.',
  },
  {
    name: 'NVIDIA Riva',
    icon: Volume2,
    description: 'A speech AI toolkit covering recognition, synthesis, and audio processing pipelines.',
  },
  {
    name: 'NVIDIA NeMo',
    icon: Layers,
    description: 'A framework for building and adapting conversational and language-based AI models.',
  },
  {
    name: 'NVIDIA NIM',
    icon: Boxes,
    description: 'Prebuilt inference microservices that package models for consistent deployment.',
  },
  {
    name: 'NVIDIA Triton',
    icon: Server,
    description: 'An inference server for serving models efficiently across GPUs and deployment environments.',
  },
];

export interface TechnicalCapability {
  icon: LucideIcon;
  title: string;
  vendor: string;
  description: string;
  points: string[];
}

export const technicalCapabilities: TechnicalCapability[] = [
  {
    icon: Mic,
    title: 'Speech & Audio',
    vendor: 'NVIDIA Nemotron Speech & Riva',
    description:
      'Speech recognition, speech generation, and audio-processing concepts that matter when a team works with multilingual dialogue.',
    points: ['Transcript-based reference material', 'Voice and audio processing concepts', 'Timing and synchronization considerations'],
  },
  {
    icon: Cpu,
    title: 'Language Model Development',
    vendor: 'NVIDIA NeMo',
    description:
      'A development framework for building and adapting conversational and language-based AI capabilities for future media tooling.',
    points: ['Domain adaptation of language models', 'Conversational AI building blocks', 'Customizable pipelines for specialized vocabulary'],
  },
  {
    icon: Server,
    title: 'Model Deployment & Inference',
    vendor: 'NVIDIA NIM & Triton',
    description:
      'Deployment and inference-serving environments that run AI models reliably at production scale.',
    points: ['Containerized inference microservices', 'Model serving across hardware', 'Scalable request handling'],
  },
];
