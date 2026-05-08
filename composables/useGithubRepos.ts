import type { GithubRepo, Project } from '~/types/project'

export const useGithubRepos = async () => {
  const repos = await $fetch<GithubRepo[]>('/api/github-repos')

  return repos
    .filter((repo) => !repo.fork)
    .slice(0, 6)
    .map(
      (repo): Project => ({
        title: repo.name,
        description: repo.description || 'Repositori públic de GitHub.',
        stack: [repo.language || 'Code', `⭐ ${repo.stargazers_count}`],
        github: repo.html_url,
        url: ''
      })
    )
}
