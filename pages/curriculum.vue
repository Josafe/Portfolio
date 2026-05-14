<script setup lang="ts">
useSeoMeta({
  title: 'Curriculum · Josafe.com',
  description: 'Currículums professionals de Josafe: Full Stack Developer i AI Systems Engineer.',
})
</script>

<template>
  <div class="grid gap-12">
    <!-- Header -->
    <div class="grid gap-4">
      <h1 class="text-4xl font-bold text-white">Curriculum Vitae</h1>
      <p class="text-slate-400">
        Versions especialitzades del meu currículum per diferents rols professionals.
      </p>
    </div>

    <!-- CV Cards -->
    <div class="grid gap-8 md:grid-cols-2">
      <!-- Full Stack CV -->
      <div class="rounded-lg border border-slate-800 p-6">
        <div class="grid gap-4">
          <div>
            <h3 class="text-xl font-semibold text-white">Full Stack Developer</h3>
            <p class="text-sm text-slate-400">Enfocament en desenvolupament web complet</p>
          </div>

          <div class="aspect-[3/4] rounded-lg bg-slate-800">
            <!-- CV Preview Placeholder -->
            <div class="flex h-full items-center justify-center text-slate-500">
              <div class="text-center">
                <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p class="mt-2 text-sm">Preview CV Full Stack</p>
              </div>
            </div>
          </div>

          <button class="w-full rounded-lg bg-white py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors">
            Descarregar PDF
          </button>
        </div>
      </div>

      <!-- AI Systems CV -->
      <div class="rounded-lg border border-slate-800 p-6">
        <div class="grid gap-4">
          <div>
            <h3 class="text-xl font-semibold text-white">AI Systems Engineer</h3>
            <p class="text-sm text-slate-400">Especialitzat en sistemes d'IA i multi-agent</p>
          </div>

          <div class="aspect-[3/4] rounded-lg bg-slate-800">
            <!-- CV Preview Placeholder -->
            <div class="flex h-full items-center justify-center text-slate-500">
              <div class="text-center">
                <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p class="mt-2 text-sm">Preview CV AI Systems</p>
              </div>
            </div>
          </div>

          <button class="w-full rounded-lg bg-white py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors">
            Descarregar PDF
          </button>
        </div>
      </div>
    </div>

    <!-- Additional Info -->
    <div class="rounded-lg border border-slate-800 p-6">
      <h3 class="text-lg font-semibold text-white mb-4">Informació Addicional</h3>
      <div class="grid gap-4 text-sm text-slate-300">
        <p>
          Els currículums inclouen experiència professional detallada, projectes destacats,
          tecnologies dominades i certificacions rellevants.
        </p>
        <p>
          Disponible per a versions personalitzades segons requisits específics de posició o empresa.
        </p>
      </div>
    </div>
  </div>
</template>