import React from 'react'

const ProductCard = ({ product, size_id, setModalIncrement, setModalPayment, setProductSelect }) => {

    const handleIncrement = () => {
        setModalIncrement(true)
        setProductSelect({
            id: product._id,
            size_id: size_id,
            category_id: product.category_id
        })
    }

    const handlePayment = () => {
        setModalPayment(true)
        setProductSelect({
            id: product._id,
            size_id: size_id,
            category_id: product.category_id
        })
    }

    return (
        <div className='card-product' key={product._id}>
            <img className='card-product-image' src={`${product.images[0]}`} alt="" />
            <p className='name'>{product.name}</p>
            <p className='price'>${product.price}</p>
            <div className='box-cuantity'>
                <p className='cuantity'>{product.stock[0].cuantity}</p>
            </div>
            <div className='box-buttons-product'>
                <button onClick={handlePayment} className='button-sell'>vender</button>
                
                <button onClick={handleIncrement} className='button-increment'>aumentar</button>
            </div>
        </div>
    )
}

export default ProductCard