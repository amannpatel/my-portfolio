import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

/**
 * A soft mouse-following spotlight rendered as a fixed overlay.
 * Sits above content but is fully click-through.
 */
export function MouseSpotlight() {
  const reduce = useReducedMotion();
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const bg = useMotionTemplate`radial-gradient(360px 360px at ${x}px ${y}px, rgba(124,92,255,0.16), rgba(34,211,238,0.08) 40%, transparent 70%)`;

  useEffect(() => {
    if (reduce) return;
    const handler = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, [reduce, x, y]);

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] hidden md:block"
      style={{ backgroundImage: bg }}
    />
  );
}
