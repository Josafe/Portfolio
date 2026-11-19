<script setup lang="ts">
import { useI18n } from '#imports'
import { PROJECT_CATEGORIES, type ProjectCategory } from '~/types/project'

const { t } = useI18n()
const config = useRuntimeConfig()

useSeoMeta({
  title: t('meta.projects.title'),
  description: t('meta.projects.description')
})

const projects = useProjects()
const githubProfileUrl = `https://github.com/${config.public.githubUser}`

type CategoryFilter = ProjectCategory | 'all'
const selectedCategory = ref<CategoryFilter>('all')

const filterOptions = computed(() => [
  { value: 'all' as CategoryFilter, label: t('projects.filter.all'), count: projects.length },
  ...PROJECT_CATEGORIES.map(category => ({
    value: category as CategoryFilter,
    label: t(`projects.category.${category}`),
    count: projects.filter(project => project.category === category).length
  })).filter(option => option.count > 0)
])

const filteredProjects = computed(() =>
  selectedCategory.value === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory.value)
)
</script>

<template>
  <div>
    <header class="max-w-3xl">
      <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t('projects.title') }}</h1>
      <p class="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{{ t('projects.description') }}</p>
    </header>

    <div role="group" :aria-label="t('projects.filter.label')" class="mt-10 flex flex-wrap gap-2">
      <button
        v-for="option in filterOptions"
        :key="option.value"
        type="button"
        :aria-pressed="selectedCategory === option.value"
        :class="[
          'inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors',
          selectedCategory === option.value
            ? 'border-white bg-white text-slate-950'
            : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
        ]"
        @click="selectedCategory = option.value"
      >
        {{ option.label }}
        <span
          :class="['text-xs tabular-nums', selectedCategory === option.value ? 'text-slate-600' : 'text-slate-400']"
          aria-hidden="true"
        >
          {{ option.count }}
        </span>
      </button>
    </div>

    <p class="sr-only" aria-live="polite">{{ t('projects.results', filteredProjects.length) }}</p>

    <ul class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <li v-for="project in filteredProjects" :key="project.slug" class="flex">
        <ProjectCard :project="project" :heading-level="2" class="w-full" />
      </li>
    </ul>

    <p v-if="filteredProjects.length === 0" class="py-12 text-center text-slate-400">{{ t('projects.empty') }}</p>

    <div class="mt-12 flex justify-center border-t border-slate-800 pt-8">
      <a
        :href="githubProfileUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-700 px-5 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
      >
        <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.61-3.38-1.34-3.38-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.6 1.03 2.68 0 3.86-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.43-.01 2.75 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z"
          />
        </svg>
        {{ t('projects.githubProfile') }}
      </a>
    </div>
  </div>
</template>
