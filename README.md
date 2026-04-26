🌲 The Wicked Woods — Equestrian Center Website

A modern, responsive website built for The Wicked Woods Equestrian Center, designed to showcase lessons, horses, and contact information with a clean, immersive user experience.

✨ Features
📱 Fully responsive design (mobile-first)
🎨 Custom hero sections with smooth image fades
🧊 Glassmorphism UI elements (frosted cards)
🐎 Dynamic “Meet the Horses” grid layout
📩 Functional contact form (powered by Resend API)
🍔 Animated mobile hamburger menu
🌄 Full-screen background image layouts
⚡ Optimized performance using Next.js + Image component
🛠️ Tech Stack
Framework: Next.js 16 (App Router)
Styling: Tailwind CSS
Fonts: Google Fonts + local custom fonts
Email Service: Resend API
Deployment: Vercel
📁 Project Structure
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── lessons/              # Learning Opportunities page
│   ├── horses/               # Meet the Horses page
│   ├── contact/              # Contact page
│   └── api/contact/route.ts  # Email API route
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── HomeSection.tsx
│   ├── LessonSection.tsx
│   └── FadeIn.tsx
│
public/
├── images/
│   ├── hero/
│   ├── lessons/
│   ├── horses/
│   └── ...
🚀 Getting Started
1. Clone the repo
git clone https://github.com/your-username/wicked-woods.git
cd wicked-woods
2. Install dependencies
npm install
3. Create environment variables

Create a file in the root of your project:

.env.local

Add your Resend API key:

RESEND_API_KEY=re_xxxxxxxxxxxxx
4. Run the development server
npm run dev

Then open:

http://localhost:3000
📩 Contact Form Setup (Resend)

This project uses Resend for handling contact form submissions.

Current Setup (Development)

Uses Resend test domain:

onboarding@resend.dev
Sends to a test email (your own)
Production Setup (Recommended)
Purchase a domain (e.g. wickedwoods.com)
Add domain in Resend dashboard
Configure DNS (DKIM + SPF)
Update API route:
from: "Wicked Woods <contact@wickedwoods.com>"
🎨 Design Notes
Dark, moody aesthetic with warm tones to match equestrian branding
Smooth transitions between sections using gradient fades
Background images used to create immersive sections
Minimal UI to keep focus on content and imagery
📱 Responsive Behavior
Desktop: centered navigation, full layouts
Tablet: adjusted grid + spacing
Mobile:
Hamburger menu
Collapsible navigation
Optimized image scaling
🧠 Future Improvements
Individual horse profile pages
Gallery lightbox / modal viewer
Booking or lesson scheduling system
CMS integration (for easier content updates)
Custom email domain setup
SEO optimization
🧑‍💻 Author

Built by Mark Waldron

📄 License

This project is for a private client (The Wicked Woods Equestrian Center).
Not intended for public redistribution.

🙌 Acknowledgements
Images provided by The Wicked Woods
Additional imagery from free-use sources
Built with Next.js + Tailwind CSS