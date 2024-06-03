import React, { useState, useEffect } from "react";
import Carpeta from "./images/carpeta-test.png";
import "./categorySection.css";
import fetchSizes from "../../utils/fetchSizes";
import { Link } from "react-router-dom";
import ModalSizeCreate from "../Modals/size/ModalSizeCreate";

const CategorySection = ({ category_id, category_name }) => {
  const [sizes, setSizes] = useState([]);
  const [uploadCategorySection, setUploadCategorySection] = useState(false)
  const [openModalCreateSize, setOpenModalCreateSize] = useState(false);

  useEffect(() => {
    fetchSizes(setSizes, category_id);
  }, [category_id, uploadCategorySection]);

  return (
    <div>
      <h3 className="category-section-title">{category_name}</h3>
      <div className="box-button">
        <button
          onClick={() => {
            setOpenModalCreateSize(true);
          }}
        >
          Crear talle
        </button>
        {openModalCreateSize ? (
          <ModalSizeCreate
            category_id={category_id}
            setOpenModalCreateSize={setOpenModalCreateSize}
            setUploadCategorySection={setUploadCategorySection}
            uploadCategorySection={uploadCategorySection}
          />
        ) : null}
        {sizes.length > 0 ? (
          <Link to={`/admin/crear-producto/${category_id}/${category_name}`}>
            <button>Crear Producto</button>
          </Link>
        ) : null}
      </div>
      <div className="category-section">
        {sizes.map((size) => (
          <Link
            key={size._id}
            to={`/admin/products/${category_id}/${size._id}/${category_name}/${size.name}`}
          >
            <div>
              <img src={Carpeta} alt="" />
              <div>
                <p> TALLE {size.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
