import { createClient } from '@supabase/supabase-js';

// =========================
// ENV VARIABLES
// =========================
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Safety check
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase disabled - missing environment variables");
}

// =========================
// SUPABASE CLIENT
// =========================
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* =========================
   DONORS TABLE
========================= */

// Save Donor
export async function saveDonor(payload) {
  const { data, error } = await supabase
    .from('donors')
    .insert([payload])
    .select();

  if (error) {
    console.error("❌ Donor insert error:", error);
    throw error;
  }

  return data;
}

// Get All Donors
export async function getDonors() {
  const { data, error } = await supabase
    .from('donors')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error("❌ Donor fetch error:", error);
    return [];
  }

  return data;
}

/* =========================
   VOLUNTEER APPLICATIONS
========================= */

// Save Volunteer
export async function saveVolunteerApplication(payload) {
  const { data, error } = await supabase
    .from('volunteer_applications')
    .insert([payload])
    .select();

  if (error) {
    console.error("❌ Volunteer insert error:", error);
    throw error;
  }

  return data;
}

// Get Volunteers
export async function getVolunteerApplications() {
  const { data, error } = await supabase
    .from('volunteer_applications')
    .select('*')
    .order('id', { ascending: false });

  if (error) {
    console.error("❌ Volunteer fetch error:", error);
    return [];
  }

  return data;
}
