const express = require('express')
const router = express.Router()

const {
    getCategoryItemsController,
    getSingleProduct,
    getSearchController,
    getAllProducts
} = require('../controllers/product.controller')

router.get('/categories/:category', getCategoryItemsController)
router.get('/product/:id', getSingleProduct)
router.get('/search/:searchText', getSearchController)
router.get('/allProducts', getAllProducts)

module.exports = router