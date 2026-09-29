import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import { cn } from '@/utils/cn';

type Size = 'sm' | 'md' | 'lg' | 'xl';

const sizeMap: Record<Size, { w: string; h: string; pad: string; caption: string }> = {
  sm: { w: 'w-32', h: 'h-40', pad: 'p-2 pb-6', caption: 'text-[10px]' },
  md: { w: 'w-44', h: 'h-56', pad: 'p-2.5 pb-8', caption: 'text-xs' },
  lg: { w: 'w-56', h: 'h-72', pad: 'p-3 pb-10', caption: 'text-sm' },
  xl: { w: 'w-72', h: 'h-96', pad: 'p-3.5 pb-12', caption: 'text-sm' },
};

type Props = {
  src: string;
  alt?: string;
  caption?: string;
  rotate?: number;
  size?: Size;
  className?: string;
  hover?: boolean;
  float?: boolean;
  delay?: number;
  objectPosition?: string;
};

/** White-bordered polaroid-style photo card with optional idle float + hover lift. */
export function PhotoPolaroid({
  src,
  alt = profile.name,
  caption,
  rotate = 0,
  size = 'md',
  className,
  hover = true,
  float = true,
  delay = 0,
  objectPosition = 'center',
}: Props) {
  const reduce = useReducedMotion();
  const dims = sizeMap[size];

  return (
    <motion.div
      style={{ rotate }}
      initial={{ opacity: 0, y: 24, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay }}
      whileHover={reduce || !hover ? undefined : { rotate: rotate * 0.4, y: -8, scale: 1.03 }}
      className={cn(
        'relative inline-block rounded-[10px] bg-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.45),0_2px_6px_rgba(15,23,42,0.08)] dark:shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)]',
        dims.pad,
        className
      )}
    >
      <motion.div
        animate={reduce || !float ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
        className="contents"
      >
        <div className={cn('overflow-hidden rounded-md bg-ink-100', dims.w, dims.h)}>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
            style={{ objectPosition }}
          />
        </div>
        {caption && (
          <div
            className={cn(
              'mt-2 px-1 text-center font-display uppercase tracking-[0.16em] text-ink-500',
              dims.caption
            )}
          >
            {caption}
          </div>
        )}
      </motion.div>
      <span
        aria-hidden
        className="pointer-events-none absolute -top-1 left-1/2 h-4 w-16 -translate-x-1/2 rounded-sm bg-gradient-to-b from-amber-100/90 to-amber-200/60 opacity-70 shadow-sm mix-blend-multiply"
        style={{ transform: 'translateX(-50%) rotate(-3deg)' }}
      />
    </motion.div>
  );
}
