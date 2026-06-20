export default function SectionKicker({ eyebrow, title, copy, align = 'left', dark = false }) {
  return (
    <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className={`mb-4 text-xs font-black uppercase tracking-[0.34em] ${dark ? 'text-ember' : 'text-gold'}`}>{eyebrow}</p>
      <h2 className="font-display text-[clamp(3rem,6vw,6.4rem)] font-bold leading-[0.92] tracking-normal">{title}</h2>
      {copy ? <p className={`mt-6 max-w-2xl text-lg leading-8 ${dark ? 'text-ink/68' : 'text-cream/70'}`}>{copy}</p> : null}
    </div>
  );
}
