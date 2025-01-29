import tailwindcss from '@tailwindcss/vite'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: [
    'nuxt-svgo',
    '@nuxt/eslint',
    '@nuxtjs/stylelint-module',
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/sitemap',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/robots',
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  vite: { plugins: [tailwindcss()] },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  compatibilityDate: '2024-04-03',
  i18n: {
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    defaultLocale: 'de',
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    locales: [
      {
        name: 'Deutsch',
        code: 'de',
        language: 'de-CH',
      },
      {
        name: 'English',
        code: 'en',
        language: 'en-US',
      },
    ],
    customRoutes: 'config',
    pages: {
      yesterday: {
        en: '/yesterday',
        de: '/gestern',
      },
      today: {
        en: '/today',
        de: '/heute',
      },
      tomorrow: {
        en: '/tomorrow',
        de: '/morgen',
      },
      dataprivacy: {
        en: '/dataprivacy',
        de: '/datenschutz',
      },
      imprint: {
        en: '/imprint',
        de: '/impressum',
      },
    },
  },
  routeRules: {
    '/**': { isr: true },
  },
  // sitemap: {
  //   sources: ['/api/__sitemap__'],
  // },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  svgo: {
    defaultImport: 'component',
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              inlineStyles: {
                // don't strip class names from imported svg
                // https://github.com/vuejs/vue/issues/4144#issuecomment-258818137
                // https://nuxt.com/modules/nuxt-svgo#configuration
                onlyMatchedOnce: true,
              },
            },
          },
        },
      ],
    },
  },
})
