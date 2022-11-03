const express = require('express')
const router = express.Router()
const recipesController = require('../controllers/recipes')

router.get('/getPopular', recipesController.getPopular)
router.get('/getVeggie', recipesController.getVeggie)
router.get('/cuisine/:type', recipesController.getCuisine)
router.get('/searched/:query', recipesController.getSearched)
router.post('/searched/:query', recipesController.createSearched)
router.get('/recipe/:id', recipesController.getInfo)
router.post('/recipe/:id', recipesController.createInfo)
// router.get('/getCuisine', recipesController.getCuisine)
// router.get('/getPopular', recipesController.getData)
// router.post('/createSearched', recipesController.createRecipe)

module.exports = router