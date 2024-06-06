import React, { useState, useEffect } from "react";
import Carpeta from "./images/carpeta-test.png";
import "./categorySection.css";
import fetchSizes from "../../utils/fetchSizes";
import { Link } from "react-router-dom";
import ModalSizeCreate from "../Modals/size/ModalSizeCreate";

const CategorySectionPublic = ({ category_id, category_name }) => {
  const [sizes, setSizes] = useState([]);
  

  useEffect(() => {
    fetchSizes(setSizes, category_id);
  }, [category_id]);

  return (
    <div>
      <br />
      <br />
      <br />
      <h3 className="category-section-title">{category_name}</h3>
      <div className="category-section">
        {sizes.map((size) => (
          <Link
            key={size._id}
            to={`/products/${category_id}/${size._id}/${category_name}/${size.name}`}
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

export default CategorySectionPublic;
