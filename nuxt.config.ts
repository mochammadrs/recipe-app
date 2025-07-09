// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',

  future: {
    compatibilityVersion: 4
  },

  experimental: {
  scanPageMeta: 'after-resolve',
  sharedPrerenderData: false,
  compileTemplate: true,
  resetAsyncDataToUndefined: true,
  templateUtils: true,
  relativeWatchPaths: true,
  normalizeComponentNames: false,
  spaLoadingTemplateLocation: 'within',
  parseErrorData: false,
  pendingWhenIdle: true,
  alwaysRunFetchOnKeyChange: true,
  defaults: {
    useAsyncData: {
      deep: true
    }
  }
},

  features: {
    inlineStyles: true
  },

  image: {
    domains: ['https://cdn.dummyjson.com'],
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
})