import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { saveVolunteerApplication } from '../lib/supabaseClient.js';
import { sendVolunteerNotification } from '../lib/email.js';
import MagneticButton from './MagneticButton.jsx';
import SectionKicker from './SectionKicker.jsx';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  skills: '',
  availability: 'Weekends',
  message: '',
};

export default function VolunteerCTA({ content }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const next = {};
    if (form.name.trim().length < 2) next.name = content.volunteer.errors.name;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = content.volunteer.errors.email;
    if (!/^[0-9+\-\s()]{8,}$/.test(form.phone)) next.phone = content.volunteer.errors.phone;
    if (form.skills.trim().length < 3) next.skills = content.volunteer.errors.skills;
    return next;
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('loading');
    try {
      await saveVolunteerApplication(form);
      await sendVolunteerNotification(form);
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      setStatus('error');
      setErrors({ form: error.message || content.volunteer.errors.form });
    }
  };

  return (
    <section id="volunteer" className="relative overflow-hidden bg-pine py-24 sm:py-32">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_30%,rgba(217,119,6,0.16),transparent_34rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionKicker
            eyebrow={content.volunteer.eyebrow}
            title={content.volunteer.title}
            copy={content.volunteer.copy}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {content.volunteer.chips.map((item) => (
              <div key={item} className="rounded-2xl border border-cream/10 bg-cream/8 p-5 text-sm font-bold text-cream/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-cream/10 bg-ink/36 p-5 shadow-soft backdrop-blur-xl sm:p-8" onSubmit={submit} noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={content.volunteer.fields.name} name="name" value={form.name} onChange={update} error={errors.name} />
            <Field label={content.volunteer.fields.email} name="email" type="email" value={form.email} onChange={update} error={errors.email} />
            <Field label={content.volunteer.fields.phone} name="phone" value={form.phone} onChange={update} error={errors.phone} />
            <label className="field">
              <span>{content.volunteer.fields.availability}</span>
              <select name="availability" value={form.availability} onChange={update}>
                {content.volunteer.options.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>
          <Field label={content.volunteer.fields.skills} name="skills" value={form.skills} onChange={update} error={errors.skills} className="mt-5" />
          <label className="field mt-5">
            <span>{content.volunteer.fields.message}</span>
            <textarea name="message" value={form.message} onChange={update} rows="5" placeholder={content.volunteer.placeholder} />
          </label>

          {errors.form ? <p className="mt-4 text-sm font-semibold text-red-200">{errors.form}</p> : null}

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <MagneticButton type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? <Loader2 className="size-4 animate-spin" /> : null}
              {content.volunteer.submit}
            </MagneticButton>
            {status === 'success' ? (
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gold">
                <CheckCircle2 className="size-5" />
                {content.volunteer.success}
              </span>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', value, onChange, error, className = '' }) {
  return (
    <label className={`field ${className}`}>
      <span>{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />
      {error ? (
        <small id={`${name}-error`} className="text-red-200">
          {error}
        </small>
      ) : null}
    </label>
  );
}
