const cds = require('@sap/cds')
const { Books } = cds.entities('bookshop')
const logger = cds.log('capb2b')
module.exports = cds.service.impl(function () {
    const changeUrgencyDueToSubject = (data) => {
        if (data) {
            const books = Array.isArray(data) ? data : [data];
            books.forEach((book) => {
                if (book.title?.toLowerCase().includes("harmless")) {
                    book.urgency = "HIGH"
                }
            });
        }
    }
    this.on('totalStock', async () => {
        const result = await SELECT .one .from(Books) .columns('sum(stock) as total') 
        return result.total
    })
    this.after('READ', Books, changeUrgencyDueToSubject)
})
