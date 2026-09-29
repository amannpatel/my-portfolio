import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { useRef } from 'react';
import { AuroraBackground } from '@/components/effects/AuroraBackground';
import { FloatingStickers } from '@/components/effects/FloatingStickers';
import { SparkleField } from '@/components/effects/SparkleField';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { RotatingWord } from '@/components/ui/RotatingWord';
import { profile } from '@/data/portfolio';

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const auroraY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const stickerY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.3]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-32 md:pt-40 lg:pt-48"
    >
      <motion.div
        style={reduce ? undefined : { y: auroraY }}
        className="absolute inset-0"
      >
        <AuroraBackground />
      </motion.div>

      <SparkleField count={26} seed={17} className="opacity-70" />

      {/* Playful floating stickers */}
      <motion.div
        style={reduce ? undefined : { y: stickerY }}
        aria-hidden
        className="absolute inset-0"
      >
        <FloatingStickers
          className="text-accent-violet dark:text-accent-violet"
          stickers={[
            { variant: 'spark', top: '12%', left: '6%', size: 44, rotate: -12, color: '#7c5cff' },
            { variant: 'bolt', top: '22%', right: '7%', size: 52, rotate: 14, color: '#22d3ee' },
            { variant: 'target', bottom: '20%', left: '4%', size: 68, rotate: 8, color: '#f5b544' },
            { variant: 'play', bottom: '28%', right: '10%', size: 46, rotate: -18, color: '#f472b6' },
            { variant: 'ring', top: '52%', left: '48%', size: 90, rotate: 0, color: '#7c5cff' },
            { variant: 'code', top: '60%', right: '22%', size: 40, rotate: 20, color: '#22d3ee' },
            { variant: 'arrow', top: '34%', left: '38%', size: 36, rotate: -8, color: '#f472b6' },
            { variant: 'dollar', bottom: '10%', right: '32%', size: 42, rotate: 12, color: '#f5b544' },
          ]}
        />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { y: heroY, opacity: heroOpacity }}
        className="container relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
          </span>
          <span className="eyebrow">
            {profile.availability} · {profile.location}
          </span>
        </motion.div>

        <div className="mt-8 max-w-5xl">
          <AnimatedHeading
            text={`Hi, I'm ${profile.firstName}.`}
            className="heading-xl text-gradient"
            delay={0.1}
          />

          {/* Multi-hyphenate rotating role line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.6 }}
            className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-display text-2xl font-medium leading-tight text-ink-700 dark:text-white/75 md:text-3xl"
          >
            <span>I&apos;m a</span>
            <span className="relative inline-flex overflow-hidden rounded-lg bg-gradient-to-r from-accent-violet/15 via-accent-cyan/15 to-accent-rose/15 px-3 py-1 text-ink-950 dark:text-white">
              <RotatingWord words={profile.roles} className="font-display" />
            </span>
            <span>based in {profile.location.split(',')[0]}.</span>
          </motion.div>

          <div className="mt-6 md:mt-8">
            <AnimatedHeading
              text={profile.headline}
              className="heading-lg text-ink-800 dark:text-white/85"
              delay={0.85}
              stagger={0.05}
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 1.2 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-white/60 md:text-lg"
        >
          {profile.positioning}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 1.35 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton
            href="#projects"
            variant="primary"
            icon={<ArrowUpRight size={16} />}
          >
            See my work
          </MagneticButton>
          <MagneticButton
            href={profile.socials.instagram}
            variant="secondary"
            icon={<ArrowUpRight size={16} />}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="inline-flex items-center gap-2">
              <Instagram size={14} />
              {profile.instagramHandle}
            </span>
          </MagneticButton>
          <MagneticButton
            href={profile.resumeUrl}
            variant="ghost"
            icon={<Download size={16} />}
            target="_blank"
            rel="noreferrer noopener"
          >
            Résumé
          </MagneticButton>

          <div className="ml-1 flex items-center gap-1.5">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-ink-900/[0.02] text-ink-700 transition hover:bg-ink-900/[0.06] hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.02] dark:text-white/70 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-900/10 bg-ink-900/[0.02] text-ink-700 transition hover:bg-ink-900/[0.06] hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.02] dark:text-white/70 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </motion.div>

        {/* Meta cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 1.45 }}
          className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3"
        >
          {[
            { k: 'Currently', v: 'Building at Xopuntech', accent: 'from-accent-violet/25 to-transparent' },
            { k: 'Creating', v: `Reels & carousels — ${profile.instagramHandle}`, accent: 'from-accent-rose/25 to-transparent' },
            { k: 'Running', v: 'Meta ad campaigns for creators', accent: 'from-accent-amber/25 to-transparent' },
          ].map((item, i) => (
            <motion.div
              key={item.k}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 + i * 0.08 }}
              whileHover={reduce ? undefined : { y: -4 }}
              className="glass relative overflow-hidden rounded-2xl p-5"
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.accent} blur-2xl`}
              />
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-500 dark:text-white/40">
                {item.k}
              </p>
              <p className="mt-2 font-display text-lg text-ink-900 dark:text-white/90">
                {item.v}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-ink-500 dark:text-white/40 md:mt-28"
        >
          <motion.span
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="grid h-8 w-8 place-items-center rounded-full border border-ink-900/10 dark:border-white/10"
          >
            <ArrowDown size={14} />
          </motion.span>
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
