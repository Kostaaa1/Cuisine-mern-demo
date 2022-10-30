const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes')

router.get('/getPopular', recipesController.getPopular)
router.get('/getVeggie', recipesController.getVeggie)
router.get('/getCuisine', recipesController.getCuisine)
// router.get('/getPopular', recipesController.getData)
// router.post('/createSearched', recipesController.createRecipe)

module.exports = router