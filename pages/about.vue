<script setup lang="ts">
useSeoMeta({
  title: 'About Me · Josafe.com',
  description: 'Presentació professional de Josafe: Desenvolupador Full Stack i AI Systems Engineer especialitzat en solucions escalables i intel·ligència artificial.',
})
</script>

<template>
  <div class="grid gap-16">
    <!-- Hero Section -->
    <section class="grid gap-7">
      <div class="grid gap-4">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Sobre Mi</p>
        <h1 class="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Desenvolupador Full Stack i AI Systems Engineer
        </h1>
      </div>

      <p class="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
        Sóc enginyer de sistemes AI i desenvolupador full stack orientat a construir solucions escalables, mantenibles i
        orientades a negoci. Tinc experiència en ecosistemes Laravel/Vue, integracions cloud i sistemes multiagent.
      </p>
    </section>

    <!-- Specializations -->
    <section class="grid gap-8 md:grid-cols-2">
      <div class="grid gap-4">
        <h2 class="text-2xl font-semibold text-white">Especialitzacions</h2>
        <div class="grid gap-3">
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">Full Stack Development</h3>
            <p class="mt-1 text-sm text-slate-400">Laravel, Vue.js, Node.js, bases de dades relacionals i NoSQL</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">AI Systems & Multi-Agent</h3>
            <p class="mt-1 text-sm text-slate-400">Sistemes d'intel·ligència artificial, agents multiagent, automatització</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">Arquitectura Escalable</h3>
            <p class="mt-1 text-sm text-slate-400">Disseny de sistemes escalables, microserveis, integracions cloud</p>
          </div>
        </div>
      </div>

      <div class="grid gap-4">
        <h2 class="text-2xl font-semibold text-white">Interessos Professionals</h2>
        <div class="grid gap-3">
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">Projectes d'Impacte</h3>
            <p class="mt-1 text-sm text-slate-400">Aplicacions web modernes, SaaS, productes digitals escalables</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">Innovació AI</h3>
            <p class="mt-1 text-sm text-slate-400">Sistemes intel·ligents, automatitzacions, agents conversacionals</p>
          </div>
          <div class="rounded-lg border border-slate-800 p-4">
            <h3 class="font-semibold text-white">Col·laboracions Tècniques</h3>
            <p class="mt-1 text-sm text-slate-400">Equips multidisciplinars, consultoria, mentorització</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="grid gap-6">
      <h2 class="text-2xl font-semibold text-white">Filosofia de Treball</h2>
      <div class="max-w-4xl">
        <p class="text-slate-300 leading-relaxed">
          Crec en el poder de la tecnologia per transformar negocis i millorar vides. El meu enfocament combina
          enginyeria de software sòlida amb innovació en IA, sempre prioritzant la qualitat del codi, l'experiència
          d'usuari i l'impacte real. Treballo amb metodologies àgils, enfocades en resultats mesurables i
          solucions sostenibles a llarg termini.
        </p>
      </div>
    </section>

    <!-- Contact -->
    <section class="grid gap-6">
      <h2 class="text-2xl font-semibold text-white">Contacte</h2>
      <p class="text-slate-300">
        Disponible per a projectes de desenvolupament web, consultoria AI i col·laboracions tècniques.
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="mailto:contact@josafe.com"
          class="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
        >
          contact@josafe.com
        </a>
        <SocialLinks />
      </div>
    </section>
  </div>
</template>