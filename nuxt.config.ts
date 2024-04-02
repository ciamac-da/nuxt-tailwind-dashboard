// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      title: "Nuxtjs-Tailwind-Dashboard",
      link: [
        { rel: "icon", type:"image/x-icon", href: "/icon.svg" },

        // inter font
        { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        { rel: "preconnect", href: "https://rsms.me/" },
      ]
    }
  }
})
