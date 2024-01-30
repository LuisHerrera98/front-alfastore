import React from 'react'
import { Link } from "react-router-dom";

import './homeTopSection.css'

const HomeTopSection = () => {
  return (
    <div className="section-admin">
      <div className="box-category">
        <button>
          <Link to={`/admin/crear-categoria`}>Crear categoria</Link>
        </button>
      </div>
      <hr />
    </div>
  );
}

export default HomeTopSection