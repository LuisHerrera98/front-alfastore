import React from 'react'
import { Link } from "react-router-dom";

import './section.css'

const Section = () => {
  return (
    <div className="section-admin">
      <div className="box-category">
        <h3>Categorias</h3>

        <button>
          <Link to={`/admin/crear-categoria`}>Crear categoria</Link>
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Section