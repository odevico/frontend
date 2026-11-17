import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { images } from '@/data/images';
import { dashboardProjects, languageCoverage } from '@/data/dashboard';
import { productWorkflowStages } from '@/data/workflow';

const previewProject = dashboardProjects[0];
const previewStages = productWorkflowStages.slice(1, 5);
const previewLanguages = languageCoverage.slice(0, 4);

function HeroPreviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full rounded-panel border border-line/80 bg-canvas/85 p-6 shadow-lift backdrop-blur-md sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Sample workspace</p>
          <p className="mt-2 font-display text-xl font-medium text-paper">{previewProject.name}</p>
        </div>
        <span className="rounded-full border border-accent/50 px-3 py-1 text-xs text-accent">{previewProject.status}</span>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between text-xs text-mute">
          <span>Production progress</span>
          <span className="text-paper">{previewProject.progress}%</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-raised">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${previewProject.progress}%` }}
            transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <ol className="mt-8 grid grid-cols-4 gap-2">
        {previewStages.map((stage, index) => (
          <li key={stage.id} className="flex flex-col gap-2">
            <span className={`h-1 rounded-full ${index < 2 ? 'bg-paper' : 'bg-line'}`} />
            <span className="text-[11px] leading-tight text-mute">{stage.title}</span>
          </li>
        ))}
      </ol>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {previewLanguages.map((lang) => (
          <div key={lang.code} className="rounded-2xl border border-line/70 bg-card px-4 py-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-paper">{lang.language}</span>
              <span className="text-mute">{lang.code}</span>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-raised">
              <div className="h-full rounded-full bg-paper/80" style={{ width: `${lang.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProductHero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-36 lg:pb-32">
      <img
        src={images.productHero}
        alt="Two professional cameras set up in a dimly lit studio"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-canvas/60 via-canvas/85 to-canvas" />

      <Container className="grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <motion.p
            className="eyebrow text-accent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Odevora by Odevico
          </motion.p>
          <motion.h1
            className="mt-6 text-5xl font-medium leading-[1.05] text-paper sm:text-6xl xl:text-7xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            One Platform.
            <br />
            <span className="text-mute">Every Localization Workflow.</span>
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl text-base leading-[1.5] text-mute sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
          >
            Bring video projects, language versions, translation and subtitle records, dubbing coordination, reviews,
            and delivery into one shared workspace. Give every collaborator a clear next step and every version a
            visible path to approval.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
          >
            <Button href="http://client.odevico.com" showArrow className="h-14 px-8">
              Open Odevora
            </Button>
            <Button to="/product#overview" variant="secondary" className="h-14 px-8">
              Explore the Workflow
            </Button>
          </motion.div>
        </div>

        <div className="lg:col-span-6">
          <HeroPreviewCard />
        </div>
      </Container>
    </section>
  );
}
