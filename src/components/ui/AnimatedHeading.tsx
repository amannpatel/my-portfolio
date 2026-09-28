import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/utils/cn';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { y: '110%' },
  visible: {
    y: '0%',
    transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] },
  },
};

export function AnimatedHeading({ text, className, delay = 0, stagger = 0.08 }: Props) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  if (reduce) {
    return <h1 className={cn(className)}>{text}</h1>;
  }

  return (
    <motion.h1
      className={cn(className)}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={stagger}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden align-baseline pb-[0.12em]"
        >
          <motion.span variants={word} className="inline-block will-change-transform">
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}
