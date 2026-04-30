<script setup lang="ts">
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Josafe' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joan-sabater-ferré-2b4169115' },
  { label: 'Instagram', href: 'https://www.instagram.com/josafesf/' }
]
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <a
      v-for="link in socialLinks"
      :key="link.label"
      :href="link.href"
      target="_blank"
      rel="noreferrer"
      class="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-white"
    >
      {{ link.label }}
    </a>
  </div>
</template>
