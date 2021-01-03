import fs from 'fs'
import { join } from 'path'

import pkg from '../package.json'

pkg.name = `@dbots-pkg/${pkg.name}`

fs.writeFileSync(join(__dirname, '../package.json'), JSON.stringify(pkg))
