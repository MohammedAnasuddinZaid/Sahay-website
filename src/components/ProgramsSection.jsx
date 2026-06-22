import MagneticButton from './MagneticButton.jsx';
import SectionKicker from './SectionKicker.jsx';

export default function ProgramsSection({ content }) {
  const programs = content.programs.items.map(([title, tag, summary, stat, media]) => ({ title, tag, summary, stat, media }));

  return (
    <section id="programs" className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker
          eyebrow={content.programs.eyebrow}
          title={content.programs.title}
          copy={content.programs.copy}
          dark
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
                  {content.buttons.fund}
                </MagneticButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
