# AGE İzolasyon Website

A modern, responsive website for AGE İzolasyon - Istanbul's leading insulation company. Built with Next.js 14, Material-UI, and TypeScript.

## 🏢 About AGE İzolasyon

AGE İzolasyon is a professional insulation company based in Istanbul, Turkey, specializing in comprehensive insulation solutions for residential, commercial, and industrial properties. With over 15 years of experience, we provide energy-efficient, comfortable, and sustainable living spaces.

## ✨ Features

### 🎨 Modern Design
- **Material Design 3**: Clean, professional interface with Material-UI components
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations and CSS transitions
- **Glass Morphism**: Modern glass effects and gradient backgrounds

### 🛠️ Services Showcase
- **Interactive Service Cards**: Hover animations reveal detailed information
- **Bilingual Support**: Turkish content with English image alt text for SEO
- **Service Categories**: 
  - Roof Insulation (Çatı İzolasyonu)
  - Wall Insulation (Duvar İzolasyonu)
  - Floor Insulation (Zemin İzolasyonu)
  - Sound Insulation (Ses İzolasyonu)
  - Waterproofing (Su İzolasyonu)
  - Fire Insulation (Yangın İzolasyonu)

### 📱 User Experience
- **Fast Loading**: Next.js 14 with App Router for optimal performance
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Contact Forms**: React Hook Form integration for inquiries

### 🎯 Business Features
- **Company Information**: About us, team, and company history
- **Project Portfolio**: Showcase of completed projects
- **Educational Content**: Insulation guides and tips
- **Contact Integration**: Multiple contact methods and forms

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Material-UI (MUI) v5** - Component library and design system
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling and validation

### Styling
- **Material-UI Theme** - Custom theme with brand colors
- **CSS-in-JS** - Emotion styling engine
- **Responsive Design** - Mobile-first approach
- **Custom Animations** - CSS keyframes and transitions

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Autoprefixer** - CSS vendor prefixes
- **PostCSS** - CSS processing

## 📁 Project Structure

```
age-izolasyon-website/
├── public/                 # Static assets
│   ├── images/            # Image assets
│   └── *.svg             # SVG icons and graphics
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global styles and animations
│   │   ├── layout.tsx    # Root layout component
│   │   └── page.tsx      # Homepage
│   ├── components/       # Reusable components
│   │   ├── cards/        # Service and project cards
│   │   ├── forms/        # Contact forms
│   │   ├── layout/       # Layout components
│   │   └── ui/           # UI components
│   ├── data/             # Static data and content
│   │   ├── services.ts   # Service information
│   │   └── projects.ts   # Project portfolio
│   ├── pages/            # Additional pages
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── ProjectsPage.tsx
│   ├── theme/            # Material-UI theme configuration
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions and constants
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── README.md            # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd age-izolasyon-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#0D47A1, #1976D2, #5472D3)
- **Secondary**: Orange (#FF6F00, #FF9F40)
- **Success**: Green (#2E7D32, #60AD5E)
- **Background**: Light grays (#F8FAFC, #F1F5F9)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-800)
- **Body Text**: Regular weight (400)
- **Responsive**: Fluid typography scaling

### Components
- **Service Cards**: Interactive hover effects with image overlays
- **Hero Section**: Gradient backgrounds with floating elements
- **Contact Cards**: Glass morphism effects
- **Navigation**: Material Design drawer for mobile

## 🌐 Pages & Routes

- `/` - Homepage with hero, services overview, and CTA
- `/hizmetlerimiz` - Complete services listing
- `/projelerimiz` - Project portfolio and case studies
- `/hakkimizda` - About company, team, and history
- `/egitim` - Educational content about insulation
- `/iletisim` - Contact information and forms

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px
- **Large Desktop**: > 1280px

### Features
- Mobile-first CSS approach
- Touch-friendly interface elements
- Optimized images for different screen sizes
- Collapsible navigation for mobile

## 🔧 Customization

### Theme Configuration
Edit `src/theme/index.ts` to customize:
- Color palette
- Typography settings
- Component overrides
- Breakpoints

### Content Management
Update content in:
- `src/data/services.ts` - Service information
- `src/data/projects.ts` - Project portfolio
- `src/utils/constants.ts` - Company information

### Styling
- Global styles: `src/app/globals.css`
- Component styles: Material-UI `sx` prop
- Animations: CSS keyframes and Framer Motion

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Traditional hosting** with Node.js support

### Environment Variables
Create `.env.local` for:
- Contact form endpoints
- Analytics tracking IDs
- Third-party service keys

## 📈 Performance

### Optimizations
- **Next.js Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic route-based splitting
- **Static Generation** - Pre-rendered pages for better performance
- **Font Optimization** - Google Fonts with display swap

### Lighthouse Scores
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for AGE İzolasyon. All rights reserved.

## 📞 Contact

**AGE İzolasyon**
- Website: [ageizolasyon.com](https://ageizolasyon.com)
- Phone: +90 (212) 555-0123
- Email: info@ageizolasyon.com
- Address: Istanbul, Turkey

---

Built with ❤️ by the AGE İzolasyon development team using modern web technologies.