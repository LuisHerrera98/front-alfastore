import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchCategories from "../../utils/fetchCategories";
import Logo from "./images/alfastore-icon.png";
import Menu from "./images/menubar.png";
import Admin from "./images/admin.png";
import "./Header.css";

const Header = ({reload = null, setReload = null}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
    setReload ? setReload(false) : null
  }, [reload]);

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="header-mobile">
      <div className="box-left">
        <img className="image" src={Logo} alt="" />
        <h2 className="title">Alfastore</h2>
      </div>
      <div className="box-mid" onClick={toggleMenu}>
        <img className="menubar" src={Menu} alt="" />
        {openMenu ? (
          <div className="close">
            <ul>
            <Link className="title" to={`/admin/dateSells`}>
                  <li>VENTAS</li>
                </Link>
              {categories.map((category) => (
                <Link key={category._id} className="title" to={`/admin/categoria/${category._id}/${category.name}`}>
                  <li>{category.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="box-right">
        <div className="box-image">
          <img className="image" src={Admin} alt="" />
        </div>
        <Link className="title" to={`/admin/panel`}>Admin</Link>
      </div>
    </header>
  );
};

export default Header;
