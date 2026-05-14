<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Josafe.com · Portfolio Full Stack & AI Systems',
  description:
    'Portfolio modern de Josafe amb projectes web i intel·ligència artificial. Connexió directa amb GitHub, LinkedIn i Instagram.',
  ogTitle: 'Josafe.com · Portfolio Full Stack & AI Systems',
  ogDescription:
    'Projectes destacats com AGC Padel Academy i Chatbot Multiagent System amb importació automàtica de repositoris GitHub.',
  ogUrl: config.public.siteUrl,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="grid gap-16">
    <!-- Hero Section -->
    <section class="grid gap-7 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Josafe.com</p>

      <h1 class="mx-auto max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
        Desenvolupador Full Stack i AI Systems Engineer.
      </h1>

      <p class="mx-auto max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
        Dissenyo experiències digitals modernes combinant enginyeria de software, arquitectura web i intel·ligència
        artificial aplicada a producte real.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <NuxtLink
          to="/projects"
          class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          Veure Projectes
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Sobre Mi
        </NuxtLink>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <NuxtLink to="/about" class="group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors">
        <h3 class="text-lg font-semibold text-white group-hover:text-slate-300">About Me</h3>
        <p class="mt-2 text-sm text-slate-400">Presentació professional i especialitzacions</p>
      </NuxtLink>

      <NuxtLink to="/projects" class="group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors">
        <h3 class="text-lg font-semibold text-white group-hover:text-slate-300">Projects</h3>
        <p class="mt-2 text-sm text-slate-400">Projectes desplegats i repositoris GitHub</p>
      </NuxtLink>

      <NuxtLink to="/curriculum" class="group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors">
        <h3 class="text-lg font-semibold text-white group-hover:text-slate-300">Curriculum</h3>
        <p class="mt-2 text-sm text-slate-400">CVs professionals i descàrregues</p>
      </NuxtLink>

      <NuxtLink to="/future-projects" class="group rounded-lg border border-slate-800 p-6 hover:border-slate-700 transition-colors">
        <h3 class="text-lg font-semibold text-white group-hover:text-slate-300">Future Projects</h3>
        <p class="mt-2 text-sm text-slate-400">Idees i roadmap professional</p>
      </NuxtLink>
    </section>
  </div>
</template>
