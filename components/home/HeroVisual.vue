<script setup lang="ts">
import { useI18n } from '#imports'
const { t } = useI18n()
</script>

<template>
  <div class="relative mx-auto w-full max-w-full min-w-0 px-2 sm:px-0">
    <div class="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/90 p-5 sm:p-6 shadow-[0_35px_120px_rgba(15,23,42,0.45)]">
      <div class="hidden sm:absolute sm:-left-12 sm:top-10 sm:h-36 sm:w-36 sm:rounded-full sm:bg-brand-500/10 sm:blur-3xl" />
      <div class="hidden sm:absolute sm:-right-10 sm:bottom-10 sm:h-28 sm:w-28 sm:rounded-full sm:bg-sky-500/10 sm:blur-3xl" />
      <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-8 px-5 sm:py-10 sm:px-7">
        <div class="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),transparent_55%)]" />
        <div class="relative mx-auto h-[300px] min-h-[300px] w-full rounded-[1.75rem] bg-slate-800/80 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] sm:h-[360px]">
          <div class="absolute inset-x-0 top-10 flex justify-center">
            <div class="h-28 w-28 rounded-full border border-white/15 bg-slate-700/75 shadow-[0_24px_80px_rgba(15,23,42,0.45)] sm:h-32 sm:w-32" />
          </div>
          <div class="absolute inset-x-0 bottom-8 flex justify-center text-center px-4">
            <div class="max-w-full rounded-[1.5rem] bg-slate-950/70 px-4 py-4 text-sm text-slate-300 backdrop-blur-sm sm:px-5">
              <p class="font-medium text-white">{{ t('index.hero.visualTitle') }}</p>
              <p class="mt-2 text-slate-400">{{ t('index.hero.visualDescription') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-2">
        <div class="w-full min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-brand-400/30">
          <p class="text-xs uppercase tracking-[0.11em] text-slate-400">{{ t('index.hero.platformsLabel') }}</p>
          <p class="mt-3 text-sm font-semibold text-white">{{ t('index.hero.platformsText') }}</p>
        </div>
        <div class="w-full min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/30">
          <p class="text-xs uppercase tracking-[0.11em] text-slate-400">{{ t('index.hero.systemsLabel') }}</p>
          <p class="mt-3 text-sm font-semibold text-white">{{ t('index.hero.systemsText') }}</p>
        </div>
      </div>
      <div class="absolute right-4 top-10 hidden w-40 animate-slide-in rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-soft backdrop-blur lg:block">
        <p class="text-xs uppercase tracking-[0.11em] text-slate-400">{{ t('index.hero.featuredStackLabel') }}</p>
        <p class="mt-3 text-sm font-semibold text-white">{{ t('index.hero.featuredStackText') }}</p>
      </div>
      <div class="absolute left-4 bottom-8 hidden w-40 rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-soft backdrop-blur lg:block">
        <p class="text-xs uppercase tracking-[0.11em] text-slate-400">{{ t('index.hero.liveConceptLabel') }}</p>
        <p class="mt-3 text-sm font-semibold text-white">{{ t('index.hero.liveConceptText') }}</p>
      </div>
    </div>
  </div>
</template>
