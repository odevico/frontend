import { motion } from 'framer-motion';
import {
  CheckCheck,
  FolderKanban,
  Film,
  Languages,
  LayoutDashboard,
  Mic2,
  Send,
  Shield,
} from 'lucide-react';
import type { ReactNode } from 'react';
import AnimatedSection from '@/components/common/AnimatedSection';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import {
  dashboardKpis,
  dashboardProjects,
  languageCoverage,
  recentActivity,
  workflowBreakdown,
  type ProjectStatus,
} from '@/data/dashboard';
import { cn } from '@/utils/classNames';

const navItems = [
  { label: 'Overview', icon: LayoutDashboard, active: true },
  { label: 'Projects', icon: FolderKanban, active: false },
  { label: 'Media', icon: Film, active: false },
  { label: 'Translations', icon: Languages, active: false },
  { label: 'Dubbing', icon: Mic2, active: false },
  { label: 'Reviews', icon: CheckCheck, active: false },
  { label: 'Delivery', icon: Send, active: false },
  { label: 'Governance', icon: Shield, active: false },
];

const statusStyles: Record<ProjectStatus, string> = {
  Translation: 'border-line text-mute',
  Subtitles: 'border-line text-mute',
  Dubbing: 'border-line text-paper/80',
  'In review': 'border-accent/60 text-accent',
  Delivered: 'border-paper/40 text-paper',
};

const segmentColors = ['bg-paper/30', 'bg-accent', 'bg-paper/70', 'bg-mute', 'bg-line'];

const totalStageItems = workflowBreakdown.reduce((sum, item) => sum + item.count, 0);

const Panel = ({ title, action, children, className }: { title: string; action?: string; children: ReactNode; className?: string }) => (
  <div className={cn('rounded-2xl border border-line/70 bg-card p-5 sm:p-6', className)}>
    <div className="mb-5 flex items-center justify-between gap-4">
      <h4 className="font-display text-base font-medium text-paper">{title}</h4>
      {action && <span className="text-xs text-mute">{action}</span>}
    </div>
    {children}
  </div>
);

export default function ProductDashboardPreview() {
  return (
    <section id="dashboard" className="scroll-mt-20 border-t border-line/70 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Product Interface"
          title="See Every Localization Project at a Glance"
          description="A preview of the Odevico workspace with sample data. It shows how progress, reviews, and language coverage are presented."
        />

        <AnimatedSection delay={0.15} className="mt-16">
          <div className="overflow-hidden rounded-panel border border-line bg-panel shadow-lift">
            <div className="flex items-center gap-2 border-b border-line/70 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-4 text-xs text-mute">Odevico Workspace</span>
            </div>

            <div className="flex">
              <aside className="hidden w-56 shrink-0 flex-col gap-1 border-r border-line/70 bg-canvas/50 p-4 md:flex">
                <p className="eyebrow px-3 pb-3 pt-2">Workspace</p>
                {navItems.map((item) => (
                  <span
                    key={item.label}
                    className={cn(
                      'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm',
                      item.active ? 'bg-raised text-paper' : 'text-mute'
                    )}
                  >
                    <item.icon className={cn('h-4 w-4', item.active && 'text-accent')} />
                    {item.label}
                  </span>
                ))}
              </aside>

              <div className="min-w-0 flex-1 space-y-6 p-5 sm:p-8">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-eyebrow text-mute">Overview</p>
                    <h3 className="mt-2 font-display text-2xl font-medium text-paper">Localization Dashboard</h3>
                  </div>
                  <span className="rounded-full border border-line px-4 py-1.5 text-xs text-mute">This month</span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
                  {dashboardKpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl border border-line/70 bg-card p-4 sm:p-5">
                      <p className="text-xs text-mute">{kpi.label}</p>
                      <p className="mt-3 font-display text-3xl font-medium text-paper">{kpi.value}</p>
                      <p className="mt-2 text-xs text-mute">{kpi.delta}</p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 xl:grid-cols-3">
                  <Panel title="Recent projects" action={`${dashboardProjects.length} shown`} className="xl:col-span-2">
                    <div className="-mx-2 overflow-x-auto">
                      <table className="w-full min-w-[520px] text-left text-sm">
                        <thead className="text-xs uppercase tracking-eyebrow text-mute">
                          <tr>
                            <th className="px-2 pb-3 font-medium">Project</th>
                            <th className="px-2 pb-3 font-medium">Source</th>
                            <th className="px-2 pb-3 font-medium">Targets</th>
                            <th className="px-2 pb-3 font-medium">Status</th>
                            <th className="px-2 pb-3 font-medium">Progress</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-line/70">
                          {dashboardProjects.map((project) => (
                            <tr key={project.name} className="transition-colors hover:bg-raised/50">
                              <td className="px-2 py-3.5">
                                <span className="block text-paper">{project.name}</span>
                                <span className="text-xs text-mute">Due {project.deadline}</span>
                              </td>
                              <td className="px-2 py-3.5 text-mute">{project.source}</td>
                              <td className="px-2 py-3.5 text-paper/90">{project.targets}</td>
                              <td className="px-2 py-3.5">
                                <span className={cn('rounded-full border px-2.5 py-1 text-xs', statusStyles[project.status])}>
                                  {project.status}
                                </span>
                              </td>
                              <td className="px-2 py-3.5">
                                <div className="flex items-center gap-3">
                                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-raised">
                                    <motion.div
                                      className="h-full rounded-full bg-paper/80"
                                      initial={{ width: 0 }}
                                      whileInView={{ width: `${project.progress}%` }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                  </div>
                                  <span className="text-xs text-mute">{project.progress}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Panel>

                  <Panel title="Language coverage" action="Share of content">
                    <ul className="space-y-4">
                      {languageCoverage.map((lang) => (
                        <li key={lang.code}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-paper/90">
                              {lang.language} <span className="text-xs text-mute">{lang.code}</span>
                            </span>
                            <span className="text-xs text-mute">{lang.percent}%</span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-raised">
                            <motion.div
                              className="h-full rounded-full bg-accent"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${lang.percent}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Panel>
                </div>

                <div className="grid gap-4 xl:grid-cols-3">
                  <Panel title="Workflow progress" action={`${totalStageItems} open items`}>
                    <div className="flex h-3 overflow-hidden rounded-full bg-raised">
                      {workflowBreakdown.map((item, index) => (
                        <motion.div
                          key={item.stage}
                          className={cn('h-full', segmentColors[index])}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.count / totalStageItems) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                      ))}
                    </div>
                    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-mute">
                      {workflowBreakdown.map((item, index) => (
                        <li key={item.stage} className="flex items-center justify-between gap-2">
                          <span className="flex items-center gap-2">
                            <span className={cn('h-2 w-2 rounded-full', segmentColors[index])} />
                            {item.stage}
                          </span>
                          <span className="text-paper/90">{item.count}</span>
                        </li>
                      ))}
                    </ul>
                  </Panel>

                  <Panel title="Recent activity" action="Live feed" className="xl:col-span-2">
                    <ul className="divide-y divide-line/70">
                      {recentActivity.map((entry) => (
                        <li key={entry.text} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-center sm:gap-6">
                          <span className="w-28 shrink-0 text-xs text-mute">{entry.time}</span>
                          <span className="text-sm text-paper/90">{entry.text}</span>
                        </li>
                      ))}
                    </ul>
                  </Panel>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
