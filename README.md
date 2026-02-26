# Ummay Kulsoom - Portfolio Website

A modern, responsive Next.js portfolio website showcasing projects, skills, and expertise in full-stack web development.

## 🚀 Features

- **Modern Design**: Built with Next.js and Tailwind CSS
- **Responsive**: Fully mobile-responsive design
- **Smooth Animations**: Engaging animations and transitions
- **Project Showcase**: Display 20+ projects across different categories
- **Skills Section**: Showcase technical expertise with progress bars
- **Contact Form**: Functional contact form for inquiries
- **Dark Mode Ready**: Easy to add dark mode support
- **SEO Optimized**: Next.js built-in SEO optimizations

## 📋 Sections

1. **Navbar** - Fixed navigation with smooth scrolling
2. **Hero** - Eye-catching introduction with animated profile
3. **About** - Background, location, education details
4. **Projects** - 20+ projects including:
   - E-Commerce Platforms
   - Q-Commerce Solutions
   - Multi-Vendor Marketplaces
   - Real Estate Platforms
   - Food/Restaurant Systems
   - Fashion E-Commerce
   - Home Appliances Shops
   - AI Integration Systems
   - n8n Workflow Automation
   - Lovable Projects
   - Replit Projects
   - CLI Tools & LLM Integration
5. **Skills** - Technical skills with proficiency levels
6. **Contact** - Contact form and information
7. **Footer** - Quick links and social media

## 🛠️ Tech Stack

### Frontend
- **Next.js 14+** - React framework
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library
- **Font Awesome** - Icons

### Development
- **JavaScript/JSX** - Programming language
- **PostCSS** - CSS tool
- **Autoprefixer** - Browser compatibility

## 📦 Installation

1. **Clone the repository**
   ```bash
   cd "portfolio web"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
portfolio web/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Projects.jsx        # Projects showcase
│   ├── Skills.jsx          # Skills section
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer
├── package.json            # Dependencies
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
└── jsconfig.json           # JS config
```

## 🎨 Customization

### Update Personal Information
Edit `components/Hero.jsx`, `components/About.jsx`, and `components/Contact.jsx` to update:
- Name and title
- Contact information
- Bio and description
- Social media links

### Modify Projects
Edit `components/Projects.jsx` to add/remove projects:
```jsx
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    tags: ["Tag1", "Tag2"],
    category: "Category",
    icon: "fas fa-icon",
    gradient: "from-purple-400 to-pink-400"
  },
  // ... more projects
]
```

### Change Colors
Update `app/globals.css` and `tailwind.config.js` to customize:
- Gradient colors
- Accent colors
- Button styles

### Update Skills
Edit `components/Skills.jsx` to modify:
- Skill names and percentages
- Technology categories and items

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Other Platforms

The project can be deployed to any platform supporting Next.js:
- **Netlify**: `npm run build` and deploy `out` folder
- **GitHub Pages**: Configure for static export
- **Heroku**: Add Procfile and deploy

## 📝 Building for Production

```bash
npm run build
npm start
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

Feel free to fork and modify for your own use!

## 📄 License

This portfolio is personal property of Ummay Kulsoom.

## 📞 Contact

- **Phone**: 0324 9208788
- **Location**: Nishter Road, Karachi, Pakistan
- **Education**: Karachi University

---

**Built with ❤️ by Ummay Kulsoom**
# Ummay-s-portfolio
