export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Keratin',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ant-design-vue/dist/antd.css', '@/assets/css/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/vue-gallery.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-fonts',
    '@nuxtjs/device',
  ],
  googleFonts: {
    families: {
      Montserrat: [400, 600, 700],
      'Roboto+Slab': {
        wght: [500, 600],
      },
    },
    display: 'swap'
  },
  styleResources: {
    scss: [
      './assets/css/variables.scss',
    ]
  },
  // agilitycms: {
  //   // module options
  //   channelName: 'website',
  //   languages: ['ru-RU'],
  //   includeLanguageCodeInUrl: false,
  //   pageComponentPath: 'src/AgilityPage.vue',
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'anatolyhaulin@gmail.com',
      },
      smtp: {
        // host: "smtp.yandex.ru",
        // port: 465,
        // secure: true,
        service: 'gmail',
        auth: {
          // user: 'info@keratin-course.ru',
          // pass: "KeratinOdin2022",
          user: 'callback.keratin.course@gmail.com',
          pass: "KeratinOdin2022",
        },
      },
    }],
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
