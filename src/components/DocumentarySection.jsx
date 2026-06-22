import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionKicker from './SectionKicker.jsx';

export default function DocumentarySection({ content }) {
  const documentaryChapters = content.documentary.chapters.map(([eyebrow, title, copy, media]) => ({ eyebrow, title, copy, media }));

  return (
    <section className="relative bg-ink py-24 sm:py-32" aria-labelledby="documentary-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker
          eyebrow={content.documentary.eyebrow}
          title={content.documentary.title}
          copy={content.documentary.copy}
        />
      </div>

      <div className="mt-16 grid gap-10">
        {documentaryChapters.map((chapter, index) => (
          <DocumentaryPanel key={chapter.title} chapter={chapter} index={index} />
        ))}
      </div>
    </section>
  );
}

function DocumentaryPanel({ chapter, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [index % 2 ? 64 : -36, index % 2 ? -56 : 46]);

  return (
    <article ref={ref} className="relative min-h-[88vh] overflow-hidden">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale }}
        src={chapter.media}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,28,23,0.92),rgba(15,28,23,0.26),rgba(15,28,23,0.82))]" />
      <motion.div
        className={`relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-5 sm:px-8 ${
          index % 2 ? 'justify-end' : 'justify-start'
        }`}
        style={{ y }}
      >
        <div className="max-w-xl border-l border-cream/25 bg-ink/24 p-7 backdrop-blur-sm sm:p-10">
          <p className="text-xs font-black uppercase tracking-[0.34em] text-gold">{chapter.eyebrow}</p>
          <h3 className="mt-5 font-display text-4xl font-bold leading-tight tracking-normal sm:text-6xl">{chapter.title}</h3>
          <p className="mt-6 text-lg leading-8 text-cream/72">{chapter.copy}</p>
        </div>
      </motion.div>
    </article>
  );
}
