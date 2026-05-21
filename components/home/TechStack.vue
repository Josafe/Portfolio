<script setup lang="ts">
interface StackCategory {
  title: string
  description: string
  icon: string
  color: string
  items: string[]
}

const stackCategories: StackCategory[] = [
  {
    title: 'Frontend Engineering',
    description: 'Modern UI frameworks and component architecture',
    icon: 'M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z',
    color: 'from-blue-500/20 to-cyan-500/20',
    items: ['Vue', 'Nuxt', 'TypeScript', 'JavaScript', 'TailwindCSS']
  },
  {
    title: 'Backend & APIs',
    description: 'Scalable server architectures and integrations',
    icon: 'M5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM12 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-7 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
    color: 'from-violet-500/20 to-purple-500/20',
    items: ['Laravel', 'Node.js', 'Java', 'Python', 'REST APIs']
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent systems and multi-agent architectures',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    color: 'from-amber-500/20 to-orange-500/20',
    items: ['AI Systems', 'LLMs', 'Multi-Agent Systems', 'Automation', 'Python AI']
  },
  {
    title: 'Databases',
    description: 'Data modeling and query optimization',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 0V5c0-2.21-3.582-4-8-4S4 2.79 4 5v2m16 4.5v5c0 2.21-3.582 4-8 4s-8-1.79-8-4v-5',
    color: 'from-emerald-500/20 to-teal-500/20',
    items: ['PostgreSQL', 'SQLite', 'SQL Server', 'MySQL', 'NoSQL']
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Distributed systems and edge computing',
    icon: 'M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.999 5.002 5.002 0 1 0-9.78 2.052A4.002 4.002 0 0 0 3 15z',
    color: 'from-sky-500/20 to-blue-500/20',
    items: ['AWS', 'Azure', 'Linux', 'Networking', 'CDN']
  },
  {
    title: 'DevOps & Containers',
    description: 'Deployment pipelines and infrastructure automation',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'from-rose-500/20 to-pink-500/20',
    items: ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'GitHub Actions']
  }
]
</script>

<template>
  <div class="w-full min-w-0 space-y-8">
    <div class="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 sm:p-6 shadow-soft backdrop-blur-xl overflow-hidden">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="min-w-0">
          <p class="text-sm uppercase tracking-[0.11em] text-slate-400">Engineering Stack</p>
          <h2 class="mt-3 text-lg font-semibold text-white">Modern architecture across every layer.</h2>
        </div>
        <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-200">
          <span class="text-sm font-semibold">→</span>
        </div>
      </div>
    </div>

    <div class="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(category, idx) in stackCategories"
        :key="idx"
        class="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-6 transition duration-300 hover:border-white/20 hover:bg-slate-900/90"
      >
        <div :class="`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${category.color} opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-100`" />

        <div class="relative space-y-5">
          <div class="flex items-start justify-between gap-4">
            <div class="min-w-0 flex-1">
              <h3 class="text-base font-semibold text-white">{{ category.title }}</h3>
              <p class="mt-2 text-sm text-slate-400">{{ category.description }}</p>
            </div>
            <div class="inline-flex h-10 w-10 min-w-[2.5rem] items-center justify-center rounded-xl bg-white/5 text-slate-300 transition-all group-hover:bg-white/10">
              <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
                <path :d="category.icon" />
              </svg>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in category.items"
              :key="tech"
              class="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition duration-200 hover:border-white/20 hover:bg-white/10"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
