<script setup lang="ts">
import { useI18n } from '#imports'
import { curriculums } from '~/data/curriculums'

const { t } = useI18n()

useSeoMeta({
  title: t('meta.curriculum.title'),
  description: t('meta.curriculum.description')
})
</script>

<template>
  <div>
    <header class="max-w-3xl">
      <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{{ t('curriculum.header.title') }}</h1>
      <p class="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{{ t('curriculum.header.description') }}</p>
    </header>

    <ul class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <li v-for="cv in curriculums" :key="cv.id" class="flex">
        <CVCard v-bind="cv" class="w-full" />
      </li>
    </ul>

    <section
      aria-labelledby="cv-additional-heading"
      class="mt-12 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8"
    >
      <h2 id="cv-additional-heading" class="text-lg font-semibold text-white">{{ t('curriculum.additional.title') }}</h2>
      <div class="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
        <p>{{ t('curriculum.additional.line1') }}</p>
        <p>{{ t('curriculum.additional.line2') }}</p>
      </div>
    </section>
  </div>
</template>
