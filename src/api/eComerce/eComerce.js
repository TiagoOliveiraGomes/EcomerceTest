const restful = require('node-restful')
const mongoose = restful.mongoose

const table = new mongoose.Schema({
    description: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = restful.model('eComerce', table)