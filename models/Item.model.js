const mongoose = require('mongoose')

const review = mongoose.Schema(
    {
        
    }
)


const itemSchema = new mongoose.Schema(
    {
        category:{
            type: String,
            required: true
        },
        subCategory:{
            type: String,
            required: false
        },
        productId:{
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        displayImg:{
            type: String,
            required: false,
        },
        image:[{
            type: String
        }],
        description:{
            type: String,
            required: false,
        },
        detailedDescription:{
            type: String,
            required: false,
        },
        price:{
            type: String,
            required: true
        },
        discount:{
            type: String,
            required: false
        },
        color:{
            type: String,
            required: false
        },
        size:[{
            size:{
                type: String,
                required: true
            },
            color:{
                type: String,
                required: false
            },
            stock:{
                type: String,
                required: true
            },
            price:{
                type: String
            }
        }],
        brand:{
            type: String,
            required: false
        },
        rating:{
            type: String,
            required: false
        },
        //review
        view:[{
            name:{
                type: String,
                required: true
            },
            image:{
                type: String,
                required: false
            },
            review:{
                type: String,
                required: false,
            },
            rating:{
                type: String,
                required: true
            },
            date:{
                type: String,
                required: true
            }
        }],
        updatedOn:{
            type: String,
            required: true
        },
        updatedBy:{
            type: String,
            required: true
        }
    }

)

module.exports = mongoose.model('Item', itemSchema)

