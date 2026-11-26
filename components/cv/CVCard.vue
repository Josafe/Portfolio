<script setup lang="ts">
import { computed, useI18n } from '#imports'

const props = defineProps<{
  /** Matches the `curriculum.cards.<id>` translation keys. */
  id: string
  pdf: string
  tags: string[]
}>()

const { t, locale } = useI18n()

const text = (field: 'title' | 'subtitle' | 'description') => t(`curriculum.cards.${props.id}.${field}`)

/**
 * `pdf` is the base path (for example `/cv/fullstack.pdf`). Each CV exists in the three site
 * languages as `<base>-<locale>.pdf`; the PDF in the visitor's language is served.
 */
const pdfUrl = computed(() => props.pdf.replace(/\.pdf$/, `-${locale.value}.pdf`))
const downloadFilename = computed(() => pdfUrl.value.split('/').pop() ?? 'cv.pdf')
</script>

<template>
  <article class="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-colors hover:border-slate-600 sm:p-6">
    <h2 class="text-lg font-semibold leading-snug text-white">{{ text('title') }}</h2>
    <p class="mt-1 text-sm text-brand-300">{{ text('subtitle') }}</p>
    <p class="mt-4 text-sm leading-relaxed text-slate-300">{{ text('description') }}</p>

    <ul class="mt-5 flex flex-wrap gap-1.5">
      <li v-for="tag in tags" :key="tag" class="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-300">{{ tag }}</li>
    </ul>

    <div class="mt-auto flex flex-wrap gap-2 pt-6">
      <a
        :href="pdfUrl"
        :aria-label="`${t('curriculum.card.viewPdf')}: ${text('title')}`"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex min-h-11 grow basis-36 items-center justify-center whitespace-nowrap rounded-full border border-slate-700 px-4 text-sm font-semibold text-white transition-colors hover:border-slate-500 hover:bg-white/5"
      >
        {{ t('curriculum.card.viewPdf') }}
      </a>
      <a
        :href="pdfUrl"
        :download="downloadFilename"
        :aria-label="`${t('curriculum.card.downloadPdf')}: ${text('title')}`"
        class="inline-flex min-h-11 grow basis-36 items-center justify-center whitespace-nowrap rounded-full bg-white px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200"
      >
        {{ t('curriculum.card.downloadPdf') }}
      </a>
    </div>
  </article>
</template>
