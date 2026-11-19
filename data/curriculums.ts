export interface Curriculum {
  /** Matches the `curriculum.cards.<id>` translation keys (title, subtitle, description in CA/ES/EN). */
  id: string
  pdf: string
  tags: string[]
}

export const curriculums: Curriculum[] = [
  {
    id: 'fullstack',
    pdf: '/cv/fullstack.pdf',
    tags: ['Vue', 'Nuxt', 'Laravel', 'Node.js']
  },
  {
    id: 'ai-systems',
    pdf: '/cv/ai-systems.pdf',
    tags: ['LLM', 'Multi-Agent', 'Python', 'Automation']
  },
  {
    id: 'database-admin',
    pdf: '/cv/database-administrator.pdf',
    tags: ['PostgreSQL', 'MySQL', 'SQL', 'Data Modeling']
  },
  {
    id: 'systems-admin',
    pdf: '/cv/systems-administrator.pdf',
    tags: ['Linux', 'Docker', 'Kubernetes', 'DevOps']
  },
  {
    id: 'it-technician',
    pdf: '/cv/it-technician.pdf',
    tags: ['Support', 'Hardware', 'Software', 'Maintenance']
  }
]
