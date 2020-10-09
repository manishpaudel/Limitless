const Item= require('../models/Item.model')


exports.getAllProducts = (req,res) => {
    Item.find({}, (err, result) => {
        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }
    })
}

exports.getCategoryItemsController = (req, res) =>{
    const category = req.params.category

    let results=[]
    Item.find({}, (err, result)=>{
        // console.log(result)
        if(err){
            res.send(err)
        }else{
            for(let i =0; i<result.length; i++){
                if(result[i].category === category){
                results.push(result[i])}
            }
            
            res.send(results)
        }
    })
}


exports.getFeaturedItemsController = (req, res) =>{
    const category = req.params.category

    let results=[]
    Item.find({}, (err, result)=>{
        // console.log(result)
        if(err){
            res.send(err)
        }else{
            for(let i =0; i<result.length; i++){
                if(result[i].featured === true){
                results.push(result[i])}
            }
            
            res.send(results)
        }
    })
}

exports.getSaleItemsController = (req, res, next) =>{
    const category = req.params.category

    let results=[]
    Item.find({}, (err, result)=>{
        // console.log(result)
        if(err){
            res.send(err)
        }else{
            for(let i =0; i<result.length; i++){
                if(result[i].sale === true){
                results.push(result[i])}
            }
            
            res.send(results)
        }
    })
}

exports.getSingleProduct = (req, res) =>{
    const _id = req.params.id
    console.log(_id)
    Item.findOne({_id}).exec((err,product)=>{
        
        if(err){
            
            res.json(err)
        }
        else{
            console.log('here')
            res.json(product)
        }
    })
}

exports.getSearchController = (req, res) =>{
    const searchText = req.params.searchText

    let results=[]
    Item.find({}, (err, result)=>{
        // console.log(result)
        if(err){
            res.send(err)
        }else{
            for(let i =0; i<result.length; i++){
                if(result[i].category === searchText || result[i].name.includes(searchText)){
                results.push(result[i])}
            }
            
            res.send(results)
        }
    })
}