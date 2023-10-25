import React, { useEffect, useState } from 'react';
import remeratest from "./images/remeratest.jpeg";
import remeratest2 from "./images/remeratest2.jpeg";
import Masonry2 from "react-responsive-masonry"
import "./stylesheets/productsList.css";
import fetchProductsByCategorySize from '../../utils/fetchProductsByCategorySize';

const ProductsList = ({ category_id, size_id }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategorySize(setProducts, category_id, size_id)
    console.log(products);
  }, [])


  return (

    <Masonry2 className='section-products' id='container' columnsCount={2} gutter={"20px"}>

      {products.map((product) => (
        
          <div key={product._id}>
            <img src={`${product.images[0]}`} alt="" />
            <p className='name'>{product.name}</p>
            <p className='price'>${product.price}</p>
          </div>
        
      ))}

    </Masonry2>

  )
}

export default ProductsList