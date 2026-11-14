export type ProjectStatus = 'Translation' | 'Subtitles' | 'Dubbing' | 'In review' | 'Delivered';

export interface DashboardProject {
  name: string;
  source: string;
  targets: number;
  status: ProjectStatus;
  deadline: string;
  progress: number;
}

export const dashboardKpis = [
  { label: 'Total projects', value: '48', delta: '+6 this month' },
  { label: 'Active localizations', value: '127', delta: 'across 14 languages' },
  { label: 'Pending reviews', value: '19', delta: '5 due this week' },
  { label: 'Completed deliveries', value: '64', delta: '98% on schedule' },
];

export const dashboardProjects: DashboardProject[] = [
  { name: 'Harbor Lights, S2 E04', source: 'English', targets: 6, status: 'In review', deadline: 'Nov 18', progress: 72 },
  { name: 'Coastal Kitchens, S1', source: 'English', targets: 4, status: 'Dubbing', deadline: 'Nov 21', progress: 46 },
  { name: 'Northwind Product Launch', source: 'English', targets: 8, status: 'Subtitles', deadline: 'Nov 30', progress: 88 },
  { name: 'Metro Documentary Cut', source: 'German', targets: 3, status: 'Translation', deadline: 'Dec 04', progress: 31 },
  { name: 'Summit Creator Vlog 12', source: 'English', targets: 5, status: 'Delivered', deadline: 'Nov 02', progress: 100 },
];

export const languageCoverage = [
  { language: 'Spanish', code: 'ES', percent: 92 },
  { language: 'Portuguese', code: 'PT', percent: 88 },
  { language: 'French', code: 'FR', percent: 84 },
  { language: 'German', code: 'DE', percent: 71 },
  { language: 'Japanese', code: 'JA', percent: 56 },
  { language: 'Arabic', code: 'AR', percent: 39 },
];

export const workflowBreakdown = [
  { stage: 'Setup', count: 6 },
  { stage: 'Translation', count: 14 },
  { stage: 'Dubbing', count: 9 },
  { stage: 'Review', count: 11 },
  { stage: 'Delivery', count: 8 },
];

export const recentActivity = [
  { time: '10 min ago', text: 'Reviewer approved Spanish subtitles for Harbor Lights, S2 E04' },
  { time: '1 hour ago', text: 'Correction request added to German translation, Metro Documentary Cut' },
  { time: '3 hours ago', text: 'Voice-over assignment updated for Coastal Kitchens, S1' },
  { time: 'Yesterday', text: 'Summit Creator Vlog 12 marked as delivered to 5 language versions' },
];
