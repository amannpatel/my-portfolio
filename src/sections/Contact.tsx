import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { contact, profile } from '@/data/portfolio';

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
};

export function Contact() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-grid bg-grid-dark opacity-30 mask-radial-fade" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="eyebrow justify-center">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {contact.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="heading-xl mt-6 text-gradient">{contact.title}</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-white/60 md:text-lg">
              {contact.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={reduce ? undefined : { scale: 1.02 }}
              className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 font-display text-lg font-medium text-ink-950 shadow-glow transition-shadow hover:shadow-glow-cyan md:text-xl"
            >
              {profile.email}
              <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-950 text-white">
                <ArrowUpRight size={16} />
              </span>
            </motion.a>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3 md:gap-5">
          {contact.actions.map((action, i) => {
            const Icon = iconMap[action.kind];
            return (
              <Reveal key={action.href} delay={0.05 + i * 0.05}>
                <SpotlightCard className="flex h-full items-center justify-between gap-4 p-5">
                  <a
                    href={action.href}
                    target={action.kind === 'email' ? undefined : '_blank'}
                    rel="noreferrer noopener"
                    className="flex flex-1 items-center gap-4"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-violet/40 to-accent-cyan/30 text-white">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                        {action.kind}
                      </p>
                      <p className="mt-1 truncate font-display text-base text-white/90">
                        {action.label}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="ml-auto text-white/40 transition group-hover:text-white"
                      size={16}
                    />
                  </a>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 text-sm text-white/50">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> {profile.location} · {profile.availability}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
