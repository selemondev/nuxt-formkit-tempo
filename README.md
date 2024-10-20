<p align="center">
 <img align="center" src="https://raw.githubusercontent.com/selemondev/nuxt-formkit-tempo/master/assets/nuxt-formkit-tempo.png" />
 <h1 align="center">
 Nuxt Formkit Tempo
 </h1>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/nuxt-formkit-tempo">
    <img alt="npm-version-src" src="https://img.shields.io/npm/v/nuxt-formkit-tempo/latest.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://npmjs.com/package/nuxt-formkit-tempo">
    <img alt="npm-downloads-src" src="https://img.shields.io/npm/dm/nuxt-formkit-tempo.svg?style=flat&colorA=020420&colorB=00DC82" />
  </a>
  <a href="https://nuxt.com">
    <img alt="nuxt-src" src="https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js" />
  </a>
</p>

## Demo

### Play with it on [Stackblitz](https://stackblitz.com/edit/nuxt-starter-2rrjst?file=app.vue)

## Quick Setup

1. Install the module in your Nuxt application with one command:

```bash
npx nuxi@latest module add nuxt-formkit-tempo
```

That's it! You can now use nuxt-formkit-tempo in your Nuxt application ✨.

## Configuration

The `nuxt-formkit-tempo` module allows you to add prefixes and aliases to the utilities and helpers provided by the `@formkit/tempo` package.

Below is how you can configure and use them in your Nuxt 3 project:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-formkit-tempo'],
  devtools: { enabled: true },
  tempo: {
    prefix: 'use',
    alias: [
      ['format', 'formatDate'],
    ],
  },
})

```

then in your component:

### Example 1 with `alias` + `prefix`

```vue
<template>
  <div style="display: grid; height: 100vh; width: 100vw; place-items: center;">
    <ClientOnly>
      {{ newDate }}
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const now = new Date()

const newDate = useFormatDate(now, { date: 'medium', time: 'short' })
</script>
```


### Example 2 with `prefix` only.

```ts
export default defineNuxtConfig({
  modules: ['nuxt-formkit-tempo'],
  devtools: { enabled: true },
  tempo: {
    prefix: 'use'
  },
})

```

then in your component:

```vue
<template>
  <div style="display: grid; height: 100vh; width: 100vw; place-items: center;">
    <ClientOnly>
      {{ newDate }}
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const now = new Date()

const newDate = useFormat(now, 'full')
</script>

```


### Example 3 without `prefix` nor `alias`.

```ts
export default defineNuxtConfig({
  modules: ['nuxt-formkit-tempo'],
  devtools: { enabled: true },
  tempo: {},
})

```

```vue
<template>
  <div style="display: grid; height: 100vh; width: 100vw; place-items: center;">
    <ClientOnly>
      {{ newDate }}
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const now = new Date()

const newDate = format(now, 'full')
</script>

```

## Types

Below are the types of the `tempo` config:

| Prop               | Type    | Description                                              | Default   |
| ------------------ | ------- | -------------------------------------------------------- | --------- |
| prefix             | string  | Keyword placed infront of the utilities and helpers.                            | ''        |
| alias       | [string, string][]     | A unique name assigned to a utility to avoid naming conflicts with other third-party packages and libraries.                                       | []        |


## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


Happy hacking ✨.