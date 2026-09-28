/* ─── Projects & Services content ───────────────────────────────
   Mirrors the content from the codecraftai-website Projects/Services
   sections, adapted to this portfolio's own local image assets.
   One project per mockup image — no duplicates. */

/* ─── Projects ──────────────────────────────────────────────── */
export const projectCategories = [
  'All',
  'Portfolio & Tools',
  'AI & Automation',
  'E-Commerce',
  'Community & Misc',
]

export const projects = [
  /* ── Portfolio & Tools ── */
  {
    title: 'Ummay Kulsoom Portfolio',
    description: 'Personal developer portfolio showcasing projects, skills, and AI-first work — built with Next.js.',
    url: 'https://ummay-kulsoom-portfolio.vercel.app/',
    tags: ['Next.js', 'Tailwind', 'Portfolio'],
    category: 'Portfolio & Tools',
    image: '/images/project/Portfolio Website.png',
  },
  {
    title: 'Physical AI Textbook',
    description: 'Interactive digital textbook built with Docusaurus — structured learning content, MDX components, and search-enabled navigation.',
    url: 'https://1-docosaurus-textbook.vercel.app/',
    tags: ['Docusaurus', 'MDX', 'Docs'],
    category: 'Portfolio & Tools',
    image: '/images/project/Docusaurus.png',
  },
  {
    title: 'AI Resume Builder',
    description: 'AI-powered resume builder that crafts professional resumes using intelligent formatting and content suggestions.',
    url: '#',
    tags: ['Next.js', 'AI', 'PDF'],
    category: 'Portfolio & Tools',
    image: '/images/project/Resume Builder app.png',
  },

  /* ── AI & Automation ── */
  {
    title: 'CRM Digital Employee',
    description: 'Autonomous AI agent that handles CRM data entry, follow-up emails, and lead scoring — a fully-functional digital sales employee.',
    url: 'https://crm-digital-employee.vercel.app/',
    tags: ['Claude API', 'CRM', 'AI Agent'],
    category: 'AI & Automation',
    image: '/images/project/CRM.png',
  },
  {
    title: 'AI Employee Platform',
    description: 'Autonomous AI employee that manages tasks, responds to messages, and coordinates workflows — your digital team member.',
    url: '#',
    tags: ['AI Agent', 'Automation', 'Python'],
    category: 'AI & Automation',
    image: '/images/project/ai-employee.png',
  },
  {
    title: 'Workflow Automation',
    description: 'Visual workflow builder and automation orchestration platform — connect APIs, trigger actions, and manage multi-step business processes.',
    url: 'https://work-flow-psi.vercel.app/',
    tags: ['Workflow', 'Automation', 'Next.js'],
    category: 'AI & Automation',
    image: '/images/project/fte.png',
  },
  {
    title: 'Karachi Port Vessel Tracker',
    description: 'Real-time port monitoring dashboard — tracking vessel arrivals, cargo status, and port congestion for Karachi harbor.',
    url: 'https://karachi-port-watch.vercel.app/',
    tags: ['Real-time', 'Tracking', 'Maps'],
    category: 'AI & Automation',
    image: '/images/project/Karchi port vessel tracker.png',
  },

  /* ── E-Commerce ── */
  {
    title: 'Amazon Clone',
    description: 'Full-featured e-commerce clone with product listings, cart, checkout, and payment integration.',
    url: 'https://amazon-clone.vercel.app/',
    tags: ['Next.js', 'Stripe', 'Auth'],
    category: 'E-Commerce',
    image: '/images/project/Amazon clone.png',
  },
  {
    title: 'MakeUp Muse',
    description: 'Beauty e-commerce store with skin-tone matching and personalised product recommendations.',
    url: 'https://make-up-muse.vercel.app/',
    tags: ['E-Commerce', 'AI Recs', 'Beauty'],
    category: 'E-Commerce',
    image: '/images/project/ecommerce.png',
  },
  {
    title: 'Exclusive Fashion',
    description: 'Premium fashion store with lookbook gallery, collection pages, and a smooth cart and checkout flow.',
    url: '#',
    tags: ['Fashion', 'Brand', 'Next.js'],
    category: 'E-Commerce',
    image: '/images/project/Exclussive.png',
  },
  {
    title: 'Luxe Living',
    description: 'Premium home goods and furniture store with rich product previews and curated collection pages.',
    url: 'https://luxe-living-amber.vercel.app/',
    tags: ['Furniture', 'Luxury', 'Storefront'],
    category: 'E-Commerce',
    image: '/images/project/Luxe Living .png',
  },
  {
    title: 'Home Appliances',
    description: 'Consumer electronics and appliances marketplace with comparison tool, spec sheets, and smart product search.',
    url: 'https://home-appliances-flame.vercel.app/',
    tags: ['Electronics', 'Comparison', 'Search'],
    category: 'E-Commerce',
    image: '/images/project/Home Appliences.png',
  },
  {
    title: 'Real Estate',
    description: 'Property listing platform with map-based search, mortgage calculator, and agent contact forms.',
    url: 'https://real-estate-omega-topaz.vercel.app/',
    tags: ['Property', 'Maps', 'Listings'],
    category: 'E-Commerce',
    image: '/images/project/Real Estate.png',
  },
  {
    title: 'Al Imran Fabrics',
    description: 'Fabric and textile store with per-metre ordering, colour swatch display, and wholesale pricing tiers.',
    url: 'https://alimranfabricsonline-hazel.vercel.app/',
    tags: ['Textiles', 'Custom Orders', 'B2B'],
    category: 'E-Commerce',
    image: '/images/project/al-imran fabrics.png',
  },
  {
    title: 'Hunermand Marketplace',
    description: 'Skilled professionals marketplace connecting clients with verified freelancers — portfolios, bidding, and secure payments.',
    url: '#',
    tags: ['Marketplace', 'Freelancing', 'Next.js'],
    category: 'E-Commerce',
    image: '/images/project/Hunermand.png',
  },
  {
    title: 'Jewellery Store',
    description: 'Elegant jewellery storefront with featured products, category browsing, filters, and newsletter sign-up.',
    url: '#',
    tags: ['Jewellery', 'Storefront', 'Next.js'],
    category: 'E-Commerce',
    image: '/images/project/jewellery.png',
  },

  /* ── Community & Misc ── */
  {
    title: 'SMJS Community Site',
    description: 'Community platform with discussions, event listings, and member profiles.',
    url: 'https://community-dun-two.vercel.app/',
    tags: ['Community', 'Firebase', 'Real-time'],
    category: 'Community & Misc',
    image: '/images/project/Community.png',
  },
  {
    title: 'FoodTuck Restaurant',
    description: 'Restaurant website with online menu, table reservations, and delivery tracking — built mobile-first.',
    url: 'https://foodtuck-bice.vercel.app/',
    tags: ['Restaurant', 'Reservations', 'Menu'],
    category: 'Community & Misc',
    image: '/images/project/foodTuck Resturant Plateform.png',
  },
]

