import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./stylesheets/productsList.css";
import fetchProductsByCategorySize from '../../utils/fetchProductsByCategorySize';
import Masonry, {
  ResponsiveMasonry
} from "https://cdn.skypack.dev/react-responsive-masonry@2.1.0";
import MethodPayment from '../Modals/ModalMethodPayment';
import AcceptIncrement from '../Modals/AcceptIncrement';

const ProductsList = ({ category_id, size_id, category_name, size_name }) => {

  const [openModal, setOpenModal] = useState(false);
  const [openModalIncrement, setOpenModalIncrement] = useState(false);

  let product = [];
  const [products, setProducts] = useState([...product]);

  const closeModalIncrement = async () => {
    setOpenModalIncrement(false)
    await fetchProductsByCategorySize(setProducts, category_id, size_id)
  }

  const closeModalPayment = () => {
    setOpenModal(false)
    fetchProductsByCategorySize(setProducts, category_id, size_id)
  }

  useEffect(() => {
    fetchProductsByCategorySize(setProducts, category_id, size_id)
  }, [])

  return (
    <div className='product-list'>
      <h3> {category_name} EN TALLE {size_name}</h3>
      <div className='section-card-products'>
        <ResponsiveMasonry columnsCountBreakPoints={{ 280: 1, 320: 2, 600: 3, 900: 4, 1300: 5 }}>
          <Masonry gutter={15}>
            {products.map((product) => (

              <div className='card-product' key={product._id}>
                <img className='card-product-image' src={`${product.images[0]}`} alt="" />
                <p className='name'>{product.name}</p>
                <p className='price'>${product.price}</p>
                <div className='box-cuantity'>
                  <p className='cuantity'>{product.stock[0].cuantity}</p>
                </div>
                <div className='box-buttons-product'>
                  <Link to={`/admin/productsLoad/${category_id}/${size_id}/${category_name}/${size_name}/${product._id}`}>
                    <button className='button-sell'>vender</button>
                  </Link>
                  <Link to={`/admin/productsLoad/${category_id}/${size_id}/${category_name}/${size_name}/${product._id}`}>
                    <button className='button-increment'>aumentar</button>
                  </Link>
                </div>
              </div>
            ))}
          </Masonry>

        </ResponsiveMasonry>
      </div>
      {
        openModal ? (<MethodPayment setOpenModal={setOpenModal} closeModalPayment={closeModalPayment} product_id={product_id} size_id={size_id} />) : (null)
      }

      {
        openModalIncrement ? (<AcceptIncrement setOpenModalIncrement={setOpenModalIncrement} closeModalIncrement={closeModalIncrement} product_id={product_id} size_id={size_id} />) : (null)
      }
    </div>
  )
}

export default ProductsList