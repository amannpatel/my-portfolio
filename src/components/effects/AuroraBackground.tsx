import { cn } from '@/utils/cn';

type Props = { className?: string };

/**
 * Layered aurora + grid + noise. Runs behind the hero section.
 * Tuned to be dimmer on light backgrounds and vibrant in dark.
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
      {/* Ambient washes */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.18),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(124,92,255,0.28),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.16),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.15),transparent_55%)]" />

      {/* Blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-accent-violet/20 blur-[120px] animate-aurora-1 dark:bg-accent-violet/25" />
      <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-accent-cyan/20 blur-[130px] animate-aurora-2 dark:bg-accent-cyan/20" />
      <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent-rose/15 blur-[120px] animate-aurora-1 dark:bg-accent-rose/15" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid bg-grid-light opacity-[0.55] mask-radial-fade dark:bg-grid-dark dark:opacity-[0.35]" />

      {/* Bottom fade into page bg */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgb(var(--bg))]" />
    </div>
  );
}
