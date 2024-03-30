import React from 'react'

const ProductList = ({ product }) => {

    if (product === null) {
        return <h1>Loading.....</h1>
    }
    return (

        <div className='main'>

            <div className='imgdiv'><img src={product.image} alt="image" className='imgPro' /></div>

            <h3 className='title'>{product.title}</h3>
            <div className='pricing'><h4 className='price'> Price: {product.price} ₹</h4><span>{product.rating.rate} stars</span></div>
        </div>
    )
}

export default ProductList;