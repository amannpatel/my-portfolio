import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion';
import {
  forwardRef,
  useRef,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { cn } from '@/utils/cn';

type Props = Omit<
  HTMLAttributes<HTMLDivElement>,
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
> & {
  children: ReactNode;
  /** Max rotation on either axis in degrees. */
  max?: number;
  /** Rendered highlight overlay for glass-like sheen. */
  sheen?: boolean;
};

/** Card with cursor-tracked 3D tilt and animated sheen. */
export const TiltCard = forwardRef<HTMLDivElement, Props>(function TiltCard(
  { children, className, max = 10, sheen = true, ...rest },
  ref
) {
  const reduce = useReducedMotion();
  const localRef = useRef<HTMLDivElement | null>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const sRx = useSpring(rx, { stiffness: 220, damping: 22, mass: 0.4 });
  const sRy = useSpring(ry, { stiffness: 220, damping: 22, mass: 0.4 });

  const sheenBg = useMotionTemplate`radial-gradient(220px 220px at ${px}% ${py}%, rgba(255,255,255,0.35), transparent 60%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = localRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    ry.set((nx - 0.5) * max * 2);
    rx.set(-(ny - 0.5) * max * 2);
    px.set(nx * 100);
    py.set(ny * 100);
  };

  const handleLeave = () => {
    rx.set(0);
    ry.set(0);
    px.set(50);
    py.set(50);
  };

  return (
    <motion.div
      ref={(node) => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as { current: HTMLDivElement | null }).current = node;
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: sRx,
        rotateY: sRy,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={cn('group relative', className)}
      {...rest}
    >
      {children}
      {sheen && !reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: sheenBg }}
        />
      )}
    </motion.div>
  );
});
