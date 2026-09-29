import { motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  count?: number;
  className?: string;
  seed?: number;
};

/** Deterministic pseudo-random sparkles that gently pulse. */
export function SparkleField({ count = 24, className, seed = 42 }: Props) {
  const reduce = useReducedMotion();

  const dots = useMemo(() => {
    // Mulberry32 for stable deterministic positions per seed
    let s = seed;
    const rnd = () => {
      s |= 0;
      s = (s + 0x6d2b79f5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return Array.from({ length: count }, () => ({
      left: rnd() * 100,
      top: rnd() * 100,
      size: 2 + rnd() * 3,
      delay: rnd() * 4,
      duration: 3 + rnd() * 3,
    }));
  }, [count, seed]);

  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent-violet dark:bg-white"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            boxShadow: '0 0 8px currentColor',
          }}
          animate={
            reduce
              ? undefined
              : {
                  opacity: [0.15, 0.9, 0.15],
                  scale: [0.9, 1.2, 0.9],
                }
          }
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
