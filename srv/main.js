const cds = require('@sap/cds')
const logger = cds.log('capb2b')
module.exports = cds.service.impl(function () {
    logger("I am in the anonymous function")
    this.after('READ', 'Books', (data, req) => {
        // logger(data)
        data.map(book => book.title += '!' )

    })
})
