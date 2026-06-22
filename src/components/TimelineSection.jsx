import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionKicker from './SectionKicker.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection({ content }) {
  const [active, setActive] = useState(0);
  const line = useRef(null);
  const timeline = content.timeline.items.map(([year, title, copy]) => ({ year, title, copy }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: line.current,
            start: 'top 80%',
            end: 'bottom 45%',
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-ink py-24 sm:py-32" aria-labelledby="timeline-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker
          eyebrow={content.timeline.eyebrow}
          title={content.timeline.title}
          copy={content.timeline.copy}
        />

        <div className="mt-16">
          <div className="relative hidden lg:block">
            <div className="absolute left-0 top-1/2 h-px w-full bg-cream/12" />
            <div ref={line} className="absolute left-0 top-1/2 h-px w-full origin-left bg-ember" />
            <div className="relative grid grid-cols-5 gap-5">
              {timeline.map((item, index) => (
                <button
                  key={item.year}
                  className={`timeline-node ${active === index ? 'timeline-node--active' : ''}`}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                >
                  <span>{item.year}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.5fr_1fr] lg:items-end">
            <div className="font-display text-[clamp(5rem,14vw,13rem)] font-bold leading-none tracking-normal text-ember">
              {timeline[active].year}
            </div>
            <article className="rounded-[2rem] border border-cream/10 bg-cream/8 p-8">
              <h3 className="font-display text-4xl font-bold tracking-normal sm:text-6xl">{timeline[active].title}</h3>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/68">{timeline[active].copy}</p>
            </article>
          </div>

          <div className="mt-10 grid gap-4 lg:hidden">
            {timeline.map((item, index) => (
              <button
                key={item.year}
                className={`rounded-2xl border p-5 text-left transition ${
                  active === index ? 'border-ember bg-ember text-ink' : 'border-cream/12 bg-cream/6'
                }`}
                onClick={() => setActive(index)}
              >
                <span className="font-display text-3xl font-bold tracking-normal">{item.year}</span>
                <span className="mt-2 block text-sm font-semibold">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
