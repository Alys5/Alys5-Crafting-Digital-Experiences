# Alys5 | Crafting Digital Experiences 🎨
UX/UI Design • Front-End Development • Digital Innovation

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Vue Version](https://img.shields.io/badge/vue-3.x-brightgreen)
![Vuetify](https://img.shields.io/badge/vuetify-3.x-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Deployment](https://img.shields.io/badge/deployment-Vercel-black)

My professional portfolio website showcasing a decade of experience in UX/UI Design and Front-end Development. Built with Vue.js and Vuetify, this site demonstrates my approach to creating intuitive and engaging digital experiences.

## ✨ Features

- 🎯 Responsive design optimized for all devices
- 🌓 Light/Dark theme support
- 📱 Mobile-first approach
- ⚡ Optimized performance with Vercel Edge Network
- 🎮 Interactive UI components
- 📊 Project case studies
- 🔍 SEO optimized

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Vercel CLI (optional for local development)

### Installation

```bash
# Clone the repository
git clone https://github.com/alys5/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
# or
yarn install

# Install Vercel CLI (optional)
npm i -g vercel

# Start development server
npm run dev
# or
yarn dev
```

### Building for Production

```bash
# Build for production
npm run build
# or
yarn build

# Preview production build locally using Vercel CLI
vercel dev
```

## 🛠️ Tech Stack

- **Framework:** Vue.js 3
- **UI Library:** Vuetify 3
- **State Management:** Pinia
- **Router:** Vue Router
- **Styling:** SCSS/CSS
- **Animation:** GSAP
- **Testing:** Vitest
- **Deployment:** Vercel
- **Analytics:** Vercel Analytics

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable Vue components
├── layouts/         # Layout components
├── pages/          # Page components
├── router/         # Vue router configuration
├── store/          # Pinia store modules
├── styles/         # Global styles and variables
├── utils/          # Utility functions
└── App.vue         # Root component
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=Alys5 | Crafting Digital Experiences
VITE_API_BASE_URL=your-api-url
```

For Vercel deployment, configure these in your project settings on Vercel Dashboard.

### Build Configuration

- `vite.config.js` - Build configuration
- `vuetify.config.js` - Vuetify theme and plugin settings
- `vercel.json` - Vercel deployment configuration

## 🌐 Deployment

This site is automatically deployed through Vercel on push to the main branch.

### Deployment Configuration

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "buildCommand": "npm run build",
        "outputDirectory": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Deployment Commands

```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

## 🧪 Testing

```bash
# Run unit tests
npm run test
# or
yarn test

# Run e2e tests
npm run test:e2e
# or
yarn test:e2e
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 About Me

I'm Alice Mandelli, a UX/UI Designer and Front-end Developer with over 10 years of experience in creating digital experiences. Winner of the Nielsen Norman Intranet Design Annual Award 2021, I specialize in creating intuitive interfaces that bridge aesthetics and functionality.

### 🔗 Connect with Me

- Portfolio: [alys5.eu](https://alys5.eu)
- LinkedIn: [linkedin.com/in/alys5](https://linkedin.com/in/alys5)
- Fiverr: [fiverr.com/alys_5](https://fiverr.com/alys_5)

## 🤝 Contributing

While this is a personal portfolio site, I welcome feedback and suggestions! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Icons by [Lucide Icons](https://lucide.dev)
- Animations powered by [GSAP](https://greensock.com/gsap)
- Deployed with [Vercel](https://vercel.com)
- Analytics by [Vercel Analytics](https://vercel.com/analytics)
