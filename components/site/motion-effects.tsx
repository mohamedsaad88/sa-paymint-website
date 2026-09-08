'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Progressive enhancement: content stays visible without JavaScript or motion. */
export function MotionEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (
      preference.matches ||
      !('IntersectionObserver' in window) ||
      !Element.prototype.animate
    )
      return;
    const running = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const animation = entry.target.animate(
            [
              { opacity: 0.72, transform: 'translateY(20px)' },
              { opacity: 1, transform: 'none' },
            ],
            {
              duration: 650,
              delay: Math.min(order++ * 65, 195),
              easing: 'cubic-bezier(.2,.75,.25,1)',
            },
          );
          running.add(animation);
          animation.onfinish = () => running.delete(animation);
        }
      },
      { threshold: 0.12 },
    );
    // Only enhance content below the opening viewport. No hidden CSS states.
    document
      .querySelectorAll(
        'main .section-intro, main .feature-item, main .image-visual, main .editorial-copy, main .service-editorial-row, main .vision-ribbon h2, main .partner-home > div, main .cta-inner',
      )
      .forEach((element) => {
        if (element.getBoundingClientRect().top >= window.innerHeight * 0.9)
          observer.observe(element);
      });
    const stop = () => {
      if (!preference.matches) return;
      observer.disconnect();
      running.forEach((animation) => animation.cancel());
      running.clear();
    };
    preference.addEventListener('change', stop);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', stop);
      running.forEach((animation) => animation.cancel());
    };
  }, [pathname]);
  return null;
}
