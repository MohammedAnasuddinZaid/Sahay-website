export default function BrandLogo({
  href = '#hero',
  align = 'left',
  showTagline = false,
  compact = false,
  className = '',
  imageClassName = '',
  taglineClassName = '',
}) {
  const Wrapper = href ? 'a' : 'div';
  const alignmentClass = align === 'center' ? 'flex-col items-center text-center' : 'items-center';

  return (
    <Wrapper
      href={href}
      className={`inline-flex gap-3 ${alignmentClass} ${showTagline ? 'max-w-xs' : ''} ${className}`.trim()}
      aria-label="SAHAY home"
    >
      <img
        src="/media/logo.png"
        alt="SAHAY logo"
        className={`${compact ? 'h-11 sm:h-12' : 'h-14 sm:h-16'} w-auto object-contain ${imageClassName}`.trim()}
        loading="eager"
      />
      {showTagline ? (
        <span className={`text-[0.7rem] font-bold uppercase tracking-[0.3em] text-cream/70 ${taglineClassName}`.trim()}>
          By an orphan, for an orphan.
        </span>
      ) : null}
    </Wrapper>
  );
}