<script setup lang="ts">
import { useI18n } from '#imports'
import { navLinks } from '~/data/navigation'

const { t } = useI18n()
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-800/80">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)] lg:px-8">
      <div class="sm:col-span-2 lg:col-span-1">
        <p class="text-base font-semibold tracking-tight text-white">Josafe</p>
        <p class="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">{{ t('index.hero.heading') }}</p>
      </div>

      <nav aria-labelledby="footer-navigation-heading">
        <h2 id="footer-navigation-heading" class="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {{ t('footer.navigation') }}
        </h2>
        <ul class="mt-3 space-y-1">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink
              :to="localePath(link.path)"
              class="inline-flex min-h-10 items-center text-sm text-slate-300 transition-colors hover:text-white"
            >
              {{ t(link.label) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="text-xs font-semibold uppercase tracking-wider text-slate-400">{{ t('footer.contact') }}</h2>
        <SocialLinks class="mt-3" variant="list" />
      </div>
    </div>

    <div class="border-t border-slate-800/80">
      <p class="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400 sm:px-6 lg:px-8">© {{ year }} Josafe</p>
    </div>
  </footer>
</template>
