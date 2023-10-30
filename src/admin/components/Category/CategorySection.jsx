import React, { useState, useEffect } from "react";
import Carpeta from "./images/carpeta-test.png";
import "./categorySection.css";
import fetchSizes from "../../utils/fetchSizes";
import { Link } from "react-router-dom";

const CategorySection = ({ category_id, category_name }) => {
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        fetchSizes(setSizes, category_id)
    }, [category_id]);2

    return (
        <div>
            <h3 className="category-section-title">{category_name}</h3>
            <div className="box-button">
                <Link to={`/admin/crear-talle/${category_id}/${category_name}`}>
                    <button>Crear talle</button>
                </Link>
                {
                    sizes.length > 0 ? (
                        <Link to={`/admin/crear-producto/${category_id}/${category_name}`}>
                    <button>Crear Producto</button>
                </Link>
                    ) : (null)
                }
                
            </div>
            <div className="category-section">
                {sizes.map((size) => (
                    <Link key={size._id} to={`/admin/products/${category_id}/${size._id}/${category_name}/${size.name}`}>
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
