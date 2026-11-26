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
    tags: ['Laravel', 'Vue', 'React', 'Go']
  },
  {
    id: 'ai-systems',
    pdf: '/cv/ai-systems.pdf',
    tags: ['LLM agents', 'LangGraph', 'Ollama', 'Python']
  },
  {
    id: 'database-admin',
    pdf: '/cv/database-administrator.pdf',
    tags: ['SQL', 'MySQL', 'PostgreSQL', 'ERP data']
  },
  {
    id: 'systems-admin',
    pdf: '/cv/systems-administrator.pdf',
    tags: ['Linux', 'Docker', 'AWS', 'Terraform']
  },
  {
    id: 'it-technician',
    pdf: '/cv/it-technician.pdf',
    tags: ['Support', 'Hardware', 'Linux', 'Remote maintenance']
  }
]
