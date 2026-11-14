import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { images } from '@/data/images';

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-24 pt-32 lg:pb-28">
      <motion.img
        src={images.hero}
        alt="Cameraman filming a subject in warm backlight"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-canvas via-canvas/20 to-canvas/50" />

      <Container>
        <motion.p
          className="eyebrow text-accent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          AI-Powered Video Localization
        </motion.p>

        <motion.h1
          className="mt-6 text-5xl font-medium leading-[1.05] text-paper sm:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          Turn Every Video
          <br />
          <span className="text-mute">Into a Global</span>
          <br />
          Story
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-[1.5] text-mute sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          Manage multilingual video production, translation, dubbing, subtitles, and approvals through one centralized
          workspace.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          <Button to="/product" showArrow className="h-14 px-8">
            Explore the Platform
          </Button>
          <Button to="/#features" variant="secondary" className="h-14 px-8">
            Discover Our Capabilities
          </Button>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <a
          href="#highlights"
          aria-label="Scroll to platform highlights"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line/80 bg-canvas/40 text-paper backdrop-blur transition-colors hover:border-accent hover:text-accent"
        >
          <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
