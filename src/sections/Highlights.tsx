import { Award } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { highlights } from '@/data/portfolio';
import { cn } from '@/utils/cn';

/**
 * Bento-style grid mixing awards, certifications, and craft highlights.
 * Uses varied column spans to avoid a uniform grid of identical tiles.
 */
const spanMap = [
  'md:col-span-3 md:row-span-2',
  'md:col-span-3',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-3',
];

export function Highlights() {
  return (
    <section id="highlights" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 mx-auto h-72 max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Award size={12} />
                Highlights & recognition
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-5 text-white/95">
                A few things I’m proud of.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-white/60">
              Certifications, community work, and moments of impact that shaped how I
              build.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-6 md:auto-rows-[minmax(160px,auto)] md:gap-5">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            const span = spanMap[i] ?? 'md:col-span-2';
            const featured = i === 0;
            return (
              <Reveal key={h.title} delay={i * 0.04} className={cn(span, 'flex')}>
                <SpotlightCard
                  className={cn(
                    'flex w-full flex-col justify-between p-6 md:p-7',
                    featured &&
                      'bg-gradient-to-br from-accent-violet/10 via-transparent to-accent-cyan/10'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={cn(
                        'grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/90',
                        featured &&
                          'bg-gradient-to-br from-accent-violet/40 to-accent-cyan/30'
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
                      {h.tag}
                    </span>
                  </div>

                  <div className={cn('mt-6', featured && 'md:mt-14')}>
                    <p
                      className={cn(
                        'font-display font-semibold text-white/95',
                        featured ? 'text-2xl md:text-3xl' : 'text-lg'
                      )}
                    >
                      {h.title}
                    </p>
                    <p
                      className={cn(
                        'mt-2 text-white/60',
                        featured ? 'text-base md:text-lg max-w-lg' : 'text-sm'
                      )}
                    >
                      {h.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
