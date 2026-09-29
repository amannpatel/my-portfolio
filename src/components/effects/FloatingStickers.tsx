import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/utils/cn';

type Sticker = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  rotate?: number;
  color?: string;
  variant: 'spark' | 'bolt' | 'target' | 'play' | 'code' | 'ring' | 'dollar' | 'arrow';
  duration?: number;
  delay?: number;
  parallax?: number;
};

type Props = { stickers: Sticker[]; className?: string };

/** Playful decorative SVG stickers that float, drift, and rotate around a section. */
export function FloatingStickers({ stickers, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      {stickers.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            rotate: s.rotate ?? 0,
          }}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -14, 0],
                  rotate: [(s.rotate ?? 0) - 6, (s.rotate ?? 0) + 6, (s.rotate ?? 0) - 6],
                }
          }
          transition={{
            duration: s.duration ?? 7 + (i % 3),
            delay: s.delay ?? i * 0.35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <StickerIcon
            variant={s.variant}
            size={s.size ?? 40}
            color={s.color ?? 'currentColor'}
          />
        </motion.div>
      ))}
    </div>
  );
}

function StickerIcon({
  variant,
  size,
  color,
}: {
  variant: Sticker['variant'];
  size: number;
  color: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: color,
    strokeWidth: 2.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (variant) {
    case 'spark':
      return (
        <svg {...common}>
          <path d="M24 6v10M24 32v10M6 24h10M32 24h10M12 12l6 6M30 30l6 6M36 12l-6 6M18 30l-6 6" />
        </svg>
      );
    case 'bolt':
      return (
        <svg {...common} fill={color} stroke="none">
          <path d="M27 4L10 26h10l-4 18 17-22H23l4-18z" />
        </svg>
      );
    case 'target':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" />
          <circle cx="24" cy="24" r="11" />
          <circle cx="24" cy="24" r="4" fill={color} />
        </svg>
      );
    case 'play':
      return (
        <svg {...common} fill={color} stroke="none">
          <path d="M14 8v32l28-16z" />
        </svg>
      );
    case 'code':
      return (
        <svg {...common}>
          <path d="M17 14L7 24l10 10M31 14l10 10-10 10M28 10l-8 28" />
        </svg>
      );
    case 'ring':
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="18" />
        </svg>
      );
    case 'dollar':
      return (
        <svg {...common}>
          <path d="M24 6v36M32 14c-2-3-6-4-10-3-4 1-6 5-4 8s6 3 10 4 6 4 4 8-6 5-10 4-8-3-9-6" />
        </svg>
      );
    case 'arrow':
    default:
      return (
        <svg {...common}>
          <path d="M8 24h32M30 12l12 12-12 12" />
        </svg>
      );
  }
}
