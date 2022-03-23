const moongose = require('mongoose')

const readingListSchema = new moongose.Schema({
    link: {},
    linkWithoutPaywall: {},
    title:{},
    dateAdded:{},


})


module.exports = moongose.model('User', userSchema)