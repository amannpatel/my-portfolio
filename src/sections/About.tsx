import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { FloatingStickers } from '@/components/effects/FloatingStickers';
import { PhotoPolaroid } from '@/components/ui/PhotoPolaroid';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { about, photos } from '@/data/portfolio';

export function About() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const rightY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const stickerY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36">
      <motion.div
        style={reduce ? undefined : { y: stickerY }}
        aria-hidden
        className="absolute inset-0"
      >
        <FloatingStickers
          stickers={[
            { variant: 'ring', top: '8%', right: '6%', size: 84, rotate: 0, color: '#7c5cff' },
            { variant: 'spark', bottom: '10%', left: '3%', size: 32, rotate: 14, color: '#22d3ee' },
            { variant: 'arrow', top: '30%', left: '46%', size: 28, rotate: -8, color: '#f5b544' },
          ]}
        />
      </motion.div>

      <div className="container relative">
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

          <motion.div
            style={reduce ? undefined : { y: rightY }}
            className="lg:col-span-7"
          >
            {/* Photo stack — two overlapping polaroids */}
            <Reveal delay={0.05}>
              <div className="relative mb-6 flex items-start justify-center gap-3 md:mb-8 md:gap-6">
                <div className="translate-y-4">
                  <PhotoPolaroid
                    src={photos.aboutPrimary}
                    caption="Off duty"
                    rotate={-8}
                    size="md"
                    delay={0.1}
                  />
                </div>
                <div className="-translate-y-2">
                  <PhotoPolaroid
                    src={photos.aboutSecondary}
                    caption="Behind the reel"
                    rotate={7}
                    size="md"
                    delay={0.25}
                  />
                </div>
              </div>
            </Reveal>

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
                      Boring backends are a compliment. Loud content is optional but
                      helpful. I aim for systems — code, content, campaigns — that
                      compound quietly while I sleep, and are still calm at 3 AM.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
