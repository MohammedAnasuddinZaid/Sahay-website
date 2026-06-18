import { forwardRef, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion.js';

const MagneticButton = forwardRef(function MagneticButton(
  { children, href, type = 'button', variant = 'primary', icon = true, className = '', onClick, ...props },
  forwardedRef,
) {
  const localRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const ref = forwardedRef || localRef;
  const Component = href ? 'a' : 'button';

  const handleMove = (event) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.16}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };

  const styles =
    variant === 'primary'
      ? 'bg-ember text-ink shadow-ember hover:bg-gold'
      : 'border border-cream/25 bg-cream/8 text-cream hover:border-cream/60 hover:bg-cream/14';

  return (
    <Component
      ref={ref}
      type={href ? undefined : type}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onBlur={reset}
      onClick={onClick}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember ${styles} ${className}`}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10">{children}</span>
      {icon ? <ArrowUpRight className="relative z-10 size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> : null}
    </Component>
  );
});

export default MagneticButton;
