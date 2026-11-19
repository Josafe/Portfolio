<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section aria-labelledby="hero-heading" class="relative isolate pt-4 sm:pt-12 lg:pt-16">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[28rem] w-full max-w-4xl -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(99,102,241,0.18),transparent)]"
    />

    <p class="text-sm font-medium text-brand-300">{{ t('index.hero.badge') }}</p>
    <h1
      id="hero-heading"
      class="mt-4 max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
    >
      {{ t('index.hero.heading') }}
    </h1>
    <p class="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
      {{ t('index.hero.paragraph') }}
    </p>

    <div class="mt-10 flex flex-col gap-3 sm:flex-row">
      <NuxtLink
        :to="localePath('/projects')"
        class="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
      >
        {{ t('index.hero.projects') }}
      </NuxtLink>
      <NuxtLink
        :to="localePath('/curriculum')"
        class="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-700 px-6 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-white/5"
      >
        {{ t('index.hero.cv') }}
      </NuxtLink>
    </div>
  </section>
</template>
