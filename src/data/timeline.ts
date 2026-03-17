export interface TimelineEntry {
  year: string;
  company: string;
  companyUrl?: string;
  role: string;
  context?: string;
}

export const experienceTimeline: TimelineEntry[] = [
  {
    year: '2025 - 2026',
    company: 'Amadeus Protocol',
    role: 'Lead Product Designer',
    context: 'Designing the AI agent layer for Web3 infrastructure',
  },
  {
    year: '2025 - 2025',
    company: 'Calcorp',
    role: 'Sr Product Designer',
    context: 'Product strategy and design for fintech operations',
  },
  {
    year: '2022 - 2025',
    company: 'Moralis',
    companyUrl: 'https://moralis.com',
    role: 'Sr Product Designer',
    context: 'Redesigned the core developer dashboard used by 40K+ Web3 devs',
  },
  {
    year: '2021 - 2022',
    company: 'Zigurat',
    companyUrl: 'https://www.e-zigurat.com',
    role: 'Product Design + Engineering Intern',
    context: 'First role — where I learned design and fell in love with building',
  },
];
