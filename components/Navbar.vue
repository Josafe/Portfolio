<template>
  <nav class="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
    <div class="mx-auto w-[min(1120px,92vw)] px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-lg font-semibold text-white hover:text-slate-300">
          Josafe
        </NuxtLink>

        <div class="hidden space-x-8 md:flex items-center">
          <NuxtLink :to="localePath('/')" class="text-slate-300 hover:text-white transition-colors">
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/about')" class="text-slate-300 hover:text-white transition-colors">
            {{ t('nav.about') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/projects')" class="text-slate-300 hover:text-white transition-colors">
            {{ t('nav.projects') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/curriculum')" class="text-slate-300 hover:text-white transition-colors">
            {{ t('nav.curriculum') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/future-projects')" class="text-slate-300 hover:text-white transition-colors">
            {{ t('nav.future') }}
          </NuxtLink>

          <!-- Language Selector Desktop -->
          <div class="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/50 p-1">
            <button
              v-for="locale in locales"
              :key="locale.code"
              @click="setLocale(locale.code)"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-colors',
                locale.code === currentLocale
                  ? 'bg-brand-500 text-white'
                  : 'text-slate-300 hover:text-white'
              ]"
            >
              {{ locale.name }}
            </button>
          </div>
        </div>

        <!-- Mobile menu button
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-slate-300 hover:text-white flex items-center gap-3"
        >
          <div class="relative">
            <button
              @click.stop="langOpen = !langOpen"
              class="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/50 px-2 py-1 text-xs font-medium text-slate-300 hover:text-white"
            >
              {{ currentLangName }}
              <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            <div
              v-if="langOpen"
              class="absolute right-0 mt-2 w-32 rounded-lg border border-slate-700 bg-slate-900 shadow-lg"
            >
              <button
                v-for="locale in locales"
                :key="locale.code"
                @click="setLocale(locale.code)"
                :class="[
                  'block w-full px-3 py-2 text-left text-xs font-medium transition-colors',
                  locale.code === currentLocale
                    ? 'bg-brand-500 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                ]"
              >
                {{ locale.name }}
              </button>
            </div>
          </div>

          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div v-if="isOpen" class="mt-4 space-y-4 md:hidden">
        <NuxtLink :to="localePath('/')" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          {{ t('nav.home') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/about')" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          {{ t('nav.about') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/projects')" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          {{ t('nav.projects') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/curriculum')" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          {{ t('nav.curriculum') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/future-projects')" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          {{ t('nav.future') }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()
const route = useRoute()
const isOpen = ref(false)
const langOpen = ref(false)

const locales = [
  { code: 'ca', name: 'Català' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' }
]

const currentLocale = computed(() => locale.value)

const currentLangName = computed(() => {
  return locales.find(l => l.code === currentLocale.value)?.name || 'Lang'
})

const setLocale = async (newLocale: string) => {
  const path = route.path.replace(/^\/(ca|es|en)/, '') || '/'
  await navigateTo(`/${newLocale}${path}`)
  langOpen.value = false
  isOpen.value = false
}
</script>
