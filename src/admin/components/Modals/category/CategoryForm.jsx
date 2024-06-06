import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../../notify/Success";
import Error from "../../notify/Error";
import "./categoryForm.css";
import createCategory from "../../../utils/createCategory";
import subir from "./images/subir.gif";
import useForm from "../../../hooks/useForm";
import ButtonCreate from "../../Buttons/ButtonCreate";

const CategoryForm = ({ setOpenModalCreateCategory }) => {
  const navigate = useNavigate();
  const { name, onInputChange, onResetForm } = useForm({
    name: "",
  });

  const [openSuccess, setOpenSuccess] = useState(false)
  const [openError, setOpenError] = useState(false)
  const [message, setMessage] = useState('custom')
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const button = e.currentTarget.querySelector("button");
    button.disabled = true;
    const data = await createCategory(name, image);
    const [ message, statusCode] = data;
    setMessage(message)
    if(statusCode === 201) {
      setOpenSuccess(true)
      setTimeout(() => {
      }, 500);
      setOpenSuccess(false)
      navigate("/admin/");
    }else{
      setOpenError(true)
      setTimeout(() => {
      }, 500);
      setOpenError(false)
    }
    setLoading(false);
    button.disabled = false;
   
  };

  const handleImage = (e) => {
    setImage(e.target.files);
  };

  return (
    <div className="box-create-category">
      <form onSubmit={handleFormSubmit}>
        <h3>CREAR CATEGORIA</h3>
        <p
          className="close-modal"
          onClick={() => {
            setOpenModalCreateCategory(false);
          }}
        >
          x
        </p>
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
          <img className="animation" src={subir} alt="" />

          <p>Subir imagen</p>

          <img className="animation" src={subir} alt="" />
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
        />
        {image.length > 0 && name.length > 0 ? (
          <ButtonCreate
            message={"Crear"}
            disabled={false}
            size={"medium"}
            color={"blue"}
            loading={loading}
          />
        ) : (
          <ButtonCreate
            message={"Crear"}
            disabled={true}
            size={"medium"}
            loading={loading}
          />
        )}
      {
        openSuccess ? (<Success message={message}/>) : (null)
      }
      {
        openError ? (<Error message={message}/>) : (null)
      }       
      </form>
    </div>
  );
};

export default CategoryForm;
