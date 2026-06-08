<script setup lang="ts">
import { useI18n } from '#imports'
const { t } = useI18n()

useSeoMeta({
  title: t('meta.about.title'),
  description: t('meta.about.description')
})
</script>

<template>
  <div class="grid gap-16">
    <!-- Hero Section -->
    <section class="grid gap-7">
      <div class="grid gap-4">
        <br> </br>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{{ t('about.hero.label') }}</p>
        <h1 class="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          {{ t('about.hero.heading') }}
        </h1>
      </div>
        <h2 class="text-2xl font-semibold text-white">{{ t('sections.about.title') }}</h2>
        <p class="max-w-4xl text-slate-300">{{ t('sections.about.description') }}</p>
    </section>

    <!-- Specializations -->
    <section class="grid gap-8 md:grid-cols-2">
      <div class="grid gap-4">
        <h2 class="text-2xl font-semibold text-white">{{ t('about.specializations.title') }}</h2>
        <div class="grid gap-3">
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">{{ t('about.specializations.fullStack.title') }}</h3>
            <p class="mt-1 text-sm text-slate-400">{{ t('about.specializations.fullStack.description') }}</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">{{ t('about.specializations.ai.title') }}</h3>
            <p class="mt-1 text-sm text-slate-400">{{ t('about.specializations.ai.description') }}</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">{{ t('about.specializations.architecture.title') }}</h3>
            <p class="mt-1 text-sm text-slate-400">{{ t('about.specializations.architecture.description') }}</p>
          </div>
        </div>
      </div>

      <div class="grid gap-4">
        <h2 class="text-2xl font-semibold text-white">{{ t('about.interests.title') }}</h2>
        <div class="grid gap-3">
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">{{ t('about.interests.impact.title') }}</h3>
            <p class="mt-1 text-sm text-slate-400">{{ t('about.interests.impact.description') }}</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">{{ t('about.interests.innovation.title') }}</h3>
            <p class="mt-1 text-sm text-slate-400">{{ t('about.interests.innovation.description') }}</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">{{ t('about.interests.collaboration.title') }}</h3>
            <p class="mt-1 text-sm text-slate-400">{{ t('about.interests.collaboration.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="grid gap-6">
      <h2 class="text-2xl font-semibold text-white">{{ t('about.philosophy.title') }}</h2>
      <div class="max-w-4xl">
        <p class="text-slate-300 leading-relaxed">{{ t('about.philosophy.text') }}</p>
      </div>
    </section>

    <!-- Contact -->
    <section class="grid gap-6">
      <h2 class="text-2xl font-semibold text-white">{{ t('about.contact.title') }}</h2>
      <p class="text-slate-300">{{ t('about.contact.text') }}</p>
      <div class="flex flex-wrap gap-4">
        <a
          href="mailto:josafesf2@gmail.co"
          class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          {{ t('about.contact.email') }}
        </a>
        <SocialLinks />
      </div>
    </section>
  </div>
</template>