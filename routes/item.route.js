const express = require('express')
const router = express.Router()
const multer = require('multer')



const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, `./uploads/products/`)
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g,"-").replace(".","-") + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    //reject file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
    
    
}

const upload = multer({storage: storage, limts: {
    fileSize:1024*1024*5
    },
    fileFilter: fileFilter
})


const {
    addItemController
} = require('../controllers/item.controller')

router.post('/additem', upload.any(), addItemController)


module.exports = router