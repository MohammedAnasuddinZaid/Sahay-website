import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeartHandshake, Play, Volume2, VolumeX } from 'lucide-react';
import { media } from '../data/siteContent.js';
import AmbientScene from './AmbientScene.jsx';
import BrandLogo from './BrandLogo.jsx';
import MagneticButton from './MagneticButton.jsx';

const headline = ["Child's Amenities", 'Built with dignity and care.'];

export default function Hero() {
  const section = useRef(null);
  const video = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.42, 0.82]);

  const toggleSound = async () => {
    if (!video.current) return;
    video.current.muted = soundOn;
    setSoundOn((current) => !current);
    if (video.current.paused) await video.current.play();
  };

  return (
    <section id="hero" ref={section} className="relative min-h-screen overflow-hidden">
      <motion.video
        ref={video}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale: videoScale }}
        src={media.hero}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <motion.div className="absolute inset-0 bg-ink" style={{ opacity: overlayOpacity }} aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,28,23,0.92)_0%,rgba(15,28,23,0.52)_42%,rgba(15,28,23,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
      <AmbientScene />

      <motion.div
        className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-24 pt-32 sm:px-8 lg:pb-20"
        style={{ y: textY }}
      >
        <div className="grid gap-10 lg:grid-cols-[1.28fr_0.72fr] lg:items-end">
          <div>
            <motion.div
              className="mb-7 w-fit rounded-[1.4rem] border border-cream/12 bg-cream/8 p-3 backdrop-blur-xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.15 }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <BrandLogo compact className="gap-0" imageClassName="h-14 sm:h-16" />
            </motion.div>

            <motion.div
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-cream/18 bg-cream/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-cream/80 backdrop-blur-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
            >
              <HeartHandshake className="size-4 text-ember" />
              By an orphan, for an orphan.
            </motion.div>

            <h1 className="max-w-[58rem] font-display text-[clamp(3.15rem,7.15vw,7.35rem)] font-bold leading-[0.9] tracking-normal text-cream">
              {headline.map((line, lineIndex) => (
                <span key={line} className="block overflow-hidden pb-3">
                  <motion.span
                    className="block"
                    initial={{ y: '115%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.05, delay: 0.36 + lineIndex * 0.16, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            className="max-w-xl lg:justify-self-end"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.72 }}
          >
            <p className="text-lg leading-8 text-cream/78 sm:text-xl">
              By an orphan, for an orphan.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href="#donate">Donate</MagneticButton>
              <MagneticButton href="#volunteer" variant="secondary">
                Volunteer
              </MagneticButton>
              <MagneticButton href="#video-gallery" variant="secondary" icon={false}>
                <Play className="size-4" />
                Watch Story
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-end justify-between gap-6">
          <div className="hidden max-w-sm border-l border-cream/20 pl-5 text-sm leading-6 text-fog sm:block">
            Since 2005, a local promise has grown into a measurable movement for education, health, relief, and hope.
          </div>

          <div className="flex items-center gap-4">
            <button className="icon-pill" onClick={toggleSound} aria-label={soundOn ? 'Mute hero video' : 'Play hero video sound'}>
              {soundOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
              <span>{soundOn ? 'Sound on' : 'Sound off'}</span>
            </button>
            <a href="#mission" className="scroll-cue" aria-label="Scroll to mission">
              <span />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
