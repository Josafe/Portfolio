<script setup lang="ts">
const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Josafe',
    icon: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.61-3.38-1.34-3.38-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8a9.56 9.56 0 0 1 2.5.34c1.91-1.3 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.6 1.03 2.68 0 3.86-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.43-.01 2.75 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/joan-sabater-ferré-2b4169115',
    icon: 'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19ZM8.34 17.11V10.91H6.16V17.11H8.34ZM7.25 9.85C8.03 9.85 8.65 9.25 8.65 8.47C8.65 7.69 8.03 7.1 7.25 7.1C6.47 7.1 5.85 7.69 5.85 8.47C5.85 9.25 6.47 9.85 7.25 9.85ZM17.84 17.11V13.4C17.84 11.98 17.29 11.05 16.1 11.05C15.25 11.05 14.72 11.57 14.47 12.03H14.42V10.91H12.25C12.27 11.58 12.25 17.11 12.25 17.11H14.42V13.94C14.42 13.28 14.51 12.72 15.13 12.72C15.74 12.72 15.76 13.34 15.76 13.98V17.11H17.84Z'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/josafesf/',
    icon: 'M7 2C4.243 2 2 4.243 2 7V17C2 19.757 4.243 22 7 22H17C19.757 22 22 19.757 22 17V7C22 4.243 19.757 2 17 2H7ZM16.5 6.5C16.5 7.328 15.828 8 15 8C14.172 8 13.5 7.328 13.5 6.5C13.5 5.672 14.172 5 15 5C15.828 5 16.5 5.672 16.5 6.5ZM12 8.8C14.322 8.8 16.2 10.678 16.2 13C16.2 15.322 14.322 17.2 12 17.2C9.678 17.2 7.8 15.322 7.8 13C7.8 10.678 9.678 8.8 12 8.8ZM12 10.1C10.624 10.1 9.5 11.224 9.5 12.6C9.5 13.976 10.624 15.1 12 15.1C13.376 15.1 14.5 13.976 14.5 12.6C14.5 11.224 13.376 10.1 12 10.1Z'
  },
  {
    label: 'Email',
    href: 'mailto:josafesf2@gmail.com',
    icon: 'M3 5.25C3 4.007 4.007 3 5.25 3H18.75C19.993 3 21 4.007 21 5.25V18.75C21 19.993 19.993 21 18.75 21H5.25C4.007 21 3 19.993 3 18.75V5.25ZM19.5 7.03L12 11.85L4.5 7.03V5.25L12 10.07L19.5 5.25V7.03Z'
  }
]
</script>

<template>
  <div class="grid gap-3 sm:grid-cols-2">
    <a
      v-for="link in socialLinks"
      :key="link.label"
      :href="link.href"
      target="_blank"
      rel="noreferrer"
      class="group flex w-full min-w-0 items-center gap-3 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-4 text-sm text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-brand-400/30 hover:bg-slate-900/90"
    >
      <span class="inline-flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-2xl bg-white/5 text-brand-400 transition group-hover:bg-brand-500/15">
        <svg viewBox="0 0 24 24" class="h-4.5 w-4.5 fill-current">
          <path :d="link.icon" />
        </svg>
      </span>
      <span class="flex-1 min-w-0">
        <span class="block text-sm font-semibold text-white">{{ link.label }}</span>
        <span class="block truncate text-xs text-slate-400">{{ link.href.replace(/https?:\/\//, '') }}</span>
      </span>
    </a>
  </div>
</template>
