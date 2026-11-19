<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()

/** Titles and descriptions live in `index.tech.categories.<id>` (CA/ES/EN). */
const categories = [
  { id: 'frontend', items: ['Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { id: 'backend', items: ['Laravel', 'Node.js', 'Java', 'Python', 'REST APIs'] },
  { id: 'ai', items: ['AI Systems', 'LLMs', 'Multi-Agent Systems', 'Automation', 'Python AI'] },
  { id: 'databases', items: ['PostgreSQL', 'SQLite', 'SQL Server', 'MySQL', 'NoSQL'] },
  { id: 'cloud', items: ['AWS', 'Azure', 'Linux', 'Networking', 'CDN'] },
  { id: 'devops', items: ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions'] }
]
</script>

<template>
  <section aria-labelledby="tech-stack-heading">
    <div class="max-w-2xl">
      <h2 id="tech-stack-heading" class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {{ t('index.tech.title') }}
      </h2>
      <p class="mt-3 text-base leading-relaxed text-slate-400">{{ t('index.tech.subtitle') }}</p>
    </div>

    <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="category in categories"
        :key="category.id"
        class="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
      >
        <h3 class="text-base font-semibold text-white">{{ t(`index.tech.categories.${category.id}.title`) }}</h3>
        <p class="mt-1 text-sm leading-relaxed text-slate-400">
          {{ t(`index.tech.categories.${category.id}.description`) }}
        </p>
        <ul class="mt-4 flex flex-wrap gap-1.5">
          <li
            v-for="item in category.items"
            :key="item"
            class="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-300"
          >
            {{ item }}
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
