<script setup lang="ts">
const navCards = [
  {
    title: 'About Me',
    description: 'Discover my story, values and how I build digital products.',
    icon: 'M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.33 0-10 1.667-10 5v3h20v-3c0-3.333-6.67-5-10-5z',
    href: '/about'
  },
  {
    title: 'Projects',
    description: 'Explore purpose-driven builds, SaaS and AI systems in production.',
    icon: 'M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm2 3v10h10V7H7z',
    href: '/projects'
  },
  {
    title: 'Curriculum',
    description: 'Get the CV details, skills matrix and downloadable resume.',
    icon: 'M6 2h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm9 1.414L18.586 8H15V3.414z',
    href: '/curriculum'
  },
  {
    title: 'Future Projects',
    description: 'See the roadmap, new product ideas and next-generation systems.',
    icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5V13h2.5a.5.5 0 0 0 .354-.854l-4-4a.5.5 0 0 0-.708 0l-4 4A.5.5 0 0 0 6.5 13H9V16.5a.5.5 0 0 0 .853.354L12 14.207l2.147 2.647A.5.5 0 0 0 15 16.5z',
    href: '/future-projects'
  }
]
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <NuxtLink
      v-for="card in navCards"
      :key="card.title"
      :to="card.href"
      class="group w-full min-w-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 sm:p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-slate-900/95"
    >
      <div class="flex items-center justify-between gap-3">
        <div class="inline-flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-3xl bg-white/5 text-brand-400 transition group-hover:bg-brand-500/15">
          <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path :d="card.icon" /></svg>
        </div>
        <div class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition group-hover:border-brand-400/40">
          <span class="text-xs">→</span>
        </div>
      </div>
      <div class="mt-5 space-y-3">
        <h3 class="text-base font-semibold text-white break-words">{{ card.title }}</h3>
        <p class="text-sm leading-6 text-slate-400 break-words">{{ card.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
