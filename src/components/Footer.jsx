import { Mail, MapPin, Phone } from 'lucide-react';
import MagneticButton from './MagneticButton.jsx';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-5 py-16 text-cream sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-cream/10 pb-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-display text-[clamp(4rem,10vw,9rem)] font-bold leading-none tracking-normal">SAHAY</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/65">
              A premium digital home for a foundation built on dignity, accountability, and community trust.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-gold">Contact</p>
              <ul className="mt-5 space-y-4 text-sm text-cream/70">
                <li className="flex gap-3"><Mail className="size-4 text-ember" /> hello@sahayfoundation.org</li>
                <li className="flex gap-3"><Phone className="size-4 text-ember" /> +91 98765 43210</li>
                <li className="flex gap-3"><MapPin className="size-4 text-ember" /> India</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.32em] text-gold">Trust</p>
              <ul className="mt-5 space-y-3 text-sm text-cream/70">
                <li><a href="#donate" className="hover:text-cream">NGO registration</a></li>
                <li><a href="#donate" className="hover:text-cream">Audit report</a></li>
                <li><a href="#donate" className="hover:text-cream">80G certificate</a></li>
                <li><a href="#donate" className="hover:text-cream">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-sm text-cream/50">© 2026 SAHAY Foundation. Built for transparent community impact.</p>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href="#volunteer" variant="secondary" className="min-h-10 px-5 py-2 text-[0.68rem]">
              Volunteer
            </MagneticButton>
            <MagneticButton href="#donate" className="min-h-10 px-5 py-2 text-[0.68rem]">
              Donate
            </MagneticButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
