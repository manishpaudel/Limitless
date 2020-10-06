const express = require('express')
const router = express.Router()

const {
    addItemController
} = require('../controllers/item.controller')

router.post('/additem', addItemController)

module.exports = router