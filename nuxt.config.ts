export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/scss/styles.scss", "animate.css"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "slide",
      mode: "out-in",
    },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
  typescript: {
    strict: false,
  },
  modules: ["@nuxtjs/web-vitals", "nuxt-capo", "@nuxtjs/html-validator"],
  build: {
    // vue-toastification - old commonjs module
    transpile: ["vue-toastification"],
  },
});
