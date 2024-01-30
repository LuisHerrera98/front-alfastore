import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Carpeta from "./images/carpeta-test.png";
import fetchCategories from "../../utils/fetchCategories";
import './homeSection.css'

const HomeSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <div className="category-section">
                {categories.map((category) => (
                    <Link key={category._id} to={`/admin/categoria/${category._id}/${category.name}`}>
                        <div>
                            <img src={Carpeta} alt="" />
                            <div>
                                <p>{category.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
  )
};

export default HomeSection;
