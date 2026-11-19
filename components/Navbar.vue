<template>
  <nav class="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
    <div class="mx-auto w-[min(1120px,92vw)] px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="text-lg font-semibold text-white hover:text-slate-300">
          Josafe's Portfolio
        </NuxtLink>

        <div class="hidden space-x-8 md:flex items-center">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="localePath(link.path)"
            class="text-slate-300 hover:text-white transition-colors"
          >
            {{ t(link.label) }}
          </NuxtLink>

          <!-- Language Selector Desktop -->
          <div
            role="group"
            :aria-label="t('language.label')"
            class="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/50 p-1"
          >
            <NuxtLink
              v-for="locale in locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              :lang="locale.code"
              :class="[
                'px-3 py-1 rounded-full text-xs font-medium transition-colors',
                locale.code === currentLocale
                  ? 'bg-brand-500 text-white'
                  : 'text-slate-300 hover:text-white'
              ]"
            >
              {{ locale.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <button
          ref="menuButton"
          type="button"
          class="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-slate-300 transition-colors hover:text-white md:hidden"
          aria-controls="mobile-menu"
          :aria-expanded="isOpen ? 'true' : 'false'"
          :aria-label="t('nav.menu')"
          @click="isOpen = !isOpen"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="isOpen"
        id="mobile-menu"
        class="-mx-1 mt-4 max-h-[calc(100dvh-5rem)] space-y-4 overflow-y-auto border-t border-slate-800 px-1 pb-1 pt-4 md:hidden"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="localePath(link.path)"
          class="block text-slate-300 hover:text-white transition-colors"
          @click="closeMenu()"
        >
          {{ t(link.label) }}
        </NuxtLink>

        <!-- Language Selector Mobile -->
        <div
          role="group"
          :aria-label="t('language.label')"
          class="flex w-max items-center gap-1 rounded-full border border-slate-700 bg-slate-900/50 p-1"
        >
          <NuxtLink
            v-for="locale in locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            :lang="locale.code"
            :class="[
              'px-3 py-1 rounded-full text-xs font-medium transition-colors',
              locale.code === currentLocale
                ? 'bg-brand-500 text-white'
                : 'text-slate-300 hover:text-white'
            ]"
            @click="closeMenu()"
          >
            {{ locale.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const isOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)

const navLinks = [
  { path: '/', label: 'nav.home' },
  { path: '/about', label: 'nav.about' },
  { path: '/projects', label: 'nav.projects' },
  { path: '/curriculum', label: 'nav.curriculum' },
  { path: '/future-projects', label: 'nav.future' }
]

const locales = [
  { code: 'ca', name: 'Català' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' }
] as const

const currentLocale = computed(() => locale.value)

const closeMenu = (restoreFocus = false) => {
  if (!isOpen.value) return
  isOpen.value = false
  if (restoreFocus) menuButton.value?.focus()
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeMenu(true)
}

// Close the mobile menu after any navigation (links, language switch, browser history)
watch(() => route.fullPath, () => closeMenu())

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
