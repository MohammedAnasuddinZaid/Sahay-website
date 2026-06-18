import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './useReducedMotion.js';

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(selector = '[data-local-reveal]', options = {}) {
  const scope = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: reducedMotion ? 0 : options.y ?? 32,
            clipPath: options.clip ?? 'inset(0 0 16% 0)',
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: 'inset(0 0 0% 0)',
            delay: reducedMotion ? 0 : index * (options.stagger ?? 0.08),
            duration: reducedMotion ? 0.01 : options.duration ?? 0.9,
            ease: options.ease ?? 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: options.start ?? 'top 82%',
              once: true,
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [options.clip, options.duration, options.ease, options.stagger, options.start, options.y, reducedMotion, selector]);

  return scope;
}
