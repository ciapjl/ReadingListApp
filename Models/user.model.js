const moongose = require('mongoose')

const userSchema = new moongose.Schema({
    user: {},
    firstName:{},
    dateAdded:{}

})


module.exports = moongose.model('User', userSchema)