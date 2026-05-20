<script setup lang="ts">
import { curriculums } from '../data/curriculums'
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

    <div class="grid gap-8 lg:grid-cols-2">
      <CVCard v-for="cv in curriculums" :key="cv.id" v-bind="cv" />
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