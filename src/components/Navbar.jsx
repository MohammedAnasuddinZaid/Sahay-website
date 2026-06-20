import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, Menu, Moon, X } from 'lucide-react';
import { navItems } from '../data/siteContent.js';
import MagneticButton from './MagneticButton.jsx';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;

    const update = () => {
      const current = window.scrollY;
      setSolid(current > 40);
      setHidden(current > previous && current > 160);
      previous = current;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-4 z-[80] px-4 transition duration-500 ${
          hidden ? '-translate-y-28 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-2xl transition ${
            solid ? 'border-cream/14 bg-ink/82 shadow-soft' : 'border-cream/10 bg-ink/36'
          }`}
          aria-label="Primary navigation"
        >
          <a href="#hero" className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember">
            <span className="grid size-11 place-items-center rounded-full bg-cream text-sm font-black text-ink">S</span>
            <span className="leading-none">
              <span className="block font-display text-lg font-bold tracking-normal">SAHAY</span>
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.32em] text-fog">Foundation</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-sm font-semibold text-cream/80">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button className="icon-pill" aria-label="Switch language">
              <Languages className="size-4" />
              <span>EN</span>
            </button>
            <button className="icon-pill" aria-label="Toggle quiet theme">
              <Moon className="size-4" />
            </button>
            <MagneticButton href="#donate" className="min-h-10 px-5 py-2 text-[0.68rem]">
              Donate
            </MagneticButton>
          </div>

          <button
            className="grid size-11 place-items-center rounded-full border border-cream/15 bg-cream/8 text-cream lg:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[95] bg-ink/96 px-6 py-6 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, clipPath: 'circle(0% at 92% 8%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 92% 8%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 92% 8%)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-bold">SAHAY</span>
              <button
                className="grid size-12 place-items-center rounded-full border border-cream/15 bg-cream/8"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-16 grid gap-7">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-5xl font-bold text-cream"
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * index }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <div className="absolute bottom-8 left-6 right-6">
              <MagneticButton href="#donate" className="w-full" onClick={() => setMenuOpen(false)}>
                Donate now
              </MagneticButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
