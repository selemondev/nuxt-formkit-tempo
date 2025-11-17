import * as tempo from '@formkit/tempo'
import fs from 'node:fs'

const exports = Object.keys(tempo)
  .map(name => `export { ${name} } from '@formkit/tempo'`)
  .join('\n')

fs.writeFileSync('src/runtime/formkit-tempo.ts', exports)
