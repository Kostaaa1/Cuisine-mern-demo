const mongoose = require('mongoose')

const CuisineSchema = new mongoose.Schema({
    name: {type: String, unique: true, reqiored: true},
    data: {}
})

module.exports = mongoose.model('Cuisine', CuisineSchema)