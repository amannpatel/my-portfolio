import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Boxes, ExternalLink, Github } from 'lucide-react';
import { ProjectArt } from '@/components/ui/ProjectArt';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { projects, type Project } from '@/data/portfolio';
import { cn } from '@/utils/cn';

const accentBg: Record<Project['accent'], string> = {
  violet: 'from-accent-violet/40 via-accent-indigo/25 to-transparent',
  cyan: 'from-accent-cyan/40 via-accent-indigo/25 to-transparent',
  amber: 'from-accent-amber/40 via-accent-rose/25 to-transparent',
};

const accentRing: Record<Project['accent'], string> = {
  violet: 'shadow-[0_60px_120px_-50px_rgba(124,92,255,0.45)]',
  cyan: 'shadow-[0_60px_120px_-50px_rgba(34,211,238,0.4)]',
  amber: 'shadow-[0_60px_120px_-50px_rgba(245,181,68,0.35)]',
};

export function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Boxes size={12} />
                Selected work
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-5 text-ink-950 dark:text-white/95">
                Projects I care about.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-ink-600 dark:text-white/60">
              A few systems where I could stretch the fundamentals — distributed
              coordination, secure APIs, and services designed to stay honest under
              load.
            </p>
          </Reveal>
        </div>

        <div className="space-y-8 md:space-y-10">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.05}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const reverse = index % 2 === 1;
  return (
    <SpotlightCard
      className={cn('overflow-hidden p-0', accentRing[project.accent])}
    >
      <div className="grid overflow-hidden md:grid-cols-12">
        {/* Visual side — always sits on a coloured gradient, so text stays white in both themes */}
        <div
          className={cn(
            'relative h-72 min-h-full sm:h-80 md:h-auto md:col-span-5',
            reverse ? 'md:order-2' : ''
          )}
        >
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br',
              accentBg[project.accent]
            )}
          />
          <div className="absolute inset-0 bg-grid bg-grid-dark opacity-30 mask-radial-fade" />

          <motion.div
            aria-hidden
            animate={reduce ? undefined : { x: [0, 20, 0], y: [0, -12, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={reduce ? undefined : { x: [0, -14, 0], y: [0, 16, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl"
          />

          {/* Themed illustration */}
          <ProjectArt variant={project.art} />

          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent mix-blend-overlay"
          />
        </div>

        {/* Content side */}
        <div
          className={cn(
            'flex flex-col justify-between p-6 md:col-span-7 md:p-10',
            reverse ? 'md:order-1' : ''
          )}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-ink-500 dark:text-white/40">
              {project.tagline}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950 dark:text-white/95 md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-4 leading-relaxed text-ink-600 dark:text-white/65">
              {project.description}
            </p>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {project.contributions.map((c) => (
                <li
                  key={c.slice(0, 20)}
                  className="flex gap-3 text-sm text-ink-600 dark:text-white/65"
                >
                  <span
                    aria-hidden
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-500 dark:bg-white/60"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-3 py-1 text-xs text-ink-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex items-center gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-4 py-2 text-sm text-ink-700 transition hover:border-ink-900/20 hover:bg-ink-900/[0.06] hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80 dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:hover:text-white"
                  >
                    {link.label.toLowerCase().includes('github') ? (
                      <Github size={14} />
                    ) : (
                      <ExternalLink size={14} />
                    )}
                    {link.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
