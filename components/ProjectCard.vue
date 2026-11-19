<script setup lang="ts">
import type { Project, ProjectStatus } from '~/types/project'
import { useI18n } from '#imports'

const props = withDefaults(
  defineProps<{
    project: Project
    /** Heading level for the project title, to keep the page outline valid. */
    headingLevel?: 2 | 3
  }>(),
  { headingLevel: 3 }
)

const { t } = useI18n()
const localize = useLocalized()

const MAX_VISIBLE_TECHNOLOGIES = 5
const visibleTechnologies = computed(() => props.project.technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES))
const hiddenTechnologies = computed(() => props.project.technologies.slice(MAX_VISIBLE_TECHNOLOGIES))

const statusClasses: Record<ProjectStatus, string> = {
  live: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  'in-development': 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  experimental: 'border-sky-400/30 bg-sky-400/10 text-sky-300'
}

const linkClasses =
  'inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-700 px-3 text-sm font-medium text-slate-200 transition-colors hover:border-slate-500 hover:text-white'
</script>

<template>
  <article
    :class="[
      'flex h-full flex-col rounded-2xl border bg-slate-900/40 p-5 transition-colors sm:p-6',
      project.featured ? 'border-brand-400/30 hover:border-brand-400/60' : 'border-slate-800 hover:border-slate-600'
    ]"
  >
    <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
      <span
        v-if="project.status"
        :class="['inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-medium', statusClasses[project.status]]"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
        {{ t(`projects.status.${project.status}`) }}
      </span>
      <span class="font-medium text-slate-400">{{ t(`projects.category.${project.category}`) }}</span>
      <span v-if="project.featured" class="ml-auto inline-flex items-center gap-1 font-medium text-brand-300">
        <svg viewBox="0 0 20 20" class="h-3.5 w-3.5 fill-current" aria-hidden="true">
          <path
            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
          />
        </svg>
        {{ t('projectCard.featured') }}
      </span>
    </div>

    <component :is="`h${headingLevel}`" class="mt-4 text-lg font-semibold leading-snug text-white">
      {{ localize(project.title) }}
    </component>
    <p v-if="project.context" class="mt-1 text-sm text-slate-400">
      {{ t(`projects.context.${project.context}`) }}
    </p>

    <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ localize(project.description) }}</p>

    <ul
      v-if="project.notes"
      class="mt-4 space-y-2 rounded-xl border border-slate-700/60 bg-slate-950/50 p-3 text-xs leading-relaxed text-slate-300"
    >
      <li v-for="note in localize(project.notes)" :key="note" class="flex gap-2">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mt-px h-4 w-4 shrink-0 text-slate-400" aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <span>{{ note }}</span>
      </li>
    </ul>

    <div class="mt-auto pt-5">
      <ul class="flex flex-wrap gap-1.5" :aria-label="t('projectCard.technologies')">
        <li
          v-for="tech in visibleTechnologies"
          :key="tech"
          class="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-300"
        >
          {{ tech }}
        </li>
        <li
          v-if="hiddenTechnologies.length"
          class="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-400"
          :title="hiddenTechnologies.join(', ')"
        >
          <span aria-hidden="true">+{{ hiddenTechnologies.length }}</span>
          <span class="sr-only">{{ hiddenTechnologies.join(', ') }}</span>
        </li>
      </ul>

      <div
        v-if="project.links.repository || project.links.live"
        class="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4"
      >
        <a
          v-if="project.links.repository"
          :href="project.links.repository"
          :aria-label="`${t('projectCard.repository')}: ${localize(project.title)}`"
          target="_blank"
          rel="noopener noreferrer"
          :class="linkClasses"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
            <path
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.61-3.38-1.34-3.38-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.6 1.03 2.68 0 3.86-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.43-.01 2.75 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
          {{ t('projectCard.repository') }}
        </a>
        <a
          v-if="project.links.live"
          :href="project.links.live"
          :aria-label="`${t('projectCard.live')}: ${localize(project.title)}`"
          target="_blank"
          rel="noopener noreferrer"
          :class="linkClasses"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4 shrink-0" aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
          {{ t('projectCard.live') }}
        </a>
      </div>
    </div>
  </article>
</template>
