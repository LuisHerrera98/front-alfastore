import React, { useEffect, useState } from 'react';
import "./stylesheets/productsList.css";
import fetchProductsByCategorySize from '../../utils/fetchProductsByCategorySize';
import Masonry, {
  ResponsiveMasonry
} from "https://cdn.skypack.dev/react-responsive-masonry@2.1.0";
import ProductCardPublic from './ProductCard copy';

const ProductsListPublic = ({ category_id, size_id, category_name, size_name }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategorySize(setProducts, category_id, size_id)
  }, [])

  return (
    <div className='product-list'>
      <br />
      <br />
      <br />
      <h3> {category_name} EN TALLE {size_name}</h3>
      <div className='section-card-products'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 250: 1, 290: 2, 600: 3, 900: 4, 1300: 5 }}>
          <Masonry gutter={15}>
            {products.map((product) => (
              <ProductCardPublic key={product._id} product={product}/>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default ProductsListPublic