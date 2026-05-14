export interface Project {
  title: string
  description: string
  stack: string[]
  url?: string
  github?: string
  type: 'deployed' | 'github'
  featured?: boolean
}

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
}
