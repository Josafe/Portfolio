export type SiteLocale = 'ca' | 'es' | 'en'

/** A value provided in every site language. */
export type Localized<T = string> = Record<SiteLocale, T>

/** Real, confirmed state of a project. */
export const PROJECT_STATUSES = ['live', 'in-development', 'experimental'] as const
export type ProjectStatus = (typeof PROJECT_STATUSES)[number]

export const PROJECT_CATEGORIES = ['web', 'business-software', 'ai-systems', 'computer-vision'] as const
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number]

/** Confirmed context in which a project was built. */
export const PROJECT_CONTEXTS = ['personal', 'academic'] as const
export type ProjectContext = (typeof PROJECT_CONTEXTS)[number]

export interface ProjectLinks {
  /** Public, deployed site. */
  live?: string
  /** Public source repository. */
  repository?: string
}

export interface Project {
  /** Stable, unique, URL-safe identifier. */
  slug: string
  title: Localized
  description: Localized
  /** Honest clarifications: scope, limitations, business scenario, etc. */
  notes?: Localized<string[]>
  /** Omit when the state has not been confirmed. */
  status?: ProjectStatus
  category: ProjectCategory
  /** Omit when the context has not been confirmed. */
  context?: ProjectContext
  technologies: string[]
  featured: boolean
  /** Display order. Featured projects are listed first. */
  order: number
  links: ProjectLinks
}
