import { Briefcase, GraduationCap } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { education, experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Briefcase size={12} />
                Experience
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-5 text-ink-950 dark:text-white/95">
                Building in production, shipping with intent.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-ink-600 dark:text-white/60">
              A snapshot of the work — the systems, teams, and problems I’ve been
              closest to.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {/* Timeline spine */}
          <div
            aria-hidden
            className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-ink-900/20 to-transparent dark:via-white/20 md:block"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div className="relative md:pl-16">
                  {/* Node */}
                  <div
                    aria-hidden
                    className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center md:flex"
                  >
                    <span className="absolute inset-0 rounded-full bg-accent-violet/25 blur-md" />
                    <span className="relative grid h-3 w-3 place-items-center rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan shadow-glow" />
                  </div>

                  <SpotlightCard className="p-6 md:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-ink-500 dark:text-white/50">
                          {exp.duration}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-ink-950 dark:text-white/95 md:text-3xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-ink-600 dark:text-white/70">
                          <span className="text-ink-900 dark:text-white/90">
                            {exp.company}
                          </span>{' '}
                          · {exp.location}
                        </p>
                        {exp.client && (
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-400 dark:text-white/40">
                            Client · {exp.client}
                          </p>
                        )}
                      </div>
                      <div className="hidden flex-wrap gap-2 md:flex md:max-w-[45%]">
                        {exp.tech.slice(0, 6).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-3 py-1 text-xs text-ink-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="mt-5 text-ink-600 dark:text-white/70">{exp.summary}</p>

                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r.slice(0, 24)}
                          className="flex gap-3 text-sm text-ink-600 dark:text-white/65"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2 md:hidden">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-3 py-1 text-xs text-ink-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </Reveal>
            ))}

            {/* Education entry */}
            <Reveal delay={0.05}>
              <div className="relative md:pl-16">
                <div
                  aria-hidden
                  className="absolute left-0 top-6 hidden h-8 w-8 items-center justify-center md:flex"
                >
                  <span className="absolute inset-0 rounded-full bg-accent-cyan/25 blur-md" />
                  <span className="relative grid h-3 w-3 place-items-center rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet shadow-glow-cyan" />
                </div>

                <SpotlightCard className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-ink-500 dark:text-white/50">
                        {education.duration}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-ink-950 dark:text-white/95 md:text-3xl">
                        {education.degree}
                      </h3>
                      <p className="mt-1 text-ink-600 dark:text-white/70">
                        {education.institution} · {education.score}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-white/50">
                      <GraduationCap size={14} /> Education
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {education.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-3 py-1 text-xs text-ink-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
