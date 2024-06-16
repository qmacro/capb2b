const cds = require('@sap/cds')
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
    //this.after('READ', 'Books', (data) => changeUrgencyDueToSubject(data) )
      this.after('READ', 'Books', changeUrgencyDueToSubject)
})
