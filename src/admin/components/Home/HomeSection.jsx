import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import fetchCategories from "../../utils/fetchCategories";
import './homeSection.css'

const HomeSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
    
  }, []);

  return (
    <div className="home-category-section">
                {categories.map((category) => (
                  
                    <Link key={category._id} to={`/admin/categoria/${category._id}/${category.name}`}>
                        <div>
                            <img src={`${category.image[0].url}`}alt="" />
                            <div>
                                <p className="name-category">{category.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
  )
};

export default HomeSection;
