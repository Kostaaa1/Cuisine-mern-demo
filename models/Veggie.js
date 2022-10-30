const mongoose = require('mongoose')

const VeggieSchema = new mongoose.Schema({
    veggie: {},
})

module.exports = mongoose.model('Veggie', VeggieSchema)