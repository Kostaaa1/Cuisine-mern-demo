const Popular = require('../models/Recipe')
const Cuisine = require('../models/Cuisine')
const Veggie = require('../models/Veggie')
const Info = require('../models/Info')

module.exports = {
    getPopular: async (req, res) => {
        try {
            const popular = await Popular.findOne()
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
            console.log(req.params)
            const cuisine = await Cuisine.find({name: req.params.type})
            // console.log(req.params.type)
            // console.log(cuisine)
            res.json(cuisine)
            // console.log(cuisine)
            // res.json(cuisine)
        } catch (error) {
            console.log(error)
        }
    },
    getSearched: async (req, res) => {
        try {
            const cuisine = await Cuisine.find({name: req.params.query})
            console.log(cuisine)
            res.json(cuisine)
        } catch (error) {
            console.log(error)            
        }
    },
    createSearched: async (req, res) => {
        try {
            const searched = await Cuisine.create({name: req.body.name, data: req.body.data})
            console.log(searched)
            res.json(searched)
        } catch (error) {
            console.log(error)            
        }
    },
    getInfo: async (req, res) => {
        try {
            const info = await Info.find({id: req.params.id})
            console.log(info)
            res.json(info)
        } catch (error) {
            console.log(error)
        }
    },
    createInfo: async (req, res) => {
        try {
            const infoCreate = await Info.create({id: req.body.id, data: req.body.info})
            console.log(infoCreate)
            res.json(infoCreate)
        } catch (error) {
            console.log(error)
        }
    }
}