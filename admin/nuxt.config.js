export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }

    ]
  },

  // Global SCSS: https://go.nuxtjs.dev/config-css
  scss: [
    //Dashboard
    '@/static/scss/_app.scss',
    '@/static/scss/_boxes.scss',
    '@/static/scss/_charts.scss',
    '@/static/scss/_form_element.scss',
    '@/static/scss/_header.scss',
    '@/static/scss/_layout.scss',
    '@/static/scss/_mixin.scss',
    '@/static/scss/_padding_margin.scss',
    '@/static/scss/_pages.scss',
    '@/static/scss/_perfect-scrollbar.scss',
    '@/static/scss/_projects.scss',
    '@/static/scss/_reset_basic.scss',
    '@/static/scss/_responsive.scss',
    '@/static/scss/_sidebar.scss',
    '@/static/scss/_ui_elements.scss',
    '@/static/scss/_variable.scss',
    '@/static/scss/_waves.scss',
    '@/static/scss/_width_height.scss',
    '@/static/scss/_color_theme.scss'

  ],
  //Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //Dashboard
    '@/static/css/bootstrap_extend.css',
    '@/static/css/skin_color.css',
    '@/static/css/style.css',
    '@/static/css/vendors_css.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
