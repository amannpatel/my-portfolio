import { Sparkles } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { about } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">
                <Sparkles size={12} />
                {about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-5 text-ink-950 dark:text-white/95">
                {about.title}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-6 leading-relaxed text-ink-600 dark:text-white/60">
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-2">
                {about.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-3 py-1 text-xs text-ink-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {about.stats.map((s) => (
                  <SpotlightCard
                    key={s.label}
                    className="min-h-[140px] p-6 md:min-h-[170px]"
                  >
                    <p className="font-display text-4xl font-semibold text-ink-950 dark:text-white md:text-5xl">
                      {s.value}
                    </p>
                    <p className="mt-3 text-sm text-ink-600 dark:text-white/55 md:text-base">
                      {s.label}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <SpotlightCard className="mt-5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-glow">
                    <Sparkles size={18} />
                  </span>
                  <div>
                    <p className="font-display text-lg text-ink-950 dark:text-white/95">
                      Philosophy
                    </p>
                    <p className="mt-2 text-ink-600 dark:text-white/60">
                      Boring backends are a compliment. I aim for systems that are
                      predictable in production, easy to reason about in review, and
                      calm at 3 AM — because the interesting problems live inside the
                      details.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
