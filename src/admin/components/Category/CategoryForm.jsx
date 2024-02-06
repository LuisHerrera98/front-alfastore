import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../notify/Success";
import Error from "../notify/Error";
import "./categoryForm.css";
import useForm from "../../hooks/useForm";
import createCategory from "../../utils/createCategory";
import subir from "./images/subir.gif";

const CategoryForm = ({ setReload }) => {
  const navigate = useNavigate();
  const { name, onInputChange, onResetForm } = useForm({
    name: ""
  });

  const [error, setError] = useState(false);
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await createCategory(name, image);
    
      navigate("/admin/");
    
  };

  const handleImage = (e) => {
    setImage(e.target.files);
  };

  return (
    <div className="box-create-category">
      <h3>Crear Categoria</h3>

      <form onSubmit={handleFormSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={onInputChange}
          autoComplete="off"
        />
        <label className="input-file" htmlFor="input-file">
          {loading ? (
            <img className="animation-out" src={subir} alt="" />
          ) : (
            <img className="animation" src={subir} alt="" />
          )}
          <p>Subir imagen</p>
          {loading ? (
            <img className="animation-out" src={subir} alt="" />
          ) : (
            <img className="animation" src={subir} alt="" />
          )}
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
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CategoryForm;
