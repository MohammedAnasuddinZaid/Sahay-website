import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SectionKicker from './SectionKicker.jsx';

export default function StoriesSection({ content }) {
  const [index, setIndex] = useState(0);
  const stories = content.stories.items.map(([name, age, label, before, after, quote, media]) => ({ name, age, label, before, after, quote, media }));
  const story = stories[index];
  const go = (direction) => setIndex((current) => (current + direction + stories.length) % stories.length);

  return (
    <section id="stories" className="relative overflow-hidden bg-pine py-24 sm:py-32">
      <div className="absolute inset-0 bg-grain opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker eyebrow={content.stories.eyebrow} title={content.stories.title} copy={content.stories.copy} />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem]">
            <AnimatePresence mode="wait">
              <motion.video
                key={story.media}
                className="absolute inset-0 h-full w-full object-cover"
                src={story.media}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/84 via-ink/12 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">{story.label}</p>
              <h3 className="mt-3 font-display text-6xl font-bold tracking-normal">{story.name}, {story.age}</h3>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-cream/10 bg-ink/32 p-7 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div key={story.name} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -12, opacity: 0 }} transition={{ duration: 0.45 }}>
                <blockquote className="font-display text-4xl font-bold leading-tight tracking-normal sm:text-6xl">“{story.quote}”</blockquote>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="story-compare">
                    <span>{content.stories.before}</span>
                    <p>{story.before}</p>
                  </div>
                  <div className="story-compare story-compare--after">
                    <span>{content.stories.after}</span>
                    <p>{story.after}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center justify-between">
              <div className="text-sm font-bold text-cream/60">
                {String(index + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}
              </div>
              <div className="flex gap-3">
                <button className="round-control" onClick={() => go(-1)} aria-label={content.stories.previous}>
                  <ArrowLeft className="size-5" />
                </button>
                <button className="round-control" onClick={() => go(1)} aria-label={content.stories.next}>
                  <ArrowRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
