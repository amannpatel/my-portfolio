import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles as SparklesIcon } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';
import { services, type Service } from '@/data/portfolio';
import { cn } from '@/utils/cn';

const accentGradient: Record<Service['accent'], string> = {
  violet: 'from-accent-violet/40 via-accent-indigo/25 to-transparent',
  cyan: 'from-accent-cyan/40 via-accent-indigo/25 to-transparent',
  amber: 'from-accent-amber/40 via-accent-rose/25 to-transparent',
  rose: 'from-accent-rose/40 via-accent-violet/25 to-transparent',
};

const accentDot: Record<Service['accent'], string> = {
  violet: 'bg-accent-violet',
  cyan: 'bg-accent-cyan',
  amber: 'bg-accent-amber',
  rose: 'bg-accent-rose',
};

const accentShadow: Record<Service['accent'], string> = {
  violet: 'shadow-[0_40px_100px_-50px_rgba(124,92,255,0.55)]',
  cyan: 'shadow-[0_40px_100px_-50px_rgba(34,211,238,0.5)]',
  amber: 'shadow-[0_40px_100px_-50px_rgba(245,181,68,0.5)]',
  rose: 'shadow-[0_40px_100px_-50px_rgba(244,114,182,0.5)]',
};

export function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="services" className="relative py-28 md:py-36">
      {/* Decorative counter-rotating rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
          className="absolute -right-20 top-1/3 h-[420px] w-[420px] rounded-full border border-dashed border-ink-900/10 dark:border-white/10"
        />
        <motion.div
          animate={reduce ? undefined : { rotate: -360 }}
          transition={{ duration: 100, ease: 'linear', repeat: Infinity }}
          className="absolute -right-10 top-1/3 h-[320px] w-[320px] rounded-full border border-dashed border-ink-900/10 dark:border-white/10"
        />
      </div>

      <div className="container relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">
                <SparklesIcon size={12} />
                Multiple hats
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-5 text-ink-950 dark:text-white/95">
                Three modes.{' '}
                <span className="text-gradient">One brain.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-ink-600 dark:text-white/60">
              How I show up depends on the room — but the way I think doesn’t. I’m
              always building leverage: systems, stories, or campaigns.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <TiltCard
                  className={cn(
                    'group relative h-full overflow-hidden rounded-3xl glass p-6 md:p-8 hover-lift',
                    accentShadow[service.accent]
                  )}
                >
                  {/* Corner glow */}
                  <div
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100',
                      accentGradient[service.accent]
                    )}
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        'grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-glow',
                        accentGradient[service.accent]
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60">
                      <span
                        className={cn('h-1.5 w-1.5 rounded-full', accentDot[service.accent])}
                      />
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <p className="text-xs uppercase tracking-[0.24em] text-ink-500 dark:text-white/40">
                      {service.tagline}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink-950 dark:text-white/95 md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-ink-600 dark:text-white/65">
                      {service.description}
                    </p>
                  </div>

                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {service.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-ink-900/10 bg-ink-900/[0.03] px-3 py-1 text-xs text-ink-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
