import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

export default function VideoGallery({ content }) {
  const [active, setActive] = useState(null);
  const modalVideo = useRef(null);
  const gallery = content.gallery.items.map(([title, duration, source, copy]) => ({ title, duration, source, copy }));

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (active && modalVideo.current) {
      modalVideo.current.play();
    }
  }, [active]);

  return (
    <section id="video-gallery" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker
          eyebrow={content.gallery.eyebrow}
          title={content.gallery.title}
          copy={content.gallery.copy}
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {gallery.map((item) => (
            <button key={item.title} className="video-card group" onClick={() => setActive(item)} aria-label={`${content.gallery.play} ${item.title}`}>
              <video
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={item.source}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(event) => event.currentTarget.play()}
                onMouseLeave={(event) => {
                  event.currentTarget.pause();
                  event.currentTarget.currentTime = 0;
                }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <span className="relative z-10 mt-auto block text-left">
                <span className="mb-4 grid size-14 place-items-center rounded-full bg-cream text-ink transition group-hover:scale-110">
                  <Play className="size-5 fill-current" />
                </span>
                <span className="block text-xs font-black uppercase tracking-[0.28em] text-gold">{item.duration}</span>
                <span className="mt-2 block font-display text-4xl font-bold tracking-normal">{item.title}</span>
                <span className="mt-3 block text-sm leading-6 text-cream/66">{item.copy}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-ink/92 p-4 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <button className="absolute right-5 top-5 round-control" onClick={() => setActive(null)} aria-label={content.gallery.close}>
              <X className="size-5" />
            </button>
            <motion.div
              className="w-full max-w-5xl overflow-hidden rounded-[2rem] border border-cream/12 bg-black shadow-soft"
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 18 }}
            >
              <video ref={modalVideo} className="aspect-video w-full object-contain" src={active.source} controls playsInline />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
