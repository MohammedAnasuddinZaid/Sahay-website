import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectJourney } from '../data/siteContent.js';
import SectionKicker from './SectionKicker.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const line = useRef(null);

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
          eyebrow="Project Journey"
          title="A 2024-start roadmap built quarter by quarter."
          copy="Each year is broken into four quarters so the path from planning to scale stays visible and easy to scan."
        />

        <div className="mt-16 space-y-10">
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 bg-cream/6 p-6">
              <div className="absolute left-6 right-6 top-16 h-px bg-cream/12" aria-hidden="true" />
              <div ref={line} className="absolute left-6 right-6 top-16 h-px origin-left bg-ember" aria-hidden="true" />
              <div className="grid gap-8">
                {projectJourney.map((year, yearIndex) => (
                  <article key={year.year} className="grid gap-5 xl:grid-cols-[11rem_1fr] xl:items-start">
                    <div className="sticky top-28">
                      <p className="text-xs font-black uppercase tracking-[0.34em] text-gold">{year.year}</p>
                      <h3 className="mt-3 font-display text-4xl font-bold tracking-normal text-cream">{year.theme}</h3>
                      <div className="mt-5 rounded-full border border-cream/12 bg-cream/8 p-2">
                        <div className="h-2 rounded-full bg-cream/10">
                          <div className="h-full rounded-full bg-gradient-to-r from-ember via-gold to-cream" style={{ width: `${year.progress}%` }} />
                        </div>
                      </div>
                      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-cream/55">{year.progress}% complete</p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                      {year.quarters.map((quarter, quarterIndex) => (
                        <article
                          key={`${year.year}-${quarter.label}`}
                          className="group rounded-[1.6rem] border border-cream/10 bg-ink/70 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cream/20 hover:bg-ink"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <p className="text-xs font-black uppercase tracking-[0.28em] text-ember">
                                {quarter.label} <span className="text-cream/40">{quarter.span}</span>
                              </p>
                              <h4 className="mt-3 font-display text-2xl font-bold tracking-normal text-cream">{quarter.title}</h4>
                            </div>
                            <div className="grid size-12 place-items-center rounded-full border border-cream/12 bg-cream/8 text-sm font-black text-cream/80">
                              {quarterIndex + 1}
                            </div>
                          </div>

                          <p className="mt-4 text-sm leading-7 text-cream/66">{quarter.copy}</p>

                          <div className="mt-6 flex items-center justify-between gap-3">
                            <span className="rounded-full border border-cream/12 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.24em] text-cream/72">
                              {quarter.status}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/42">
                              {yearIndex + 1}/3
                            </span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:hidden">
            {projectJourney.map((year) => (
              <article key={year.year} className="rounded-[1.8rem] border border-cream/10 bg-cream/6 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.34em] text-gold">{year.year}</p>
                    <h3 className="mt-2 font-display text-3xl font-bold tracking-normal text-cream">{year.theme}</h3>
                  </div>
                  <span className="rounded-full border border-cream/12 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.24em] text-cream/72">
                    {year.progress}%
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-cream/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-ember via-gold to-cream" style={{ width: `${year.progress}%` }} />
                </div>
                <div className="mt-5 grid gap-4">
                  {year.quarters.map((quarter) => (
                    <div key={`${year.year}-${quarter.label}`} className="rounded-[1.25rem] border border-cream/10 bg-ink/70 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-ember">
                        {quarter.label} <span className="text-cream/40">{quarter.span}</span>
                      </p>
                      <h4 className="mt-2 font-display text-2xl font-bold tracking-normal text-cream">{quarter.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-cream/66">{quarter.copy}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
