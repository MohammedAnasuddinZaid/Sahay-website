import { useGsapReveal } from '../hooks/useGsapReveal.js';

export default function MissionSection({ content }) {
  const scope = useGsapReveal();
  const missionBlocks = content.mission.blocks.map(([kicker, title, copy]) => ({ kicker, title, copy }));

  return (
    <section id="mission" ref={scope} className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p data-local-reveal className="mb-5 text-xs font-black uppercase tracking-[0.34em] text-clay">
            {content.mission.eyebrow}
          </p>
          <blockquote data-local-reveal className="font-display text-[clamp(3.4rem,7vw,7.4rem)] font-bold leading-[0.9] tracking-normal">
            {content.mission.title}
          </blockquote>
          <p data-local-reveal className="mt-8 max-w-lg text-lg leading-8 text-ink/68">
            {content.mission.copy}
          </p>
        </div>

        <div className="grid gap-8">
          {missionBlocks.map((block, index) => (
            <article
              data-local-reveal
              key={block.title}
              className={`mission-slab ${index === 1 ? 'lg:ml-20' : ''} ${index === 2 ? 'lg:-ml-8' : ''}`}
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-ember">{block.kicker}</span>
              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-normal sm:text-5xl">{block.title}</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-ink/66">{block.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
