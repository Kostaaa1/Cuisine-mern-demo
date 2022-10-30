const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    recipes: {},
})

module.exports = mongoose.model('Recipe', RecipeSchema)