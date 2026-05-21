<script setup lang="ts">
import { useRuntimeConfig, useSeoMeta } from '#imports'

const config = useRuntimeConfig()

useSeoMeta({
  title: 'Josafe.com · Portfolio Full Stack & AI Systems',
  description:
    'Landing page premium de Josafe amb projectes Full Stack, AI Systems i arquitectura de software moderna.',
  ogTitle: 'Josafe.com · Portfolio Full Stack & AI Systems',
  ogDescription:
    'Portfolio modern de Josafe: experiències digitals premium, sistemes intel·ligents i arquitectura de software escalable.',
  ogUrl: config.public.siteUrl,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="relative overflow-hidden bg-slate-950 text-white min-w-0">
    <BackgroundEffects />

    <main class="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28">
      <HeroSection />

      <section class="mt-16 grid gap-8 grid-cols-1 xl:grid-cols-[1fr_0.9fr]">
        <div class="space-y-6 min-w-0">
          <div class="w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 sm:p-6 shadow-soft backdrop-blur-xl">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div class="min-w-0">
                <p class="text-sm uppercase tracking-[0.11em] sm:tracking-[0.14em] text-slate-400">Connect & collaborate</p>
                <h2 class="mt-3 text-2xl font-semibold text-white break-words">Connect with the core systems that shape premium digital products.</h2>
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