/* ─── Services ───────────────────────────────────────────────── */
/* Images live in /images/services-web — generated from /images/services
   by `node scripts/key-out-black.js services` (resized, black backdrop kept). */
export const services = [
  {
    title: 'AI Agents',
    slug: 'ai-agents',
    shortDescription: 'Autonomous AI agents that handle repetitive tasks, answer queries, and make decisions — freeing you to focus on growth.',
    image: '/images/services-web/ai-agents.jpg',
  },
  {
    title: 'AI Chatbots',
    slug: 'ai-chatbots',
    shortDescription: 'Intelligent chatbots that understand context and provide instant, consistent support to your customers across every channel.',
    image: '/images/services-web/ai-chatbots.jpg',
  },
  {
    title: 'Business Automation',
    slug: 'business-automation',
    shortDescription: 'End-to-end automation of your business workflows — from data processing to customer follow-ups — saving hours every week.',
    image: '/images/services-web/business-automation.jpg',
  },
  {
    title: 'E-Commerce Solutions',
    slug: 'ecommerce',
    shortDescription: 'Custom e-commerce platforms built for conversion, with seamless checkout and AI-powered product recommendations.',
    image: '/images/services-web/ecommerce.jpg',
  },
  {
    title: 'Mobile Apps',
    slug: 'mobile-apps',
    shortDescription: 'Cross-platform mobile applications built with React Native and Expo — one codebase for iOS and Android.',
    image: '/images/services-web/mobile-apps.jpg',
  },
  {
    title: 'Custom Dashboards',
    slug: 'custom-dashboards',
    shortDescription: 'Real-time dashboards that turn raw data into actionable insights with interactive charts, filters, and role-based access.',
    image: '/images/services-web/custom-dashboards.jpg',
  },
  {
    title: 'CRM Systems',
    slug: 'crm',
    shortDescription: 'Tailored CRM solutions that help you manage leads, track interactions, automate follow-ups, and close deals faster.',
    image: '/images/services-web/crm.jpg',
  },
  {
    title: 'n8n Automation',
    slug: 'n8n-automation',
    shortDescription: 'Self-hosted automation workflows using n8n — connect any tool, trigger any action, on your own infrastructure.',
    image: '/images/services-web/n8n-automation.jpg',
  },
  {
    title: 'Portfolio Websites',
    slug: 'portfolio',
    shortDescription: 'Modern portfolio websites with smooth animations and fast performance that showcase your work and attract clients.',
    image: '/images/services-web/portfolio.jpg',
  },
  {
    title: 'SaaS & AI Products',
    slug: 'saas-ai',
    shortDescription: 'Full-stack SaaS products with AI capabilities — from concept to deployment, including auth, payments, and scaling.',
    image: '/images/services-web/saas-ai.jpg',
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    shortDescription: 'User-centered design and interactive prototypes that make your digital products intuitive, beautiful, and conversion-focused.',
    image: '/images/services-web/ui-ux-design.jpg',
  },
  {
    title: 'Telegram Bot Development',
    slug: 'telegram-bot',
    shortDescription: "Custom Telegram bots that automate customer service, deliver notifications, and engage users across one of the world's fastest-growing platforms.",
    image: '/images/services-web/telegram-bot.jpg',
  },
]
