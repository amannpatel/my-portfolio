import { motion } from 'framer-motion';
import type { ComponentType, SVGProps } from 'react';
import { cn } from '@/utils/cn';

type Item = { label: string; icon?: ComponentType<SVGProps<SVGSVGElement>> };

type Props = {
  items: Item[];
  className?: string;
  speed?: number;
  direction?: 'left' | 'right';
};

/** A horizontal auto-scrolling band of pill items — great as a section divider. */
export function IconMarquee({ items, className, speed = 45, direction = 'left' }: Props) {
  const target = direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];
  return (
    <div
      className={cn(
        'relative overflow-hidden py-6',
        className
      )}
      style={{
        maskImage:
          'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <motion.ul
        className="flex w-max items-center gap-4 whitespace-nowrap"
        animate={{ x: target }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/60 px-5 py-2 font-display text-sm text-ink-800 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-white/85">
                {Icon && <Icon className="h-4 w-4" />}
                {item.label}
              </span>
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan"
              />
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}
