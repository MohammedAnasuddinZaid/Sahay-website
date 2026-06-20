import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { impactMetrics } from '../data/siteContent.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import SectionKicker from './SectionKicker.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactSection() {
  const scope = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-count]').forEach((node) => {
        const metric = impactMetrics[Number(node.dataset.count)];
        const state = { value: 0 };
        gsap.to(state, {
          value: metric.value,
          duration: reducedMotion ? 0.01 : 1.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 82%',
            once: true,
          },
          onUpdate: () => {
            const value = metric.decimals ? state.value.toFixed(metric.decimals) : Math.round(state.value).toLocaleString('en-IN');
            node.textContent = `${metric.prefix}${value}${metric.suffix}`;
          },
        });
      });

      gsap.fromTo(
        '[data-impact-line]',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: reducedMotion ? 0.01 : 1.2,
          ease: 'power4.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: scope.current,
            start: 'top 70%',
            once: true,
          },
        },
      );
    }, scope);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="impact" ref={scope} className="relative overflow-hidden bg-pine py-24 sm:py-32">
      <div className="absolute inset-0 bg-grain opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker
          eyebrow="Measured compassion"
          title="Impact that donors can feel and auditors can follow."
          copy="Numbers are treated like promises: counted, explained, and connected back to human outcomes."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <article key={metric.label} className={`impact-panel ${index === 1 || index === 3 ? 'lg:translate-y-12' : ''}`}>
              <div className="mb-10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-[0.28em] text-gold">{metric.label}</span>
                <span className="grid size-12 place-items-center rounded-full border border-cream/12 text-sm text-cream/70">0{index + 1}</span>
              </div>
              <p data-count={index} className="font-display text-6xl font-bold leading-none tracking-normal text-cream sm:text-7xl">
                {metric.prefix}0{metric.suffix}
              </p>
              <div className="my-7 h-px origin-left bg-gradient-to-r from-ember to-transparent" data-impact-line />
              <p className="text-sm leading-6 text-cream/62">{metric.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div className="rounded-[2rem] border border-cream/10 bg-ink/30 p-8">
            <p className="text-xs font-black uppercase tracking-[0.32em] text-gold">Allocation signal</p>
            <p className="mt-5 font-display text-4xl font-bold tracking-normal">Every rupee should explain itself.</p>
            <p className="mt-4 text-sm leading-6 text-cream/64">
              The donation experience is structured to connect amount, program, receipt, and reporting back to the donor journey.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Education 52%', 'Health 28%', 'Relief 20%'].map((item, index) => (
              <div key={item} className="relative overflow-hidden rounded-[1.5rem] border border-cream/10 bg-cream/8 p-6">
                <div
                  className="absolute bottom-0 left-0 h-1 bg-ember"
                  style={{ width: `${[52, 28, 20][index]}%` }}
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-cream">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
