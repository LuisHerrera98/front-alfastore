import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchCategories from "../../utils/fetchCategories";
import Logo from "./images/alfastore-icon.png";
import Menu from "./images/menubar.png";
import Admin from "./images/admin.png";
import "./Header.css";

const HeaderPublic = ({ reload = null, setReload = null }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
    setReload ? setReload(false) : null;
  }, [reload]);

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header-mobile">
      <Link className="link-logo" to={`/`}>
        <div className="box-left">
          <img className="image" src={Logo} alt="" />
          <h2 className="title">Alfastore</h2>
        </div>
      </Link>

      <div className="box-mid" onClick={toggleMenu}>
        <img className="menubar" src={Menu} alt="" />
        {openMenu ? (
          <div className="close">
            <ul>
              <Link className="title" to={`/`}>
                <li>INICIO</li>
              </Link>
              {categories.map((category) => (
                <Link
                  key={category._id}
                  className="title"
                  to={`/categoria/${category._id}/${category.name}`}
                >
                  <li>{category.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="box-right">
      </div>
    </header>
  );
};

export default HeaderPublic;
