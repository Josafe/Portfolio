<template>
  <nav class="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm">
    <div class="mx-auto w-[min(1120px,92vw)] px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-lg font-semibold text-white hover:text-slate-300">
          Josafe
        </NuxtLink>

        <div class="hidden space-x-8 md:flex">
          <NuxtLink to="/" class="text-slate-300 hover:text-white transition-colors">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="text-slate-300 hover:text-white transition-colors">
            About
          </NuxtLink>
          <NuxtLink to="/projects" class="text-slate-300 hover:text-white transition-colors">
            Projects
          </NuxtLink>
          <NuxtLink to="/curriculum" class="text-slate-300 hover:text-white transition-colors">
            Curriculum
          </NuxtLink>
          <NuxtLink to="/future-projects" class="text-slate-300 hover:text-white transition-colors">
            Future
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-slate-300 hover:text-white"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="isOpen" class="mt-4 space-y-4 md:hidden">
        <NuxtLink to="/" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          Home
        </NuxtLink>
        <NuxtLink to="/about" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          About
        </NuxtLink>
        <NuxtLink to="/projects" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          Projects
        </NuxtLink>
        <NuxtLink to="/curriculum" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          Curriculum
        </NuxtLink>
        <NuxtLink to="/future-projects" @click="isOpen = false" class="block text-slate-300 hover:text-white transition-colors">
          Future
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>