const mongoose = require('mongoose')

const CuisineSchema = new mongoose.Schema({
    italian: {},
    american: {},
    thai: {},
    japanese: {},
})

module.exports = mongoose.model('Cuisine', CuisineSchema)