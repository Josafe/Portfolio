import type { Project } from '~/types/project'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'Modern multilingual portfolio built with Nuxt 3, Vue, TypeScript and TailwindCSS featuring responsive design, SEO optimisation and reusable architecture.',
    image: '/images/projects/portfolio.webp',
    technologies: ['Nuxt 3', 'Vue', 'TypeScript', 'Tailwind', 'i18n', 'SEO'],
    github: 'https://github.com/Josafe/Portfolio',
    live: 'https://josafe.dev',
    featured: true,
    status: 'live',
    type: 'featured'
  },
  {
    id: 'agc-padel-academy',
    title: 'AGC Padel Academy',
    description:
      'Premium web platform for the academy with a focused commercial experience for students and staff.',
    image: '/images/projects/portfolio.webp',
    technologies: ['Laravel', 'Vue', 'MySQL', 'Tailwind'],
    live: 'https://agcpadelacademy.com/',
    featured: true,
    status: 'live',
    type: 'featured'
  },
  {
    id: 'ai-automation-platform',
    title: 'AI Automation Platform',
    description:
      'Multi-step automation workspace for business operations with AI-assisted workflows and analytics.',
    image: '/images/projects/portfolio.webp',
    technologies: ['Vue', 'TypeScript', 'OpenAI', 'Node.js'],
    github: 'https://github.com/Josafe',
    featured: true,
    status: 'live',
    type: 'featured'
  },
  {
    id: 'community-toolkit',
    title: 'Community Toolkit',
    description:
      'Open source toolkit for product teams to centralize feedback, release notes and roadmap planning.',
    image: '/images/projects/portfolio.webp',
    technologies: ['Nuxt', 'Vue', 'TypeScript', 'Open Source'],
    github: 'https://github.com/Josafe',
    featured: false,
    status: 'open-source',
    type: 'opensource'
  }
]
