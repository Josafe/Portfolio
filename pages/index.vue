<script setup lang="ts">
import { useRuntimeConfig, useSeoMeta, useI18n } from '#imports'
const { t } = useI18n()
const config = useRuntimeConfig()

useSeoMeta({
  title: t('meta.index.title'),
  description: t('meta.index.description'),
  ogTitle: t('meta.index.ogTitle'),
  ogDescription: t('meta.index.ogDescription'),
  ogUrl: config.public.siteUrl,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="relative overflow-hidden bg-slate-950 text-white min-w-0">
    <BackgroundEffects />

    <main class="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <HeroSection />

      <section class="mt-16 grid gap-8 grid-cols-1 xl:grid-cols-[1fr_0.9fr]">
        <div class="space-y-6 min-w-0">
          <div class="w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6 shadow-soft backdrop-blur-xl">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="min-w-0">
                <p class="text-sm uppercase tracking-[0.11em] sm:tracking-[0.14em] text-slate-400">{{ t('index.connect.label') }}</p>
                <h2 class="mt-3 text-2xl font-semibold text-white break-words">{{ t('index.connect.title') }}</h2>
              </div>
            </div>
            <div class="mt-6">
              <HomeSocialLinks />
            </div>
          </div>

          <HomeTechStack />
        </div>

        <div class="min-w-0">
          <NavigationCards />
        </div>
      </section>
    </main>
  </div>
</template>
