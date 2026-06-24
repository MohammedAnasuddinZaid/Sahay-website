import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {

  CheckCircle2,

  IndianRupee,

  Loader2,

} from 'lucide-react';



import { saveDonor } from '../lib/supabaseClient.js';

import MagneticButton from './MagneticButton.jsx';

import SectionKicker from './SectionKicker.jsx';



export default function DonationExperience({ content }) {

  const [selected, setSelected] = useState(1000);

  const [custom, setCustom] = useState('');

  const [step, setStep] = useState('details');

  const [formError, setFormError] = useState('');

  const [showThankYou, setShowThankYou] = useState(false);


  const upiId =
  import.meta.env.VITE_DONATION_UPI_ID ||
  'euphoric1107@okicici';



  const [donor, setDonor] = useState({

    name: '',

    email: '',

    phone: '',

  });



  const [status, setStatus] = useState('idle');



  const amount = Number(custom || selected || 0);



  const donationPresets = content.donation.presets;



  const detailsValid =

    amount >= 100 &&

    donor.name.trim() &&

    donor.email.trim();



  const impact = useMemo(() => {

    const preset = donationPresets.find(

      (item) => item.amount === amount

    );



    if (preset) return preset.impact;



    if (amount >= 5000) return content.donation.fallbacks[0];

    if (amount >= 1000) return content.donation.fallbacks[1];



    return content.donation.fallbacks[2];

  }, [amount, donationPresets, content.donation.fallbacks]);



  const proceedToPay = (event) => {
    event.preventDefault();
  
    if (!donor.name.trim()) {
      setFormError('Please enter your name');
      return;
    }
  
    if (!donor.email.trim()) {
      setFormError('Please enter your email address');
      return;
    }
  
    if (!donor.phone.trim()) {
      setFormError('Please enter your phone number');
      return;
    }
  
    if (amount < 100) {
      setFormError('Minimum donation amount is ₹100');
      return;
    }
  
    setFormError('');
    setStatus('idle');
    setStep('payment');
  };



  const confirmPayment = async (event) => {

    event.preventDefault();



    setStatus('loading');



    try {
      await saveDonor({
        name: donor.name,

        email: donor.email,
        
        phone: donor.phone,
        
        amount: amount,

      });


      setStatus('success');
      
      setShowThankYou(true);

      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);


      setDonor({

        name: '',

        email: '',

        phone: '',

      });



      setCustom('');

      setSelected(1000);

      setStep('details');

    } catch (error) {

      console.error(error);

      setStatus('error');

    }

  };



  return (
    <section

      id="donate"

      className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32"

    >
      
      <AnimatePresence>
  {showThankYou && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
    >
      <motion.div
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        transition={{ duration: 0.3 }}
        className="mx-4 max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
      >
        <CheckCircle2 className="mx-auto size-16 text-green-500" />

        <h2 className="mt-4 text-3xl font-bold">
          Thank You!
        </h2>

        <p className="mt-3 text-ink/70">
          Your donation has been recorded successfully.
        </p>

        <p className="mt-2 text-ink/70">
          Thank you for supporting Sahay Foundation ❤️
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      <div

        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(217,119,6,0.18),transparent_32rem)]"

        aria-hidden="true"

      />



      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">



        <div className="lg:sticky lg:top-28">

          <SectionKicker

            eyebrow={content.donation.eyebrow}

            title={content.donation.title}

            copy={content.donation.copy}

            dark

          />



          <div className="mt-10 rounded-[2rem] bg-ink p-7 text-cream">

            <p className="text-xs font-black uppercase tracking-[0.28em] text-gold">

              {content.donation.current}

            </p>



            <p className="mt-4 font-display text-7xl font-bold leading-none">

              ₹{amount.toLocaleString('en-IN')}

            </p>



            <p className="mt-5 text-lg leading-8 text-cream/70">

              {content.donation.thisCan} {impact}.

            </p>

          </div>

        </div>



        <form

          className="rounded-[2rem] border border-ink/10 bg-white/70 p-5 shadow-soft backdrop-blur-xl sm:p-8"

          onSubmit={step === 'details' ? proceedToPay : confirmPayment}

        >



          <div className="grid gap-4 sm:grid-cols-3">



            {donationPresets.map((preset) => (



              <button

                key={preset.amount}

                type="button"

                className={`donation-chip ${selected === preset.amount && !custom

                    ? 'donation-chip--active'

                    : ''

                  }`}

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

            <span>{content.donation.custom}</span>



            <input

              type="number"

              min="100"

              value={custom}

              onChange={(e) => setCustom(e.target.value)}

              placeholder={content.donation.placeholder}

            />

          </label>



          {step === 'details' ? (



            <div className="mt-7 grid gap-5 sm:grid-cols-3">



              <label className="field field--light">



                <span>{content.volunteer.fields.name}</span>



                <input

                  required

                  value={donor.name}

                  onChange={(e) => {
                    setFormError('');
                    setDonor({
                      ...donor,
                      name: e.target.value,
                    });
                  }}

                />



              </label>



              <label className="field field--light">



                <span>{content.volunteer.fields.email}</span>



                <input

                  type="email"

                  required

                  value={donor.email}

                  onChange={(e) => {
                    setFormError('');
                    setDonor({
                      ...donor,
                      email: e.target.value,
                    });
                  }}

                />



              </label>



              <label className="field field--light">



                <span>{content.volunteer.fields.phone}</span>



                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={donor.phone}

                  onChange={(e) => {
                    setFormError('');
                    setDonor({
                      ...donor,
                      phone: e.target.value.replace(/\D/g, ''),
                    });
                  }}

                  placeholder="10 digit mobile number"
                />



              </label>



            </div>



          ) : (



            <div className="mt-7 rounded-[1.5rem] border border-ink/10 bg-cream p-5">



              <p className="text-xs font-black uppercase tracking-[0.28em] text-clay">

                {content.donation.upiReady}

              </p>



              <div className="mt-4 flex flex-wrap items-center gap-5">



                <img

                  src="/media/qr-code.jpeg"

                  alt="UPI QR code for donations"

                  className="size-36 rounded-2xl border border-ink/10 object-cover"

                />



                <div>



                    <>
                      <p className="text-lg font-black">
                        ₹{amount.toLocaleString('en-IN')}
                      </p>

                      <p className="mt-2 font-bold">
                        UPI ID: {upiId}
                      </p>
                    </>



                  {content.donation.upiNote ? (

                    <p className="mt-2 text-sm leading-6 text-ink/62">

                      {content.donation.upiNote}

                    </p>

                  ) : null}



                </div>



              </div>



            </div>



          )}


          {formError && (
            <p className="mt-4 text-sm font-medium text-red-500">
              {formError}
            </p>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-4">



            {step === 'payment' ? (

              <button

                type="button"

                className="text-sm font-bold text-ink/60 transition hover:text-ink"

                onClick={() => {

                  setStep('details');

                  setStatus('idle');

                }}

              >

                Back

              </button>

            ) : null}



            <MagneticButton

              type="submit"

              disabled={status === 'loading'}

            >

              {status === 'loading' ? (

                <Loader2 className="size-4 animate-spin" />

              ) : null}



              {step === 'details'

                ? content.donation.proceedToPay

                : content.donation.continue}



            </MagneticButton>



            {status === 'success' && (

              <span className="inline-flex items-center gap-2 text-sm font-black text-pine">

                <CheckCircle2 className="size-5 text-ember" />

                {content.donation.success}

              </span>

            )}



            {status === 'error' && (

              <span className="text-sm font-bold text-rosewood">

                {content.donation.error}

              </span>

            )}



          </div>



        </form>



      </div>

    </section>

  );

}


