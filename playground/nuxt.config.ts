export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  tempo: {
    prefix: 'use',
    alias: [
      ['format', 'formatDate'],
    ],
  },
})
