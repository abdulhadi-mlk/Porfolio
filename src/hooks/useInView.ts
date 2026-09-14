import { useEffect, useRef } from 'react';

export function useInView(className = 'reveal') {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = el.querySelectorAll(`.${className}`);
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains(className)) observer.observe(el);

    return () => observer.disconnect();
  }, [className]);

  return ref;
}
