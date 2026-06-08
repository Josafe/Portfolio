<script setup lang="ts">
import type { Project } from '~/types/project'
import { useI18n } from '#imports'

defineProps<{
  project: Project
}>()

const { t } = useI18n()
</script>

<template>
  <div
    :initial="{ opacity: 0, y: 16 }"
    :enter="{ opacity: 1, y: 0 }"
    :duration="450"
    as="article"
    class="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-soft backdrop-blur transition-transform duration-200 hover:-translate-y-1"
  >
    <div class="mb-3 flex items-start justify-between gap-3">
      <h3 class="text-lg font-semibold text-white">{{ project.title }}</h3>
      <span v-if="project.featured" class="rounded-full border border-brand-500/40 bg-brand-500/10 px-2 py-1 text-xs text-brand-50">
        {{ t('projectCard.featured') }}
      </span>
    </div>

    <p class="mb-4 text-sm leading-relaxed text-slate-300">{{ project.description }}</p>

    <ul class="mb-5 flex flex-wrap gap-2">
      <li
        v-for="tech in project.stack"
        :key="tech"
        class="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-300"
      >
        {{ tech }}
      </li>
    </ul>

    <div class="flex gap-3 text-sm font-medium">
      <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer" class="text-brand-50 hover:text-white">{{ t('projectCard.github') }}</a>
      <a v-if="project.url" :href="project.url" target="_blank" rel="noreferrer" class="text-brand-50 hover:text-white">{{ t('projectCard.live') }}</a>
    </div>
  </div>
</template>
