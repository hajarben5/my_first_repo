import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Products from './products';
import CardList from '../CartList'; 
import { FaShoppingBag } from 'react-icons/fa';

const Header = () => {
    return (
        <BrowserRouter>
               <header className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">My Store</Link>
        <Link to="/cart" className="nav-link"> 
          <FaShoppingBag />
        </Link>
      </div>
    </header>
            <div className='container-fluid'>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/CartList" element={<CardList />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default Header;
