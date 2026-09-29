import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Camera, Instagram, Play, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { IconMarquee } from '@/components/ui/IconMarquee';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { creator, photos } from '@/data/portfolio';
import { cn } from '@/utils/cn';

export function Creator() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section id="creator" ref={sectionRef} className="relative py-28 md:py-36">
      {/* Parallax gradient background */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: bgY }}
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,114,182,0.22),transparent_60%)] blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.2),transparent_60%)] blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(245,181,68,0.18),transparent_60%)] blur-3xl" />
      </motion.div>

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Copy */}
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow">
                <Instagram size={12} />
                {creator.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-5 text-ink-950 dark:text-white/95">
                {creator.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-600 dark:text-white/60 md:text-lg">
                {creator.subtitle}
              </p>
            </Reveal>

            {/* Pillars */}
            <div className="mt-10 space-y-4">
              {creator.pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <Reveal key={pillar.title} delay={0.1 + i * 0.05}>
                    <div className="group flex items-start gap-4 rounded-2xl border border-ink-900/10 bg-white/60 p-4 transition hover:border-ink-900/20 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.05]">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-rose/40 to-accent-violet/30 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-base font-semibold text-ink-950 dark:text-white/95">
                          {pillar.title}
                        </p>
                        <p className="mt-1 text-sm text-ink-600 dark:text-white/60">
                          {pillar.description}
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden
                        size={16}
                        className="ml-auto shrink-0 text-ink-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ink-950 dark:text-white/40 dark:group-hover:text-white"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* CTAs */}
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {creator.ctas.map((cta) => (
                  <a
                    key={cta.href}
                    href={cta.href}
                    target={cta.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    className={cn(
                      'group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all',
                      cta.kind === 'primary'
                        ? 'bg-[linear-gradient(120deg,#f472b6,#7c5cff_50%,#22d3ee)] text-white shadow-glow hover:shadow-glow-cyan'
                        : 'border border-ink-900/10 bg-white/70 text-ink-800 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80 dark:hover:bg-white/[0.08]'
                    )}
                  >
                    {cta.label}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Instagram-style card */}
          <div className="lg:col-span-6">
            <motion.div style={reduce ? undefined : { y: cardY }}>
              <Reveal delay={0.1}>
                <TiltCard
                  className="relative rounded-[32px] overflow-hidden"
                  max={7}
                >
                  <SpotlightCard className="relative overflow-hidden p-0">
                    {/* Full-bleed photo stage */}
                    <div className="relative h-[420px] overflow-hidden md:h-[480px]">
                      <motion.img
                        src={photos.instagramBanner}
                        alt="Aman — creator portrait"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                        style={{ objectPosition: '50% 35%' }}
                        initial={{ scale: 1.08 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-15%' }}
                        transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
                      />

                      {/* Color-graded gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent-violet/35 via-transparent to-accent-rose/25 mix-blend-overlay" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_55%)]" />

                      {/* Floating sticker icons */}
                      <FloatingBadge
                        icon={<Play size={16} />}
                        style={{ top: '10%', left: '8%' }}
                        rotate={-12}
                      />
                      <FloatingBadge
                        icon={<Camera size={16} />}
                        style={{ top: '14%', right: '10%' }}
                        rotate={10}
                      />
                      <FloatingBadge
                        icon={<Sparkles size={16} />}
                        style={{ top: '48%', left: '6%' }}
                        rotate={6}
                      />

                      {/* Top handle chip */}
                      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white backdrop-blur">
                          <Instagram size={12} />
                          Creator
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Live
                        </span>
                      </div>

                      {/* Bottom overlay content */}
                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                        <p className="font-display text-4xl font-semibold leading-tight md:text-5xl">
                          {creator.handle}
                        </p>
                        <p className="mt-2 max-w-sm text-sm text-white/85">
                          Building in code + in public — reels, carousels, and
                          engineering stories.
                        </p>
                      </div>
                    </div>

                    {/* Bottom sheet */}
                    <div className="relative flex items-center justify-between gap-4 p-5 md:p-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-ink-500 dark:text-white/45">
                          Latest series
                        </p>
                        <p className="mt-1 font-display text-base font-semibold text-ink-950 dark:text-white/95">
                          Engineering × Personal brand
                        </p>
                      </div>
                      <a
                        href={creator.handleUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ink-900 dark:bg-white dark:text-ink-950 dark:hover:bg-white/90"
                      >
                        Open profile
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </a>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            </motion.div>
          </div>
        </div>

        {/* Toolkit marquee */}
        <Reveal delay={0.2}>
          <div className="mt-16">
            <p className="mb-4 text-center text-xs uppercase tracking-[0.24em] text-ink-500 dark:text-white/45">
              Creator toolkit
            </p>
            <IconMarquee items={creator.toolkit.map((t) => ({ label: t }))} speed={35} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingBadge({
  icon,
  style,
  rotate,
}: {
  icon: React.ReactNode;
  style: React.CSSProperties;
  rotate: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className="absolute grid h-9 w-9 place-items-center rounded-xl bg-white/90 text-ink-900 shadow-lg backdrop-blur"
      style={{ ...style, rotate }}
      animate={
        reduce
          ? undefined
          : { y: [0, -8, 0], rotate: [rotate - 5, rotate + 5, rotate - 5] }
      }
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {icon}
    </motion.span>
  );
}
