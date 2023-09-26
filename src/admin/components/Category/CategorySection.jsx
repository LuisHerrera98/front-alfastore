import React, { useState, useEffect } from "react";
import Carpeta from "./images/carpeta-test.png";
import "./categorySection.css";
import fetchSizes from "../../utils/fetchSizes";
import { Link } from "react-router-dom";

const CategorySection = ({ category_id, category_name }) => {
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        fetchSizes(setSizes, category_id)
    }, [category_id]);

    return (
        <div>
            <div className="box-button">
                <Link to={`/admin/crear-talle/${category_id}/${category_name}`}>
                    <button>Crear talle</button>
                </Link>
                <Link to={`/admin/crear-producto/${category_id}/${category_name}`}>
                    <button>Crear Producto</button>
                </Link>
            </div>
            <div className="category-section">
                {sizes.map((size) => (
                    <a key={size._id} href={``}>
                        <div>
                            <img src={Carpeta} alt="" />
                            <div>
                                <p> TALLE {size.name}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
