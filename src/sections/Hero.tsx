import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';
import { AuroraBackground } from '@/components/effects/AuroraBackground';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { profile } from '@/data/portfolio';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 md:pt-40 lg:pt-48">
      <AuroraBackground />

      <div className="container relative">
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
          <div className="mt-4 md:mt-6">
            <AnimatedHeading
              text={profile.headline}
              className="heading-lg text-ink-800 dark:text-white/85"
              delay={0.35}
              stagger={0.05}
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.9 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-ink-600 dark:text-white/60 md:text-lg"
        >
          {profile.positioning}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 1.05 }}
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
            href={profile.resumeUrl}
            variant="secondary"
            icon={<Download size={16} />}
            target="_blank"
            rel="noreferrer noopener"
          >
            Download résumé
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

        {/* Floating meta card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 1.15 }}
          className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3"
        >
          {[
            { k: 'Focus', v: 'Backend · Distributed systems' },
            { k: 'Stack', v: 'Java · Spring Boot · Kafka' },
            { k: 'Currently', v: 'Building at Xopuntech' },
          ].map((item, i) => (
            <motion.div
              key={item.k}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25 + i * 0.08 }}
              className="glass rounded-2xl p-5"
            >
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
          transition={{ delay: 1.6, duration: 0.6 }}
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
      </div>
    </section>
  );
}
