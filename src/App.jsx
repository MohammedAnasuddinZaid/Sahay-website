import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import CursorAura from './components/CursorAura.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import MissionSection from './components/MissionSection.jsx';
import Navbar from './components/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

import { getContent } from './data/siteContent.js';
import { useReducedMotion } from './hooks/useReducedMotion.js';

import { supabase } from './lib/supabaseClient.js';

const DocumentarySection = lazy(() => import('./components/DocumentarySection.jsx'));
const ImpactSection = lazy(() => import('./components/ImpactSection.jsx'));
const ProgramsSection = lazy(() => import('./components/ProgramsSection.jsx'));
const TimelineSection = lazy(() => import('./components/TimelineSection.jsx'));
const FounderStory = lazy(() => import('./components/FounderStory.jsx'));
const VideoGallery = lazy(() => import('./components/VideoGallery.jsx'));
const VolunteerCTA = lazy(() => import('./components/VolunteerCTA.jsx'));
const BlogSection = lazy(() => import('./components/BlogSection.jsx'));
const DonationExperience = lazy(() => import('./components/DonationExperience.jsx'));

gsap.registerPlugin(ScrollTrigger);

function App() {
  const reducedMotion = useReducedMotion();

  const [language, setLanguage] = useState('en');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [donors, setDonors] = useState([]);

  const content = useMemo(() => getContent(language), [language]);

  // language update
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // smooth scroll
  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [reducedMotion]);

  // animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  // login
  const handleLogin = () => {
    if (password === 'admin123') {
      setIsAdmin(true);
      setShowLogin(false);
      setPassword('');
    } else {
      alert('Wrong password');
    }
  };

  // =========================
// FETCH DONORS FROM SUPABASE
// =========================
useEffect(() => {
  const fetchDonors = async () => {
    if (!supabase) return;

    const { data, error } = await supabase
      .from('donors')
      .select('*')
      .order('id', { ascending: false });

    if (error) {
      console.error("Supabase Fetch Error:", error);
      return;
    }

    setDonors(data || []);
  };

  fetchDonors();
}, []);

  return (
    <div className="min-h-screen bg-ink text-cream">

      <ScrollProgress />

      {/* LOGIN MODAL */}
      {showLogin && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 99999,
    }}
  >
    <div
      style={{
        background: "#fff",
        color: "#000",
        padding: "30px",
        borderRadius: "10px",
        width: "350px",
      }}
    >
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
        Admin Login
      </h2>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          color: "#000",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "12px",
          background: "#ff8a00",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Login
      </button>

      <button
        onClick={() => setShowLogin(false)}
        style={{
          width: "100%",
          padding: "12px",
          background: "#ddd",
          color: "#000",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Cancel
      </button>
    </div>
  </div>
)}

      {/* MAIN WEBSITE */}
      {!isAdmin ? (
        <>
          <CursorAura />

          <Navbar content={content} language={language} setLanguage={setLanguage} />

          <button
  onClick={() => setShowLogin(true)}
  style={{
    position: "fixed",
    top: "90px",
    right: "25px",
    zIndex: 999999,
    background: "#ff8a00",
    color: "#fff",
    padding: "10px 18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0 5px 15px rgba(0,0,0,.3)"
  }}
>
  Admin
</button>

          <main>
            <Hero content={content} />
            <MissionSection content={content} />

            <Suspense fallback={<div style={{ padding: 40 }}>Loading...</div>}>
              <DocumentarySection content={content} />
              <ImpactSection content={content} />
              <ProgramsSection content={content} />
              <TimelineSection content={content} />
              <FounderStory content={content} />
              <VideoGallery content={content} />
              <VolunteerCTA content={content} />
              <BlogSection content={content} />
              <DonationExperience content={content} />
            </Suspense>
          </main>

          <Footer content={content} />
        </>
      ) : (
        /* ADMIN */
        <div style={{ padding: 40, background: '#fff', color: '#000' }}>
          <h1>Admin Dashboard</h1>

          <button onClick={() => setIsAdmin(false)}>
            Logout
          </button>

          <h3 style={{ marginTop: 20 }}>Donor Data</h3>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              {donors.length === 0 ? (
                <tr>
                  <td colSpan="3">No data</td>
                </tr>
              ) : (
                donors.map((d, i) => (
                  <tr key={i}>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.amount}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;