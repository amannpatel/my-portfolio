import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-[rgb(var(--bg))]">
      <div className="container flex flex-col items-start justify-between gap-8 py-12 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-glow">
            <span className="font-display text-base font-semibold leading-none">A</span>
          </span>
          <div>
            <p className="font-display text-sm font-semibold">{profile.name}</p>
            <p className="text-xs text-white/50">
              {profile.role} · {profile.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Mail size={16} />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Linkedin size={16} />
          </a>
        </div>

        <p className="text-xs text-white/40">
          © {year} {profile.name}. Designed & engineered with care.
        </p>
      </div>
    </footer>
  );
}
