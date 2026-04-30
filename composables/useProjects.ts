import projects from '~/data/projects.json'
import type { Project } from '~/types/project'

export const useProjects = () => {
  return computed(() => projects as Project[])
}
