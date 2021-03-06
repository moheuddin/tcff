require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: '~/components/LoadingBar.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  head: {
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animate.min.css',
    //'~/assets/css/lightbox.css',
    //'~/assets/css/main.css',
    //'~/assets/css/prettyPhoto.css',
    //'~/assets/css/responsive.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vform.js',
    '~/plugins/toast.js',
    '~/plugins/scripts.js',
    {src: 'plugins/owl.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
	'@nuxtjs/dotenv',
	'@nuxtjs/moment',
	
  ],

    // nuxt auth package configuration
    auth: {
        // Options
        strategies: {
            local: {
                token: {
                    property: 'access_token',
                    // required: true,
                    // type: 'Bearer'
                },
                user: {
                    property: false,
                    // autoFetch: true
                },
                endpoints: {
                    login: { url: '/auth/login', method: 'post' },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/auth/me', method: 'post' }
                }
            }
        },
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login',
            home: '/'
        }
    },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },
   router: {
    //base: __dirname,
  },
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
