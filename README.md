# Sarthak Bohora — Portfolio (Next.js)

Personal portfolio for Sarthak Bohora — UI/UX & Frontend Developer based in Kathmandu, Nepal.

Built with **Next.js 14** (App Router), **React 18**, **Three.js**, and **Resend** for the contact form.

---

## Quick start

### 1. Install dependencies
```bash
npm install
```

### 2. Set up the contact form (Resend)

Open `.env.local` and paste your Resend API key:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_RECEIVER_EMAIL=sarthakbohora1@gmail.com
CONTACT_SENDER_EMAIL=onboarding@resend.dev
```

**Where do I get a Resend API key?**
1. Sign up free at [https://resend.com](https://resend.com)
2. Go to **API Keys** → **Create API Key**
3. Copy the key (starts with `re_`) and paste it as `RESEND_API_KEY` in `.env.local`

**Notes about email addresses:**
- `CONTACT_RECEIVER_EMAIL` — your email, where contact form submissions will be delivered.
- `CONTACT_SENDER_EMAIL` — the "From" address. Use `onboarding@resend.dev` for testing (works out of the box). For production, verify your own domain in Resend and use something like `contact@yourdomain.com`.

### 3. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

---

## Project structure

```
sarthak-portfolio/
├── public/
│   ├── profile.jpg        # your profile photo
│   └── resume.pdf         # your resume (downloaded by "Resume" button)
├── src/
│   ├── app/
│   │   ├── layout.js      # root layout — fonts, metadata
│   │   ├── page.js        # home page — composes all sections
│   │   ├── globals.css    # all styles (matches original UI 1:1)
│   │   └── api/
│   │       └── contact/
│   │           └── route.js   # POST endpoint for the contact form (Resend)
│   └── components/
│       ├── Preloader.jsx       # the "SARTHAK" intro loader
│       ├── ThreeBackground.jsx # particle background
│       ├── CustomCursor.jsx    # custom cursor (desktop only)
│       ├── Navbar.jsx
│       ├── Hero.jsx            # hero + about section
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── .env.local             # your Resend key (DO NOT commit)
├── .env.local.example     # template for env vars
├── package.json
└── next.config.js
```

---

## Replacing your assets

- **Profile photo:** replace `public/profile.jpg`
- **Resume PDF:** replace `public/resume.pdf` (the "Download Resume" / "Resume" buttons link to this file)

---

## Customizing content

All text content lives directly in the component files in `src/components/`. For example:
- Hero greeting / tagline → `Hero.jsx`
- Skills list (with icons & levels) → `Skills.jsx`
- Project cards → `Projects.jsx`
- Experience timeline → `Experience.jsx`
- Contact info (email, phone, links) → `Contact.jsx`

---

## Deployment

The easiest way is **Vercel**:
1. Push this repo to GitHub
2. Import it on [vercel.com](https://vercel.com)
3. Add the same environment variables (`RESEND_API_KEY`, `CONTACT_RECEIVER_EMAIL`, `CONTACT_SENDER_EMAIL`) in the Vercel dashboard
4. Deploy
