import React, { useEffect, useState } from 'react';
import "./stylesheets/productsList.css";
import fetchProductsByCategorySize from '../../utils/fetchProductsByCategorySize';
import Masonry, {
  ResponsiveMasonry
} from "https://cdn.skypack.dev/react-responsive-masonry@2.1.0";
import MethodPayment from '../Modals/ModalMethodPayment';
import AcceptIncrement from '../Modals/AcceptIncrement';
import ProductCard from './ProductCard';

const ProductsList = ({ category_id, size_id, category_name, size_name }) => {

  const [products, setProducts] = useState([]);
  const [modalIncrement, setModalIncrement] = useState(false)
  const [modalPayment, setModalPayment] = useState(false)
  const [productSelect, setProductSelect] = useState({
    id: "",
    name: "",
    size_id: "",
    category_id: "",
    cost: 0,
    price: 0,
    image: ""
  })

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
              <ProductCard key={product._id} product={product} size_id={size_id} setModalIncrement={setModalIncrement} setModalPayment={setModalPayment} setProductSelect={setProductSelect}/>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      { modalIncrement ? (<AcceptIncrement setModalIncrement={setModalIncrement} product={productSelect} setProducts={setProducts} />) : (null)}
      { modalPayment ? (<MethodPayment product={productSelect} setModalPayment={setModalPayment} setProducts={setProducts} category_name={category_name} size_name={size_name}/>) : (null)}
    </div>
  )
}

export default ProductsList