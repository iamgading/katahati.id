# Kata Hati - Ruang Aman untuk Konseling Psikologi

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

A modern, empathetic landing page for mental health counseling services.

## 🌟 Features

- **Modern Design**: Calm teal color palette with warm, empathetic aesthetics
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Interactive Quiz**: Mental health self-assessment tool
- **WhatsApp Integration**: Direct booking through WhatsApp
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper color contrast
- **Fast Performance**: Built with Next.js 16 and Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
kata-hati-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles & theme
│   ├── components/
│   │   ├── Navbar.tsx           # Sticky navigation
│   │   ├── HeroSection.tsx      # Hero with CTA
│   │   ├── EmpathySection.tsx   # Problem identification
│   │   ├── AboutSection.tsx     # About psychologist
│   │   ├── ServicesSection.tsx  # Counseling services
│   │   ├── WhyChooseSection.tsx # Value propositions
│   │   ├── ProcessSection.tsx   # 4-step process
│   │   ├── TestimonialsSection.tsx # Client reviews
│   │   ├── QuizSection.tsx      # Mental health quiz
│   │   ├── ArticlesSection.tsx  # Blog preview
│   │   ├── FAQSection.tsx       # FAQ accordion
│   │   ├── CTASection.tsx       # Booking form
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── FloatingWhatsApp.tsx # Floating WA button
│   │   └── ui/                  # shadcn/ui components
│   └── lib/
│       └── utils.ts             # Utility functions
└── public/                      # Static assets
```

## 🎨 Design System

### Color Palette

```css
Primary:   #3BA6A0  /* Teal - Main CTA, highlights */
Secondary: #FFF5E9  /* Cream - Section backgrounds */
Accent:    #C5B7FF  /* Lilac - Badges, accents */
Text:      #1E2A2F  /* Dark - Main text */
Muted:     #F4F6F7  /* Light gray - Backgrounds */
```

### Typography

- **Font**: Plus Jakarta Sans (Google Fonts)
- **Headings**: Bold, 2xl-5xl
- **Body**: Regular, base-lg

## 📝 Configuration

### Update WhatsApp Number

Replace the placeholder number `6281234567890` in these files:

- `src/components/HeroSection.tsx`
- `src/components/CTASection.tsx`
- `src/components/FloatingWhatsApp.tsx`
- `src/components/Footer.tsx`

### Update Contact Information

Edit `src/components/Footer.tsx` to update:
- Email address
- Location
- Social media links

### Update Psychologist Information

Edit `src/components/AboutSection.tsx` to add:
- Psychologist name and credentials
- Photo (replace placeholder)
- Years of experience
- Client count

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

No environment variables required for MVP. For future features:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_EMAIL=hello@katahati.id
```

## 📊 SEO

The site includes:
- ✅ Proper meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML structure
- ✅ Alt text for images
- ✅ Structured data (can be enhanced)

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Plus Jakarta Sans

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a client project. For modifications:

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit for review

## 📄 License

Proprietary - All rights reserved by Kata Hati

## 📞 Support

For questions or support:
- Email: hello@katahati.id
- WhatsApp: +62 812-3456-7890

---

Built with ❤️ for mental health awareness
