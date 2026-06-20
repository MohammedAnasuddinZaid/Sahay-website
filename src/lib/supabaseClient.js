import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function saveVolunteerApplication(payload) {
  if (!supabase) {
    const existing = JSON.parse(localStorage.getItem('sahay-volunteers') || '[]');
    localStorage.setItem(
      'sahay-volunteers',
      JSON.stringify([{ ...payload, created_at: new Date().toISOString(), preview: true }, ...existing]),
    );
    return { preview: true };
  }

  const { error } = await supabase.from('volunteer_applications').insert(payload);
  if (error) throw error;
  return { preview: false };
}

export async function saveDonationPledge(payload) {
  if (!supabase) {
    const existing = JSON.parse(localStorage.getItem('sahay-donation-pledges') || '[]');
    localStorage.setItem(
      'sahay-donation-pledges',
      JSON.stringify([{ ...payload, created_at: new Date().toISOString(), preview: true }, ...existing]),
    );
    return { preview: true };
  }

  const { error } = await supabase.from('donation_pledges').insert(payload);
  if (error) throw error;
  return { preview: false };
}
