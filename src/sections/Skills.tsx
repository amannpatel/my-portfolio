import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { skillGroups } from '@/data/portfolio';
import { cn } from '@/utils/cn';

const marqueeItems = [
  'Java',
  'Spring Boot',
  'Microservices',
  'PostgreSQL',
  'Redis',
  'Kafka',
  'Docker',
  'Kubernetes',
  'AWS',
  'REST APIs',
  'System Design',
  'TypeScript',
  'React',
  'Distributed Systems',
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-64 max-w-4xl bg-[radial-gradient(ellipse_at_center,rgba(124,92,255,0.15),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Layers size={12} />
                Toolkit
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="heading-lg mt-5 text-white/95">
                A stack tuned for backend depth.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-md text-white/60">
              Curated tools I reach for daily, grouped by where they show up in the
              stack — from language runtimes to data, delivery, and engineering craft.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-6 md:gap-5">
          {skillGroups.map((group, i) => {
            const layout = layoutMap[i] ?? 'md:col-span-3';
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={i * 0.05} className={cn(layout, 'flex')}>
                <SpotlightCard className="flex w-full flex-col p-6 md:p-7">
                  <div
                    className={cn(
                      'relative mb-6 grid h-11 w-11 place-items-center rounded-2xl border border-white/10',
                      'bg-gradient-to-br',
                      group.accent
                    )}
                  >
                    <Icon className="h-5 w-5 text-white" />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]"
                    />
                  </div>

                  <p className="font-display text-lg font-semibold text-white/95">
                    {group.title}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-xs text-white/75 transition hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        {/* Marquee */}
        <div
          className="relative mt-14 overflow-hidden py-6"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <motion.ul
            className="flex items-center gap-10 whitespace-nowrap font-display text-xl text-white/50 md:text-2xl"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
              <li key={`${item}-${idx}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

// Bento layout mapping — mixes wider and narrower cards for varied rhythm.
const layoutMap = [
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-2',
];
