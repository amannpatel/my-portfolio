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
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost';

type Props = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  | 'onDrag'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
> & {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  magnetic?: boolean;
};

const base =
  'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 will-change-transform focus-visible:outline-none';

const variants: Record<Variant, string> = {
  primary:
    'text-white shadow-glow bg-[linear-gradient(120deg,#7c5cff,#5c78ff_45%,#22d3ee)] hover:shadow-glow-cyan',
  secondary:
    'text-white/90 glass hover:text-white',
  ghost:
    'text-white/70 hover:text-white bg-white/[0.02] border border-white/10 hover:border-white/20',
};

export const MagneticButton = forwardRef<HTMLAnchorElement, Props>(function MagneticButton(
  { children, className, variant = 'primary', icon, magnetic = true, ...rest },
  ref
) {
  const reduce = useReducedMotion();
  const localRef = useRef<HTMLAnchorElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 250, damping: 20, mass: 0.4 });
  const sy = useSpring(my, { stiffness: 250, damping: 20, mass: 0.4 });

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(140px 90px at ${px}% ${py}%, rgba(255,255,255,0.35), transparent 60%)`;

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = localRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    if (!reduce && magnetic) {
      mx.set(cx * 0.25);
      my.set(cy * 0.25);
    }
    px.set(((e.clientX - rect.left) / rect.width) * 100);
    py.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
    px.set(50);
    py.set(50);
  };

  return (
    <motion.a
      ref={(node) => {
        localRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as { current: HTMLAnchorElement | null }).current = node;
      }}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(base, variants[variant], className)}
      {...rest}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ backgroundImage: glow, mixBlendMode: 'overlay' }}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon}
      </span>
    </motion.a>
  );
});
