import { useMemo, useState } from 'react';
import { CheckCircle2, CreditCard, IndianRupee, Landmark, Loader2, QrCode } from 'lucide-react';
import { donationPresets } from '../data/siteContent.js';
import { openRazorpayCheckout } from '../lib/payments.js';
import { saveDonationPledge } from '../lib/supabaseClient.js';
import MagneticButton from './MagneticButton.jsx';
import SectionKicker from './SectionKicker.jsx';

export default function DonationExperience() {
  const [selected, setSelected] = useState(1000);
  const [custom, setCustom] = useState('');
  const [method, setMethod] = useState('upi');
  const [donor, setDonor] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const amount = Number(custom || selected || 0);

  const impact = useMemo(() => {
    const preset = donationPresets.find((item) => item.amount === amount);
    if (preset) return preset.impact;
    if (amount >= 5000) return 'extends medical and family relief support';
    if (amount >= 1000) return 'keeps a child learning with dignity';
    return 'adds to the emergency care pool';
  }, [amount]);

  const submit = async (event) => {
    event.preventDefault();
    if (amount < 100) return;
    setStatus('loading');
    try {
      await saveDonationPledge({ amount, method, ...donor, impact });
      if (method === 'card') await openRazorpayCheckout({ amount, donor });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="donate" className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(217,119,6,0.18),transparent_32rem)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionKicker
            eyebrow="Donation experience"
            title="Make generosity feel specific."
            copy="Preset amounts, visible impact, UPI, card readiness, Razorpay architecture, and Supabase pledge capture are built in."
            dark
          />
          <div className="mt-10 rounded-[2rem] bg-ink p-7 text-cream">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">Current amount</p>
            <p className="mt-4 font-display text-7xl font-bold leading-none tracking-normal">₹{amount.toLocaleString('en-IN')}</p>
            <p className="mt-5 text-lg leading-8 text-cream/70">This can {impact}.</p>
          </div>
        </div>

        <form className="rounded-[2rem] border border-ink/10 bg-white/70 p-5 shadow-soft backdrop-blur-xl sm:p-8" onSubmit={submit}>
          <div className="grid gap-4 sm:grid-cols-3">
            {donationPresets.map((preset) => (
              <button
                key={preset.amount}
                type="button"
                className={`donation-chip ${selected === preset.amount && !custom ? 'donation-chip--active' : ''}`}
                onClick={() => {
                  setSelected(preset.amount);
                  setCustom('');
                }}
              >
                <IndianRupee className="size-5" />
                {preset.amount.toLocaleString('en-IN')}
              </button>
            ))}
          </div>

          <label className="field field--light mt-5">
            <span>Custom amount</span>
            <input
              type="number"
              min="100"
              value={custom}
              onChange={(event) => setCustom(event.target.value)}
              placeholder="Enter amount in INR"
            />
          </label>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <button type="button" className={`method ${method === 'upi' ? 'method--active' : ''}`} onClick={() => setMethod('upi')}>
              <QrCode className="size-6" />
              <span>UPI</span>
            </button>
            <button type="button" className={`method ${method === 'card' ? 'method--active' : ''}`} onClick={() => setMethod('card')}>
              <CreditCard className="size-6" />
              <span>Card / Razorpay</span>
            </button>
          </div>

          {method === 'upi' ? (
            <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-cream p-5">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-clay">UPI ready</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="grid size-24 place-items-center rounded-2xl bg-ink text-cream">
                  <QrCode className="size-12" />
                </div>
                <div>
                  <p className="font-bold">{import.meta.env.VITE_DONATION_UPI_ID || 'sahayfoundation@upi'}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/62">Replace with verified UPI and generated QR before launch.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-5 rounded-[1.5rem] border border-ink/10 bg-cream p-5">
              <div className="flex items-center gap-3">
                <Landmark className="size-5 text-ember" />
                <p className="text-sm font-bold text-ink/70">Razorpay checkout opens when `VITE_RAZORPAY_KEY_ID` is configured.</p>
              </div>
            </div>
          )}

          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            <label className="field field--light">
              <span>Name</span>
              <input value={donor.name} onChange={(event) => setDonor((current) => ({ ...current, name: event.target.value }))} />
            </label>
            <label className="field field--light">
              <span>Email</span>
              <input type="email" value={donor.email} onChange={(event) => setDonor((current) => ({ ...current, email: event.target.value }))} />
            </label>
            <label className="field field--light">
              <span>Phone</span>
              <input value={donor.phone} onChange={(event) => setDonor((current) => ({ ...current, phone: event.target.value }))} />
            </label>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton type="submit" disabled={status === 'loading' || amount < 100}>
              {status === 'loading' ? <Loader2 className="size-4 animate-spin" /> : null}
              Continue donation
            </MagneticButton>
            {status === 'success' ? (
              <span className="inline-flex items-center gap-2 text-sm font-black text-pine">
                <CheckCircle2 className="size-5 text-ember" />
                Pledge captured.
              </span>
            ) : null}
            {status === 'error' ? <span className="text-sm font-bold text-rosewood">Could not save pledge. Try again.</span> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
