<script setup lang="ts">
const { t, } = useI18n()
</script>

<template>
  <section class="relative min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 sm:p-8 lg:p-10">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),transparent_45%)]" />
    <div class="pointer-events-none absolute -left-8 top-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
    <div class="pointer-events-none absolute right-0 bottom-0 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />

    <div class="relative grid w-full min-w-0 gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
      <div class="space-y-8 min-w-0">
        <div class="inline-flex max-w-max items-center gap-3 rounded-full border border-brand-500/30 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
          <span class="h-2.5 w-2.5 rounded-full bg-brand-500 shadow-[0_0_16px_rgba(99,102,241,0.4)]" />
          {{ t('index.hero.badge') }}
        </div>

        <div class="space-y-6">
          <h1 class="break-words text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {{ t('index.hero.heading') }}
          </h1>
          <p class="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            {{ t('index.hero.paragraph') }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <NuxtLink
            :to="('/projects')"
            class="inline-flex w-full justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(99,102,241,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(99,102,241,0.28)] sm:w-auto"
          >
            {{ t('index.hero.projects') }}
          </NuxtLink>
          <NuxtLink
            :to="('/about')"
            class="inline-flex w-full justify-center whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-brand-400 hover:bg-white/10 sm:w-auto"
          >
            {{ t('index.hero.about') }}
          </NuxtLink>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/30">
            <p class="text-2xl font-semibold text-white">10+</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('index.hero.stats.projects') }}</p>
          </article>
          <article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-400/30">
            <p class="text-2xl font-semibold text-white">AI Systems</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('index.hero.stats.ai') }}</p>
          </article>
          <article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-400/30">
            <p class="text-2xl font-semibold text-white">Full Stack</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('index.hero.stats.fullStack') }}</p>
          </article>
          <article class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-center shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/30">
            <p class="text-2xl font-semibold text-white">Cloud</p>
            <p class="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{{ t('index.hero.stats.cloud') }}</p>
          </article>
        </div>

        <div class="flex flex-wrap gap-2">
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">Vue</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">Nuxt</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">TypeScript</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">AI Systems</span>
          <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-slate-200 transition hover:border-brand-400/30 hover:bg-white/10">Docker</span>
        </div>
      </div>

      <div class="relative min-w-0">
        <div class="relative mx-auto max-w-lg">
          <div class="absolute -left-8 -top-6 h-32 w-32 rounded-full bg-brand-500/10 blur-3xl" />
          <div class="absolute right-0 top-12 h-28 w-28 rounded-full bg-sky-500/10 blur-3xl" />
          <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-[0_40px_120px_rgba(15,23,42,0.35)] transition duration-500 hover:-translate-y-1">
            <img
              src="/images/cv/fullstack-preview.jpg"
              alt="Professional portrait"
              class="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-400/30">
              <p class="text-xs uppercase tracking-[0.18em] text-slate-400">{{ t('index.hero.featuredStackLabel') }}</p>
              <p class="mt-3 text-sm font-semibold text-white">{{ t('index.hero.featuredStackText') }}</p>
            </div>
            <div class="rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-400/30">
              <p class="text-xs uppercase tracking-[0.18em] text-slate-400">{{ t('index.hero.liveConceptLabel') }}</p>
              <p class="mt-3 text-sm font-semibold text-white">{{ t('index.hero.liveConceptText') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- 
<script setup lang="ts">
import { useI18n } from '#imports'
import HeroVisual from './HeroVisual.vue'

const { t,  } = useI18n()
</script>

<template>
  <section class="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 px-5 py-8 shadow-soft backdrop-blur-xl sm:px-6 sm:py-10 lg:px-8 lg:py-12">
    <div class="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),transparent_28%)]" />
    <div class="grid gap-10 grid-cols-1 xl:grid-cols-[1fr_0.95fr] xl:items-center">
      <div class="space-y-8 min-w-0">
        <span class="inline-flex max-w-full items-center gap-3 rounded-full border border-brand-500/30 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] tracking-[0.11em] sm:tracking-[0.14em]">
          <span class="h-2.5 w-2.5 rounded-full bg-brand-500 shadow-[0_0_16px_rgba(99,102,241,0.4)] animate-pulse" />
          {{ t('index.hero.badge') }}
        </span>

        <div class="space-y-6">
          <h1 class="break-words text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl sm:tracking-[-0.02em] lg:tracking-[-0.03em]">
            {{ t('index.hero.heading') }}
          </h1>
          <p class="max-w-full break-words text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            {{ t('index.hero.paragraph') }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <NuxtLink
            :to="('/projects')"
            class="inline-flex w-full justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(99,102,241,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(99,102,241,0.28)] sm:w-auto"
          >
            {{ t('index.hero.projects') }}
            <span class="ml-3 text-base">→</span>
          </NuxtLink>
          <NuxtLink
            :to="('/about')"
            class="inline-flex w-full justify-center whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-brand-400 hover:bg-white/10 sm:w-auto"
          >
            {{ t('index.hero.about') }}
          </NuxtLink>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 sm:p-5 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-brand-400/30">
            <p class="text-xs uppercase tracking-[0.11em] text-slate-400">{{ t('index.hero.platformsLabel') }}</p>
            <p class="mt-3 text-base font-semibold text-white">{{ t('index.hero.platformsText') }}</p>
          </div>
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 sm:p-5 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/30">
            <p class="text-xs uppercase tracking-[0.11em] text-slate-400">{{ t('index.hero.systemsLabel') }}</p>
            <p class="mt-3 text-base font-semibold text-white">{{ t('index.hero.systemsText') }}</p>
          </div>
        </div>
      </div>

      <HeroVisual />
    </div>
  </section>
</template> -->
