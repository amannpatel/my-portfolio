import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink-900/10 bg-[rgb(var(--bg))] dark:border-white/[0.06]">
      <div className="container flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-glow">
            <span className="font-display text-base font-semibold leading-none">A</span>
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-ink-900 dark:text-white/95">
              {profile.name}
            </p>
            <p className="text-xs text-ink-500 dark:text-white/50">
              Engineer · Creator · Marketer · {profile.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Aman Patel"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-ink-900/[0.03] text-ink-700 transition hover:bg-ink-900/[0.06] hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.socials.instagram}
            target="_blank"
            rel="me noreferrer noopener"
            aria-label="Aman Patel on Instagram (@amann.kabir)"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-ink-900/[0.03] text-ink-700 transition hover:bg-ink-900/[0.06] hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            <Instagram size={16} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="me noreferrer noopener"
            aria-label="Aman Patel on GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-ink-900/[0.03] text-ink-700 transition hover:bg-ink-900/[0.06] hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="me noreferrer noopener"
            aria-label="Aman Patel on LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-ink-900/[0.03] text-ink-700 transition hover:bg-ink-900/[0.06] hover:text-ink-950 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <p className="text-xs text-ink-500 dark:text-white/40">
          © {year} {profile.name}. Made with obsession & espresso.
        </p>
      </div>
    </footer>
  );
}
