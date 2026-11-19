<script setup lang="ts">
import { useRuntimeConfig, useSeoMeta, useI18n } from '#imports'
import HeroSection from '~/components/home/HeroSection.vue'
import TechStack from '~/components/home/TechStack.vue'

const { t } = useI18n()
const config = useRuntimeConfig()
const localePath = useLocalePath()

const projects = useProjects()
const featuredProjects = projects.filter(project => project.featured)

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
  <div>
    <HeroSection />

    <section aria-labelledby="featured-projects-heading" class="mt-20 sm:mt-28">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl">
          <h2 id="featured-projects-heading" class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {{ t('index.featured.title') }}
          </h2>
          <p class="mt-3 text-base leading-relaxed text-slate-400">{{ t('index.featured.description') }}</p>
        </div>
        <NuxtLink
          :to="localePath('/projects')"
          class="inline-flex min-h-11 shrink-0 items-center gap-2 self-start text-sm font-semibold text-brand-300 transition-colors hover:text-white sm:self-auto"
        >
          {{ t('index.featured.viewAll', { count: projects.length }) }}
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>

      <ul class="mt-8 grid gap-5 md:grid-cols-2">
        <li v-for="project in featuredProjects" :key="project.slug" class="flex">
          <ProjectCard :project="project" class="w-full" />
        </li>
      </ul>
    </section>

    <TechStack class="mt-20 sm:mt-28" />
  </div>
</template>
