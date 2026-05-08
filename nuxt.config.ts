export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Josafe · Full Stack & AI Systems Engineer',
      htmlAttrs: { lang: 'ca' },
      meta: [
        {
          name: 'description',
          content:
            'Portfolio professional de Josafe amb projectes full stack i d\'enginyeria de sistemes AI.'
        }
      ]
    }
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      siteUrl: 'https://josafe.com',
      githubUser: 'Josafe'
    }
  },
  nitro: {
    compressPublicAssets: true
  }
})
