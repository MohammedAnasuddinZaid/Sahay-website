import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminDashboard() {
  const [volunteers, setVolunteers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [volRes, donRes] = await Promise.all([
          supabase
            .from("volunteer_applications")
            .select("*")
            .order("created_at", { ascending: false }),

          supabase
            .from("donation_pledges")
            .select("*")
            .order("created_at", { ascending: false }),
        ]);

        if (volRes.error) throw volRes.error;
        if (donRes.error) throw donRes.error;

        setVolunteers(volRes.data || []);
        setDonations(donRes.data || []);
      } catch (err) {
        console.error("Admin fetch error:", err.message);
        setError("Failed to load admin data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="p-10 text-white bg-black min-h-screen">
        Loading admin data...
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-10 text-red-400 bg-black min-h-screen">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      {/* ================= VOLUNTEERS ================= */}
      <h2 className="text-xl font-semibold mb-3">
        Volunteer Applications
      </h2>

      <div className="overflow-auto mb-10">
        <table className="w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-2">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Skills</th>
              <th>Availability</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {volunteers.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-400">
                  No volunteer applications found
                </td>
              </tr>
            ) : (
              volunteers.map((v) => (
                <tr key={v.id} className="border-t border-gray-800">
                  <td className="p-2">{v.name || "-"}</td>
                  <td>{v.email || "-"}</td>
                  <td>{v.phone || "-"}</td>
                  <td>{v.skills || "-"}</td>
                  <td>{v.availability || "-"}</td>
                  <td>{v.message || "-"}</td>
                  <td>
                    {v.created_at
                      ? new Date(v.created_at).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= DONATIONS ================= */}
      <h2 className="text-xl font-semibold mb-3">
        Donation Pledges
      </h2>

      <div className="overflow-auto">
        <table className="w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-2">Name</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Impact</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-400">
                  No donation pledges found
                </td>
              </tr>
            ) : (
              donations.map((d) => (
                <tr key={d.id} className="border-t border-gray-800">
                  <td className="p-2">{d.name || "-"}</td>
                  <td>₹{d.amount || 0}</td>
                  <td>{d.method || "-"}</td>
                  <td>{d.email || "-"}</td>
                  <td>{d.phone || "-"}</td>
                  <td>{d.impact || "-"}</td>
                  <td>
                    {d.created_at
                      ? new Date(d.created_at).toLocaleString()
                      : "-"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}