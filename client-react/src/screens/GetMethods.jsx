import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { get } from 'js-cookie'

const GetMethod = (props) => {
    const [products, setProducts] = useState({
        productId:'',
        category:'',
        name:'',
        price:'',
        discount:'',
        image:'',
        description:'',
        detailedDescription:'',
        color:'',
        size:'',
        brand:''
    })

    
    useEffect(() => {
        const category = props.match.params.category
        // console.log(category)
        // console.log(props, props.match.params.category)
        setProducts({...products, category:category}) 
        getProducts()
        
    },[])
    
    const getProducts = async() => {
       const {data}= await axios.get(`${process.env.REACT_APP_API_URL}/categories/as`)
        console.log(data)
    
    }

    return(
        <div>
            Get Methods
            <p>{products.name}</p>
        </div>
    )
}

export default GetMethod