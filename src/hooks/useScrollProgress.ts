import { useEffect, useState } from 'react';

export function useScrollProgress(threshold = 20): { scrolled: boolean; y: number } {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const handler = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { scrolled: y > threshold, y };
}
