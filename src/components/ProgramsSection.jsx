import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { programs } from '../data/siteContent.js';
import { useReducedMotion } from '../hooks/useReducedMotion.js';
import MagneticButton from './MagneticButton.jsx';
import SectionKicker from './SectionKicker.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function ProgramsSection() {
  const section = useRef(null);
  const track = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || window.matchMedia('(max-width: 899px)').matches) return undefined;

    const ctx = gsap.context(() => {
      const distance = () => track.current.scrollWidth - window.innerWidth + 96;
      gsap.to(track.current, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section id="programs" ref={section} className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker
          eyebrow="Programs"
          title="Four pathways, one promise: stay close."
          copy="Each program is designed to be tactile, local, and visible to the people funding it."
          dark
        />
      </div>

      <div className="mt-16 overflow-x-auto px-5 pb-8 sm:px-8 lg:overflow-visible">
        <div ref={track} className="flex w-max gap-5 lg:gap-8">
          {programs.map((program, index) => (
            <article key={program.title} className="program-card group" tabIndex={0}>
              <video
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={program.media}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(event) => event.currentTarget.play()}
                onMouseLeave={(event) => event.currentTarget.pause()}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,28,23,0.18),rgba(15,28,23,0.88))]" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-cream sm:p-8">
                <div className="mb-auto flex items-center justify-between">
                  <span className="rounded-full bg-cream px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-ink">{program.tag}</span>
                  <span className="font-display text-4xl font-bold tracking-normal">0{index + 1}</span>
                </div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-gold">{program.stat}</p>
                <h3 className="font-display text-4xl font-bold leading-tight tracking-normal sm:text-5xl">{program.title}</h3>
                <p className="mt-5 max-w-md text-sm leading-6 text-cream/72">{program.summary}</p>
                <MagneticButton href="#donate" className="mt-7 w-fit" variant="secondary">
                  Fund this
                </MagneticButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
