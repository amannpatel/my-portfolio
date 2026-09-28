import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
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
  glow?: boolean;
  interactive?: boolean;
};

export const SpotlightCard = forwardRef<HTMLDivElement, Props>(function SpotlightCard(
  { className, children, glow = true, interactive = true, ...rest },
  ref
) {
  const reduce = useReducedMotion();
  const localRef = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);
  const bg = useMotionTemplate`radial-gradient(360px 260px at ${mx}px ${my}px, rgba(124,92,255,0.22), rgba(34,211,238,0.10) 40%, transparent 70%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactive || reduce) return;
    const el = localRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={(node) => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as { current: HTMLDivElement | null }).current = node;
      }}
      onMouseMove={handleMove}
      className={cn(
        'group relative overflow-hidden rounded-3xl glass hover-lift',
        className
      )}
      {...rest}
    >
      {glow && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: bg }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60"
      />
    </motion.div>
  );
});
