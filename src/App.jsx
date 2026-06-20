import { lazy, Suspense, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import CursorAura from './components/CursorAura.jsx';
import BrandLogo from './components/BrandLogo.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import MissionSection from './components/MissionSection.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import { useReducedMotion } from './hooks/useReducedMotion.js';

const DocumentarySection = lazy(() => import('./components/DocumentarySection.jsx'));
const ImpactSection = lazy(() => import('./components/ImpactSection.jsx'));
const ProgramsSection = lazy(() => import('./components/ProgramsSection.jsx'));
const TimelineSection = lazy(() => import('./components/TimelineSection.jsx'));
const StoriesSection = lazy(() => import('./components/StoriesSection.jsx'));
const VideoGallery = lazy(() => import('./components/VideoGallery.jsx'));
const VolunteerCTA = lazy(() => import('./components/VolunteerCTA.jsx'));
const BlogSection = lazy(() => import('./components/BlogSection.jsx'));
const DonationExperience = lazy(() => import('./components/DonationExperience.jsx'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, [reducedMotion]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: reducedMotion ? 0 : 34 },
          {
            autoAlpha: 1,
            y: 0,
            duration: reducedMotion ? 0.01 : 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 82%',
              once: true,
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink text-cream selection:bg-ember selection:text-ink">
      <CursorAura />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MissionSection />
        <Suspense fallback={<SectionLoader />}>
          <DocumentarySection />
          <ImpactSection />
          <ProgramsSection />
          <TimelineSection />
          <StoriesSection />
          <VideoGallery />
          <VolunteerCTA />
          <BlogSection />
          <DonationExperience />
        </Suspense>
      </main>
      <Footer />
      <div className="film-grain pointer-events-none fixed inset-0 z-[70] opacity-[0.13]" aria-hidden="true" />
    </div>
  );
}

function SectionLoader() {
  return (
    <div className="mx-auto flex min-h-72 max-w-6xl items-center justify-center px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <BrandLogo showTagline align="center" compact imageClassName="h-14 sm:h-16" taglineClassName="text-fog" />
        <p className="text-sm uppercase tracking-[0.28em] text-fog">Preparing the next chapter</p>
      </div>
    </div>
  );
}

export default App;
