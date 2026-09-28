import { cn } from '@/utils/cn';

type Props = { className?: string };

/**
 * Layered animated aurora + grid + noise, used behind the hero section.
 * Pure CSS animations so it stays cheap and respects prefers-reduced-motion.
 */
export function AuroraBackground({ className }: Props) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden noise',
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.15),transparent_55%)]" />

      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent-violet/25 blur-[120px] animate-aurora-1" />
      <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-accent-cyan/20 blur-[130px] animate-aurora-2" />
      <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent-rose/15 blur-[120px] animate-aurora-1" />

      <div className="absolute inset-0 bg-grid bg-grid-dark opacity-[0.35] mask-radial-fade dark:opacity-[0.35]" />
      <div className="absolute inset-0 hidden bg-grid bg-grid-light opacity-[0.6] mask-radial-fade light:block" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--bg))]" />
    </div>
  );
}
