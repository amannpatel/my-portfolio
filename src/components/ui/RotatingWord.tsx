import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

type Props = {
  words: string[];
  className?: string;
  interval?: number;
};

/** A single-slot headline word that cycles through the given roles. */
export function RotatingWord({ words, className, interval = 2400 }: Props) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [reduce, words.length, interval]);

  if (reduce) {
    return <span className={cn('inline-block', className)}>{words[0]}</span>;
  }

  return (
    <span className={cn('relative inline-block align-baseline', className)}>
      <span aria-hidden className="invisible whitespace-nowrap">
        {longest(words)}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
          animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute inset-0 flex items-center whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function longest(words: string[]): string {
  return words.reduce((a, b) => (b.length > a.length ? b : a), '');
}
