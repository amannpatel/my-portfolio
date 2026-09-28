import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { cn } from '@/utils/cn';

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'article' | 'header' | 'span';
  once?: boolean;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = 'div',
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y, filter: reduce ? 'none' : 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
