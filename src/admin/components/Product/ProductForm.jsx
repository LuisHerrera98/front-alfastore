import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Success from "../notify/Success"
import Error from "../notify/Error"
import useForm from "../../hooks/useForm";
import fetchCategories from "../../utils/fetchCategories";
import "./productForm.css";
import subir from "./images/subir.gif";
import createProduct from "../../utils/createProduct";
import LoadingLarge from "../loadings/LoadingLarge";
import fetchSizes from "../../utils/fetchSizes";

const ProductForm = ({ category_id, category_name }) => {
  const navigate = useNavigate();
  const stockArray = []

  const [loading, setLoading] = useState(false)

  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([])

  const { name, cost, price, category, onInputChange, onResetForm } = useForm({
    name: '',
    cost: '',
    price: '',
    category: '',
  });
  const [image, setImage] = useState([]);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)
  const [errors, setErrors] = useState([]);

  const handleFormSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const product = await createProduct(name, cost, price, image, category_id, event)
    setLoading(false);
    product ? setSuccess(true) : setError(true)
    setTimeout(() => {
      onResetForm()
      navigate("/admin/");
    }, 2000);
  };

  const handleImage = (e) => {
    setErrors([]);
    setImage(e.target.files);
  };

  useEffect(() => {
    fetchCategories(setCategories);
    fetchSizes(setSizes, category_id)
    for(let i = 0; i < sizes.length; i++){
      console.log(sizes[i]);
      stockArray.push({id: size[i]._id, })
    }
  }, []);

  return (
    <div className="box-create-product">
      {
        loading ? <LoadingLarge/> : null
      }
      {
        success ? (
          <Success type="product" />
        ) :
          null
      }
      {
        error ? (
          <Error type="product" />
        ) : null
      }
      <h3>Crear Producto en {category_name}</h3>

      <form onSubmit={handleFormSubmit}>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Ingrese el nombre"
          value={name}
          onChange={onInputChange}
          autoComplete="off"
        />
        <input
          id="cost"
          name="cost"
          type="number"
          placeholder="Ingrese el costo"
          value={cost}
          onChange={onInputChange}
          autoComplete="off"
        />
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Ingrese el precio"
          value={price}
          onChange={onInputChange}
          autoComplete="off"
        />
        <label className="input-file" htmlFor="input-file">
          {
            loading ? (<img className="animation-out" src={subir} alt="" />) : <img className="animation" src={subir} alt="" />
          }
          <p>Subir imagenes</p>
          {
            loading ? (<img className="animation-out" src={subir} alt="" />) : <img className="animation" src={subir} alt="" />
          }
        </label>
        {image.length > 0 ? (
          <p className="input-file-cantity">{image.length} archivos subidos</p>
        ) : null}
        <input
          id="input-file"
          type="file"
          placeholder="seleccione las imagenes"
          name="image"
          onChange={handleImage}
          multiple
        />
        {sizes.map((size, index) => (
                  <div key={size._id} className="box-sizes-create-product">
                    <p>{size.name}</p>
                    <input className="input-product-size" type="number" name={size.name} placeholder="cantidad.." id={size._id}/>
                  </div>
              ))}
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default ProductForm;
