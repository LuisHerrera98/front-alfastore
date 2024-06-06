import React from 'react'

const ProductCardPublic = ({ product}) => {

    return (
        <div className='card-product' key={product._id}>
            <img className='card-product-image' src={`${product.image[0].url}`} alt="" />
            <p className='name'>{product.name}</p>
            <p className='price'>${product.price}</p>
        </div>
    )
}

export default ProductCardPublic