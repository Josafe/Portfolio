export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  components: ['~/components', '~/sections'],
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
  i18n: {
    locales: [
      { code: 'ca', iso: 'ca-ES', name: 'Català', file: 'ca.json' },
      { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'ca',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: './locales',
    detectBrowserLanguage: false
  },
  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      //routes: ['/ca', '/es', '/en', '/']
    }
  }
})
