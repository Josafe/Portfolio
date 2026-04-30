export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json'
  }

  if (config.githubToken) {
    headers.Authorization = `Bearer ${config.githubToken}`
  }

  return await $fetch(`https://api.github.com/users/${config.public.githubUser}/repos`, {
    query: {
      sort: 'updated',
      per_page: 12
    },
    headers
  })
})
