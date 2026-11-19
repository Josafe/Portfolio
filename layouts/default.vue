<script setup lang="ts">
import { useI18n } from '#imports'

const { locale, t } = useI18n()
// Keep <html lang> in sync with the active language, including client-side switches
useHead({ htmlAttrs: { lang: locale } })
</script>

<template>
  <div class="flex min-h-screen flex-col bg-slate-950 text-slate-100 antialiased">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
    >
      {{ t('a11y.skipToContent') }}
    </a>
    <Navbar />
    <main
      id="main-content"
      tabindex="-1"
      class="mx-auto w-full max-w-6xl flex-1 px-4 pb-20 pt-24 focus:outline-none sm:px-6 sm:pt-28 lg:px-8"
    >
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
