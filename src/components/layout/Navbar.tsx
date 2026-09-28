import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, profile } from '@/data/portfolio';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

export function Navbar() {
  const { scrolled } = useScrollProgress(24);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#about');

  useEffect(() => {
    const ids = navigation.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6',
          'transition-[padding] duration-500'
        )}
      >
        <nav
          className={cn(
            'relative flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 md:px-5 md:py-3',
            'transition-[background,border,box-shadow,backdrop-filter] duration-500',
            scrolled
              ? 'glass-strong shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]'
              : 'border border-white/[0.06] bg-white/[0.02] backdrop-blur-md'
          )}
          aria-label="Primary"
        >
          {/* subtle top highlight */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-50"
          />

          <a
            href="#top"
            className="group flex items-center gap-2 text-sm font-medium"
            aria-label={`${profile.name} — home`}
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-glow">
              <span className="font-display text-[15px] font-semibold leading-none">A</span>
              <span
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_45%)]"
              />
            </span>
            <span className="hidden sm:inline text-white/90">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-3.5 py-1.5 text-sm transition-colors',
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ y: -8, opacity: 0, rotate: -30 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 8, opacity: 0, rotate: 30 }}
                  transition={{ duration: 0.25 }}
                  className="grid place-items-center"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-950 shadow-glow transition-shadow hover:shadow-glow-cyan md:inline-flex"
            >
              Get in touch
            </a>

            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/80 md:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink-950/70 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative m-4 rounded-3xl glass-strong p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg font-semibold">Menu</span>
                <button
                  type="button"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03]"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={16} />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-base text-white/80 hover:bg-white/[0.04] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span className="text-white/30">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-ink-950"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
