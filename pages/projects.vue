<script setup lang="ts">
import type { Project, GithubRepo } from '~/types/project'

useSeoMeta({
  title: 'Projects · Josafe.com',
  description: 'Projectes desplegats i repositoris GitHub de Josafe: desenvolupament web, sistemes AI i multi-agent.',
})

const staticProjects = useProjects()
const githubProjects = ref<GithubRepo[]>([])

try {
  githubProjects.value = await useGithubRepos()
} catch {
  githubProjects.value = []
}

const deployedProjects = computed(() =>
  staticProjects.value.filter(p => p.type === 'deployed')
)

const githubStaticProjects = computed(() =>
  staticProjects.value.filter(p => p.type === 'github')
)

const allGithubProjects = computed(() => [
  ...githubStaticProjects.value,
  ...githubProjects.value.map(repo => ({
    title: repo.name,
    description: repo.description || 'Sense descripció',
    stack: repo.language ? [repo.language] : [],
    github: repo.html_url,
    type: 'github' as const,
    featured: false
  }))
])

const activeTab = ref<'deployed' | 'github'>('deployed')

const currentProjects = computed(() => {
  return activeTab.value === 'deployed' ? deployedProjects.value : allGithubProjects.value
})

// Filters
const selectedTech = ref<string>('')
const availableTechs = computed(() => {
  const techs = new Set<string>()
  currentProjects.value.forEach(project => {
    project.stack.forEach(tech => techs.add(tech))
  })
  return Array.from(techs).sort()
})

const filteredProjects = computed(() => {
  if (!selectedTech.value) return currentProjects.value
  return currentProjects.value.filter(project =>
    project.stack.includes(selectedTech.value)
  )
})
</script>

<template>
  <div class="grid gap-8">
    <!-- Header -->
    <div class="grid gap-4">
      <h1 class="text-4xl font-bold text-white">Projectes</h1>
      <p class="text-slate-400">
        Una col·lecció de projectes desplegats i repositoris tècnics que mostren el meu treball en desenvolupament web i sistemes d'IA.
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 rounded-lg border border-slate-800 p-1">
      <button
        @click="activeTab = 'deployed'"
        :class="[
          'flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors',
          activeTab === 'deployed'
            ? 'bg-white text-slate-950'
            : 'text-slate-400 hover:text-white'
        ]"
      >
        Projectes Desplegats ({{ deployedProjects.length }})
      </button>
      <button
        @click="activeTab = 'github'"
        :class="[
          'flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors',
          activeTab === 'github'
            ? 'bg-white text-slate-950'
            : 'text-slate-400 hover:text-white'
        ]"
      >
        Repositoris GitHub ({{ allGithubProjects.length }})
      </button>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap gap-2">
      <button
        @click="selectedTech = ''"
        :class="[
          'rounded-full px-3 py-1 text-sm transition-colors',
          !selectedTech
            ? 'bg-white text-slate-950'
            : 'border border-slate-700 text-slate-400 hover:text-white'
        ]"
      >
        Tots
      </button>
      <button
        v-for="tech in availableTechs"
        :key="tech"
        @click="selectedTech = selectedTech === tech ? '' : tech"
        :class="[
          'rounded-full px-3 py-1 text-sm transition-colors',
          selectedTech === tech
            ? 'bg-white text-slate-950'
            : 'border border-slate-700 text-slate-400 hover:text-white'
        ]"
      >
        {{ tech }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="`${project.title}-${project.github || project.url}`"
        :project="project"
      />
    </div>

    <!-- Empty State -->
    <div v-if="filteredProjects.length === 0" class="text-center py-12">
      <p class="text-slate-400">No s'han trobat projectes amb aquest filtre.</p>
    </div>
  </div>
</template>