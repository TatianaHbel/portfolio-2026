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
  image?: string;
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
      title: 'The future of AI Agents',
      label: 'Amadeus Protocol - Concept 2026',
      href: '/projects/openai-hardware',
      aspect: 'aspect-[16/9]',
      placeholderColor: '#E98D3450',
      cursorType: 'case-study',
      status: 'published',
      video: '/gradient_amadeus_thumbnail.webm',
      overlayText: 'The Future of AI Agents',
    },
    {
      title: 'Redesigning Web3 Trading',
      label: 'Moralis - Shipped 2024',
      href: '/projects/account-abstraction',
      aspect: 'aspect-[10/7]',
      placeholderColor: '#DDD0FC50',
      cursorType: 'case-study',
      status: 'published',
      image: '/redesigning-thumbnail.gif',
      thumbnailScale: 1.12,
    },
    {
      title: 'Personal Brand Guidelines',
      label: 'Design System · 2025',
      href: '/projects/figma',
      aspect: 'aspect-[10/7]',
      placeholderColor: '#000000',
      cursorType: 'case-study',
      status: 'published',
      video: '/personal-ds-thumbnail.mp4',
      objectFit: 'contain',
    },
    {
      title: 'Patent-pending AI',
      label: 'Royal Bank of Canada - Handed off 2024',
      href: '/projects/rbc',
      aspect: 'aspect-[16/9]',
      placeholderColor: '#E8F2FB',
      cursorType: 'overview',
      status: 'coming-soon',
    },
  ],
  right: [
    {
      title: 'Bridge the Gap',
      label: 'Moralis - Concept 2024',
      href: '/projects/alexa',
      aspect: 'aspect-[8/5]',
      placeholderColor: '#00144550',
      cursorType: 'case-study',
      status: 'published',
      image: '/thumbnail-bridge-the-gap.jpg',
    },
    {
      title: 'UX at a Web3 Startup',
      label: 'Moralis - Shipped 2024-2026',
      href: '/projects/1password',
      aspect: 'aspect-[8/5]',
      placeholderColor: '#1A316E50',
      cursorType: 'case-study',
      status: 'published',
      image: '/moralis-developers-01.jpg',
    },
    {
      title: 'Making 0-1 building for everyone',
      label: 'Hack Western 12 - Shipped 2025',
      href: 'https://hackwestern.com',
      aspect: 'aspect-[8/5]',
      placeholderColor: '#1A1A1A',
      cursorType: 'site',
      status: 'external',
      external: true,
    },
    {
      title: 'Innovation management for Fortune 500s',
      label: 'Earth - Shipped 2023',
      href: '/projects/earth',
      aspect: 'aspect-[16/9]',
      placeholderColor: '#7AAEE950',
      cursorType: 'case-study',
      status: 'coming-soon',
    },
  ],
};

export const onePasswordSections: ProjectSection[] = [
  { id: 'overview',   label: 'Overview' },
  { id: 'my-role',    label: 'My Role' },
  { id: 'dashboard',  label: 'Dashboard Redesign' },
  { id: 'streams',    label: 'Streams' },
  { id: 'more-work',  label: 'More Work' },
  { id: 'learnings',  label: 'Learnings' },
];

export const alexaSections: ProjectSection[] = [
  { id: 'overview',       label: 'Overview' },
  { id: 'the-user',       label: 'The User' },
  { id: 'the-challenge',  label: 'The Challenge' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'solution',       label: 'Solution' },
  { id: 'design-handoff', label: 'Design Handoff' },
  { id: 'impact',         label: 'Impact' },
  { id: 'learnings',      label: 'Learnings' },
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
