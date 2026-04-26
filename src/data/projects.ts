import moralisDevelopersThumb from '../assets/thumbnails/moralis-developers-01.jpg';
import bridgeTheGapThumb from '../assets/thumbnails/thumbnail-bridge-the-gap.jpg';

export type ProjectCursorType = 'case-study' | 'overview' | 'site';
export type ProjectStatus = 'published' | 'coming-soon' | 'external';

export interface HomeProjectCardData {
  title: string;
  label: string;
  href: string;
  aspect: string;
  placeholderColor: string;
  cursorType: ProjectCursorType;
  status: ProjectStatus;
  external?: boolean;
  video?: string;
  /** Imported ImageMetadata (preferred) or a string path for SVGs / public files. */
  image?: ImageMetadata | string;
  overlayText?: string;
  thumbnailScale?: number;
  objectFit?: 'cover' | 'contain';
}

export interface ProjectSection {
  id: string;
  label: string;
}

export const homeProjectColumns: Record<'left' | 'right', HomeProjectCardData[]> = {
  left: [
    {
      title: 'Vibe Coding My Brand',
      label: 'Personal Project · 2025',
      href: '/projects/vibe-coding-brand',
      aspect: 'aspect-[10/7]',
      placeholderColor: '#DA6D5B',
      cursorType: 'case-study',
      status: 'published',
      image: '/thumbnails/vibe-coding-thumbnail.svg',
    },
    {
      title: 'UX at a Web3 Startup',
      label: 'Moralis - Shipped 2024-2026',
      href: '/projects/moralis-dashboard',
      aspect: 'aspect-[8/5]',
      placeholderColor: '#1A316E50',
      cursorType: 'case-study',
      status: 'published',
      image: moralisDevelopersThumb,
    },
    {
      title: 'Redesigning Web3 Trading',
      label: 'Moralis - Shipped 2024',
      href: '/projects/account-abstraction',
      aspect: 'aspect-[10/7]',
      placeholderColor: '#DDD0FC50',
      cursorType: 'case-study',
      status: 'coming-soon',
      video: '/thumbnails/redesigning-thumbnail.webm',
      thumbnailScale: 1.12,
    },
  ],
  right: [
    {
      title: 'Personal Brand Guidelines',
      label: 'Design System · 2025',
      href: '/projects/figma',
      aspect: 'aspect-[10/7]',
      placeholderColor: '#F0EDE8',
      cursorType: 'case-study',
      status: 'published',
      image: '/thumbnails/personal-brand-thumbnail.svg',
      objectFit: 'cover',
    },
    {
      title: 'Bridge the Gap',
      label: 'Moralis - Concept 2024',
      href: '/projects/bridge-the-gap',
      aspect: 'aspect-[8/5]',
      placeholderColor: '#00144550',
      cursorType: 'case-study',
      status: 'published',
      image: bridgeTheGapThumb,
    },
    {
      title: 'The future of AI Agents',
      label: 'Amadeus Protocol - Concept 2026',
      href: '/projects/the-future-of-ai-agents',
      aspect: 'aspect-[16/9]',
      placeholderColor: '#E98D3450',
      cursorType: 'case-study',
      status: 'coming-soon',
      video: '/thumbnails/gradient_amadeus_thumbnail.webm',
      overlayText: 'The Future of AI Agents',
    },
  ],
};

export const moralisDashboardSections: ProjectSection[] = [
  { id: 'overview',   label: 'Overview' },
  { id: 'dashboard',  label: 'Dashboard Redesign' },
  { id: 'streams',    label: 'Streams' },
  { id: 'more-work',  label: 'More Work' },
  { id: 'learnings',  label: 'Learnings' },
];

export const bridgeTheGapSections: ProjectSection[] = [
  { id: 'overview',       label: 'Overview' },
  { id: 'the-user',       label: 'The User' },
  { id: 'the-challenge',  label: 'Challenge & Approach' },
  { id: 'solution',       label: 'Solution' },
  { id: 'design-handoff', label: 'Design Handoff' },
  { id: 'impact',         label: 'Impact & Learnings' },
];

export const vibeCodingBrandSections: ProjectSection[] = [
  { id: 'overview',  label: 'Overview' },
  { id: 'the-idea',  label: 'The Idea' },
  { id: 'process',   label: 'The Process' },
  { id: 'result',    label: 'The Result' },
  { id: 'learnings', label: 'Learnings' },
];

export const openAiHardwareSections: ProjectSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'solution', label: 'Solution' },
  { id: 'core-flows', label: 'Core Flows' },
  { id: 'research', label: 'Research' },
  { id: 'exploring-form-factors', label: 'Exploring Form Factors' },
  { id: 'prototyping-and-testing', label: 'Prototyping and Testing' },
  { id: 'design-decisions', label: 'Design Decisions' },
  { id: 'hardware-constraints', label: 'Designing for Hardware Constraints' },
  { id: 'reflection', label: 'Reflection' },
];
