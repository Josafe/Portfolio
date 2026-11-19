<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()

useSeoMeta({
  title: t('meta.about.title'),
  description: t('meta.about.description')
})

const specializations = ['fullStack', 'ai', 'architecture'] as const
const interests = ['impact', 'innovation', 'collaboration'] as const
</script>

<template>
  <div class="space-y-16 sm:space-y-20">
    <header class="max-w-3xl">
      <p class="text-sm font-medium text-brand-300">{{ t('about.hero.label') }}</p>
      <h1 class="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
        {{ t('about.hero.heading') }}
      </h1>
      <p class="mt-6 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">{{ t('about.hero.text') }}</p>
    </header>

    <div class="grid gap-12 lg:grid-cols-2 lg:gap-8">
      <section aria-labelledby="specializations-heading">
        <h2 id="specializations-heading" class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {{ t('about.specializations.title') }}
        </h2>
        <ul class="mt-6 space-y-3">
          <li v-for="key in specializations" :key="key" class="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 class="font-semibold text-white">{{ t(`about.specializations.${key}.title`) }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-slate-400">{{ t(`about.specializations.${key}.description`) }}</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="interests-heading">
        <h2 id="interests-heading" class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {{ t('about.interests.title') }}
        </h2>
        <ul class="mt-6 space-y-3">
          <li v-for="key in interests" :key="key" class="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 class="font-semibold text-white">{{ t(`about.interests.${key}.title`) }}</h3>
            <p class="mt-1 text-sm leading-relaxed text-slate-400">{{ t(`about.interests.${key}.description`) }}</p>
          </li>
        </ul>
      </section>
    </div>

    <section aria-labelledby="philosophy-heading" class="max-w-3xl">
      <h2 id="philosophy-heading" class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {{ t('about.philosophy.title') }}
      </h2>
      <p class="mt-4 text-base leading-relaxed text-slate-300">{{ t('about.philosophy.text') }}</p>
    </section>

    <section
      id="contact"
      aria-labelledby="contact-heading"
      class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8"
    >
      <h2 id="contact-heading" class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
        {{ t('about.contact.title') }}
      </h2>
      <p class="mt-3 max-w-2xl text-base leading-relaxed text-slate-300">{{ t('about.contact.text') }}</p>
      <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href="mailto:josafesf2@gmail.com"
          class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-4 w-4 shrink-0" aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          {{ t('about.contact.email') }}
        </a>
        <SocialLinks hide-email />
      </div>
    </section>
  </div>
</template>
