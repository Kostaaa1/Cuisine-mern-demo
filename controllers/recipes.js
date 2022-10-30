const Recipe = require('../models/Recipe')
const Cuisine = require('../models/Cuisine')
const Veggie = require('../models/Veggie')

module.exports = {
    getPopular: async (req, res) => {
        try {
            const popular = await Recipe.findOne()
            console.log(popular)
            res.json(popular)
        } catch (error) {
            console.log(error)
        }
    },
    getVeggie: async (req, res) => {
        try {
            const veggie = await Veggie.findOne()
            console.log(veggie)
            res.json(veggie)
        } catch (error) {
            console.log(error)
        }
    },
    getCuisine: async (req, res) => {
        try {
            const cuisine = await Cuisine.findOne()
            console.log(cuisine)
            res.json(cuisine)
        } catch (error) {
            console.log(error)
        }
    },
}