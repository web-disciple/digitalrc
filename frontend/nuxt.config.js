export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  mode: 'spa',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'digitalrc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-icon-57x57.png', sizes: "57x57" },
      { rel: 'apple-touch-icon', href: '/apple-icon-60x60.png', sizes: "60x60" },
      { rel: 'apple-touch-icon', href: '/apple-icon-72x72.png', sizes: "72x72" },
      { rel: 'apple-touch-icon', href: '/apple-icon-76x76.png', sizes: "76x76" },
      { rel: 'apple-touch-icon', href: '/apple-icon-114x114.png', sizes: "114x114" },
      { rel: 'apple-touch-icon', href: '/apple-icon-120x120.png', sizes: "120x120" },
      { rel: 'apple-touch-icon', href: '/apple-icon-144x144.png', sizes: "144x144" },
      { rel: 'apple-touch-icon', href: '/apple-icon-152x152.png', sizes: "152x152" },
      { rel: 'apple-touch-icon', href: '/apple-icon-180x180.png', sizes: "180x180" },
      { rel: 'icon', type: "image/png", href: "/android-icon-192x192.png", sizes: "192x192" },
      { rel: 'icon', type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
      { rel: 'icon', type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
      { rel: 'icon', type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
      { rel: 'manifest', href: "/manifest.json" },
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap',
        as: 'style'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap',
      }
    ]
  },

  router: {
    linkActiveClass: 'font-semibold text-gray-900'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-formulate', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/http',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  robots: () => {
    return {
      UserAgent: '*',
      Disallow: '/'
    }
  },

  sitemap: {
    hostname: 'https://www.digitalrc.fr/',
    gzip: true,
    routes: [
      '/',
      '/products',
      '/contact'
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
