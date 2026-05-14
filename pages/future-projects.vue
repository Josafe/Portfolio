<script setup lang="ts">
useSeoMeta({
  title: 'Future Projects · Josafe.com',
  description: 'Idees i roadmap professional de Josafe: SaaS, automatitzacions IA i sistemes multiagent avançats.',
})
</script>

<template>
  <div class="grid gap-12">
    <!-- Header -->
    <div class="grid gap-4">
      <h1 class="text-4xl font-bold text-white">Projectes Futurs</h1>
      <p class="text-slate-400">
        Una visió del meu roadmap professional: idees innovadores, productes escalables i tecnologies emergents.
      </p>
    </div>

    <!-- Categories -->
    <div class="grid gap-8">
      <!-- SaaS Ideas -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">Idees SaaS</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Plataforma d'Automatització per Pimes</h3>
            <p class="text-sm text-slate-400 mb-4">
              SaaS que combina IA i automatització per ajudar petites empreses a optimitzar processos interns.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Vue.js</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Laravel</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">AI Integration</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Marketplace de Serveis Digitals</h3>
            <p class="text-sm text-slate-400 mb-4">
              Plataforma que connecta professionals digitals amb empreses que necessiten serveis especialitzats.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Next.js</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Stripe</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Real-time</span>
            </div>
          </div>
        </div>
      </section>

      <!-- AI Automations -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">Automatitzacions IA</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Agent de Gestió de Continguts</h3>
            <p class="text-sm text-slate-400 mb-4">
              Sistema multiagent que genera, optimitza i distribueix contingut per a xarxes socials i blogs.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Python</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">LLMs</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Multi-Agent</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Sistema d'Anàlisi Predictiva</h3>
            <p class="text-sm text-slate-400 mb-4">
              IA que analitza dades empresarials per proporcionar insights predictius i recomanacions accionables.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Machine Learning</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Data Science</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">APIs</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Advanced Multi-Agent Systems -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">Sistemes Multiagent Avançats</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Framework de Coordinació d'Agents</h3>
            <p class="text-sm text-slate-400 mb-4">
              Framework obert per desenvolupar i coordinar sistemes d'agents IA en entorns complexos.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Python</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Distributed Systems</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Open Source</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Agent d'Optimització Empresarial</h3>
            <p class="text-sm text-slate-400 mb-4">
              Agent intel·ligent que optimitza processos empresarials mitjançant aprenentatge continu i adaptació.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Reinforcement Learning</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Business Intelligence</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">APIs</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Research Projects -->
      <section class="grid gap-6">
        <h2 class="text-2xl font-semibold text-white">Projectes d'Investigació</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">IA per a Sostenibilitat</h3>
            <p class="text-sm text-slate-400 mb-4">
              Recerca en aplicacions d'IA per a la transició energètica i sostenibilitat ambiental.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Research</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Sustainability</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">IoT</span>
            </div>
          </div>

          <div class="rounded-lg border border-slate-800 p-6">
            <h3 class="text-lg font-semibold text-white mb-2">Interfícies Humà-Agent</h3>
            <p class="text-sm text-slate-400 mb-4">
              Disseny d'interfícies intuïtives per a la interacció amb sistemes d'agents complexos.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">UX Research</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">HCI</span>
              <span class="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">Frontend</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Call to Action -->
    <div class="rounded-lg border border-slate-800 p-6 text-center">
      <h3 class="text-lg font-semibold text-white mb-2">Interessat en Col·laborar?</h3>
      <p class="text-slate-400 mb-4">
        Si alguna d'aquestes idees t'interessa o tens un projecte similar en ment, m'encantaria parlar-ne.
      </p>
      <NuxtLink
        to="/about"
        class="inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200"
      >
        Contacta'm
      </NuxtLink>
    </div>
  </div>
</template>