# WanderlustTravels

A modern, professional tourism website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Built with Next.js 14 App Router
- 💪 TypeScript for type safety
- 🎯 SEO optimized
- 📱 Mobile-first responsive design
- 🚀 Fast performance and optimized builds

## Pages

- **Home**: Landing page with hero section, features, and services overview
- **About**: Company story, values, and team expertise
- **Services**: Detailed service offerings including AI consulting, ML development, NLP, and more
- **Contact**: Contact form and business information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd wanderlust-travels
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Project Structure

```
wanderlust-travels/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts` to match your brand colors.

### Content

Update the content in each page file:
- Home page: `app/page.tsx`
- About page: `app/about/page.tsx`
- Services page: `app/services/page.tsx`
- Contact page: `app/contact/page.tsx`

### Contact Information

Update contact details in `components/Footer.tsx` and `app/contact/page.tsx`.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## License

Copyright © 2025 WanderlustTravels. All rights reserved.

## Support

For support, email info@ainextstudio.com or visit our contact page.
