import React, { useState } from "react";
import "./ModalSizeCreate.css";
import useForm from "../../../hooks/useForm";
import ButtonCreate from "../../Buttons/ButtonCreate";
import Success from "../../notify/Success";
import Error from "../../notify/Error";
import createSize from "../../../utils/createSIze";

const ModalSizeCreate = ({
  category_id,
  setOpenModalCreateSize,
  setUploadCategorySection,
  uploadCategorySection
}) => {
  const [loading, setLoading] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false)
  const [message, setMessage] = useState('custom')
  const [openError, setOpenError] = useState(false)
  const { name, onInputChange } = useForm({
    name: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const button = e.currentTarget.querySelector("button");
    button.disabled = true;
    const data = await createSize(name, category_id);
    const [message, statusCode] = data;
    setMessage(message);
    if (statusCode === 201) {
      setOpenSuccess(true);
      setUploadCategorySection(!uploadCategorySection);
      setOpenSuccess(false);
      setOpenModalCreateSize(false);
    } else {
      setOpenError(true);
      setOpenError(false);
    }
    setLoading(false);
    button.disabled = false;
  };

  return (
    <div className="modal-create-size">
      {
        openSuccess ? (<Success message={message}/>) : (null)
      }
      {
        openError ? (<Error message={message}/>) : (null)
      } 
      <form onSubmit={handleFormSubmit} className="modal-create-size-form">
        <h3>CREAR TALLE</h3>
        <p
          className="close-modal"
          onClick={() => {
            setOpenModalCreateSize(false);
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
        { name.length > 0 ? (
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
      </form>
      
    </div>
  );
};

export default ModalSizeCreate;
