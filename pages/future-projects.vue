<script setup lang="ts">
import { useI18n } from '#imports'
const { t } = useI18n()
</script>

<script setup lang="ts">
import { useI18n } from '#imports'
const { t } = useI18n()

useSeoMeta({
  title: t('meta.future.title'),
  description: t('meta.future.description')
})
</script>

<template>
  <div class="grid gap-12">
    <!-- Header -->
    <div class="grid gap-4">
      <br> </br>
      <h1 class="text-4xl font-bold text-white">{{ t('future.header.title') }}</h1>
      <p class="text-slate-400">{{ t('future.header.description') }}</p>
    </div>

    <!-- Categories -->
    <div class="grid gap-8">
      <!-- SaaS Ideas -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">{{ t('future.saas.title') }}</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.saas.item1.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.saas.item1.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.saas.item1.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.saas.item2.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.saas.item2.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.saas.item2.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Automations -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">{{ t('future.automation.title') }}</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.automation.item1.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.automation.item1.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.automation.item1.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.automation.item2.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.automation.item2.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.automation.item2.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Multi-Agent Systems -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">{{ t('future.multiAgent.title') }}</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.multiAgent.item1.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.multiAgent.item1.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.multiAgent.item1.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.multiAgent.item2.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.multiAgent.item2.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.multiAgent.item2.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Research Projects -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">{{ t('future.research.title') }}</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.research.item1.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.research.item1.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.research.item1.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.research.item2.title') }}</h3>
            <p class="text-sm text-slate-400 mb-4">{{ t('future.research.item2.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in t('future.research.item2.tags')" :key="tag" class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{{ tag }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Call to Action -->
    <div class="rounded-lg border border-slate-800 p-6 text-center">
      <h3 class="text-lg font-semibold text-white mb-2">{{ t('future.cta.title') }}</h3>
      <p class="text-slate-400 mb-4">{{ t('future.cta.description') }}</p>
      <NuxtLink
        to="/about"
        class="inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
      >
        {{ t('future.cta.cta') }}
      </NuxtLink>
    </div>
  </div>
</template>