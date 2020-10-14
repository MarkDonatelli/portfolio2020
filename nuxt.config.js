export default {
  /*
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no,  initial-scale=1',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },

      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Raleway:wght@400;700;900&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/scroll-trigger.js',
    '~/plugins/firestore.js',
    '~/plugins/scroll-to.js',
    { src: '~/plugins/vuelidate.js', ssr: true },
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    'nuxt-gsap',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', 'vue-scrollto/nuxt'],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/colors.scss',
      '~/assets/scss/fonts.scss',
      '~/assets/scss/mixins.scss',
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},

  publicRuntimeConfig: {},
  privateRuntimeConfig: {
    apiSecret: process.env.SENDGRID_API_KEY,
  },
}
