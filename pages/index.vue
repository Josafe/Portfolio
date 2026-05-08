<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Josafe.com · Portfolio Full Stack & AI Systems',
  description:
    'Portfolio modern de Josafe amb projectes web i intel·ligència artificial. Connexió directa amb GitHub, LinkedIn i Instagram.',
  ogTitle: 'Josafe.com · Portfolio Full Stack & AI Systems',
  ogDescription:
    'Projectes destacats com AGC Padel Academy i Chatbot Multiagent System amb importació automàtica de repositoris GitHub.',
  ogUrl: config.public.siteUrl,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="grid gap-2">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>
