<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 border-b border-slate-800/80',
      isOpen ? 'bg-slate-950' : 'bg-slate-950/85 backdrop-blur-md'
    ]"
  >
    <nav :aria-label="t('nav.main')" class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between gap-4">
        <NuxtLink
          :to="localePath('/')"
          class="rounded-md text-base font-semibold tracking-tight text-white transition-colors hover:text-slate-300"
        >
          Josafe
        </NuxtLink>

        <!-- Tablet and desktop navigation -->
        <div class="hidden items-center gap-4 md:flex">
          <ul class="flex items-center gap-1">
            <li v-for="link in navLinks" :key="link.path">
              <NuxtLink
                :to="localePath(link.path)"
                class="inline-flex min-h-10 items-center rounded-lg px-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                exact-active-class="bg-white/10 !text-white"
              >
                {{ t(link.label) }}
              </NuxtLink>
            </li>
          </ul>

          <div
            role="group"
            :aria-label="t('language.label')"
            class="flex items-center gap-0.5 rounded-full border border-slate-700 p-0.5"
          >
            <NuxtLink
              v-for="locale in locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              :lang="locale.code"
              :title="locale.name"
              :class="[
                'inline-flex h-8 min-w-9 items-center justify-center rounded-full px-2 text-xs font-semibold uppercase tracking-wide transition-colors',
                locale.code === currentLocale ? 'bg-white text-slate-950' : 'text-slate-400 hover:text-white'
              ]"
            >
              <span aria-hidden="true">{{ locale.code }}</span>
              <span class="sr-only">{{ locale.name }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile menu button -->
        <button
          ref="menuButton"
          type="button"
          class="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-controls="mobile-menu"
          :aria-expanded="isOpen ? 'true' : 'false'"
          :aria-label="t('nav.menu')"
          @click="isOpen = !isOpen"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-show="isOpen"
        id="mobile-menu"
        class="h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-slate-800 pb-6 pt-3 md:hidden"
      >
        <ul class="space-y-1">
          <li v-for="link in navLinks" :key="link.path">
            <NuxtLink
              :to="localePath(link.path)"
              class="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-offset-[-2px]"
              exact-active-class="bg-white/10 !text-white"
              @click="closeMenu()"
            >
              {{ t(link.label) }}
            </NuxtLink>
          </li>
        </ul>

        <div class="mt-4 border-t border-slate-800 px-3 pt-5">
          <p id="mobile-language-label" class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {{ t('language.label') }}
          </p>
          <div role="group" aria-labelledby="mobile-language-label" class="mt-3 grid grid-cols-3 gap-2">
            <NuxtLink
              v-for="locale in locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              :lang="locale.code"
              :class="[
                'flex min-h-11 items-center justify-center rounded-lg border px-2 text-sm font-medium transition-colors focus-visible:outline-offset-[-2px]',
                locale.code === currentLocale
                  ? 'border-white bg-white text-slate-950'
                  : 'border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white'
              ]"
              @click="closeMenu()"
            >
              {{ locale.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'
import { navLinks } from '~/data/navigation'

const { locale, t } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()

const isOpen = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)

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

// The open menu covers the viewport: lock page scrolling behind it
watch(isOpen, (open: boolean) => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

// Close the menu if the viewport grows to the tablet/desktop layout
let desktopQuery: MediaQueryList | undefined
const onBreakpointChange = (event: MediaQueryListEvent) => {
  if (event.matches) closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  desktopQuery = window.matchMedia('(min-width: 768px)')
  desktopQuery.addEventListener('change', onBreakpointChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  desktopQuery?.removeEventListener('change', onBreakpointChange)
  document.documentElement.style.overflow = ''
})
</script>
