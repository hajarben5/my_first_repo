import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mon Magasin</Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Produits</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Panier</Link> 
          </li>
        </ul>
        <div className="d-flex ms-auto">
          <Link to="/cart" aria-label="Voir le panier"> 
            <FaShoppingCart size={23} /> 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
