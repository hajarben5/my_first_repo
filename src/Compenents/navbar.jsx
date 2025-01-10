import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Mon Magasin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/cart">
                Panier
              </Link>
            </li>
          </ul>
          <div className="d-flex ms-auto">
            <Link
              to="/cart"
              aria-label="Voir le panier"
              className="text-light d-flex align-items-center position-relative"
            >
              <FaShoppingCart size={23} className="me-2" />
              <span className="fw-bold">Panier</span>
            
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;