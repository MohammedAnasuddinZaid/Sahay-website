export function loadRazorpay() {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve(window.Razorpay);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(window.Razorpay);
    script.onerror = () => reject(new Error('Unable to load Razorpay checkout.'));
    document.body.appendChild(script);
  });
}

export async function openRazorpayCheckout({ amount, donor }) {
  const key = import.meta.env.VITE_RAZORPAY_KEY_ID;
  if (!key) return { skipped: true };

  const Razorpay = await loadRazorpay();
  const checkout = new Razorpay({
    key,
    amount: amount * 100,
    currency: 'INR',
    name: 'SAHAY Foundation',
    description: 'Donation to SAHAY Foundation programs',
    prefill: {
      name: donor.name,
      email: donor.email,
      contact: donor.phone,
    },
    theme: {
      color: '#D97706',
    },
  });

  checkout.open();
  return { skipped: false };
}
