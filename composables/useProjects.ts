import { projects } from '~/data/projects'
import type { Project } from '~/types/project'

/** Curated projects: featured first, then by `order`. */
const sortedProjects: readonly Project[] = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured) || a.order - b.order
)

export const useProjects = () => sortedProjects
