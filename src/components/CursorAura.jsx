import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

export default function CursorAura() {
  const aura = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;

    const update = (event) => {
      if (!aura.current) return;
      aura.current.animate(
        {
          transform: `translate(${event.clientX - 16}px, ${event.clientY - 16}px)`,
        },
        { duration: 460, fill: 'forwards', easing: 'cubic-bezier(.2,.9,.2,1)' },
      );
    };

    const grow = () => aura.current?.classList.add('cursor-aura--active');
    const shrink = () => aura.current?.classList.remove('cursor-aura--active');

    window.addEventListener('pointermove', update);
    document.querySelectorAll('a, button, input, textarea, select').forEach((node) => {
      node.addEventListener('pointerenter', grow);
      node.addEventListener('pointerleave', shrink);
    });

    return () => {
      window.removeEventListener('pointermove', update);
      document.querySelectorAll('a, button, input, textarea, select').forEach((node) => {
        node.removeEventListener('pointerenter', grow);
        node.removeEventListener('pointerleave', shrink);
      });
    };
  }, [reducedMotion]);

  return <div ref={aura} className="cursor-aura" aria-hidden="true" />;
}
