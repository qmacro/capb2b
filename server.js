const fs = require('node:fs/promises')
require('@sap/cds').on('listening', async () => {
    await fs.writeFile('listening', '')
})