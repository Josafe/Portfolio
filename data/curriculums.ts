export interface Curriculum {
  id: string
  title: string
  subtitle: string
  description: string
  pdf: string
  preview: string
  tags: string[]
}

export const curriculums: Curriculum[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    subtitle: 'Frontend + Backend + APIs + arquitectura moderna',
    description:
      'Disseny i desenvolupament d’aplicacions web completes, arquitectures escalables i fluxos de treball optimitzats per productes digitals moderns.',
    pdf: '/cv/fullstack.pdf',
    preview: '/images/cv/fullstack-preview.svg',
    tags: ['Vue', 'Nuxt', 'Laravel', 'Node.js']
  },
  {
    id: 'ai-systems',
    title: 'AI Systems Engineer',
    subtitle: 'LLMs, Multi-Agent Systems i automatització IA',
    description:
      'Creació de sistemes d’intel·ligència artificial orientats a producte amb agents col·laboratius, automatització intel·ligent i fluxos de dades avançats.',
    pdf: '/cv/ai-systems.pdf',
    preview: '/images/cv/ai-systems-preview.svg',
    tags: ['LLM', 'Multi-Agent', 'Python', 'Automation']
  },
  {
    id: 'database-admin',
    title: 'Database Administrator',
    subtitle: 'SQL, PostgreSQL, MySQL i optimització de dades',
    description:
      'Administració de bases de dades robusta, optimització de rendiment i models de dades fiables per aplicacions empresarials i serveis en producció.',
    pdf: '/cv/database-administrator.pdf',
    preview: '/images/cv/database-admin-preview.svg',
    tags: ['PostgreSQL', 'MySQL', 'SQL', 'Data Modeling']
  },
  {
    id: 'systems-admin',
    title: 'Systems Administrator',
    subtitle: 'Linux, Docker, networking i infraestructura',
    description:
      'Infraestructura senzilla i segura, deploys automatitzats i manteniment de sistemes amb enfoc en disponibilitat, escalabilitat i fiabilitat.',
    pdf: '/cv/systems-administrator.pdf',
    preview: '/images/cv/systems-admin-preview.svg',
    tags: ['Linux', 'Docker', 'Kubernetes', 'DevOps']
  },
  {
    id: 'it-technician',
    title: 'IT Technician',
    subtitle: 'Suport tècnic, hardware, software i manteniment',
    description:
      'Gestió d’equips, resolució d’incidències i monitoratge proactiu per mantenir operatives les infraestructures i l’experiència dels usuaris.',
    pdf: '/cv/it-technician.pdf',
    preview: '/images/cv/it-technician-preview.svg',
    tags: ['Support', 'Hardware', 'Software', 'Maintenance']
  }
]
