import emailjs from '@emailjs/browser';

export async function sendVolunteerNotification(payload) {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return { skipped: true };
  }

  await emailjs.send(serviceId, templateId, payload, { publicKey });
  return { skipped: false };
}
