# SAHAY Foundation Premium Website

Production-grade React + Vite rebuild for SAHAY Foundation with cinematic video, GSAP scroll storytelling, Lenis smooth scroll, Framer Motion interactions, subtle Three.js particles, Supabase-backed forms, EmailJS notifications, Cloudinary-ready media helpers, and Razorpay-ready donation architecture.

## Folder Structure

```text
sahay-foundation-premium/
  public/media/
    children-learning.mp4
    classroom-story.mp4
    volunteer-moment.mp4
  src/
    components/
    data/siteContent.js
    hooks/
    lib/
    styles/index.css
    App.jsx
    main.jsx
  supabase/schema.sql
  .env.example
  index.html
  package.json
  postcss.config.js
  tailwind.config.js
  vite.config.js
```

## Install

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_FOLDER=sahay-foundation
VITE_RAZORPAY_KEY_ID=
VITE_DONATION_UPI_ID=sahayfoundation@upi
```

If Supabase or EmailJS variables are missing, the preview stores form submissions in localStorage so the UI remains testable without secrets.

## Supabase

Run `supabase/schema.sql` in the Supabase SQL editor. It creates:

- `volunteer_applications`
- `donation_pledges`
- public insert-only RLS policies for anonymous website submissions

For production, add dashboard-only read policies for authenticated staff accounts.

## Deployment

Deploy to Vercel, Netlify, or Cloudflare Pages:

```bash
npm run build
```

Use `dist` as the output directory. Add all environment variables in the hosting dashboard. Upload optimized media to Cloudinary for production and swap local video references in `src/data/siteContent.js` with `cloudinaryVideoUrl(...)` outputs when ready.

## Content Note

The story section uses privacy-safe placeholder story slots because verified beneficiary stories and written consent were not included in the provided files. Replace `src/data/siteContent.js` story entries before launch.
