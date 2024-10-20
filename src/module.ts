import { defineNuxtModule, createResolver, addImports } from '@nuxt/kit'
import * as formkitTempo from '@formkit/tempo'

export interface ModuleOptions {
  prefix: string
  alias: Iterable<[string, string]>
}

export const firstLetterToUpperCase = (str: string) => {
  if (!str) return
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-formkit-tempo',
    configKey: 'tempo',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: '',
    alias: [],
  },
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const aliasMap = new Map<string, string>(_options.alias)
    for (const name of Object.keys(formkitTempo)) {
      const alias = aliasMap.has(name) ? aliasMap.get(name)! : name
      const as = _options.prefix ? _options.prefix + firstLetterToUpperCase(alias) : alias
      addImports({ name, as, from: resolve('./runtime/formkit-tempo') })
    }
  },
})
