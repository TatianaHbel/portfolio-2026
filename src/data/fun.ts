export type FunProjectStatus = 'live' | 'wip';

export interface FunProjectData {
  id: string;
  title: string;
  label: string;
  iframeUrl?: string;
  gradient?: string;
  status: FunProjectStatus;
}

export const funProjects: FunProjectData[] = [
  {
    id: 'photobooth',
    title: 'Photobooth',
    label: 'Personal Experiment · 2025',
    iframeUrl: 'https://photobooth-thebell.netlify.app',
    gradient: 'linear-gradient(135deg, #DA6D5B 20%, #ED527A 100%)',
    status: 'wip',
  },
];
