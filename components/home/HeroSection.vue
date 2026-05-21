<script setup lang="ts">
import HeroVisual from './HeroVisual.vue'
</script>

<template>
  <section class="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 px-5 py-8 shadow-soft backdrop-blur-xl sm:px-6 sm:py-10 lg:px-8 lg:py-12">
    <div class="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.16),transparent_28%)]" />
    <div class="grid gap-10 grid-cols-1 xl:grid-cols-[1fr_0.95fr] xl:items-center">
      <div class="space-y-8 min-w-0">
        <span class="inline-flex max-w-full items-center gap-3 rounded-full border border-brand-500/30 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] tracking-[0.11em] sm:tracking-[0.14em]">
          <span class="h-2.5 w-2.5 rounded-full bg-brand-500 shadow-[0_0_16px_rgba(99,102,241,0.4)] animate-pulse" />
          Full Stack & AI Systems Engineering
        </span>

        <div class="space-y-6">
          <h1 class="break-words text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl sm:tracking-[-0.02em] lg:tracking-[-0.03em]">
            Building modern digital products, scalable web platforms and AI-powered systems.
          </h1>
          <p class="max-w-full break-words text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
            Especialitzat en arquitectures web modernes, sistemes multi-agent, automatització intel·ligent i experiències digitals enfocades a producte real.
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <NuxtLink
            to="/projects"
            class="inline-flex w-full justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(99,102,241,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(99,102,241,0.28)] sm:w-auto"
          >
            Explore Projects
            <span class="ml-3 text-base">→</span>
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="inline-flex w-full justify-center whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-brand-400 hover:bg-white/10 sm:w-auto"
          >
            About Me
          </NuxtLink>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 sm:p-5 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-brand-400/30">
            <p class="text-xs uppercase tracking-[0.11em] text-slate-400">Focus</p>
            <p class="mt-3 text-base font-semibold text-white">Arquitectura premium per productes digitals amb escalaritat, qualitat i seguretat.</p>
          </div>
          <div class="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-4 sm:p-5 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-sky-400/30">
            <p class="text-xs uppercase tracking-[0.11em] text-slate-400">Outcome</p>
            <p class="mt-3 text-base font-semibold text-white">Experiències tècniques que transmeten seniority, confiança i un acabat premium.</p>
          </div>
        </div>
      </div>

      <HeroVisual />
    </div>
  </section>
</template>
