import React, { useEffect, useState } from 'react'
import ProductList from './ProductList';
const Product = () => {
    const [product, setProduct] = useState([]);
    const fetchData = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const result = await data.json();
        console.log(result);
        setProduct(result);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='product'>
            {product.map((item) => <ProductList product={item} key={item.id} />)}
        </div>
    )
}

export default Product