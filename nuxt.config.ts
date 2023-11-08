// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app : {
     baseURL: '',
     buildAssetsDir: 'assets',
 },
  devtools: { enabled: true },
  pages :true,
  modules :[
      'nuxt-icon',
      'nuxt-lodash',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@nuxtjs/tailwindcss',
      '@nuxt/content',
      '@nuxthq/studio',
      '@nuxtjs/supabase',
  ],
  runtimeConfig :{
    public :{
      stripePk :process.env.STRIPE_PK_KEY
    }
  },
  app:{
    head :{
      script : [
        {src: 'https://js.stripe.com/v3/', defer:true}
      ]
    }
  },
    supabase :{
        redirect: false,
        redirectOptions: {
            login: '/auth',
            callback: '/auth',
            exclude: [],
        }
    }
})
