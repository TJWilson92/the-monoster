import NuxtConfiguration from "@nuxt/config";

const nuxtConfig: NuxtConfiguration = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Thomas Wilson",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        content:
          "Thomas Wilson is a Web Developer currently based in London, England. This is his personal website.",
        hid: "description",
        name: "description",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/tw-favicon.ico" },
      {
        href:
          "https://fonts.googleapis.com/css?family=Merriweather:300,400,500|Work+Sans&display=swap",
        rel: "stylesheet",
        type: "text/css",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/tailwind.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: "./tailwind.config.js",
      },
    },
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: any) {
      return config;
    },
  },
};

export default nuxtConfig;
