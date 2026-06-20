import { donorNames } from '../data/siteContent.js';
import SectionKicker from './SectionKicker.jsx';

export default function DonorWall() {
  const names = [...donorNames, ...donorNames];

  return (
    <section className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionKicker
          eyebrow="Donor wall"
          title="Recognition, without turning care into spectacle."
          copy="A premium donor recognition surface that can later connect to Supabase for live monthly giving."
          dark
        />
      </div>

      <div className="mt-16 space-y-5">
        <div className="donor-marquee">
          <div>
            {names.map((name, index) => (
              <span key={`${name}-${index}`}>{name}</span>
            ))}
          </div>
        </div>
        <div className="donor-marquee donor-marquee--reverse">
          <div>
            {names.reverse().map((name, index) => (
              <span key={`${name}-${index}`}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
