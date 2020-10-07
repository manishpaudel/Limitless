const Item= require('../models/Item.model')
const { validationResult } = require('express-validator');
const moment = require('moment')



const createProductId = (category) => {
    // console.log(category)
    let productId = category.toUpperCase().slice(0,3)
    var random = category[3]
    var year = moment().format('YYYY').slice(2,4)
    var month = moment().format('MM')
    var day = moment().format('DD')
    var hour = moment().format('HH')
    var min = moment().format('mm')
    var sec = moment().format('ss')
    productId = productId.concat(year,month, day,random, hour, min, sec)
    return productId

}

exports.addItemController = (req,res) => {
  // console.log(req.files)
  const filepath = () => req.files.map(file=>{
   return file.path 
  })
  
    const {category, subcategory1,subcategory2,subcategory3,subcategory4, name, 
        description, detailedDescription, 
        price, discount, color, size, brand} = req.body

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const firstError = errors.array().map(error => error.msg)[0];
        return res.status(422).json({
          errors: firstError
        });
      } else {
          
          Item.findOne({
              name
          }).exec((err,product)=>{
              if(product){
                return res.status(400).json({
                    errors: 'Product name is taken. Please use a new name.'
                  });
              }
              else{
                  const id = createProductId(category)
                  const time = moment().format('YYYY-MM-DD-HH-mm-ss')
                //   const imagess = new image({
                    //   image: image
                //   })
                  console.log(time)
                  const item = new Item({
                    category,
                    subcategory1,
                    subcategory2,
                    subcategory3,
                    subcategory4,
                    productId: id,
                    name,
                    image: filepath(),
                    description,
                    detailedDescription,
                    price,
                    discount,
                    color,
                    size,
                    brand,
                    updatedOn:time ,
                    updatedBy: 'admin'
                  })

                  item.save((err, product) => {
                      if(err){
                        console.log('Save error', err);
                        return res.status(401).json({
                          errors: err
                        });
                      }
                      else {
                        return res.json({
                          success: true,
                          message: product,
                          message: 'Add Item success'
                        })
                    }
                  })
              }
          })

      }
}