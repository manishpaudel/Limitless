import React, {useState} from 'react'
import axios from 'axios'



const AddItem = () =>{
    const [formData, setFormData] = useState({
        category:'', 
        subcategory:'', 
        name:'', 
        displayImg: '', 
        image: '', 
        description: '', 
        detailedDescription:'', 
        price:'', 
        discount: '', 
        color: '', 
        size:'',
        innerSize: '',
        innerColor: '',
        stock: '',
        innerPrice: '',
        brand:''
    })

    const {category, subcategory, name, 
        displayImg, image, description, detailedDescription, 
        price, discount, color, innerSize, innerColor, innerPrice, stock, brand} = formData
    
    const handleChange = text => e => {
        if(text === 'image' || text ==='displayImg'){
            setFormData({ ...formData, [text]: e.target.file });
        }
        else{
            setFormData({ ...formData, [text]: e.target.value });
        }
        
    };
    // const handleChangeSize = text => e => {
    //     setFormData({ ...formData, [text]:{ size:e.target.value} });
    // };
    // const handleChangeColor=text=>e=>{

    // }
    

    const handleSubmit = e =>{
        e.preventDefault()
        const size = {
            size: innerSize,
            color: innerColor,
            stock: stock,
            price: innerPrice,
        }
        const images ={
            image: image
        }

        if(category && name && price ){
            axios.post(`${process.env.REACT_APP_API_URL}/additem`,{},{
                category, subcategory, name, 
                description, detailedDescription, 
                price, discount, color, size, brand
            }).then(res=>{
                setFormData({
                    ...formData,
                    category:'', 
                    subcategory:'', 
                    name:'', 
                    displayImg: '', 
                    image:'', 
                    description: '', 
                    detailedDescription:'', 
                    price:'', 
                    discount: '', 
                    color: '', 
                    size:'',
                    innerSize: '',
                    innerColor: '',
                    stock: '',
                    innerPrice: '',
                    brand:''
                })
                console.log('successfully added')
            }).catch(err=>{
                console.log(err.response)
            })
        }
        else{
            console.log('Must contain category, name and price')
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Category' onChange={handleChange('category')} value={category} />
                <input type='text' placeholder='Sub-Category' onChange={handleChange('subcategory')} value={subcategory} />
                <input type='text' placeholder='Product Name' onChange={handleChange('name')} value={name} /><br/>
                <input type='file' placeholder='display image' onChange={handleChange('displayImg')} value={displayImg} />
                <input type='file' placeholder='images' onChange={handleChange('image')} value={image} /><br/>
                <input type='text' placeholder='description' onChange={handleChange('description')} value={description} />
                <input type='text' placeholder='detailed description' onChange={handleChange('detailedDescription')} value={detailedDescription} /><br/>
                <input type='text' placeholder='price' onChange={handleChange('price')} value={price} />
                <input type='text' placeholder='discount' onChange={handleChange('discount')} value={discount} />
                <input type='text' placeholder='color' onChange={handleChange('color')} value={color} />
                <input type='text' placeholder='brand' onChange={handleChange('brand')} value={brand} /><br/>
                Size
                <input type='text' placeholder='inner size' onChange={handleChange('innerSize')} value={innerSize}/>
                <input type='text' placeholder='inner color' onChange={handleChange('innerColor')} value={innerColor}/>
                <input type='text' placeholder='inner price' onChange={handleChange('innerPrice')} value={innerPrice}/>
                <input type='text' placeholder='stock' onChange={handleChange('stock')} value={stock}/>
                <br/>
                
                <button type='submit'>Add Item</button>
            </form>
        </div>
    )
}

export default AddItem