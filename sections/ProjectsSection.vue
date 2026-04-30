<script setup lang="ts">
const staticProjects = useProjects()
const githubProjects = ref([])

try {
  githubProjects.value = await useGithubRepos()
} catch {
  githubProjects.value = []
}

const allProjects = computed(() => {
  return [...staticProjects.value, ...githubProjects.value]
})
</script>

<template>
  <section class="grid gap-5 border-b border-slate-800 py-12">
    <div class="flex flex-wrap items-end justify-between gap-3">
      <h2 class="text-2xl font-semibold text-white">Projectes</h2>
      <p class="text-sm text-slate-400">Importació automàtica de GitHub + projectes manuals en JSON</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in allProjects" :key="`${project.title}-${project.github || project.url}`" :project="project" />
    </div>
  </section>
</template>
