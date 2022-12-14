const Popular = require("../models/Recipe");
const Cuisine = require("../models/Cuisine");
const Searched = require("../models/SearchedRecipes");
const Veggie = require("../models/Veggie");
const Categorized = require("../models/CategorizedRecipes");
const Info = require("../models/Info");
const FavoritesRecipe = require("../models/FavoritesRecipe");

module.exports = {
    getPopular: async (req, res) => {
        try {
            const popular = await Popular.findOne();
            res.json(popular);
        } catch (error) {
            console.log(error);
        }
    },
    getVeggie: async (req, res) => {
        try {
            const veggie = await Veggie.findOne();
            res.json(veggie);
        } catch (error) {
            console.log(error);
        }
    },
    getCuisine: async (req, res) => {
        try {
            const cuisine = await Cuisine.find({ name: req.params.type });
            res.json(cuisine);
        } catch (error) {
            console.log(error);
        }
    },
    getSearched: async (req, res) => {
        try {
            const cuisine = await Searched.find({
                name: req.params.query,
            });
            res.json(cuisine);
        } catch (error) {
            console.log(error);
        }
    },
    createSearched: async (req, res) => {
        try {
            const searched = await Searched.create({
                name: req.body.name,
                data: req.body.data,
            });
            res.json(searched);
        } catch (error) {
            console.log(error);
        }
    },
    getInfo: async (req, res) => {
        try {
            const info = await Info.find({ id: req.params.id });
            res.json(info);
        } catch (error) {
            console.log(error);
        }
    },
    getCategorized: async (req, res) => {
        try {
            const recipe = await Categorized.find({
                name: req.params.query,
            });
            res.json(recipe);
        } catch (error) {
            console.log(error);
        }
    },
    createCategorized: async (req, res) => {
        try {
            const categorized = await Categorized.create({
                name: req.body.name,
                data: req.body.data,
            });
            res.json(categorized);
        } catch (error) {
            console.log(error);
        }
    },
    createInfo: async (req, res) => {
        try {
            const infoCreate = await Info.create({
                id: req.body.id,
                data: req.body.info,
            });
            res.json(infoCreate);
        } catch (error) {
            console.log(error);
        }
    },
    getFavorite: async (req, res) => {
        try {
            const favorite = await FavoritesRecipe.find();
            res.json(favorite);
        } catch (error) {
            console.log(error);
        }
    },
    createFavorite: async (req, res) => {
        try {
            const favoriteCreate = await FavoritesRecipe.create({
                name: req.body.name,
                data: req.body.recipe,
            });
            res.json(favoriteCreate);
        } catch (error) {
            console.log(error);
        }
    },
};
