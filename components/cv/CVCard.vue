<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
  description: string
  pdf: string
  preview: string
  tags: string[]
}>()

const downloadFilename = props.pdf.split('/').pop() ?? 'cv.pdf'
</script>

<template>
  <div class="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
    <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

    <div class="flex flex-col gap-6">
      <div class="space-y-3">
        <p class="text-xs uppercase tracking-[0.3em] text-slate-500">Currículum</p>
        <h3 class="text-2xl font-semibold text-white">{{ props.title }}</h3>
        <p class="text-sm text-slate-400">{{ props.subtitle }}</p>
      </div>

      <div class="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70">
        <img
          :src="props.preview"
          :alt="`Preview del CV ${props.title}`"
          class="h-64 w-full object-cover object-center transition duration-500 group-hover:scale-105"
        />
      </div>

      <p class="text-sm leading-7 text-slate-300">{{ props.description }}</p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in props.tags"
          :key="tag"
          class="rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
        >
          {{ tag }}
        </span>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <a
          :href="props.pdf"
          target="_blank"
          rel="noreferrer noopener"
          class="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/15"
        >
          Veure CV
        </a>
        <a
          :href="props.pdf"
          :download="downloadFilename"
          class="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          Descarregar PDF
        </a>
      </div>
    </div>
  </div>
</template>
