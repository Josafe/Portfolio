<script setup lang="ts">
const { locale } = useI18n()
useHead({ htmlAttrs: { lang: locale.value } })
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 antialiased">
    <Navbar />
    <main class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 pt-24">
      <slot />
    </main>
  </div>
</template>
