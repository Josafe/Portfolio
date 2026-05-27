<script setup lang="ts">
import { useI18n } from '#imports'
import { curriculums } from '../data/curriculums'
const { t } = useI18n()
</script>

<template>
  <div class="grid gap-12">
    <!-- Header -->
    <div class="grid gap-4">
      <br> </br>
      <h1 class="text-4xl font-bold text-white">{{ t('curriculum.header.title') }}</h1>
      <p class="text-slate-400">{{ t('curriculum.header.description') }}</p>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      <CVCard v-for="cv in curriculums" :key="cv.id" v-bind="cv" />
    </div>

    <!-- Additional Info -->
    <div class="rounded-lg border border-slate-800 p-6">
      <h3 class="text-lg font-semibold text-white mb-4">{{ t('curriculum.additional.title') }}</h3>
      <div class="grid gap-4 text-sm text-slate-300">
        <p>{{ t('curriculum.additional.line1') }}</p>
        <p>{{ t('curriculum.additional.line2') }}</p>
      </div>
    </div>
  </div>
</template>